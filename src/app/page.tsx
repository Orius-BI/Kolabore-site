// src/app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
import { SenioritySection } from '@/components/sections/SenioritySection';
import { TeamPreviewSection } from '@/components/sections/TeamPreviewSection';
import { AreasSection } from '@/components/sections/AreasSection';
import { ContactSection } from '@/components/sections/ContactSection';

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
    </>
  );
}
