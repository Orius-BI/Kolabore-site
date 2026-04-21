'use client';

import { useState } from 'react';
import * as m from 'motion/react-m';
import { areas } from '@/data/areas';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const areaCopy: Record<string, { challenge: string; body: string[]; examples: string[] }> = {
  'supply-chain': {
    challenge: 'Quando a cadeia de suprimento passa a comprometer o resultado do negócio',
    body: [
      'Supply chain não é apenas logística — é um tema central para a alta administração. Falhas na cadeia impactam diretamente custo, nível de serviço e reputação.',
      'A Kolabore atua em redesenhos estruturais e em situações de ruptura que exigem resposta rápida e decisão qualificada. O diferencial está na combinação entre visão estratégica e entendimento operacional profundo, permitindo identificar o gargalo real e atuar com precisão.',
      'O resultado são cadeias mais resilientes, com menor custo total e maior capacidade de resposta em ambientes de alta variabilidade.',
    ],
    examples: ['Redesenho de rede de distribuição', 'Gestão de ruptura e contingência'],
  },
  operacoes: {
    challenge: 'Quando a operação deixa de sustentar o crescimento do negócio',
    body: [
      'Operações complexas acumulam ajustes ao longo do tempo, mascarando ineficiências estruturais. A Kolabore atua com visão executiva para diferenciar problemas de gestão, processo e capacidade.',
      'O foco não está apenas no diagnóstico, mas na sustentação do resultado. Trabalhamos junto ao time do cliente para garantir implementação efetiva e consistência ao longo do tempo.',
    ],
    examples: ['Ganhos de produtividade', 'Redesenho de fluxo produtivo'],
  },
  procurement: {
    challenge: 'Quando compras precisa deixar de ser operacional para gerar valor estratégico',
    body: [
      'A maioria das áreas de compras ainda opera de forma transacional. A Kolabore atua na evolução de procurement para uma função estratégica, estruturando gestão por categoria, desenvolvimento de fornecedores e governança contratual.',
      'O objetivo é capturar valor de forma sistemática, com visibilidade sobre risco e impacto direto no resultado.',
    ],
    examples: ['Gestão por categoria', 'Desenvolvimento de fornecedores críticos'],
  },
  governanca: {
    challenge: 'Quando a estrutura de governança não acompanha a complexidade do negócio',
    body: [
      'Governança ineficiente compromete decisões e execução. A Kolabore apoia a alta administração na construção de modelos que funcionam na prática, com clareza de papéis, mecanismos de decisão e accountability real.',
      'Cada estrutura é desenhada conforme o contexto da organização, garantindo aderência e efetividade.',
    ],
    examples: ['Estruturação de governança corporativa', 'Modelagem de conselhos e comitês'],
  },
  qualidade: {
    challenge: 'Quando qualidade e segurança deixam de ser suporte e passam a ser risco de negócio',
    body: [
      'Em cadeias reguladas, qualidade e food safety são condicionantes do negócio. A Kolabore atua na construção de sistemas que funcionam sob pressão operacional, indo além da certificação.',
      'O foco é garantir consistência na execução ao longo de toda a cadeia.',
    ],
    examples: ['Implantação de sistemas de qualidade', 'Preparação para auditorias críticas'],
  },
  projetos: {
    challenge: 'Quando projetos estratégicos não entregam o que prometem',
    body: [
      'Projetos falham por razões previsíveis: falta de clareza, baixa senioridade e ausência de accountability. A Kolabore atua com PMO sênior, conectando gestão de projeto à realidade do negócio.',
      'O objetivo é garantir entrega efetiva em prazos críticos.',
    ],
    examples: ['PMO para transformação', 'Integração pós-M&A'],
  },
  inovacao: {
    challenge: 'Quando inovação não se traduz em resultado operacional',
    body: [
      'Inovação precisa gerar valor concreto. A Kolabore estrutura iniciativas com foco em impacto real, conectando estratégia a execução.',
      'O resultado são projetos implementáveis, com retorno mensurável.',
    ],
    examples: ['Portfólio de inovação', 'Digitalização de processos'],
  },
  conselho: {
    challenge: 'Quando o conselho precisa atuar de forma mais efetiva',
    body: [
      'A Kolabore contribui para que conselhos e comitês atuem como instâncias reais de decisão e orientação estratégica.',
      'A atuação combina participação e estruturação, garantindo agenda relevante e qualidade nas decisões.',
    ],
    examples: ['Membro independente', 'Estruturação de comitês'],
  },
};

export function AreaDeepSection() {
  const [openId, setOpenId] = useState<string | null>(areas[0]?.id ?? null);

  return (
    <Section id="areas" className="bg-ink pt-24 md:pt-28">
      <Container>
        <SectionHeading
          title="Frentes que exigem leitura executiva e capacidade de implementação."
          subtitle="Temas críticos do negócio tratados com profundidade prática e visão integrada da cadeia de valor."
          light={true}
          className="[&_h2]:max-w-4xl [&_h2]:text-[2.25rem] [&_h2]:leading-tight md:[&_h2]:text-h1 [&_p]:max-w-2xl"
        />

        <div className="border-t border-slate/20">
          {areas.map((area, index) => {
            const detail = areaCopy[area.id];
            if (!detail) return null;

            const isOpen = openId === area.id;

            return (
              <m.div
                key={area.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.04 }}
                className="border-b border-slate/20"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left md:hidden"
                  onClick={() => setOpenId(isOpen ? null : area.id)}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display text-[1.55rem] leading-tight text-mist">{area.label}</h3>
                    <p className="mt-2 text-small leading-relaxed text-mist/62">{detail.challenge}</p>
                  </div>
                  <span className="shrink-0 text-xl leading-none text-gold">{isOpen ? '−' : '+'}</span>
                </button>

                {isOpen && (
                  <div className="pb-6 md:hidden">
                    <div className="space-y-4 text-body leading-relaxed text-mist/72">
                      {detail.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {detail.examples.map((example) => (
                        <li key={example} className="flex gap-2 text-small leading-relaxed text-mist/62">
                          <span className="text-gold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="hidden gap-4 py-8 md:grid md:grid-cols-[200px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-8">
                  <h3 className="font-display text-[1.7rem] leading-tight text-mist md:text-h3">{area.label}</h3>

                  <div className="max-w-2xl">
                    <p className="text-body leading-relaxed text-mist/62">{detail.challenge}</p>
                    <div className="mt-3 space-y-4 text-body leading-relaxed text-mist/72">
                      {detail.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {detail.examples.map((example) => (
                        <li key={example} className="flex gap-2 text-small leading-relaxed text-mist/62">
                          <span className="text-gold">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </m.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
