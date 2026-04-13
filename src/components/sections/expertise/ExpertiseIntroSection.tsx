'use client';

import * as m from 'motion/react-m';
import { expertisePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function ExpertiseIntroSection() {
  return (
    <Section id="intro" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={expertisePage.intro.eyebrow}
            title={expertisePage.intro.title}
            light={false}
          />
          <p className="text-slate text-body leading-relaxed max-w-2xl mt-2">
            {expertisePage.intro.body}
          </p>
          <div className="mt-8">
            <Button variant="secondary" href={expertisePage.ctaBanner.ctaHref}>
              {expertisePage.ctaBanner.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
