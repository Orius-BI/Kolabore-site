// src/components/sections/HeroSection.tsx
// Server Component - no 'use client'. CSS animation keeps LCP-safe.
import { hero } from '@/content/homepage';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <div className="presentation-grid relative flex min-h-screen items-center overflow-hidden bg-ink pt-16 lg:pt-20">
      <div className="presentation-ring left-[-8rem] top-20 h-[22rem] w-[22rem]" />
      <div className="presentation-ring left-[-2rem] top-36 h-[34rem] w-[34rem] border-[rgba(184,147,63,0.18)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(105,200,199,0.12)] to-transparent" />
      <Container>
        <div className="grid items-center gap-12 py-20 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:py-28">
          <div className="max-w-4xl animate-hero-slide-up">
            <p className="mb-4 text-label uppercase tracking-[0.18em] text-aqua">Kolabore Group</p>
            <h1 className="font-display text-display text-mist leading-tight tracking-tight lg:text-[5rem]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 lg:text-xl">
              {hero.subheadline}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" href={hero.ctaPrimaryHref}>
                {hero.ctaPrimary}
              </Button>
              <Button variant="ghost" href={hero.ctaSecondaryHref}>
                {hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className="relative h-[360px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-carbon shadow-[0_32px_80px_rgba(0,0,0,0.45)] sm:h-[420px] lg:h-[560px]">
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full border-[30px] border-[rgba(105,200,199,0.82)] opacity-85" />
            <img
              src="/images/hero-consulting.png"
              alt="Cadernos e livros em ambiente executivo com iluminação dourada."
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-black/8" />
          </div>
        </div>
      </Container>
    </div>
  );
}
