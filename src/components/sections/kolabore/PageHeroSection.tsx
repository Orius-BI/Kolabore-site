'use client';

import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function PageHeroSection() {
  return (
    <div
      className="bg-ink pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.7) 38%, rgba(13,13,13,0.48) 100%), url('/images/hero-kolabore-bg-v2.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl rounded-[1.5rem] border border-white/10 bg-black/58 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-[2px] sm:p-10 lg:p-12"
        >
          <h1 className="font-display text-[2.45rem] leading-[1.02] tracking-tight text-mist sm:text-[3.15rem] lg:text-[3.6rem]">
            Consultoria em gestão empresarial
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-mist/78 sm:mt-6 sm:text-lg lg:text-xl"
          >
            Kolaboramos com a alta administração em supply chain, operações,
            procurement, governança e transformação, com foco no resultado do
            negócio
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap"
          >
            <Button
              variant="primary"
              href={kolaborePage.pageHero.ctaHref}
              className="w-full text-mist shadow-[0_10px_30px_rgba(0,102,119,0.28)] hover:text-mist sm:w-auto"
            >
              {kolaborePage.pageHero.ctaLabel}
            </Button>
            <Button
              variant="ghost"
              href="/executivos"
              className="w-full border-white/20 bg-black/32 text-white hover:border-white/30 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Conheça a equipe
            </Button>
          </m.div>
        </m.div>
      </Container>
    </div>
  );
}
