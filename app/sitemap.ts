import type { MetadataRoute } from "next";

const SITE = "https://pheerah.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/case-studies", "/projects"].map((p) => ({
    url: SITE + p,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
