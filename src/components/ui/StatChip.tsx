import React from 'react';

interface Props {
  children: string;
}

export const StatChip = ({ children }: Props) => {
  return (
    <div className="px-4 py-2 bg-bg-surface border-l-2 border-accent-primary flex items-center">
      <span className="text-xs md:text-sm font-mono text-text-secondary uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
};
