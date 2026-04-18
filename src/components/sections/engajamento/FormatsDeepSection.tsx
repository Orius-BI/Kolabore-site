'use client';

import { useState } from 'react';
import * as m from 'motion/react-m';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const formats = [
  {
    title: 'Consultoria completa',
    detail: 'Atuação ponta a ponta em desafios estruturais, com presença contínua e foco em implementação.',
  },
  {
    title: 'Assessments e benchmarks',
    detail: 'Diagnóstico, priorização e clareza executiva sobre onde agir primeiro.',
  },
  {
    title: 'Quick wins',
    detail: 'Intervenções focadas em capturar resultado no curto prazo, sem perder sustentação.',
  },
  {
    title: 'Workshops e mentoria',
    detail: 'Apoio sênior para alinhamento, desenvolvimento e tomada de decisão.',
  },
  {
    title: 'Arranjos customizados',
    detail: 'Combinações desenhadas conforme escopo, momento e complexidade do contexto.',
  },
];

export function FormatsDeepSection() {
  const [openTitle, setOpenTitle] = useState<string | null>(formats[0]?.title ?? null);

  return (
    <Section id="formats" className="bg-ink pt-0">
      <Container>
        <SectionHeading
          title="Formatos ajustados ao problema, não a um pacote padrão."
          subtitle="Estrutura leve, escopo claro e atuação sênior ao longo do trabalho."
          light={true}
          className="[&_h2]:max-w-4xl [&_h2]:text-[2.1rem] [&_h2]:leading-tight md:[&_h2]:text-h1 [&_p]:max-w-2xl"
        />

        <div className="border-t border-slate/20">
          {formats.map((format, index) => {
            const isOpen = openTitle === format.title;

            return (
              <m.div
                key={format.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                className="border-b border-slate/20"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left md:hidden"
                  onClick={() => setOpenTitle(isOpen ? null : format.title)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-[1.5rem] leading-tight text-mist">
                    {format.title}
                  </h3>
                  <span className="shrink-0 text-xl leading-none text-gold">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 md:hidden">
                    <p className="text-body leading-relaxed text-mist/72">{format.detail}</p>
                  </div>
                )}

                <div className="hidden gap-3 py-8 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8">
                  <h3 className="font-display text-[1.65rem] leading-tight text-mist md:text-h3">
                    {format.title}
                  </h3>
                  <p className="max-w-2xl text-body leading-relaxed text-mist/72">{format.detail}</p>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
