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
    <section className="border-t border-slate/20 bg-carbon py-14 md:py-16">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-xl"
        >
          <p className="font-display text-[2rem] leading-tight text-mist md:text-h2">{title}</p>
          <div className="mt-8 md:mt-10">
            <Button variant="primary" href={ctaHref}>
              {ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </section>
  );
}
