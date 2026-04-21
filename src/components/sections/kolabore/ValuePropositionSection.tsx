'use client';

import * as m from 'motion/react-m';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const items = [
  {
    label: 'Senioridade real',
    detail:
      'Executivos que já responderam por áreas centrais do negócio e conhecem a pressão de decidir com impacto no resultado.',
  },
  {
    label: 'Arranjos customizados',
    detail:
      'Equipe, escopo e formato definidos conforme o contexto, e não a partir de uma solução padrão.',
  },
  {
    label: 'Experiências complementares',
    detail:
      'Visões de operações, supply chain, procurement, governança e transformação trabalhando em conjunto.',
  },
  {
    label: 'Orientação a valor',
    detail:
      'Foco em lucratividade, redução de riscos e melhoria da execução, não em volume de entrega.',
  },
];

export function ValuePropositionSection() {
  return (
    <Section id="value-proposition" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Como trabalhamos"
            title="Uma combinação de senioridade, complementaridade e atuação sob medida."
            subtitle="Trabalhamos com estrutura leve, proximidade com quem decide e foco em resultado concreto."
            align="left"
            light={false}
          />
        </m.div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6">
          {items.map((item, index) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
              className="rounded-[var(--radius-card)] border border-slate/15 bg-white p-5 sm:p-6"
            >
              <p className="text-body font-semibold text-ink">{item.label}</p>
              <p className="mt-2 text-small leading-relaxed text-slate">{item.detail}</p>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap"
        >
          <Button
            variant="ghostLight"
            href="/executivos"
            className="w-full sm:w-auto"
          >
            Conhecer equipe
          </Button>
        </m.div>
      </Container>
    </Section>
  );
}
