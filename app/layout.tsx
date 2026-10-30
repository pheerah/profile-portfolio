import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Noto_Sans_Thai, Plus_Jakarta_Sans } from "next/font/google";
import Effects from "@/components/Effects";
import Nav from "@/components/Nav";
import { T } from "@/components/T";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-thai",
  display: "swap",
});

const SITE = "https://pheerah.vercel.app";
const TITLE = "Pheerah Praditthaphong – Project & Product Leader";
const DESC = "12 years in software delivery: IT project management, ERP delivery and Agile product ownership.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: "IT Project Manager · Product Owner · ERP & enterprise delivery. 12 years in software.",
    url: SITE,
    siteName: "Pheerah Praditthaphong",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f8f9" },
    { media: "(prefers-color-scheme: dark)", color: "#071417" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pheerah Praditthaphong",
  jobTitle: "Project Manager",
  url: SITE,
  sameAs: ["https://linkedin.com/in/pheerah"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "National Institute of Development Administration (NIDA)" },
    { "@type": "CollegeOrUniversity", name: "The Far Eastern University, Chiang Mai" },
  ],
  knowsAbout: ["IT project management", "ERP delivery", "NetSuite integration", "Agile/Scrum", "Stakeholder management"],
};

// Runs before first paint so the saved theme/language apply without a flash.
const prefsScript = `try{var d=document.documentElement,t=localStorage.getItem('theme'),l=localStorage.getItem('lang');
if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
d.setAttribute('data-theme',t);
if(!l)l=(navigator.language||'en').toLowerCase().indexOf('th')===0?'th':'en';
d.setAttribute('data-lang',l);d.lang=l;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-lang="en" className={`${jakarta.variable} ${notoThai.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: prefsScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <div id="bar" />
        <div id="cur" />
        <Nav />
        {children}
        <footer>
          © Pheerah Praditthaphong ·{" "}
          <T en="Built with Next.js" th="สร้างด้วย Next.js" />
        </footer>
        <Effects />
        <Analytics />
      </body>
    </html>
  );
}
