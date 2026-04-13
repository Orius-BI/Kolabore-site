import type { Metadata } from 'next'
import { PageHeroSection } from '@/components/sections/expertise/PageHeroSection';
import { ExpertiseIntroSection } from '@/components/sections/expertise/ExpertiseIntroSection';
import { AreaDeepSection } from '@/components/sections/expertise/AreaDeepSection';
import { ExpertiseCtaBanner } from '@/components/sections/expertise/ExpertiseCtaBanner';
import { expertisePage } from '@/content/inner-pages';

export const metadata: Metadata = {
  title: 'Expertise',
  description: 'As áreas de atuação da Kolabore: supply chain, operações, procurement, governança, qualidade, projetos e inovação — com profundidade real em cada frente.',
  openGraph: {
    title: 'Expertise | Kolabore',
    description: 'As áreas de atuação da Kolabore: supply chain, operações, procurement, governança, qualidade, projetos e inovação — com profundidade real em cada frente.',
    url: 'https://kolabore.com.br/expertise/',
  },
}

export default function ExpertisePage() {
  return (
    <main>
      <PageHeroSection />
      <ExpertiseIntroSection />
      <AreaDeepSection />
      <ExpertiseCtaBanner
        title={expertisePage.ctaBanner.title}
        ctaLabel={expertisePage.ctaBanner.ctaLabel}
        ctaHref={expertisePage.ctaBanner.ctaHref}
      />
    </main>
  );
}
