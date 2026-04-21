import type { Metadata } from 'next'
import { PageHeroSection } from '@/components/sections/kolabore/PageHeroSection';
import { ValuePropositionSection } from '@/components/sections/kolabore/ValuePropositionSection';
import { AtuacaoSummarySection } from '@/components/sections/kolabore/AtuacaoSummarySection';
import { PositioningSection } from '@/components/sections/kolabore/PositioningSection';

export const metadata: Metadata = {
  title: 'A Kolabore',
  description:
    'Conheça a Kolabore: rede de executivos seniores atuando em temas críticos de supply chain, operações, procurement, governança e transformação.',
  openGraph: {
    title: 'A Kolabore | Kolabore',
    description:
      'Conheça a Kolabore: rede de executivos seniores atuando em temas críticos de supply chain, operações, procurement, governança e transformação.',
    url: 'https://kolabore.com.br/kolabore/',
  },
};

export default function KolaborePage() {
  return (
    <main>
      <PageHeroSection />
      <ValuePropositionSection />
      <AtuacaoSummarySection />
      <PositioningSection />
    </main>
  );
}
