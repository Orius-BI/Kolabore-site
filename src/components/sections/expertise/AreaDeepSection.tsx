'use client';

import { useState } from 'react';
import * as m from 'motion/react-m';
import { areas } from '@/data/areas';
import { expertisePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AreaDeepSection() {
  const [openId, setOpenId] = useState<string | null>(areas[0]?.id ?? null);

  return (
    <Section id="areas" className="bg-ink pt-24 md:pt-28">
      <Container>
        <SectionHeading
          title="Frentes que exigem leitura executiva e capacidade de implementação."
          subtitle="Temas complementares, tratados com profundidade prática e visão integrada do negócio."
          light={true}
          className="[&_h2]:max-w-4xl [&_h2]:text-[2.25rem] [&_h2]:leading-tight md:[&_h2]:text-h1 [&_p]:max-w-2xl"
        />

        <div className="border-t border-slate/20">
          {areas.map((area, index) => {
            const detail = expertisePage.areaDetails[area.id as keyof typeof expertisePage.areaDetails];
            if (!detail) return null;

            const isOpen = openId === area.id;

            return (
              <m.div
                key={area.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
                className="border-b border-slate/20"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left md:hidden"
                  onClick={() => setOpenId(isOpen ? null : area.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display text-[1.55rem] leading-tight text-mist">
                      {area.label}
                    </h3>
                  </div>
                  <span className="shrink-0 text-xl leading-none text-gold">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 md:hidden">
                    <p className="text-body leading-relaxed text-mist/72">
                      {detail.depth}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {detail.examples.slice(0, 2).map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex gap-2 text-small leading-relaxed text-mist/62">
                          <span className="text-gold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="hidden gap-4 py-8 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
                  <h3 className="font-display text-[1.7rem] leading-tight text-mist md:text-h3">
                    {area.label}
                  </h3>

                  <div className="max-w-2xl">
                    <p className="text-body leading-relaxed text-mist/72">
                      {detail.depth}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {detail.examples.slice(0, 2).map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex gap-2 text-small leading-relaxed text-mist/62">
                          <span className="text-gold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
