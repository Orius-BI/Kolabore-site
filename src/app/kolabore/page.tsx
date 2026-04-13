// src/app/kolabore/page.tsx
import { PageHeroSection } from '@/components/sections/kolabore/PageHeroSection';
import { VisionSection } from '@/components/sections/kolabore/VisionSection';
import { ValuePropositionSection } from '@/components/sections/kolabore/ValuePropositionSection';
import { PositioningSection } from '@/components/sections/kolabore/PositioningSection';
import { SeniorityDeepSection } from '@/components/sections/kolabore/SeniorityDeepSection';

export const metadata = {
  title: 'Kolabore — Quem somos',
  description:
    'Conheça a Kolabore: uma firma de executivos seniores que atua nos desafios reais de supply chain, operações, procurement e governança.',
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
