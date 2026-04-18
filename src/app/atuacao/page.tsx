import type { Metadata } from 'next'
import { AreaDeepSection } from '@/components/sections/expertise/AreaDeepSection';
import { FormatsDeepSection } from '@/components/sections/engajamento/FormatsDeepSection';
import { ExpertiseCtaBanner } from '@/components/sections/expertise/ExpertiseCtaBanner';

export const metadata: Metadata = {
  title: 'Atuação',
  description: 'Áreas de atuação e formatos de trabalho da Kolabore. Senioridade aplicada a desafios críticos com modelos objetivos e flexíveis.',
  openGraph: {
    title: 'Atuação | Kolabore',
    description: 'Áreas de atuação e formatos de trabalho da Kolabore. Senioridade aplicada a desafios críticos com modelos objetivos e flexíveis.',
    url: 'https://kolabore.com.br/atuacao/',
  },
}

export default function AtuacaoPage() {
  return (
    <main>
      <AreaDeepSection />
      <FormatsDeepSection />
      <ExpertiseCtaBanner
        title="Tem um desafio específico? Vamos entender o contexto."
        ctaLabel="Agende uma conversa"
        ctaHref="/contato"
      />
    </main>
  );
}
