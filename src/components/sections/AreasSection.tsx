'use client';

import * as m from 'motion/react-m';
import { areas } from '@/data/areas';
import { areas as areasCopy } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AreasSection() {
  return (
    <Section id="areas" className="bg-mist">
      <Container>
        <SectionHeading
          title={areasCopy.sectionTitle}
          subtitle={areasCopy.subtitle}
          align="left"
          light={false}
        />
        <m.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {areas.map((area) => (
            <m.div
              key={area.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: 'easeOut' },
                },
              }}
              className="bg-white border border-slate/20 rounded-[var(--radius-card)] p-5"
            >
              <p className="font-sans font-semibold text-ink text-body">{area.label}</p>
              <p className="mt-2 text-small text-slate leading-relaxed">{area.description}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
