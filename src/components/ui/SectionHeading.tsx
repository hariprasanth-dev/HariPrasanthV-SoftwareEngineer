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
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="h-[1px] w-12 bg-accent-primary" />
        <h2 className="text-3xl md:text-4xl font-mono uppercase tracking-widest text-text-primary">
          {children}
        </h2>
      </div>
      {subtitle && (
        <p className="text-text-secondary max-w-2xl font-sans mt-4">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
