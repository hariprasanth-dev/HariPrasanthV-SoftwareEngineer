import React from "react";
import { useTranslation } from "../../context/i18nContext";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectCard } from "../ui/ProjectCard";
import { usePortfolioData } from "../../hooks/usePortfolioData";

const ProjectShowroom = () => {
  const { t } = useTranslation();
  const { PROJECTS } = usePortfolioData();

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
    </section>
  );
};

export default ProjectShowroom;
