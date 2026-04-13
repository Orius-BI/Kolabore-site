'use client';

// src/components/ui/ExecutiveCard.tsx
import * as m from 'motion/react-m';
import ExportedImage from 'next-image-export-optimizer';
import { Executive } from '@/data/team';

interface ExecutiveCardProps {
  exec: Executive;
  eager?: boolean;
}

export function ExecutiveCard({ exec, eager = false }: ExecutiveCardProps) {
  const visibleTags = exec.specialties.slice(0, 3);
  const extraTags = exec.specialties.slice(3);

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="group relative bg-carbon border border-slate/20 rounded-[var(--radius-card)] overflow-hidden">
        {/* Portrait */}
        <ExportedImage
          src={exec.photo}
          alt={exec.name}
          width={400}
          height={400}
          loading={eager ? 'eager' : 'lazy'}
          className="w-full aspect-square object-cover object-top"
        />

        {/* Name + title — always visible, never covered by overlay */}
        <div className="px-5 pt-5 pb-2">
          <p className="font-sans font-semibold text-mist text-body">{exec.name}</p>
          <p className="text-small text-silver mt-1">{exec.title}</p>
        </div>

        {/* Lower content area — tags + credential, overlaid on hover */}
        <div className="relative px-5 pb-5 overflow-hidden">
          {/* Specialty tags — first 3 */}
          {visibleTags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {visibleTags.map((tag) => (
                <span
                  key={tag}
                  className="text-label bg-slate/40 text-silver px-2 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Credential */}
          <p className="mt-4 text-small text-silver/70 italic border-t border-slate/20 pt-4">
            {exec.credential}
          </p>

          {/* Hover reveal overlay — only covers lower section, name stays visible above */}
          <div className="absolute inset-x-0 bottom-0 bg-carbon/95 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="text-small text-silver leading-relaxed">{exec.bio}</p>
            {extraTags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {extraTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label bg-slate/40 text-silver px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </m.div>
  );
}
