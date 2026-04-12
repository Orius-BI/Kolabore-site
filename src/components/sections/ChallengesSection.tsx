'use client';

// src/components/sections/ChallengesSection.tsx
import * as m from 'motion/react-m';
import { challenges } from '@/content/homepage';
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

export function ChallengesSection() {
  return (
    <Section id="desafios" className="bg-ink">
      <Container>
        <SectionHeading
          title={challenges.sectionTitle}
          align="left"
          light={true}
        />
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {challenges.items.map((question, i) => (
            <m.div
              key={i}
              variants={itemVariants}
              className="border-l-2 border-gold pl-5 py-3"
            >
              <p className="text-mist text-body leading-snug">{question}</p>
            </m.div>
          ))}
        </m.div>
      </Container>
    </Section>
  );
}
