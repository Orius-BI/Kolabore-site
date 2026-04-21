"use client";

import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Quem somos", href: "/executivos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate/30 bg-ink/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-28 items-center justify-between gap-3 lg:h-28">
          <Link href="/" className="flex min-w-0 flex-1 items-center md:flex-none" aria-label="Kolabore">
            <img
              src="/images/logo-kolabore-group-v2.png"
              alt="Kolabore Group"
              className="h-[6.2rem] w-full max-w-[640px] object-contain object-left sm:h-[7.2rem] sm:max-w-[820px] md:h-[6.6rem] md:max-w-[860px] lg:h-[7.4rem] lg:max-w-[1040px]"
            />
          </Link>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Principal"
          >
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
            className="hidden items-center rounded-[var(--radius-button)] bg-gold px-4 py-2 text-sm font-medium text-mist transition-colors duration-200 hover:bg-gold-hover md:inline-flex"
          >
            Converse com a Kolabore
          </Link>
        </div>
      </Container>
    </header>
  );
}
