import React from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const ExperienceList = () => {
  const { t } = useTranslation();
  const { EXPERIENCE } = usePortfolioData();

  return (
    <section id="experience" className="section-container">
      <SectionHeading>{t("experience.title")}</SectionHeading>

      <div className="relative border-l border-border-subtle ml-4 md:ml-8 space-y-16">
        {EXPERIENCE?.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-12 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-[-9px] top-0 w-4 h-4 bg-accent-primary border-4 border-bg-primary rounded-full z-10 group-hover:scale-125 transition-transform" />

            <div className="bg-bg-surface border border-border-subtle border-l-4 border-l-accent-primary p-8 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-mono font-bold text-text-primary uppercase tracking-tight">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-accent-primary font-mono text-sm mt-1">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                    <span className="text-text-muted">•</span>
                    <span className="text-text-muted">{exp.location}</span>
                  </div>
                </div>
                <div className="px-3 py-1 bg-bg-elevated border border-border-subtle text-text-muted font-mono text-xs uppercase tracking-widest self-start md:self-center">
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-3 max-w-4xl">
                {exp?.responsibilities?.map((resp, i) => (
                  <li
                    key={i}
                    className="text-text-secondary font-sans leading-relaxed flex gap-3 text-sm md:text-base"
                  >
                    <span className="text-accent-primary font-bold select-none">
                      •
                    </span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 ml-4 md:ml-8 pl-12"
      >
        <p className="text-xs font-mono text-text-muted italic uppercase tracking-widest">
          {t("experience.note")}
        </p>
      </motion.div>
    </section>
  );
};

export default ExperienceList;
