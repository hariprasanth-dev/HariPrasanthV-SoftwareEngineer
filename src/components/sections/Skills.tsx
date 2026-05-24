import React from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { SkillChip } from "../ui/SkillChip";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "motion/react";

const Skills = () => {
  const { t } = useTranslation();
  const { SKILL_GROUPS } = usePortfolioData();

  return (
    <section id="skills" className="section-container">
      <SectionHeading>{t("skills.title")}</SectionHeading>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {SKILL_GROUPS?.map((group, idx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-accent-primary font-mono text-xs">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-text-muted">
                {group.category}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {group?.skills?.map((skill) => (
                <SkillChip key={skill}>{skill}</SkillChip>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
