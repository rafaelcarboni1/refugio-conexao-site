import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Refúgio Conexão",
    short_name: "Refúgio",
    description:
      "Domos premium em Praia Grande-SC com reserva direta no WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f2",
    theme_color: "#1f1c18",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "64x64",
        type: "image/png",
      },
    ],
  };
}
