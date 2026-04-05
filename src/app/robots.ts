import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://refugio-conexao-site.vercel.app/sitemap.xml",
    host: "https://refugio-conexao-site.vercel.app",
  };
}
