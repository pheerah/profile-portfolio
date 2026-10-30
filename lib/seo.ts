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
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    SITE.name,
    SITE.shortName,
    "IT Project Manager",
    "Product Owner",
    "Product Manager",
    "ERP",
    "NetSuite",
    "Agile",
    "Thailand",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    title: SITE.title,
    description: SITE.ogDescription,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    alternateLocale: ["th_TH"],
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
  // Google Search Console token: set GOOGLE_SITE_VERIFICATION in Vercel (not committed).
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

/** Structured data that tells search engines who the site is about and that the pages belong together. */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.name,
      givenName: SITE.shortName,
      alternateName: [SITE.shortName],
      jobTitle: SITE.jobTitle,
      description: SITE.description,
      url: SITE.url,
      image: `${SITE.url}${SITE.profilePhoto}`,
      sameAs: [SITE.linkedin],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "National Institute of Development Administration (NIDA)" },
        { "@type": "CollegeOrUniversity", name: "The Far Eastern University, Chiang Mai" },
      ],
      knowsAbout: ["IT project management", "ERP delivery", "NetSuite integration", "Agile/Scrum", "Stakeholder management"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.shortName,
      inLanguage: ["en", "th"],
      publisher: { "@id": `${SITE.url}/#person` },
    },
  ],
};
