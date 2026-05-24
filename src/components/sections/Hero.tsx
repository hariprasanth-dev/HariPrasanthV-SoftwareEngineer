import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../../context/i18nContext";
import { StatChip } from "../ui/StatChip";
import { Download, ChevronRight } from "lucide-react";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-text-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="section-container relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-accent-dim border border-accent-primary/20 rounded-full mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-[10px] font-mono text-accent-primary font-bold uppercase tracking-[0.2em]">
                {t("hero.badge_blue_card")}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold leading-[0.9] text-text-primary mb-6">
              {t("hero.title1")}
              <br />
              <span className="text-accent-primary">{t("hero.title2")}</span>
            </h1>

            <p className="text-text-secondary text-lg md:text-xl font-sans max-w-lg leading-relaxed">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/public/Hari_Prasanth_Resume.pdf";
                link.download = "Hari_prasanth_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="btn-primary flex items-center gap-2 group"
            >
              <Download size={16} />
              {t("hero.cta_cv")}
              <ChevronRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a href="#projects" className="btn-outline flex items-center gap-2">
              {t("hero.cta_projects")}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-wrap gap-4 pt-12 border-t border-border-subtle"
          >
            <StatChip>{t("hero.stats.exp")}</StatChip>
            <StatChip>{t("hero.stats.apps")}</StatChip>
            <StatChip>{t("hero.stats.perf")}</StatChip>
          </motion.div>
        </div>

        {/* Code Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden lg:block"
        >
          <div className="bg-bg-surface border border-border-subtle p-8 shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-accent-primary opacity-50" />

            <div className="flex gap-1.5 mb-6">
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
              <div className="w-3 h-3 rounded-full bg-border-subtle" />
            </div>

            <pre className="font-mono text-sm leading-relaxed text-text-secondary">
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
