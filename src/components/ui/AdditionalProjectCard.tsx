import React, { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { AdditionalProject } from "../../types";
import { useTranslation } from "../../context/i18nContext";
import { SkillChip } from "./SkillChip";

interface Props {
  project: AdditionalProject;
}

export const AdditionalProjectCard = ({ project }: Props) => {
  const { t } = useTranslation();
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(project.imagePath) && !imageFailed;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-surface overflow-hidden flex flex-col h-full"
    >
      {showImage && (
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-border-subtle group"
        >
          <img
            src={project.imagePath}
            alt={`${project.name} live site`}
            className="w-full aspect-video object-cover object-top group-hover:opacity-90 transition-opacity"
            onError={() => setImageFailed(true)}
          />
        </a>
      )}

      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="px-2 py-0.5 bg-accent-dim text-accent-primary text-[10px] font-mono border border-accent-primary/20 uppercase tracking-widest">
            {project.timeline}
          </span>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-text-muted hover:text-accent-primary transition-colors"
            >
              <ExternalLink size={11} />
              {t("projects.btn_visit")}
            </a>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-xl font-mono text-text-primary">{project.name}</h3>
          <p className="text-xs font-mono uppercase tracking-wider text-text-muted italic">
            {project.type}
          </p>
        </div>

        <p className="text-sm text-text-secondary leading-relaxed flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.techStack.map((tech) => (
            <SkillChip key={tech}>{tech}</SkillChip>
          ))}
        </div>
      </div>
    </motion.article>
  );
};
