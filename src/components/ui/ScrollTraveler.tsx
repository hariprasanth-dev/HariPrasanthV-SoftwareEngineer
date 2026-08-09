import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useTranslation } from "../../context/i18nContext";

type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "deep-dives"
  | "experience"
  | "education"
  | "contact"
  | "site-footer";

const SECTION_ORDER: { id: SectionId; guideKey: string }[] = [
  { id: "hero", guideKey: "hero" },
  { id: "about", guideKey: "about" },
  { id: "skills", guideKey: "skills" },
  { id: "projects", guideKey: "projects" },
  { id: "deep-dives", guideKey: "deep_dives" },
  { id: "experience", guideKey: "experience" },
  { id: "education", guideKey: "education" },
  { id: "contact", guideKey: "contact" },
  { id: "site-footer", guideKey: "footer" },
];

function GuideFigure({
  facing,
  talking,
}: {
  facing: 1 | -1;
  talking: boolean;
}) {
  return (
    <svg
      viewBox="0 0 64 80"
      width="100%"
      height="100%"
      aria-hidden
      className="overflow-visible"
      style={{ transform: `scaleX(${facing})` }}
    >
      <circle
        cx="34"
        cy="4"
        r="3"
        className="fill-none stroke-accent-primary"
        strokeWidth="1.5"
      />
      <path
        d="M34 7v3"
        className="stroke-accent-primary"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <ellipse cx="32" cy="74" rx="14" ry="3.5" className="fill-accent-primary/15" />

      <rect
        x="14"
        y="30"
        width="10"
        height="16"
        rx="2"
        className="fill-bg-surface stroke-accent-primary"
        strokeWidth="1.5"
      />
      <path
        d="M19 30v-4"
        className="stroke-accent-primary"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M28 28c0-1 2-3 6-3s6 2 6 3v18c0 2-2 3-6 3s-6-1-6-3V28z"
        className="fill-accent-primary"
      />

      <circle
        cx="34"
        cy="18"
        r="8"
        className="fill-bg-surface stroke-accent-primary"
        strokeWidth="1.75"
      />
      <circle cx="36.5" cy="17" r="1.25" className="fill-accent-primary" />
      <path
        d="M30 21.5c1.2 1.2 3.2 1.5 5 .4"
        className="stroke-accent-primary"
        strokeWidth="1.25"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M27 16c1-5 5-7 9-6.5 1.5 3 .5 6-1 7" className="fill-accent-primary" />

      <g
        className={talking ? "scroll-traveler-arm-talk" : undefined}
        style={{ transformOrigin: "40px 32px" }}
      >
        <path
          d="M40 32c4-4 6-8 4-12"
          className="stroke-accent-primary"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <path
        d="M28 34c-3-3-4-7-2-11"
        className="stroke-accent-primary"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      <path
        d="M30 48c-1 8-2 14 1 18"
        className="stroke-accent-primary scroll-traveler-leg-a"
        strokeWidth="2.25"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 48c1 8 3 14 0 18"
        className="stroke-accent-primary scroll-traveler-leg-b"
        strokeWidth="2.25"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function SpeechBubble({ title, text }: { title: string; text: string }) {
  return (
    <div className="relative max-w-[15rem] rounded-2xl rounded-br-md border border-accent-primary/25 bg-bg-surface/95 px-3.5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <p className="mb-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-accent-primary sm:text-[10px]">
        {title}
      </p>
      <p className="font-sans text-[11px] leading-snug text-text-secondary sm:text-xs">
        {text}
      </p>
      <span className="absolute top-1/2 -right-1.5 h-2.5 w-2.5 -translate-y-1/2 rotate-45 border-r border-t border-accent-primary/25 bg-bg-surface/95" />
    </div>
  );
}

function fallbackAnchor(compact: boolean) {
  const w = typeof window !== "undefined" ? window.innerWidth : 390;
  // Sit inward from the right edge so overflow-x:clip cannot hide the figure
  return {
    x: compact ? Math.max(48, w - 52) : Math.max(64, w - 72),
    y: compact ? 56 : 64,
  };
}

const ScrollTraveler = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  const [isCompact, setIsCompact] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeGuide, setActiveGuide] = useState("hero");
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [viewport, setViewport] = useState(() => ({
    w: typeof window !== "undefined" ? window.innerWidth : 390,
    h: typeof window !== "undefined" ? window.innerHeight : 800,
  }));

  const anchorX = useMotionValue(fallbackAnchor(true).x);
  const anchorY = useMotionValue(fallbackAnchor(true).y);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const syncMq = () => setIsCompact(mq.matches);
    syncMq();
    mq.addEventListener("change", syncMq);

    const onResize = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      mq.removeEventListener("change", syncMq);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Track theme toggle — rope attaches here (with safe mobile fallback)
  useEffect(() => {
    let tries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;

    const measure = () => {
      const el = document.getElementById("theme-toggle-anchor");
      if (!el) {
        const fb = fallbackAnchor(isCompact);
        anchorX.set(fb.x);
        anchorY.set(fb.y);
        if (tries < 30) {
          tries += 1;
          timer = setTimeout(measure, 50);
        }
        return;
      }

      const rect = el.getBoundingClientRect();
      const rawX = rect.left + rect.width / 2;
      const rawY = rect.bottom;

      // Keep hang point fully on-screen (mobile edge + overflow-x: clip)
      const edgePad = isCompact ? 28 : 36;
      const x = Math.min(
        Math.max(rawX, edgePad),
        window.innerWidth - edgePad,
      );

      anchorX.set(x);
      anchorY.set(rawY);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    window.visualViewport?.addEventListener("resize", measure);
    window.visualViewport?.addEventListener("scroll", measure);

    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(measure)
        : null;
    const el = document.getElementById("theme-toggle-anchor");
    if (el && ro) ro.observe(el);
    if (el?.parentElement && ro) ro.observe(el.parentElement);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
      window.visualViewport?.removeEventListener("resize", measure);
      window.visualViewport?.removeEventListener("scroll", measure);
      ro?.disconnect();
    };
  }, [anchorX, anchorY, isCompact]);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const mid = window.innerHeight * 0.42;
      let bestId = SECTION_ORDER[0].guideKey;
      let bestDist = Number.POSITIVE_INFINITY;

      for (const section of SECTION_ORDER) {
        const sectionEl = document.getElementById(section.id);
        if (!sectionEl) continue;
        const rect = sectionEl.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        const visible =
          rect.bottom > window.innerHeight * 0.12 &&
          rect.top < window.innerHeight * 0.88;
        if (!visible) continue;
        if (dist < bestDist) {
          bestDist = dist;
          bestId = section.guideKey;
        }
      }

      setActiveGuide((prev) => (prev === bestId ? prev : bestId));
    };

    const onScroll = () => {
      setIsScrolling(true);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    let idle: ReturnType<typeof setTimeout> | undefined;
    const onScrollIdle = () => {
      clearTimeout(idle);
      idle = setTimeout(() => setIsScrolling(false), 160);
    };
    window.addEventListener("scroll", onScrollIdle, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onScrollIdle);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    setBubbleVisible(false);
    const timer = setTimeout(
      () => setBubbleVisible(true),
      prefersReducedMotion ? 0 : 120,
    );
    return () => clearTimeout(timer);
  }, [activeGuide, prefersReducedMotion]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  });

  const ropeLength = useTransform(smoothProgress, (p) => {
    const min = isCompact ? 64 : 72;
    // Leave space for the figure itself at the bottom of the rope
    const max = Math.max(min + 80, viewport.h * (isCompact ? 0.58 : 0.68));
    return min + (max - min) * p;
  });

  const sway = useTransform(smoothProgress, (p) => {
    if (prefersReducedMotion) return 0;
    const amp = isCompact ? 6 : 18;
    return (
      Math.sin(p * Math.PI * 3.2) *
      amp *
      (0.35 + 0.65 * Math.sin(p * Math.PI))
    );
  });
  const smoothSway = useSpring(sway, { stiffness: 120, damping: 18 });

  const characterX = useTransform([anchorX, smoothSway], (values) => {
    const [ax, s] = values as number[];
    const edgePad = isCompact ? 22 : 36;
    const raw = ax + (Number.isFinite(s) ? s : 0);
    return Math.min(Math.max(raw, edgePad), viewport.w - edgePad);
  });

  const characterY = useTransform([anchorY, ropeLength], (values) => {
    const [ay, len] = values as number[];
    const y = (Number.isFinite(ay) ? ay : 56) + (Number.isFinite(len) ? len : 64);
    // Keep figure inside the viewport
    const maxY = viewport.h - (isCompact ? 48 : 64);
    return Math.min(y, maxY);
  });

  const ropePath = useTransform(
    [anchorX, anchorY, characterX, characterY, smoothSway],
    (values) => {
      const [ax, ay, cx, cy, s] = values as number[];
      const midY = ay + (cy - ay) * 0.45;
      const bend = (Number.isFinite(s) ? s : 0) * 0.55;
      return `M ${ax} ${ay} Q ${ax + bend} ${midY} ${cx} ${cy}`;
    },
  );

  const hangRotate = useTransform(smoothSway, (s) =>
    prefersReducedMotion ? 0 : s * 0.35,
  );

  const title = String(t(`guide.${activeGuide}.title`) ?? "");
  const text = String(t(`guide.${activeGuide}.text`) ?? "");
  const talking = bubbleVisible && !isScrolling && !prefersReducedMotion;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[45] overflow-visible"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        width={viewport.w}
        height={viewport.h}
        viewBox={`0 0 ${viewport.w} ${viewport.h}`}
      >
        <motion.path
          d={ropePath}
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeOpacity={0.2}
          strokeWidth={isCompact ? 4 : 4.5}
          strokeLinecap="round"
        />
        <motion.path
          d={ropePath}
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth={isCompact ? 1.75 : 1.75}
          strokeLinecap="round"
          strokeDasharray="3 5"
          className={isScrolling && !prefersReducedMotion ? "scroll-rope-dash" : undefined}
        />
        <motion.circle
          cx={anchorX}
          cy={anchorY}
          r={isCompact ? 3 : 3}
          fill="var(--color-accent-primary)"
        />
        <motion.circle
          cx={characterX}
          cy={characterY}
          r={isCompact ? 2.5 : 2.5}
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth={1.25}
        />
      </svg>

      <motion.div
        className={`absolute scroll-traveler will-change-transform ${isScrolling && !prefersReducedMotion ? "is-walking" : ""} ${talking && !isCompact ? "is-talking" : ""}`}
        style={{
          left: characterX,
          top: characterY,
          x: "-50%",
          y: "-4%",
          rotate: hangRotate,
        }}
      >
        <div
          className={
            isCompact
              ? "relative h-12 w-10 drop-shadow-sm"
              : "relative h-16 w-14 md:h-20 md:w-[4.5rem]"
          }
        >
          {!isCompact && (
            <div className="absolute -inset-3 rounded-full bg-accent-primary/10 blur-md" />
          )}
          <GuideFigure facing={-1} talking={talking && !isCompact} />

          {!isCompact && (
            <div className="absolute right-[calc(100%+0.85rem)] top-1/2 w-max -translate-y-1/2">
              <AnimatePresence mode="wait">
                {bubbleVisible && (
                  <motion.div
                    key={activeGuide}
                    initial={{ opacity: 0, x: 10, scale: 0.94 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.96 }}
                    transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <SpeechBubble title={title} text={text} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollTraveler;
