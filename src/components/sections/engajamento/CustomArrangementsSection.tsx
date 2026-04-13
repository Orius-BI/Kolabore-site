'use client';

import * as m from 'motion/react-m';
import { engajamentoPage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function CustomArrangementsSection() {
  return (
    <Section id="custom-arrangements" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={engajamentoPage.customArrangements.eyebrow}
            title={engajamentoPage.customArrangements.title}
            light={false}
          />
          <p className="text-slate text-body leading-relaxed max-w-3xl">
            {engajamentoPage.customArrangements.body}
          </p>
          <div className="mt-10">
            <Button
              variant="primary"
              href={engajamentoPage.customArrangements.ctaHref}
            >
              {engajamentoPage.customArrangements.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
