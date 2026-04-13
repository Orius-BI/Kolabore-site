import { PageHeroSection } from '@/components/sections/expertise/PageHeroSection';
import { ExpertiseIntroSection } from '@/components/sections/expertise/ExpertiseIntroSection';
import { AreaDeepSection } from '@/components/sections/expertise/AreaDeepSection';
import { ExpertiseCtaBanner } from '@/components/sections/expertise/ExpertiseCtaBanner';
import { expertisePage } from '@/content/inner-pages';

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
