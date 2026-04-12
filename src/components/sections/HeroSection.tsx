'use client';

// src/components/sections/HeroSection.tsx
import * as m from 'motion/react-m';
import { hero } from '@/content/homepage';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <div className="min-h-screen bg-ink flex items-center pt-16 lg:pt-20">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-4xl py-20 lg:py-28"
        >
          <h1 className="font-display text-display lg:text-[5rem] text-mist leading-tight tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 text-mist/70 text-lg lg:text-xl max-w-2xl leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="primary" href={hero.ctaPrimaryHref}>
              {hero.ctaPrimary}
            </Button>
            <Button variant="ghost" href={hero.ctaSecondaryHref}>
              {hero.ctaSecondary}
            </Button>
          </div>
        </m.div>
      </Container>
    </div>
  );
}
