'use client';

import ExportedImage from 'next-image-export-optimizer';
import { executives } from '@/data/team';
import { teamPreview } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TeamPreviewSection() {
  // Phase 4 gate: do NOT render with empty team data
  // An empty section destroys credibility faster than no section
  if (executives.length === 0) return null;

  const preview = executives.slice(0, 3);

  return (
    <Section id="time" className="bg-ink">
      <Container>
        <SectionHeading
          title={teamPreview.sectionTitle}
          subtitle={teamPreview.subtitle}
          align="left"
          light={true}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((exec) => (
            <div key={exec.id} className="bg-carbon border border-slate/20 rounded-[var(--radius-card)] overflow-hidden">
              <ExportedImage
                src={exec.photo}
                alt={exec.name}
                width={400}
                height={400}
                className="w-full aspect-square object-cover object-top rounded-t-[var(--radius-card)]"
              />
              <div className="p-6">
                <p className="font-sans font-semibold text-mist text-body">{exec.name}</p>
                <p className="text-small text-silver mt-1">{exec.title}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exec.specialties.slice(0, 3).map((s) => (
                    <span key={s} className="text-label bg-slate/40 text-silver px-2 py-1 rounded-sm">{s}</span>
                  ))}
                </div>
                <p className="mt-4 text-small text-silver/70 italic">{exec.credential}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
