'use client';

// src/components/sections/kolabore/PositioningSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function PositioningSection() {
  return (
    <Section id="positioning" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={kolaborePage.positioning.eyebrow}
            title={kolaborePage.positioning.title}
            align="left"
            light={false}
          />
          <p className="text-body text-slate max-w-2xl leading-relaxed">
            {kolaborePage.positioning.body}
          </p>
          <div className="mt-10">
            <Button variant="secondary" href={kolaborePage.positioning.ctaHref}>
              {kolaborePage.positioning.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
