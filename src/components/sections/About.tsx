import React from "react";
import { motion } from "motion/react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const About = () => {
  const { t } = useTranslation();
  const { LANGUAGES } = usePortfolioData();

  return (
    <section id="about" className="section-container">
      <SectionHeading>{t("about.title")}</SectionHeading>

      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 border border-accent-primary opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="aspect-square bg-bg-surface overflow-hidden relative border-2 border-border-subtle">
            {/* <div className="absolute inset-0 flex items-center justify-center text-text-muted font-mono uppercase tracking-widest p-8 text-center bg-accent-dim/10">
              [PHOTO_PLACEHOLDER]
              <br />
              Hari Prasanth V
            </div> */}
            {/* Real photo placeholder */}
            <img
              src="/my_profile.jpg"
              alt="Hari Prasanth V"
              referrerPolicy="no-referrer"
              // className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity"
              className="absolute inset-0 w-full h-full object-cover transition-opacity"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          </div>
          <div className="absolute -bottom-4 -right-4 h-12 w-12 bg-accent-primary animate-pulse hidden md:block" />
        </motion.div>

        {/* Right: Bio & Languages */}
        <div className="space-y-12">
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed font-sans">
            <p>
              {t("about.description_p1")}
            </p>
            <p>
              {t("about.description_p2")}
            </p>
            <p className="text-text-primary italic border-l-2 border-accent-primary pl-6">
              {t("about.german_market")}
            </p>

            {/* Total Ownership Statement */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-bg-elevated p-8 border border-border-subtle relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-1 bg-accent-primary" />
              <p className="text-sm font-mono leading-relaxed text-text-secondary italic">
                "{t("about.ownership")}"
              </p>
            </motion.div>
          </div>

          {/* Languages proficiency */}
          <div className="space-y-6">
            <h4 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-primary flex items-center gap-3">
              <div className="w-8 h-[1px] bg-accent-primary" />
              {t("about.languages")}
            </h4>
            <div className="space-y-6">
              {LANGUAGES?.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${lang.flag}.png`}
                        alt={`${lang.name} flag`}
                        className="w-5 h-3.5 object-cover rounded-sm border border-border-subtle inline-block mr-1"
                      />
                      <span className="font-mono text-text-primary uppercase tracking-wider">
                        {lang.name}
                      </span>
                      <span className="text-[10px] text-text-muted font-mono">
                        ({lang.level})
                      </span>
                    </div>
                    <span className="text-xs font-mono text-accent-primary">
                      {lang.proficiency}%
                    </span>
                  </div>
                  <div className="h-[2px] bg-border-subtle w-full relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "circOut" }}
                      className="absolute top-0 left-0 h-full bg-accent-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
