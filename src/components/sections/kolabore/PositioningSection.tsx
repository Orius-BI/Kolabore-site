'use client';

// src/components/sections/kolabore/PositioningSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function PositioningSection() {
  return (
    <Section id="positioning" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Posicionamento"
            title="Entre a consultoria genérica e a boutique isolada, a Kolabore ocupa o espaço da integração com senioridade."
            align="left"
            light={false}
          />
          <p className="text-body text-slate max-w-2xl leading-relaxed">
            As grandes firmas costumam trazer estrutura pesada e baixa proximidade com quem decide. Boutiques muito especializadas entregam profundidade, mas nem sempre enxergam os efeitos cruzados entre as frentes do negócio. A Kolabore combina senioridade genuína, experiências complementares e disposição para atuar em conjunto, individualmente ou em arranjos customizados. Esse modelo permite apoiar o cliente com mais aderência ao problema, menos overhead e maior capacidade de integração.
          </p>
          <div className="mt-10">
            <Button variant="secondary" href={kolaborePage.positioning.ctaHref}>
              {kolaborePage.positioning.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
