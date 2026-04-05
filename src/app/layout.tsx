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
  metadataBase: new URL("https://refugio-conexao-site.vercel.app"),
  applicationName: "Refúgio Conexão",
  title: "Refúgio Conexão | Domos em Praia Grande-SC",
  description:
    "Hospedagem premium em domos geodésicos em Praia Grande-SC. Viva uma experiência exclusiva com vista para os cânions e reserva rápida pelo WhatsApp.",
  keywords: [
    "domos em Praia Grande",
    "pousada em Praia Grande SC",
    "hospedagem nos cânions",
    "domo geodésico",
    "refúgio conexão",
    "capital dos cânions",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  category: "travel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Refúgio Conexão | Domos em Praia Grande-SC",
    description:
      "3 domos exclusivos, conforto premium e experiências inesquecíveis na Capital dos Canyons.",
    url: "https://refugio-conexao-site.vercel.app",
    siteName: "Refúgio Conexão",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-refugio.jpg",
        width: 1200,
        height: 630,
        alt: "Refúgio Conexão em Praia Grande-SC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refúgio Conexão | Domos em Praia Grande-SC",
    description:
      "Hospedagem premium em domos geodésicos na Capital dos Cânions, com reserva direta no WhatsApp.",
    images: ["/og-refugio.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "64x64" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Praia Grande",
    "geo.position": "-29.177342;-49.83678795",
    ICBM: "-29.177342, -49.83678795",
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
