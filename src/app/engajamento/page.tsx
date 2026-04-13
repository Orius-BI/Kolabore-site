import { PageHeroSection } from '@/components/sections/engajamento/PageHeroSection';
import { PhilosophySection } from '@/components/sections/engajamento/PhilosophySection';
import { FormatsDeepSection } from '@/components/sections/engajamento/FormatsDeepSection';
import { CustomArrangementsSection } from '@/components/sections/engajamento/CustomArrangementsSection';
import { WorkingRelationshipSection } from '@/components/sections/engajamento/WorkingRelationshipSection';
import { EngajamentoCtaClose } from '@/components/sections/engajamento/EngajamentoCtaClose';

export default function EngajamentoPage() {
  return (
    <main>
      <PageHeroSection />
      <PhilosophySection />
      <FormatsDeepSection />
      <CustomArrangementsSection />
      <WorkingRelationshipSection />
      <EngajamentoCtaClose />
    </main>
  );
}
