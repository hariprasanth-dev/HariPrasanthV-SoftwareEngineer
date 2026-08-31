import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Project } from '../../types';
import { useTranslation } from '../../context/i18nContext';
import { SkillChip } from './SkillChip';
import { ExternalLink, Terminal } from 'lucide-react';

interface Props {
  project: Project;
  reverse?: boolean;
}

const hostname = (url?: string) => {
  if (!url) return '';
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

export const ProjectCard = ({ project, reverse = false }: Props) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const relatedWithImages = project.relatedLinks?.filter((link) => link.imagePath) ?? [];
  const showImage = Boolean(project.imagePath) && !imageFailed;
  const showPreview = showImage || Boolean(project.projectUrl) || relatedWithImages.length > 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16 sm:mb-24 lg:mb-32 ${reverse && showPreview ? 'lg:flex-row-reverse' : ''}`}
    >
      <div className={`space-y-5 sm:space-y-6 min-w-0 ${showPreview ? 'lg:w-[60%]' : 'w-full'}`}>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-0.5 bg-accent-dim text-accent-primary text-[10px] font-mono border border-accent-primary/20 uppercase tracking-widest">
                {project.timeline}
              </span>
              <span className="px-2 py-0.5 bg-bg-elevated text-text-muted text-[10px] font-mono border border-border-subtle uppercase tracking-widest">
                {project.type}
              </span>
            </div>
            {project.projectUrl && (
              <a 
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs px-3 py-1 flex items-center gap-1.5 border-accent-primary/30 hover:border-accent-primary text-text-primary hover:bg-accent-dim transition-all duration-300 rounded-sm"
              >
                <ExternalLink size={12} className="text-accent-primary" />
                {t('projects.btn_visit')}
              </a>
            )}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-mono text-text-primary mb-2 break-words">
            {project.name}
          </h3>
          <p className="text-text-muted font-mono text-xs uppercase tracking-wider italic">
            {project.client}
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-text-secondary leading-relaxed">
            <span className="text-text-primary font-bold">{t('projects.challenge')}</span> {project.problem}
          </p>
          
          <div className="space-y-2">
            <h4 className="text-text-primary text-sm font-bold uppercase tracking-widest">{t('projects.approach')}</h4>
            <ul className="space-y-2">
              {project?.approach?.map((step, i) => (
                <li key={i} className="flex gap-3 text-text-secondary text-sm leading-relaxed">
                  <span className="text-accent-primary font-mono select-none">→</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.relatedLinks && project.relatedLinks.length > 0 && (
          <div className="space-y-2">
            <p className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
              {t('projects.related_sites')}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.relatedLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-border-subtle hover:border-accent-primary text-text-secondary hover:text-accent-primary transition-colors"
                >
                  <ExternalLink size={11} />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-4">
          {project?.techStack?.map((tech) => (
            <SkillChip key={tech}>{tech}</SkillChip>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-5 sm:py-6 border-y border-border-subtle">
          {project?.impact?.map((metric, i) => (
            <div key={i} className="min-w-0">
              <p className="text-accent-primary text-xl sm:text-2xl md:text-3xl font-mono font-bold break-words">{metric.value}</p>
              <p className="text-text-muted text-[10px] sm:text-xs uppercase tracking-widest font-mono">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4">
          <a href={`#deep-dive-${project.id}`} className="btn-primary flex items-center justify-center gap-2">
            {t('projects.btn_deep_dive')}
          </a>
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} className="text-accent-primary" />
              {t('projects.btn_visit')}
            </a>
          )}
          <a href={`#deep-dive-${project.id}`} className="btn-outline flex items-center justify-center gap-2">
            <Terminal size={14} className="text-accent-primary" />
            {t('projects.btn_arch')}
          </a>
        </div>
      </div>

      {showPreview ? (
        <div className="lg:w-[40%] min-w-0 space-y-2">
          {project.projectUrl ? (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full aspect-video bg-bg-surface border-2 border-border-subtle hover:border-accent-primary/30 group overflow-hidden block rounded-md"
            >
              <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              {showImage ? (
                <img 
                  src={project.imagePath} 
                  alt={`${project.name} live site`}
                  referrerPolicy="no-referrer"
                  className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageFailed(true)}
                />
              ) : null}
              {(!showImage || !imageLoaded) && (
                <div className="absolute inset-0 text-center z-[5] p-8 flex flex-col justify-center items-center">
                  <div className="mb-4 flex justify-center">
                    <ExternalLink size={32} className="text-text-muted group-hover:text-accent-primary transition-colors" />
                  </div>
                  <p className="text-text-muted font-mono text-sm uppercase tracking-widest mb-1 group-hover:text-text-primary transition-colors">
                    {hostname(project.projectUrl)}
                  </p>
                  <p className="text-text-primary font-mono text-lg font-bold group-hover:text-accent-primary transition-colors">
                    {project.name}
                  </p>
                </div>
              )}
            </a>
          ) : showImage ? (
            <div className="relative w-full aspect-video bg-bg-surface border-2 border-border-subtle overflow-hidden rounded-md">
              <img 
                src={project.imagePath} 
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          ) : null}

          {relatedWithImages.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
              {relatedWithImages.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-md border border-border-subtle hover:border-accent-primary/50"
                >
                  <img
                    src={link.imagePath}
                    alt={link.label}
                    className="w-full aspect-video object-cover object-top"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/55 px-1 py-0.5 text-[9px] font-mono uppercase tracking-wider text-white truncate">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </motion.div>
  );
};
