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

export const ProjectCard = ({ project, reverse = false }: Props) => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const showImage = project.id === 'shopq';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col lg:flex-row gap-12 mb-32 ${reverse && showImage ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Content Area (60% when image is shown, 100% otherwise) */}
      <div className={`space-y-6 ${showImage ? 'lg:w-[60%]' : 'w-full'}`}>
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
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
          <h3 className="text-3xl md:text-4xl font-mono text-text-primary mb-2">
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

        <div className="flex flex-wrap gap-2 pt-4">
          {project?.techStack?.map((tech) => (
            <SkillChip key={tech}>{tech}</SkillChip>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 py-6 border-y border-border-subtle">
          {project?.impact?.map((metric, i) => (
            <div key={i}>
              <p className="text-accent-primary text-2xl md:text-3xl font-mono font-bold">{metric.value}</p>
              <p className="text-text-muted text-xs uppercase tracking-widest font-mono">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
          <a href={`#deep-dive-${project.id}`} className="btn-primary flex items-center gap-2">
            {t('projects.btn_deep_dive')}
          </a>
          {project.projectUrl && (
            <a 
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2"
            >
              <ExternalLink size={14} className="text-accent-primary" />
              {t('projects.btn_visit')}
            </a>
          )}
          <button className="btn-outline flex items-center gap-2">
            <Terminal size={14} className="text-accent-primary" />
            {t('projects.btn_arch')}
          </button>
        </div>
      </div>

      {/* Image Area (40%) - Only visible for ShopQ for now */}
      {showImage ? (
        <div className="lg:w-[40%]">
          <a 
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full bg-bg-surface border-2 border-border-subtle hover:border-accent-primary/30 flex items-center justify-center group overflow-hidden block rounded-md"
          >
            <div className="absolute inset-0 bg-accent-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
            
            {!imageLoaded && (
              <div className="text-center z-10 p-8 aspect-video flex flex-col justify-center items-center">
                <div className="mb-4 flex justify-center">
                  <ExternalLink size={32} className="text-text-muted group-hover:text-accent-primary transition-colors" />
                </div>
                <p className="text-text-muted font-mono text-sm uppercase tracking-widest mb-1 group-hover:text-text-primary transition-colors">
                  [Visit Project Website]
                </p>
                <p className="text-text-primary font-mono text-lg font-bold group-hover:text-accent-primary transition-colors">
                  {project.name}
                </p>
              </div>
            )}
            
            <img 
              src={project.imagePath} 
              alt={project.name}
              referrerPolicy="no-referrer"
              className={`w-full h-auto block transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'absolute inset-0 opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </a>
        </div>
      ) : (
        /* Image placeholders commented out for now, we will update soon */
        null
      )}
    </motion.div>
  );
};
