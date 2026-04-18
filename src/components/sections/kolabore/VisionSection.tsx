'use client';

// src/components/sections/kolabore/VisionSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function VisionSection() {
  return (
    <Section id="vision" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Visão"
            title="Negócios relevantes são construídos com decisão boa, integração entre frentes e execução consistente."
            align="left"
            light={false}
          />
          <p className="text-body text-slate max-w-2xl leading-relaxed">
            A Kolabore foi estruturada como grupo porque os desafios mais importantes da alta administração atravessam toda a cadeia de valor e raramente cabem em uma única especialidade. Por isso reunimos executivos, gestores e especialistas com experiências complementares, capazes de atuar de forma colaborativa em estratégia, gestão e implementação. Não se trata de vender um pacote pronto, e sim de montar a combinação certa de senioridade para cada contexto.
          </p>
        </m.div>
      </Container>
    </Section>
  );
}
