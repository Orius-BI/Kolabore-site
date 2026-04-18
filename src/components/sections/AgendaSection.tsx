import Link from 'next/link';
import { agenda } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function AgendaSection() {
  return (
    <Section id="agenda" className="border-y border-slate/20 bg-carbon">
      <Container>
        <SectionHeading
          title={agenda.sectionTitle}
          subtitle={agenda.subtitle}
          align="left"
          light={true}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {agenda.items.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[var(--radius-card)] border border-white/8 bg-ink/70 p-5 transition-colors duration-200 hover:border-gold/40 hover:bg-ink"
            >
              <p className="mb-3 text-small uppercase tracking-[0.18em] text-gold">
                0{index + 1}
              </p>
              <h3 className="font-display text-h3 text-mist transition-colors duration-200 group-hover:text-gold-hover">
                {item.title}
              </h3>
              <p className="mt-3 text-small leading-relaxed text-mist/72">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
