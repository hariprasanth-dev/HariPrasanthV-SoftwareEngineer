import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../types';
import { useTranslation } from '../../context/i18nContext';
import { ChevronDown, Code, ShieldCheck } from 'lucide-react';

interface Props {
  project: Project;
}

export const DeepDiveAccordion = ({ project }: Props) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      id={`deep-dive-${project.id}`}
      className="border border-border-subtle bg-bg-surface mb-6 hover:border-accent-primary/50 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-6 flex items-center justify-between gap-3 group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className={`p-2 rounded bg-bg-elevated text-accent-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={20} />
          </div>
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-mono text-text-primary group-hover:text-accent-primary transition-colors break-words">
              {project.name}
            </h4>
            <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
              {t('deep_dives.heading')}
            </p>
          </div>
        </div>
        <div className="hidden md:flex gap-4">
          <ShieldCheck size={18} className="text-text-muted" />
          <Code size={18} className="text-text-muted" />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 sm:p-6 md:p-12 border-t border-border-subtle space-y-8 sm:space-y-12 bg-bg-primary/40">
              {/* Reasoning Section */}
              <div className="space-y-4">
                <h5 className="text-accent-primary font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-primary shrink-0" />
                  {t('deep_dives.why')}
                </h5>
                <p className="text-text-secondary leading-relaxed max-w-4xl text-base sm:text-lg">
                  {project.deepDive.architectureReasoning}
                </p>
              </div>

              {/* Trade-offs Table */}
              <div className="space-y-4">
                <h5 className="text-accent-primary font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-primary" />
                  {t('deep_dives.tradeoffs')}
                </h5>
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full min-w-[520px] text-left font-sans border-collapse">
                    <thead>
                      <tr className="border-b border-border-subtle">
                        <th className="py-3 sm:py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-widest text-text-muted">{t('deep_dives.option')}</th>
                        <th className="py-3 sm:py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-widest text-text-muted">{t('deep_dives.rejected')}</th>
                        <th className="py-3 sm:py-4 px-3 sm:px-4 text-xs font-mono uppercase tracking-widest text-text-muted">{t('deep_dives.chosen')}</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      {project?.deepDive?.tradeoffs?.map((row, i) => (
                        <tr key={i} className="border-b border-border-subtle/50">
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-text-primary font-bold align-top">{row.considered}</td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-text-secondary align-top">{row.whyRejected}</td>
                          <td className="py-3 sm:py-4 px-3 sm:px-4 text-accent-primary font-medium align-top">{row.whyChosen}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Retrospective */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-4 min-w-0">
                  <h5 className="text-accent-primary font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-primary shrink-0" />
                    {t('deep_dives.differently')}
                  </h5>
                  <p className="text-text-secondary italic">
                    "{project.deepDive.wouldDoDifferently}"
                  </p>
                </div>
                
                <div className="space-y-4 min-w-0">
                  <h5 className="text-accent-primary font-mono text-sm uppercase tracking-widest flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-primary shrink-0" />
                    {t('deep_dives.code')}
                  </h5>
                  <div className="bg-bg-elevated p-4 sm:p-6 border border-border-subtle overflow-x-auto">
                    <pre className="text-[11px] sm:text-xs font-mono text-text-secondary leading-relaxed">
                      <code>{project.deepDive.codeSnippet}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
