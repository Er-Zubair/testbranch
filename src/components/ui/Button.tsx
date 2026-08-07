import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from '@/lib/clsx';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
  icon?: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary shadow-sm hover:-translate-y-0.5',
  secondary:
    'bg-inverse-surface text-inverse-on-surface hover:bg-on-background shadow-sm hover:-translate-y-0.5',
  outline: 'border-2 border-outline text-on-background hover:bg-surface-variant/50',
  ghost: 'text-on-surface-variant hover:bg-surface-variant/20',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 rounded-full',
  lg: 'px-8 py-4 rounded-full',
};

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  icon,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-label-bold inline-flex items-center justify-center gap-2 transition-all duration-150 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
      ) : (
        icon
      )}
      {children}
    </button>
  );
}
