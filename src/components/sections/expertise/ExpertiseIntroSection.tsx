'use client';

import * as m from 'motion/react-m';
import { expertisePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function ExpertiseIntroSection() {
  return (
    <Section id="intro" className="bg-mist">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow="Áreas de atuação"
            title="Todos os processos organizacionais, percorrendo a cadeia de valor e apoiando decisões em gestão e conselho."
            light={false}
          />
          <p className="text-slate text-body leading-relaxed max-w-2xl mt-2">
            A Kolabore atua de forma transversal ao longo da cadeia de valor, conectando operação, supply chain, procurement, governança, qualidade, projetos e inovação. O objetivo é apoiar a alta administração em aumento de lucratividade, redução de riscos e crescimento sustentável, com visão integrada sobre o negócio.
          </p>
          <div className="mt-8">
            <Button variant="secondary" href={expertisePage.ctaBanner.ctaHref}>
              {expertisePage.ctaBanner.ctaLabel}
            </Button>
          </div>
        </m.div>
      </Container>
    </Section>
  );
}
