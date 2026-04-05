import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refúgio Conexão | Domos em Praia Grande-SC",
  description:
    "Hospedagem premium em domos geodésicos em Praia Grande-SC. Viva uma experiência exclusiva com vista para os cânions e reserva rápida pelo WhatsApp.",
  openGraph: {
    title: "Refúgio Conexão | Domos em Praia Grande-SC",
    description:
      "3 domos exclusivos, conforto premium e experiências inesquecíveis na Capital dos Canyons.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
