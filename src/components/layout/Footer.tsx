import Link from "next/link";
import { Container } from "./Container";

const navLinks = [
  { label: "Kolabore", href: "/kolabore" },
  { label: "Quem somos", href: "/executivos" },
  { label: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate/30 bg-carbon py-12">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="w-full max-w-[320px] md:max-w-[380px]">
            <img
              src="/images/logo-kolabore-group.png"
              alt="Kolabore Group"
              className="h-[3.6rem] w-full max-w-[336px] object-contain object-left sm:h-[4.2rem] sm:max-w-[408px]"
            />
            <p className="mt-2 text-sm text-silver">Consultoria Executiva</p>
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
