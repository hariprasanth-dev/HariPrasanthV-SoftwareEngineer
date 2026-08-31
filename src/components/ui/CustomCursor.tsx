import React, { useEffect, useRef } from "react";

const INTERACTIVE =
  "a, button, [role='button'], label, summary, select, input, textarea, .cursor-pointer";

const CURSOR_PATHS = (
  <>
    <path d="M8 11C11 7 16 4 22 3C24 8 25.5 13 24 18" />
    <path d="M8 28C12 20 17 10.5 21.4 4.2" />
  </>
);

export const CustomCursor: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const glyphRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const root = rootRef.current;
    const glyph = glyphRef.current;
    if (!root || !glyph) return;

    let x = 0;
    let y = 0;
    let raf = 0;
    let armed = false;

    const render = () => {
      root.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = 0;
    };

    const setEnabled = (on: boolean) => {
      document.documentElement.classList.toggle("has-custom-cursor", on);
      root.style.opacity = on ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      if (!finePointer.matches) return;
      x = e.clientX;
      y = e.clientY;
      if (!armed) {
        armed = true;
        setEnabled(true);
      }
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      glyph.classList.toggle("is-hover", Boolean(target.closest(INTERACTIVE)));
    };

    const onLeaveWindow = () => {
      armed = false;
      setEnabled(false);
    };

    const onPointerChange = () => {
      if (!finePointer.matches) {
        armed = false;
        setEnabled(false);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    finePointer.addEventListener("change", onPointerChange);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      finePointer.removeEventListener("change", onPointerChange);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="custom-cursor-root pointer-events-none fixed top-0 left-0 z-[10000] text-accent-primary"
    >
      <div ref={glyphRef} className="custom-cursor-glyph">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit={6}
          >
            {CURSOR_PATHS}
          </g>
        </svg>
      </div>
    </div>
  );
};
