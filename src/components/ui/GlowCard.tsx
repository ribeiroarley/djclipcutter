import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'orange' | 'cyan' | 'none';
  interactive?: boolean;
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = 'orange',
  interactive = true,
}) => {
  const glowBorderClass = {
    orange: 'hover:border-accent-neon/50 hover:shadow-neon-sm',
    cyan: 'hover:border-cdj-cyan/50 hover:shadow-cyan-sm',
    none: 'hover:border-border-subtle',
  };

  return (
    <div
      className={twMerge(
        clsx(
          'glass-card rounded-xl p-6 transition-all duration-300 relative overflow-hidden',
          interactive && glowBorderClass[glowColor],
          interactive && 'hover:-translate-y-1',
          className
        )
      )}
    >
      {children}
    </div>
  );
};
