import React from "react";
import { useTranslation } from "../context/i18nContext";
import { PERSONAL_INFO } from "../data/portfolio";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-bg-surface border-t border-border-subtle py-12">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h3 className="font-mono text-lg font-bold text-text-primary mb-1">
              HARI PRASANTH V
            </h3>
            <p className="text-text-muted text-xs font-mono uppercase tracking-widest">
              © 2026 {t("footer.rights")}
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="#about"
              className="text-text-muted hover:text-accent-primary font-mono text-xs uppercase tracking-widest transition-colors"
            >
              {t("nav.about")}
            </a>
            <a
              href="#projects"
              className="text-text-muted hover:text-accent-primary font-mono text-xs uppercase tracking-widest transition-colors"
            >
              {t("nav.projects")}
            </a>
            <a
              href="#contact"
              className="text-text-muted hover:text-accent-primary font-mono text-xs uppercase tracking-widest transition-colors"
            >
              {t("nav.contact")}
            </a>
          </div>

          <div className="text-right">
            <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest">
              {t("footer.stack")}
            </p>
            <p className="text-text-muted text-[10px] font-mono uppercase tracking-widest mt-1">
              Deployed on Vercel
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle/50 text-center">
          <div className="h-1 w-12 bg-accent-primary mx-auto mb-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
