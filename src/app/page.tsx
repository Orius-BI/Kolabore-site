// src/app/page.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { AudienceSection } from '@/components/sections/AudienceSection';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { FormatsSection } from '@/components/sections/FormatsSection';
import { SenioritySection } from '@/components/sections/SenioritySection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AudienceSection />
      <ChallengesSection />
      <FormatsSection />
      <SenioritySection />
    </>
  );
}
