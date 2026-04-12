'use client';

// src/components/sections/SenioritySection.tsx
import * as m from 'motion/react-m';
import { seniority } from '@/content/homepage';
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

export function SenioritySection() {
  return (
    <Section id="senioridade" className="bg-carbon">
      <Container>
        <SectionHeading
          title={seniority.sectionTitle}
          align="left"
          light={true}
        />
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {seniority.metrics.map((metric, i) => (
            <m.div
              key={i}
              variants={itemVariants}
              className="border-t border-slate pt-6"
            >
              <p className="font-display text-h1 text-gold leading-none">{metric.value}</p>
              <p className="mt-2 font-sans font-semibold text-mist text-body">{metric.label}</p>
              <p className="mt-3 text-small text-silver leading-relaxed">{metric.detail}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
