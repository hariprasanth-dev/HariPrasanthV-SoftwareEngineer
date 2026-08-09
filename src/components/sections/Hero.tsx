import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../../context/i18nContext";
import { StatChip } from "../ui/StatChip";
import { Download, ChevronRight } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  const title1Lines = t("hero.title1").split(/\s+/).filter(Boolean);
  const title2Raw = t("hero.title2");
  const title2Sep = /\u0964/.test(title2Raw) ? "\u0964" : ".";
  const title2Lines = title2Raw
    .split(/[.\u0964]\s*/)
    .filter(Boolean)
    .map((line, i, arr) =>
      i < arr.length - 1 || /[.\u0964]\s*$/.test(title2Raw)
        ? `${line}${title2Sep}`
        : line,
    );

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-12 overflow-x-clip"
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center !py-12 sm:!py-16 md:!py-20">
        {/* Content */}
        <div className="space-y-8 md:space-y-10 lg:space-y-12 min-w-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex max-w-full items-center gap-2 sm:gap-3 px-3 py-1.5 bg-accent-dim border border-accent-primary/20 rounded-full mb-6 sm:mb-8">
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-mono text-accent-primary font-bold uppercase tracking-[0.12em] sm:tracking-[0.2em] leading-snug">
                {t("hero.badge_blue_card")}
              </span>
            </div>

            <h1 className="text-[clamp(2.75rem,9vw,5.25rem)] lg:text-[clamp(3.5rem,4.6vw,6rem)] font-mono font-bold leading-[0.92] text-text-primary mb-5 sm:mb-6 break-words">
              {title1Lines.map((line, i) => (
                <span key={`t1-${i}`} className="block">
                  {line}
                </span>
              ))}
              <span className="text-accent-primary">
                {title2Lines.map((line, i) => (
                  <span key={`t2-${i}`} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </h1>

            <p className="text-text-secondary text-lg sm:text-xl md:text-2xl font-sans max-w-xl leading-relaxed">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Hari_Prasanth_Resume.pdf";
                link.download = "Hari_Prasanth_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="btn-primary flex items-center justify-center gap-2 group w-full sm:w-auto"
            >
              <Download size={16} />
              {t("hero.cta_cv")}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="#projects"
              className="btn-outline flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              {t("hero.cta_projects")}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-8 sm:pt-12 border-t border-border-subtle"
          >
            <StatChip>{t("hero.stats.exp")}</StatChip>
            <StatChip>{t("hero.stats.apps")}</StatChip>
            <StatChip>{t("hero.stats.perf")}</StatChip>
          </motion.div>
        </div>

        {/* Code Visual — visible from 1024px (lg) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block min-w-0"
        >
          <div className="bg-bg-surface border border-border-subtle p-5 xl:p-6 2xl:p-8 shadow-2xl relative max-w-xl ml-auto overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary opacity-50" />

            <div className="flex gap-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
            </div>

            <pre className="font-mono text-[11px] xl:text-xs 2xl:text-sm leading-relaxed text-text-secondary overflow-x-auto">
              <code>
                <span className="text-accent-primary">interface</span>{" "}
                <span className="text-text-primary">EngineeringPhilosophy</span>{" "}
                {"{"}
                <br />
                {"  "}cleanArchitecture:{" "}
                <span className="text-accent-primary">boolean</span>;<br />
                {"  "}performanceFocused:{" "}
                <span className="text-accent-primary">boolean</span>;<br />
                {"  "}scalableComponents:{" "}
                <span className="text-accent-primary">number</span>;<br />
                {"}"}
                <br />
                <br />
                <span className="text-accent-primary">const</span>{" "}
                <span className="text-text-primary">hari</span>:
                EngineeringPhilosophy = {"{"}
                <br />
                {"  "}cleanArchitecture:{" "}
                <span className="text-accent-primary">true</span>,<br />
                {"  "}performanceFocused:{" "}
                <span className="text-accent-primary">true</span>,<br />
                {"  "}scalableComponents:{" "}
                <span className="text-accent-primary">Infinity</span>,<br />
                {"}"};<br />
                <br />
                <span className="text-text-muted">
                  {"//"} Delivering measurable ROI
                </span>
                <br />
                <span className="text-accent-primary">function</span>{" "}
                <span className="text-text-primary">deliverImpact</span>(output){" "}
                {"{"}
                <br />
                {"  "}
                <span className="text-accent-primary">return</span>{" "}
                output.optimize().deploy();
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
