"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Quem somos", href: "/executivos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate/30 bg-ink/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-20 items-center justify-between gap-3 lg:h-20">
          <Link
            href="/"
            className="flex min-w-0 flex-1 items-center md:flex-none"
            onClick={() => setIsOpen(false)}
            aria-label="Kolabore"
          >
            <img
              src="/images/logo-kolabore-group.png"
              alt="Kolabore Group"
              className="h-16 w-full max-w-[320px] object-contain object-left sm:h-[4.4rem] sm:max-w-[380px] md:h-[3.6rem] md:max-w-[408px] lg:h-[4.2rem] lg:max-w-[504px]"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-silver transition-colors duration-200 hover:text-mist"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contato"
            className="hidden items-center rounded-[var(--radius-button)] bg-gold px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-gold-hover md:inline-flex"
          >
            Converse com a Kolabore
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            className="ml-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/10 text-mist transition-colors duration-200 hover:border-white/20 hover:text-gold md:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="text-lg leading-none">{isOpen ? "×" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-slate/20 py-4 md:hidden">
            <nav className="flex flex-col gap-2" aria-label="Principal mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-2 py-3 text-base text-silver transition-colors duration-200 hover:bg-white/5 hover:text-mist"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contato"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-button)] bg-gold px-4 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-gold-hover"
              >
                Converse com a Kolabore
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
