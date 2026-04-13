'use client';

import * as m from 'motion/react-m';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

interface ExpertiseCtaBannerProps {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

export function ExpertiseCtaBanner({ title, ctaLabel, ctaHref }: ExpertiseCtaBannerProps) {
  return (
    <section className="py-10 border-y border-gold/30 bg-gold/10">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="font-display text-h3 text-ink flex-1">{title}</p>
          <Button variant="primary" href={ctaHref}>
            {ctaLabel}
          </Button>
        </m.div>
      </Container>
    </section>
  );
}
