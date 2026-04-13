'use client';

import * as m from 'motion/react-m';
import { areas } from '@/data/areas';
import { expertisePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AreaDeepSection() {
  return (
    <Section id="areas" className="bg-ink">
      <Container>
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Oito frentes de especialização aplicada."
          light={true}
        />
        <div className="space-y-0">
          {areas.map((area, index) => {
            const detail = expertisePage.areaDetails[area.id as keyof typeof expertisePage.areaDetails];
            if (!detail) return null;

            return (
              <m.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.04 }}
              >
                <div className="py-10">
                  <h3 className="font-display text-h3 text-mist">{area.label}</h3>
                  <p className="text-gold text-small uppercase tracking-wider mt-1">
                    {detail.challengeTitle}
                  </p>
                  <p className="text-silver text-body leading-relaxed mt-3 max-w-3xl">
                    {detail.depth}
                  </p>
                  <ul className="mt-4 space-y-1">
                    {detail.examples.map((example, i) => (
                      <li
                        key={i}
                        className="text-small text-slate before:content-['→'] before:mr-2 before:text-gold flex"
                      >
                        <span className="text-gold mr-2">→</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < areas.length - 1 && (
                  <hr className="border-slate/20" />
                )}
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
