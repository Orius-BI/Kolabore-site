'use client';

import * as m from 'motion/react-m';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const areas = [
  {
    title: 'Supply Chain',
    description:
      'Redesenho de cadeia, resposta a rupturas e melhoria de nível de serviço com visão de custo total.',
  },
  {
    title: 'Manufatura e Operações',
    description:
      'Produtividade, capacidade, fluxo operacional e sustentação de resultado em ambientes complexos.',
  },
  {
    title: 'Procurement',
    description:
      'Gestão por categoria, fornecedores críticos, contratos e evolução de compras para geração de valor.',
  },
  {
    title: 'Governança',
    description:
      'Modelos de decisão, papéis, conselhos e comitês alinhados à complexidade real do negócio.',
  },
  {
    title: 'Qualidade e Food Safety',
    description:
      'Estruturação de sistemas de qualidade, preparação para auditorias exigentes e consistência na cadeia.',
  },
  {
    title: 'Projetos e Transformação',
    description:
      'PMO sênior, reestruturações, integrações e programas relevantes com foco em entrega efetiva.',
  },
];

export function AtuacaoSummarySection() {
  return (
    <Section id="atuacao" className="bg-ink">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Onde atuamos"
            title="Frentes de negócio que transformamos"
            subtitle="A Kolabore atua em temas que afetam resultado, risco, governança e capacidade de execução."
            light={true}
          />
        </m.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area, index) => (
            <m.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
              className="rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-body font-semibold text-mist">{area.title}</h3>
              <p className="mt-3 text-small leading-relaxed text-silver">{area.description}</p>
            </m.div>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="ghost" href="/contato">
            Queremos conhecer sua história
          </Button>
        </div>
      </Container>
    </Section>
  );
}
