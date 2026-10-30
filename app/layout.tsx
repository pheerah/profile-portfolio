import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Noto_Sans_Thai, Plus_Jakarta_Sans } from "next/font/google";import Effects from "@/components/layout/Effects";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import { T } from "@/components/ui/T";
import { PREFS_SCRIPT } from "@/lib/prefs";
import { jsonLd, rootMetadata } from "@/lib/seo";
import "./globals.css";

// next/font needs literal options (no variables), so the weights are repeated.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });
const notoThai = Noto_Sans_Thai({ subsets: ["thai"], weight: ["400", "500", "600", "700", "800"], variable: "--font-thai", display: "swap" });

export const metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6FAFE" },
    { media: "(prefers-color-scheme: dark)", color: "#121C42" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-lang="en" className={`${jakarta.variable} ${notoThai.variable}`} suppressHydrationWarning>
      <head>
        {/* Applies saved theme/language before first paint (no flash). */}
        <script dangerouslySetInnerHTML={{ __html: PREFS_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main"><T en="Skip to content" th="ข้ามไปยังเนื้อหา" /></a>
        <noscript>
          <style>{".rv{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <div id="bar" />
        <Nav />
        {children}
        <Footer />
        <Effects />
        <Analytics />
      </body>
    </html>
  );
}
