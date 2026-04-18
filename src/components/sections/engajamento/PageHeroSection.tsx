'use client';

import * as m from 'motion/react-m';
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
          <span className="mb-3 block text-label font-sans uppercase tracking-widest text-gold">
            Como atuamos
          </span>
          <h1 className="font-display text-display text-mist leading-tight tracking-tight lg:text-[4rem]">
            Formatos de atuação desenhados conforme o desafio.
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 lg:text-xl"
          >
            Modelos objetivos, presença sênior e escopo ajustado ao que o problema realmente pede.
          </m.p>
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-10"
          >
            <Button variant="primary" href="/contato">
              Converse com a Kolabore
            </Button>
          </m.div>
        </m.div>
      </Container>
    </div>
  );
}
