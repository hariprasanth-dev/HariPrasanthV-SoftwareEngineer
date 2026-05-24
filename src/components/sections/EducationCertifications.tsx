import React from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { usePortfolioData } from "../../hooks/usePortfolioData";
import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const EducationCertifications = () => {
  const { t } = useTranslation();
  const { EDUCATION, CERTIFICATIONS } = usePortfolioData();
  const Education_data = EDUCATION?.[0];

  return (
    <section id="education" className="section-container">
      <SectionHeading>{t("education.title")}</SectionHeading>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Education Section */}
        <div className="space-y-8">
          <h4 className="font-mono text-sm uppercase tracking-[0.3em] text-text-muted flex items-center gap-3">
            <GraduationCap size={18} className="text-accent-primary" />
            {t("education.edu_heading")}
          </h4>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border-l-2 border-accent-primary bg-bg-surface space-y-4 hover:bg-bg-elevated transition-colors"
          >
            <div className="flex justify-between items-start gap-4">
              <h5 className="text-xl font-mono text-text-primary uppercase tracking-tight">
                {Education_data?.degree}
              </h5>
              <span className="text-[10px] font-mono text-text-muted border border-border-subtle px-2 py-1 uppercase whitespace-nowrap">
                {Education_data?.period}
              </span>
            </div>
            <p className="text-accent-primary font-mono text-sm">
              {Education_data?.institution}
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {Education_data?.notes}
            </p>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <h4 className="font-mono text-sm uppercase tracking-[0.3em] text-text-muted flex items-center gap-3">
            <Award size={18} className="text-accent-primary" />
            {t("education.cert_heading")}
          </h4>

          <div className="space-y-4">
            {CERTIFICATIONS?.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-border-subtle bg-bg-surface hover:border-accent-primary/50 transition-all group"
              >
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h5 className="text-lg font-mono text-text-primary uppercase tracking-tight group-hover:text-accent-primary transition-colors">
                      {cert.title}
                    </h5>
                    <p className="text-text-muted text-xs font-mono mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-text-muted border border-border-subtle px-2 py-1 uppercase whitespace-nowrap">
                    {cert.period}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert?.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="text-[10px] font-mono text-text-secondary border border-border-subtle/30 px-2 py-0.5 uppercase tracking-tighter"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
