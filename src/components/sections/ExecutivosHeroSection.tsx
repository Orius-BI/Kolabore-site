'use client';

// src/components/sections/ExecutivosHeroSection.tsx
import * as m from 'motion/react-m';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function ExecutivosHeroSection() {
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
            O time Kolabore
          </span>
          <h1 className="font-display text-display lg:text-[4rem] text-mist leading-tight tracking-tight">
            Executivos seniores. Experiência que resolve.
          </h1>
          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="mt-6 text-mist/70 text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            Cada membro do grupo traz décadas de atuação executiva em grandes empresas. Aqui, senioridade não é título — é a forma como trabalhamos.
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
