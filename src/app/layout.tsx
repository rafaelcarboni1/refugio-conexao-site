import type { Metadata } from "next";
import Script from "next/script";
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
        url: "/opengraph-image",
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
    images: ["/opengraph-image"],
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
      <Script id="gtm-head" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M24HS5CX');`}
      </Script>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M24HS5CX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
