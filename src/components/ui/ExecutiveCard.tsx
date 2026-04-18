'use client';

import * as m from 'motion/react-m';
import ExportedImage from 'next-image-export-optimizer';
import { Executive } from '@/data/team';

interface ExecutiveCardProps {
  exec: Executive;
  eager?: boolean;
}

const credentialLogos: Record<string, Array<{ src: string; alt: string }>> = {
  'alexandre-guedes': [{ src: '/images/logos/pg.png', alt: 'P&G' }],
  'eduardo-araujo': [{ src: '/images/logos/raizen.png', alt: 'Raízen' }],
  'leonardo-moreira': [{ src: '/images/logos/generic-logo.png', alt: 'Eneva' }],
  'mario-sergio-gomes': [
    { src: '/images/logos/coca-cola.png', alt: 'Coca-Cola' },
    { src: '/images/logos/pg.png', alt: 'P&G' },
  ],
  'paulo-villas': [{ src: '/images/logos/accenture.png', alt: 'Accenture' }],
  'rino-abbondi': [{ src: '/images/logos/coca-cola.png', alt: 'Coca-Cola' }],
};

const logoClasses: Record<string, string> = {
  'alexandre-guedes': 'max-h-8',
  'eduardo-araujo': 'max-h-6',
  'leonardo-moreira': 'max-h-7 opacity-85',
  'mario-sergio-gomes': 'max-h-5',
  'paulo-villas': 'max-h-5 brightness-0 invert opacity-85',
  'rino-abbondi': 'max-h-5',
};

export function ExecutiveCard({ exec, eager = false }: ExecutiveCardProps) {
  const visibleTags = exec.specialties.slice(0, 3);
  const extraTags = exec.specialties.slice(3);
  const cardLogos = credentialLogos[exec.id] ?? [];
  const isMultiLogo = cardLogos.length > 1;

  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="group rounded-[var(--radius-card)] border border-slate/20 bg-carbon p-5 sm:p-6">
        <div className="mx-auto mb-5 h-36 w-36 overflow-hidden rounded-full border border-white/10 shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:h-40 sm:w-40">
          <ExportedImage
            src={exec.photo}
            alt={exec.name}
            width={400}
            height={400}
            priority={eager}
            className="h-full w-full object-cover object-top"
          />
        </div>

        <div className="pb-2 text-center">
          <p className="text-body font-sans font-semibold text-mist">{exec.name}</p>
          <p className="mt-1 text-small text-silver">{exec.title}</p>

          {cardLogos.length > 0 && (
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="h-px w-4 bg-slate/15" />
              <div className={`flex min-h-7 items-center justify-center ${isMultiLogo ? 'gap-2.5' : 'gap-0'}`}>
                {cardLogos.map((logo) => (
                  <img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-auto object-contain ${isMultiLogo ? 'max-w-[52px]' : 'max-w-[92px]'} ${logoClasses[exec.id] ?? 'max-h-6 opacity-90'}`}
                  />
                ))}
              </div>
              <span className="h-px w-4 bg-slate/15" />
            </div>
          )}
        </div>

        <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[0fr]">
          <div className="overflow-hidden">
            <div className="pb-4">
              {visibleTags.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {visibleTags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-slate/40 px-2 py-1 text-label text-silver">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="mt-4 border-t border-slate/20 pt-4 text-small italic text-silver/70">
                {exec.credential}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <div className="pb-4">
              <p className="text-small leading-relaxed text-silver">{exec.bio}</p>
              {extraTags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {extraTags.map((tag) => (
                    <span key={tag} className="rounded-sm bg-slate/40 px-2 py-1 text-label text-silver">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
}
