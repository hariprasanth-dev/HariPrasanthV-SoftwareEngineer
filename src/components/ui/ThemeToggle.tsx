import React, { useRef } from 'react';
import { flushSync } from 'react-dom';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

type ViewTransition = {
  finished: Promise<void>;
};

const supportsViewTransitions = () =>
  typeof document !== 'undefined' && 'startViewTransition' in document;

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isAnimating = useRef(false);

  const handleToggle = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isAnimating.current) return;

    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!supportsViewTransitions() || prefersReducedMotion) {
      setTheme(nextTheme);
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : event.clientX;
    const y = rect ? rect.top + rect.height / 2 : event.clientY;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    isAnimating.current = true;

    // Must be set BEFORE startViewTransition so the CSS keyframes see them
    root.classList.add('theme-transitioning');
    root.style.setProperty('--theme-x', `${x}px`);
    root.style.setProperty('--theme-y', `${y}px`);
    root.style.setProperty('--theme-r', `${endRadius}px`);

    try {
      const transition = (
        document as Document & {
          startViewTransition: (callback: () => void) => ViewTransition;
        }
      ).startViewTransition(() => {
        flushSync(() => {
          setTheme(nextTheme);
        });
      });

      // CSS owns the wipe animation — waiting on finished avoids WAAPI race/double-paint
      await transition.finished;
    } catch {
      setTheme(nextTheme);
    } finally {
      root.classList.remove('theme-transitioning');
      root.style.removeProperty('--theme-x');
      root.style.removeProperty('--theme-y');
      root.style.removeProperty('--theme-r');
      isAnimating.current = false;
    }
  };

  const isDark = theme === 'dark';

  return (
    <button
      ref={buttonRef}
      id="theme-toggle-anchor"
      type="button"
      onClick={handleToggle}
      className="flex items-center justify-center h-[30px] w-[30px] border border-border-subtle bg-bg-surface hover:border-accent-primary text-text-secondary cursor-pointer relative overflow-hidden focus:outline-none"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      {/* Instant icon swap — motion here stacks a second visual “blink” on theme change */}
      <span className="absolute flex items-center justify-center" aria-hidden={!isDark}>
        <Moon
          size={14}
          className="text-accent-primary"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? 'none' : 'rotate(90deg) scale(0)',
          }}
        />
      </span>
      <span className="absolute flex items-center justify-center" aria-hidden={isDark}>
        <Sun
          size={14}
          className="text-accent-primary"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? 'rotate(-90deg) scale(0)' : 'none',
          }}
        />
      </span>
    </button>
  );
};
