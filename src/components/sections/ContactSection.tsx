'use client';

import { useForm, ValidationError } from '@formspree/react';
import { contact } from '@/content/homepage';
import { Section } from '@/components/layout/Section';
import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

const inputClass =
  'w-full bg-slate/20 border border-slate/40 text-mist placeholder:text-silver/50 text-body px-4 py-3 rounded-[var(--radius-button)] focus:outline-none focus:border-gold transition-colors duration-200';

export function ContactSection() {
  // Fall back to a placeholder so useForm doesn't throw during static prerender.
  // The real ID is set via NEXT_PUBLIC_FORMSPREE_ID at build/runtime.
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'placeholder';
  const [state, handleSubmit] = useForm(formId);

  // Success state — inline styled confirmation, NOT a redirect
  if (state.succeeded) {
    return (
      <Section id="contato" className="bg-ink">
        <Container>
          <div className="max-w-xl">
            <p className="font-display text-h1 text-mist">{contact.successTitle}</p>
            <p className="text-silver mt-4 text-body">{contact.successBody}</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="contato" className="bg-ink">
      <Container>
        <SectionHeading
          title={contact.sectionTitle}
          subtitle={contact.subtitle}
          align="left"
          light={true}
        />
        <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
          {/* Honeypot — hidden from real users, traps bots */}
          <input
            type="text"
            name="_gotcha"
            className="hidden"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-small text-silver mb-2">
              {contact.fields.nome.label}
            </label>
            <input
              id="nome"
              type="text"
              name="nome"
              placeholder={contact.fields.nome.placeholder}
              required
              className={inputClass}
            />
            <ValidationError prefix="Nome" field="nome" errors={state.errors} className="text-small text-red-400 mt-1" />
          </div>

          {/* Empresa */}
          <div>
            <label htmlFor="empresa" className="block text-small text-silver mb-2">
              {contact.fields.empresa.label}
            </label>
            <input
              id="empresa"
              type="text"
              name="empresa"
              placeholder={contact.fields.empresa.placeholder}
              className={inputClass}
            />
            <ValidationError prefix="Empresa" field="empresa" errors={state.errors} className="text-small text-red-400 mt-1" />
          </div>

          {/* Cargo */}
          <div>
            <label htmlFor="cargo" className="block text-small text-silver mb-2">
              {contact.fields.cargo.label}
            </label>
            <input
              id="cargo"
              type="text"
              name="cargo"
              placeholder={contact.fields.cargo.placeholder}
              className={inputClass}
            />
            <ValidationError prefix="Cargo" field="cargo" errors={state.errors} className="text-small text-red-400 mt-1" />
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-small text-silver mb-2">
              {contact.fields.mensagem.label}
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder={contact.fields.mensagem.placeholder}
              rows={5}
              required
              className={`${inputClass} resize-none`}
            />
            <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} className="text-small text-red-400 mt-1" />
          </div>

          {/* General form error (non-field errors) */}
          {state.errors !== null && (
            <p className="text-small text-red-400">{contact.errorBody}</p>
          )}

          <Button variant="primary" type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : contact.ctaLabel}
          </Button>
        </form>
      </Container>
    </Section>
  );
}
