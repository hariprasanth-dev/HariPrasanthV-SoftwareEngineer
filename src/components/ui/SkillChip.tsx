import React from 'react';

interface Props {
  children: string;
}

export const SkillChip = ({ children }: Props) => {
  return (
    <span className="px-4 py-1.5 border border-border-subtle bg-bg-surface text-text-secondary text-sm font-sans hover:border-accent-primary hover:text-text-primary transition-colors cursor-default">
      {children}
    </span>
  );
};
