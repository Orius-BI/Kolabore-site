'use client';

import * as m from 'motion/react-m';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

const highlights = [
  '8 frentes críticas',
  '5 formatos de trabalho',
  'Atuação sênior e integrada',
];

export function PageHeroSection() {
  return (
    <div className="bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]"
        >
          <div className="max-w-4xl">
            <span className="mb-3 block text-label font-sans uppercase tracking-widest text-gold">
              Atuação Kolabore
            </span>
            <h1 className="font-display text-display text-mist leading-tight tracking-tight lg:text-[4.2rem]">
              Senioridade aplicada a decisões críticas e execução relevante.
            </h1>
            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-mist/70 lg:text-xl"
            >
              A Kolabore atua em frentes que afetam resultado, risco e governança, com modelos de trabalho desenhados conforme o contexto do cliente.
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
          </div>

          <div className="border-l border-slate/20 pl-0 lg:pl-8">
            <div className="border-t border-slate/20 pt-6 lg:border-t-0 lg:pt-0">
              <p className="text-label uppercase tracking-[0.18em] text-silver/70">
                Visão geral
              </p>
              <div className="mt-6 space-y-4">
                {highlights.map((item) => (
                  <div key={item} className="border-b border-slate/20 pb-4">
                    <p className="text-body text-mist">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </m.div>
      </Container>
    </div>
  );
}
