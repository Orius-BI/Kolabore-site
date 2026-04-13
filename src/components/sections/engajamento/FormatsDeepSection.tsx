'use client';

import * as m from 'motion/react-m';
import { formats } from '@/data/formats';
import { engajamentoPage } from '@/content/inner-pages';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export function FormatsDeepSection() {
  return (
    <Section id="formats" className="bg-ink">
      <Container>
        <SectionHeading
          eyebrow="Formatos de atuação"
          title="Como estruturamos cada projeto."
          light={true}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {formats.map((format, index) => {
            const detail =
              engajamentoPage.formatDetails[
                format.id as keyof typeof engajamentoPage.formatDetails
              ];
            if (!detail) return null;

            return (
              <m.div
                key={format.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: (index % 2) * 0.1,
                }}
                className="border border-slate/20 rounded-[var(--radius-card)] p-6 bg-ink"
              >
                <h3 className="font-semibold text-mist text-body">
                  {format.label}
                </h3>
                <span className="text-small text-gold uppercase tracking-wider mt-1 block">
                  {detail.typicalDuration}
                </span>
                <p className="mt-3 text-silver text-small leading-relaxed italic">
                  {detail.whenToUse}
                </p>
                <p className="mt-2 text-silver text-small leading-relaxed">
                  {detail.howItWorks}
                </p>
              </m.div>
            );
          })}
        </div>
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12"
        >
          <Button variant="secondary" href="/contato">
            Discuta o melhor formato para seu contexto
          </Button>
        </m.div>
      </Container>
    </Section>
  );
}
