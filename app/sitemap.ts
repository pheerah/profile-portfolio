import type { MetadataRoute } from "next";
import { ROUTES, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: SITE.url + (r.path === "/" ? "" : r.path),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
