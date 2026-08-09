import React from 'react';
import { motion } from 'motion/react';

interface Props {
  children: React.ReactNode;
  subtitle?: string;
}

export const SectionHeading = ({ children, subtitle }: Props) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-14 md:mb-16"
    >
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-2">
        <div className="h-[1px] w-8 sm:w-12 bg-accent-primary shrink-0 mt-4 sm:mt-0" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono uppercase tracking-wide sm:tracking-widest text-text-primary break-words">
          {children}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl font-sans mt-4 text-sm sm:text-base pl-11 sm:pl-16">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
