import React from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { AdditionalProjectCard } from "../ui/AdditionalProjectCard";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const ProjectShowroom = () => {
  const { t } = useTranslation();
  const { PROJECTS, ADDITIONAL_PROJECTS } = usePortfolioData();

  return (
    <section id="projects" className="section-container">
      <SectionHeading subtitle={t("projects.subtitle")}>
        {t("projects.title")}
      </SectionHeading>

      <div className="space-y-12">
        {PROJECTS?.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>

      {ADDITIONAL_PROJECTS?.length > 0 && (
        <div className="mt-8 sm:mt-12 pt-12 sm:pt-16 border-t border-border-subtle">
          <SectionHeading subtitle={t("projects.additional_subtitle")}>
            {t("projects.additional_title")}
          </SectionHeading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ADDITIONAL_PROJECTS.map((project) => (
              <AdditionalProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowroom;
