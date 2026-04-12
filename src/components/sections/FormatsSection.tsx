'use client';

// src/components/sections/FormatsSection.tsx
import * as m from 'motion/react-m';
import { formats } from '@/data/formats';
import { formats as formatsCopy } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function FormatsSection() {
  return (
    <Section id="atuacao" className="bg-mist">
      <Container>
        <SectionHeading
          title={formatsCopy.sectionTitle}
          subtitle={formatsCopy.subtitle}
          align="left"
          light={false}
        />
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {formats.map((format) => (
            <m.div
              key={format.id}
              variants={itemVariants}
              className="bg-white border border-slate/20 rounded-[var(--radius-card)] p-5"
            >
              <p className="font-sans font-semibold text-ink text-body">{format.label}</p>
              <p className="mt-2 text-small text-slate leading-relaxed">{format.description}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
