'use client';

// src/components/sections/AudienceSection.tsx
import { m } from 'motion/react-m';
import { audience } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AudienceSection() {
  return (
    <Section id="audiencia" className="bg-mist">
      <Container>
        <SectionHeading
          title={audience.sectionTitle}
          align="left"
          light={false}
        />
        <m.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {audience.blocks.map((block) => (
            <m.div
              key={block.label}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: 'easeOut' },
                },
              }}
              className="border-t-2 border-gold pt-4"
            >
              <p className="font-sans font-semibold text-ink text-body">
                {block.label}
              </p>
              <p className="mt-2 text-small text-slate leading-relaxed">
                {block.description}
              </p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
