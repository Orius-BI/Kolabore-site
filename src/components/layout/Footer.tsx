import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Quem somos", href: "/executivos" },
  { label: "Atuação", href: "/atuacao" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate/30 bg-carbon py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl font-medium tracking-wide text-mist">
              Kolabore
            </p>
            <p className="mt-1 text-sm text-silver">
              Consultoria Executiva
            </p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="flex flex-wrap gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver transition-colors duration-200 hover:text-mist"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 border-t border-slate/20 pt-8">
          <p className="text-xs text-silver">
            © {new Date().getFullYear()} Kolabore. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
