import type { Metadata } from 'next'
import { PageHeroSection } from '@/components/sections/engajamento/PageHeroSection';
import { FormatsDeepSection } from '@/components/sections/engajamento/FormatsDeepSection';
import { EngajamentoCtaClose } from '@/components/sections/engajamento/EngajamentoCtaClose';

export const metadata: Metadata = {
  title: 'Engajamento',
  description: 'Como a Kolabore atua: consultoria completa, assessments, workshops, mentoring e advisory. Arranjos sob medida para cada contexto e desafio executivo.',
  openGraph: {
    title: 'Engajamento | Kolabore',
    description: 'Como a Kolabore atua: consultoria completa, assessments, workshops, mentoring e advisory. Arranjos sob medida para cada contexto e desafio executivo.',
    url: 'https://kolabore.com.br/engajamento/',
  },
}

export default function EngajamentoPage() {
  return (
    <main>
      <PageHeroSection />
      <FormatsDeepSection />
      <EngajamentoCtaClose />
    </main>
  );
}
