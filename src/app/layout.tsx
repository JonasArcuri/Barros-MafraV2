import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/header";
import { SiteFooter } from "@/components/layout/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barros & Mafra | Advocacia Corporativa Estratégica",
  description: "Assessoria jurídica estratégica para empresas, sócios e patrimônio. Atuação corporativa com visão de negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-neutral-50 text-neutral-900 font-sans`}
      >
        <SiteHeader />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
