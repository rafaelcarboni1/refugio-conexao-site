import type { MetadataRoute } from "next";
import { domos } from "@/lib/domos";

const baseUrl = "https://refugio-conexao-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/politicas-de-reserva`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const domoRoutes: MetadataRoute.Sitemap = domos.map((domo) => ({
    url: `${baseUrl}/domos/${domo.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...domoRoutes];
}
