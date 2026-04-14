'use client';

import ExportedImage from 'next-image-export-optimizer';
import { executives } from '@/data/team';
import { teamPreview } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function TeamPreviewSection() {
  // Phase 4 gate: do NOT render with empty team data
  // An empty section destroys credibility faster than no section
  if (executives.length === 0) return null;

  return (
    <Section id="time" className="bg-ink">
      <Container>
        <SectionHeading
          title={teamPreview.sectionTitle}
          subtitle={teamPreview.subtitle}
          align="left"
          light={true}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {executives.map((exec, i) => (
            <div key={exec.id} className="bg-carbon border border-slate/20 rounded-[var(--radius-card)] overflow-hidden">
              <ExportedImage
                src={exec.photo}
                alt={exec.name}
                width={400}
                height={400}
                priority={i === 0}
                className="w-full aspect-square object-cover object-top rounded-t-[var(--radius-card)]"
              />
              <div className="p-3">
                <p className="font-sans font-semibold text-mist text-small leading-tight">{exec.name}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {exec.specialties.slice(0, 2).map((s) => (
                    <span key={s} className="text-label bg-slate/40 text-silver px-1.5 py-0.5 rounded-sm">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" href="/executivos">
            Conheça o time completo
          </Button>
        </div>
      </Container>
    </Section>
  );
}
