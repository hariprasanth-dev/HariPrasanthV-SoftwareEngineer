import React, { Suspense, lazy } from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const DeepDiveAccordion = lazy(() =>
  import("../ui/DeepDiveAccordion").then((m) => ({
    default: m.DeepDiveAccordion,
  })),
);

const TechnicalDeepDives = () => {
  const { t } = useTranslation();
  const { PROJECTS } = usePortfolioData();

  return (
    <section id="deep-dives" className="section-container bg-bg-surface/30">
      <SectionHeading subtitle={t("deep_dives.subtitle")}>
        {t("deep_dives.title")}
      </SectionHeading>

      <div className="space-y-4">
        <Suspense
          fallback={
            <div className="h-20 bg-bg-surface animate-pulse border border-border-subtle" />
          }
        >
          {PROJECTS?.map((project) => (
            <DeepDiveAccordion key={project.id} project={project} />
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default TechnicalDeepDives;
