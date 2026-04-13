// src/app/kolabore/page.tsx
import type { Metadata } from 'next'
import { PageHeroSection } from '@/components/sections/kolabore/PageHeroSection';
import { VisionSection } from '@/components/sections/kolabore/VisionSection';
import { ValuePropositionSection } from '@/components/sections/kolabore/ValuePropositionSection';
import { PositioningSection } from '@/components/sections/kolabore/PositioningSection';
import { SeniorityDeepSection } from '@/components/sections/kolabore/SeniorityDeepSection';

export const metadata: Metadata = {
  title: 'A Kolabore',
  description: 'Conheça a Kolabore: executivos seniores atuando nos desafios reais de supply chain, operações, procurement e governança corporativa.',
  openGraph: {
    title: 'A Kolabore | Kolabore',
    description: 'Conheça a Kolabore: executivos seniores atuando nos desafios reais de supply chain, operações, procurement e governança corporativa.',
    url: 'https://kolabore.com.br/kolabore/',
  },
};

export default function KolaborePage() {
  return (
    <main>
      <PageHeroSection />
      <VisionSection />
      <ValuePropositionSection />
      <PositioningSection />
      <SeniorityDeepSection />
    </main>
  );
}
