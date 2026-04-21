import type { Metadata } from 'next'
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { ExecutiveCard } from '@/components/ui/ExecutiveCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { executives } from '@/data/team';

export const metadata: Metadata = {
  title: 'Quem somos',
  description: 'Conheça o time da Kolabore: executivos seniores com décadas de atuação em grandes empresas. Supply chain, operações, governança e transformação corporativa.',
  openGraph: {
    title: 'Quem somos | Kolabore',
    description: 'Conheça o time da Kolabore: executivos seniores com décadas de atuação em grandes empresas. Supply chain, operações, governança e transformação corporativa.',
    url: 'https://kolabore.com.br/executivos/',
  },
}

export default function ExecutivosPage() {
  return (
    <main>
      <Section id="executivos" className="bg-ink">
        <Container>
          <SectionHeading
            eyebrow="Quem somos"
            title="Nosso time executivo"
            subtitle="Profissionais com trajetória em grandes organizações, atuando diretamente em temas críticos para a alta gestão."
            light={true}
          />

          {executives.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-small text-silver">Perfis em breve.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {executives.map((exec, i) => (
                <ExecutiveCard key={exec.id} exec={exec} eager={i === 0} />
              ))}
            </div>
          )}
        </Container>
      </Section>

      <Section className="border-t border-slate/20 bg-carbon">
        <Container>
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Próximo passo"
              title="Converse com nossa equipe"
              subtitle="Entendemos o desafio antes de propor qualquer solução."
              light={true}
            />
            <Button variant="primary" href="/contato">Agende uma conversa</Button>
          </div>
        </Container>
      </Section>

      {executives.map((exec) => (
        <script
          key={`jsonld-${exec.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": exec.name,
              "jobTitle": exec.title,
              "description": exec.bio,
              "image": `https://kolabore.com.br${exec.photo}`,
              "worksFor": {
                "@type": "Organization",
                "name": "Kolabore",
                "url": "https://kolabore.com.br"
              }
            })
          }}
        />
      ))}
    </main>
  );
}
