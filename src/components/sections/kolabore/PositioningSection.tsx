'use client';

import * as m from 'motion/react-m';
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
            eyebrow="Por que a Kolabore"
            title="Um modelo entre a consultoria tradicional e a especialização isolada."
            subtitle="Mais proximidade com quem decide, menos overhead e maior capacidade de integrar frentes relevantes do negócio."
            align="left"
            light={false}
          />
          <div className="mt-8 grid gap-3 sm:mt-10 sm:flex">
            <Button variant="secondaryLight" href="/contato" className="w-full sm:w-auto">
              Fale com a Kolabore
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
