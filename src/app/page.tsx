// src/app/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
import { SenioritySection } from '@/components/sections/SenioritySection';
import { TeamPreviewSection } from '@/components/sections/TeamPreviewSection';
import { AreasSection } from '@/components/sections/AreasSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Kolabore | Consultoria Executiva',
  },
  description: 'Consultoria executiva de alto valor para líderes e organizações. Senioridade aplicada a desafios críticos de operação, supply chain, governança e crescimento.',
  openGraph: {
    title: 'Kolabore | Consultoria Executiva',
    description: 'Consultoria executiva de alto valor para líderes e organizações. Senioridade aplicada a desafios críticos de operação, supply chain, governança e crescimento.',
    url: 'https://kolabore.com.br/',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <ChallengesSection />
      <FormatsSection />
      <SenioritySection />
      <TeamPreviewSection />
      <AreasSection />
      <ContactSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Kolabore',
            url: 'https://kolabore.com.br',
            logo: 'https://kolabore.com.br/opengraph-image.jpg',
            description: 'Consultoria executiva de alto valor para líderes e organizações em transformação.',
            address: { '@type': 'PostalAddress', addressCountry: 'BR' },
          }).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
