'use client';

import * as m from 'motion/react-m';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

const milestones = [
  {
    period: '1985-2019',
    title: 'Carreiras executivas sólidas',
    detail:
      'Trajetórias construídas em grandes empresas, com liderança direta sobre operações, supply chain, procurement, qualidade, governança e transformação.',
  },
  {
    period: '2019-2024',
    title: 'Consultorias individuais e parcerias',
    detail:
      'Experiências aplicadas em trabalhos independentes, parcerias especializadas e projetos orientados a resultado em diferentes contextos de negócio.',
  },
  {
    period: '2025',
    title: 'Início da Kolabore',
    detail:
      'Consolidação do grupo como rede de executivos, gestores e especialistas com experiências complementares e arranjos customizados.',
  },
];

const logos = [
  { src: '/images/logos/coca-cola.png', alt: 'Coca-Cola' },
  { src: '/images/logos/accenture.png', alt: 'Accenture' },
  { src: '/images/logos/pg.png', alt: 'P&G' },
  { src: '/images/logos/raizen.png', alt: 'Raízen' },
  { src: '/images/logos/generic-logo.png', alt: 'Eneva' },
];

export function SenioritySection() {
  return (
    <Section id="credenciais" className="bg-carbon">
      <Container>
        <SectionHeading
          eyebrow="Credenciais"
          title="Senioridade e experiência acumuladas em diferentes ciclos de negócio."
          subtitle="Trajetória construída em grandes empresas, consolidada em consultorias e transformada em atuação integrada na Kolabore."
          align="left"
          light={true}
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {logos.map((logo, index) => (
            <m.div
              key={logo.alt}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.05 }}
              className="flex h-24 items-center justify-center rounded-[var(--radius-card)] border border-white/10 bg-white px-6 py-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 w-auto max-w-full object-contain"
              />
            </m.div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <div className="rounded-[var(--radius-card)] border border-gold/20 bg-ink/70 p-6">
            <p className="font-display text-[4rem] leading-none text-gold">~35</p>
            <p className="mt-2 text-body font-semibold text-mist">anos</p>
            <p className="mt-3 text-small leading-relaxed text-mist/72">
              de senioridade executiva aplicada a problemas reais de operação, cadeia de valor, governança e crescimento.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((item, index) => (
              <m.div
                key={item.period}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.08 }}
                className="grid gap-4 rounded-[var(--radius-card)] border border-white/8 bg-ink/60 p-6 md:grid-cols-[160px_minmax(0,1fr)]"
              >
                <div>
                  <p className="text-small uppercase tracking-[0.18em] text-gold">{item.period}</p>
                </div>
                <div>
                  <h3 className="font-display text-h3 text-mist">{item.title}</h3>
                  <p className="mt-3 max-w-3xl text-small leading-relaxed text-mist/74">{item.detail}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
