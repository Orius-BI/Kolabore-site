// src/components/layout/Footer.tsx
import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Expertise", href: "/expertise" },
  { label: "Engajamento", href: "/engajamento" },
  { label: "Executivos", href: "/executivos" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-carbon border-t border-slate/30 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-mist font-display text-xl font-medium tracking-wide">
              Kolabore
            </p>
            <p className="text-silver text-sm mt-1">
              Consultoria Executiva
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver text-sm hover:text-mist transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-slate/20">
          <p className="text-silver text-xs">
            © {new Date().getFullYear()} Kolabore. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
