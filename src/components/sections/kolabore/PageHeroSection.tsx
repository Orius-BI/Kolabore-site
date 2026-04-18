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
          "linear-gradient(90deg, rgba(13,13,13,0.88) 0%, rgba(13,13,13,0.7) 38%, rgba(13,13,13,0.48) 100%), url('/images/hero-consulting.png')",
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
            Uma rede de executivos seniores para desafios que exigem experiência real e atuação colaborativa.
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-mist/78 sm:mt-6 sm:text-lg lg:text-xl"
          >
            A Kolabore combina trajetórias complementares em supply chain, operações, procurement, governança, qualidade e transformação, reunidas em arranjos customizados para apoiar a alta administração.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-8 sm:mt-10"
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
