'use client';

// src/components/sections/kolabore/VisionSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function VisionSection() {
  return (
    <Section id="vision" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={kolaborePage.vision.eyebrow}
            title={kolaborePage.vision.title}
            align="left"
            light={false}
          />
          <p className="text-body text-slate max-w-2xl leading-relaxed">
            {kolaborePage.vision.body}
          </p>
        </m.div>
      </Container>
    </Section>
  );
}
