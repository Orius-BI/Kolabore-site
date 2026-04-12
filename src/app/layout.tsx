// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { AnimationProvider } from "@/components/providers/AnimationProvider";
import "@/styles/globals.css";

// CRITICAL: variable names here MUST match var() references in globals.css @theme inline block
// globals.css: --font-sans: var(--font-inter)  ← must match variable: "--font-inter"
// globals.css: --font-display: var(--font-cormorant)  ← must match variable: "--font-cormorant"
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
    "Consultoria executiva de alto valor para líderes e organizações. Senioridade aplicada a desafios críticos de operação, supply chain, governança e crescimento.",
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
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="font-sans bg-ink text-mist antialiased">
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  );
}
