'use client';

import * as m from 'motion/react-m';
import { engajamentoPage } from '@/content/inner-pages';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function PageHeroSection() {
  return (
    <div className="bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <span className="text-label font-sans uppercase tracking-widest text-gold mb-4 block">
            {engajamentoPage.pageHero.eyebrow}
          </span>
          <h1 className="font-display text-h1 lg:text-display text-mist leading-tight tracking-tight">
            {engajamentoPage.pageHero.headline}
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 text-silver text-body lg:text-lg max-w-2xl leading-relaxed"
          >
            {engajamentoPage.pageHero.subheadline}
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-10"
          >
            <Button variant="primary" href={engajamentoPage.pageHero.ctaHref}>
              {engajamentoPage.pageHero.ctaLabel}
            </Button>
          </m.div>
        </m.div>
      </Container>
    </div>
  );
}
