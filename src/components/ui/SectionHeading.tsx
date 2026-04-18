// src/components/ui/SectionHeading.tsx
interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-mist' : 'text-ink';
  const subtitleColor = light ? 'text-mist/78' : 'text-slate';

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-label font-sans uppercase tracking-widest text-gold mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-h2 lg:text-h1 ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-body max-w-2xl ${subtitleColor}${align === 'center' ? ' mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
