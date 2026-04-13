'use client';

// src/components/sections/kolabore/ValuePropositionSection.tsx
import * as m from 'motion/react-m';
import { kolaborePage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function ValuePropositionSection() {
  return (
    <Section id="value-proposition" className="bg-ink">
      <Container>
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <SectionHeading
            eyebrow={kolaborePage.valueProposition.eyebrow}
            title={kolaborePage.valueProposition.title}
            align="left"
            light={true}
          />
        </m.div>
        <div className="grid lg:grid-cols-2 gap-6">
          {kolaborePage.valueProposition.items.map((item, index) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="border border-gold/20 rounded-[var(--radius-card)] p-6"
            >
              <p className="font-semibold text-mist text-body">{item.label}</p>
              <p className="mt-2 text-silver text-small leading-relaxed">
                {item.detail}
              </p>
            </m.div>
          ))}
        </div>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className="mt-10"
        >
          <Button variant="secondary" href="/contato">
            Fale com a Kolabore
          </Button>
        </m.div>
      </Container>
    </Section>
  );
}
