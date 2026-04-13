'use client';

// src/components/sections/kolabore/SeniorityDeepSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function SeniorityDeepSection() {
  return (
    <Section id="seniority" className="bg-ink">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={kolaborePage.seniority.eyebrow}
            title={kolaborePage.seniority.title}
            align="left"
            light={true}
          />
          <p className="text-body text-silver max-w-2xl leading-relaxed">
            {kolaborePage.seniority.body}
          </p>
          <div className="mt-10">
            <Button variant="ghost" href={kolaborePage.seniority.ctaHref}>
              {kolaborePage.seniority.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
