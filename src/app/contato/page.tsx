import type { Metadata } from 'next';
import { ContactSection } from '@/components/sections/ContactSection';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a Kolabore. Fale diretamente com consultores executivos seniores — sem intermediários, sem formulários genéricos.',
  openGraph: {
    title: 'Contato | Kolabore',
    description:
      'Entre em contato com a Kolabore. Fale diretamente com consultores executivos seniores — sem intermediários, sem formulários genéricos.',
    url: 'https://kolabore.com.br/contato',
  },
};

export default function ContatoPage() {
  return (
    <main>
      {/* Hero */}
      <div className="bg-ink pt-32 pb-16 lg:pt-40 lg:pb-20">
        <Container>
          <span className="text-gold text-label uppercase tracking-widest">
            Fale com a Kolabore
          </span>
          <h1 className="font-display text-display text-mist mt-4">
            Pronto para avançar?
          </h1>
          <p className="text-mist/70 text-body mt-6 max-w-2xl">
            Nosso time de consultores seniores entende o desafio antes de propor qualquer
            solução. Preencha o formulário ou use os contatos abaixo.
          </p>
        </Container>
      </div>

      {/* Form — ContactSection manages its own Section wrapper */}
      <ContactSection />

      {/* Contact details */}
      <Section className="bg-carbon border-t border-slate/20">
        <Container>
          <div className="max-w-sm">
            <h2 className="font-display text-h2 text-mist mb-6">
              Outras formas de contato
            </h2>
            <p className="text-gold text-label uppercase tracking-widest mb-1">E-mail</p>
            <p className="text-mist">contato@kolabore.com.br</p>
            <p className="text-gold text-label uppercase tracking-widest mb-1 mt-6">
              Telefone
            </p>
            <p className="text-mist">
              {/* TODO: confirm real phone with client */}
              +55 (11) 9XXXX-XXXX
            </p>
            <p className="text-silver text-small mt-6">
              Respondemos em até 24 horas úteis.
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}
