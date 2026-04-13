'use client';

import * as m from 'motion/react-m';
import { expertisePage } from '@/content/inner-pages';
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
            {expertisePage.pageHero.eyebrow}
          </span>
          <h1 className="font-display text-h1 lg:text-display text-mist leading-tight tracking-tight">
            {expertisePage.pageHero.headline}
          </h1>
          <p className="mt-6 text-silver text-body lg:text-lg max-w-2xl leading-relaxed">
            {expertisePage.pageHero.subheadline}
          </p>
          <div className="mt-10">
            <Button variant="primary" href={expertisePage.pageHero.ctaHref}>
              {expertisePage.pageHero.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </div>
  );
}
