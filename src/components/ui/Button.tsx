import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  icon,
  iconPosition = 'left',
  href,
  className,
  ...props
}) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-xl select-none disabled:opacity-50 disabled:pointer-events-none group overflow-hidden box-border max-w-full text-center';

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 uppercase tracking-wider',
    md: 'text-xs sm:text-sm px-4 sm:px-5 py-2.5 gap-2 tracking-wide font-semibold',
    lg: 'text-xs sm:text-base px-4 sm:px-6 py-3 sm:py-3.5 gap-2 sm:gap-2.5 font-bold tracking-wide shadow-lg',
  };

  const variantClasses = {
    primary: 'bg-accent-neon text-white hover:bg-accent-hover shadow-neon-glow hover:shadow-neon-lg border border-accent-neon/80 active:scale-[0.98]',
    secondary: 'bg-bg-subtle/80 hover:bg-bg-card text-text-primary border border-border-official hover:border-accent-neon/50 hover:shadow-neon-sm active:scale-[0.98]',
    outline: 'bg-transparent text-accent-neon border border-accent-neon hover:bg-accent-neon/10 hover:shadow-neon-sm active:scale-[0.98]',
    ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-bg-subtle/50',
  };

  const classes = twMerge(
    clsx(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && 'w-full',
      className
    )
  );

  if (href) {
    return (
      <a href={href} rel="noopener noreferrer" className={classes}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span className="leading-tight text-center break-words max-w-full">{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0 group-hover:translate-x-0.5 transition-transform">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span className="leading-tight text-center break-words max-w-full">{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0 group-hover:translate-x-0.5 transition-transform">{icon}</span>}
    </button>
  );
};
