import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'orange' | 'cyan' | 'green' | 'neutral';
  pulse?: boolean;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'orange',
  pulse = false,
  className,
  size = 'md',
}) => {
  const variantStyles = {
    orange: 'bg-accent-neon/10 border-accent-neon/30 text-accent-neon',
    cyan: 'bg-cdj-cyan/10 border-cdj-cyan/30 text-cdj-cyan',
    green: 'bg-vu-green/10 border-vu-green/30 text-vu-green',
    neutral: 'bg-bg-card border-border-official text-text-secondary',
  };

  const dotStyles = {
    orange: 'bg-accent-neon shadow-[0_0_8px_#FF5500]',
    cyan: 'bg-cdj-cyan shadow-[0_0_8px_#00E5FF]',
    green: 'bg-vu-green shadow-[0_0_8px_#00E676]',
    neutral: 'bg-text-secondary',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 tracking-wider gap-1.5 font-mono',
    md: 'text-xs px-2.5 py-1 tracking-wider gap-2 font-mono',
  };

  return (
    <span
      className={twMerge(
        clsx(
          'inline-flex items-center uppercase font-medium rounded-full border backdrop-blur-sm',
          variantStyles[variant],
          sizeStyles[size],
          className
        )
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={twMerge(
              clsx(
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                dotStyles[variant]
              )
            )}
          />
          <span
            className={twMerge(
              clsx('relative inline-flex rounded-full h-2 w-2', dotStyles[variant])
            )}
          />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
