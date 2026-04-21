'use client';

import ExportedImage from 'next-image-export-optimizer';
import { executives } from '@/data/team';
import { teamPreview } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function TeamPreviewSection() {
  if (executives.length === 0) return null;

  const leftColumn = executives.slice(0, 3);
  const rightColumn = executives.slice(3, 6);

  return (
    <Section id="time" className="overflow-hidden bg-[#5fbfbe] text-white">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(380px,1.05fr)]">
          <div>
            <SectionHeading
              title={teamPreview.sectionTitle}
              subtitle="Entregando soluções em toda a cadeia de valor com executivos de experiências complementares."
              align="left"
              light={false}
              className="[&_h2]:text-white [&_p]:text-white/86"
            />

            <div className="grid gap-6 md:grid-cols-2">
              {[leftColumn, rightColumn].map((column, columnIndex) => (
                <div key={columnIndex} className="space-y-5">
                  {column.map((exec) => (
                    <div key={exec.id} className="flex items-center gap-4">
                      <span className="text-3xl leading-none text-[#2149a2]">→</span>
                      <div>
                        <p className="font-sans text-[2rem] leading-none text-[#2149a2]">
                          {exec.name.split(' ')[0]}
                        </p>
                        <p className="mt-1 text-xl leading-none text-white/92">
                          {exec.name.split(' ').slice(1).join(' ')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="secondary"
                href="/executivos"
                className="border-[#2149a2] text-[#2149a2] hover:border-[#2149a2] hover:bg-[#2149a2] hover:text-white"
              >
                Conheça o time completo
              </Button>
            </div>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[560px] lg:h-[520px]">
            <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border-[44px] border-[#f2cd74]" />
            <div className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-white/20 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
              <div className="grid h-full w-full grid-cols-2 grid-rows-3">
                {executives.slice(0, 6).map((exec, i) => (
                  <div key={exec.id} className="relative">
                    <ExportedImage
                      src={exec.photo}
                      alt={exec.name}
                      width={400}
                      height={400}
                      priority={i === 0}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-10">
                      <p className="text-sm font-semibold text-white">{exec.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
