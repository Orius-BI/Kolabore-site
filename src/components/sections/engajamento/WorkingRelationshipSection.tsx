'use client';

import * as m from 'motion/react-m';
import { engajamentoPage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function WorkingRelationshipSection() {
  const { items } = engajamentoPage.workingRelationship;

  return (
    <Section id="working-relationship" className="bg-ink">
      <Container>
        <SectionHeading
          eyebrow={engajamentoPage.workingRelationship.eyebrow}
          title={engajamentoPage.workingRelationship.title}
          light={true}
        />
        <div>
          {items.map((item, index) => (
            <m.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.1,
              }}
            >
              <div className="py-8">
                <h3 className="font-display text-h3 text-mist">{item.label}</h3>
                <p className="mt-2 text-silver text-body leading-relaxed max-w-2xl">
                  {item.detail}
                </p>
              </div>
              {index < items.length - 1 && (
                <hr className="border-slate/20" />
              )}
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
