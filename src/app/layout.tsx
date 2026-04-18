import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kolabore.com.br"),
  title: {
    default: "Kolabore | Consultoria Executiva",
    template: "%s | Kolabore",
  },
  description:
    "Consultoria executiva de alto valor para lideres e organizacoes. Senioridade aplicada a desafios criticos de operacao, supply chain, governanca e crescimento.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kolabore.com.br",
    siteName: "Kolabore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="bg-ink font-sans text-mist antialiased">
        <AnimationProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AnimationProvider>
      </body>
    </html>
  );
}
