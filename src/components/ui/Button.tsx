import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'secondaryLight' | 'ghost' | 'ghostLight';
  size?: 'sm' | 'md';
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses = {
  primary:
    'bg-gold text-white hover:bg-gold-hover transition-colors duration-200',
  secondary:
    'border border-gold text-gold bg-transparent hover:bg-gold hover:text-ink transition-colors duration-200',
  secondaryLight:
    'border border-gold text-gold bg-transparent hover:border-ink hover:bg-ink hover:text-mist transition-colors duration-200',
  ghost:
    'border border-slate/40 bg-transparent text-silver hover:border-slate/70 hover:bg-white/8 hover:text-mist transition-colors duration-200',
  ghostLight:
    'border border-slate/20 bg-white text-slate hover:border-ink hover:bg-ink hover:text-mist transition-colors duration-200',
} as const;

const sizeClasses = {
  sm: 'px-4 py-2 text-small',
  md: 'px-6 py-3 text-sm',
} as const;

const sharedClasses =
  'inline-flex items-center justify-center text-center font-medium rounded-[var(--radius-button)] disabled:opacity-50 disabled:cursor-not-allowed';

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = [
    sharedClasses,
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
