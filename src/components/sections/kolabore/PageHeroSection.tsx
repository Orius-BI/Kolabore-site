'use client';

// src/components/sections/kolabore/PageHeroSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
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
          <span className="text-label font-sans uppercase tracking-widest text-gold mb-3 block">
            {kolaborePage.pageHero.eyebrow}
          </span>
          <h1 className="font-display text-display lg:text-[4rem] text-mist leading-tight tracking-tight">
            {kolaborePage.pageHero.headline}
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 text-mist/70 text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            {kolaborePage.pageHero.subheadline}
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-10"
          >
            <Button variant="primary" href={kolaborePage.pageHero.ctaHref}>
              {kolaborePage.pageHero.ctaLabel}
            </Button>
          </m.div>
        </m.div>
      </Container>
    </div>
  );
}
