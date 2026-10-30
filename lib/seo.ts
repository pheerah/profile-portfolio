import type { Metadata } from "next";
import { SITE } from "./site";

/** Per-page metadata with a canonical URL, so pages only state what differs. */
export function pageMetadata(opts: { title: string; description: string; path: string }): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.title,
    description: SITE.ogDescription,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  jobTitle: SITE.jobTitle,
  url: SITE.url,
  sameAs: [SITE.linkedin],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "National Institute of Development Administration (NIDA)" },
    { "@type": "CollegeOrUniversity", name: "The Far Eastern University, Chiang Mai" },
  ],
  knowsAbout: ["IT project management", "ERP delivery", "NetSuite integration", "Agile/Scrum", "Stakeholder management"],
};
