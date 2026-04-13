'use client';

import * as m from 'motion/react-m';
import { engajamentoPage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function EngajamentoCtaClose() {
  return (
    <Section id="cta-close" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="font-display text-h2 text-ink text-center max-w-2xl mx-auto">
            {engajamentoPage.ctaClose.title}
          </h2>
          <div className="mt-10">
            <Button
              variant="primary"
              href={engajamentoPage.ctaClose.ctaHref}
            >
              {engajamentoPage.ctaClose.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
