// src/components/layout/Header.tsx
// 'use client' is required — uses useState and addEventListener for scroll detection
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Expertise", href: "/expertise" },
  { label: "Engajamento", href: "/engajamento" },
  { label: "Executivos", href: "/executivos" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-sm border-b border-slate/30"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-mist font-display text-lg font-medium tracking-wide hover:text-gold transition-colors duration-200"
          >
            Kolabore
          </Link>
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-silver text-sm hover:text-mist transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contato"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-ink bg-gold hover:bg-gold-hover transition-colors duration-200 rounded-[var(--radius-button)]"
          >
            Converse com a Kolabore
          </Link>
        </div>
      </Container>
    </header>
  );
}
