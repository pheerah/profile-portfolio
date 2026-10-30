import type { Bi } from "@/components/ui/T";

/** Single source of truth for site-wide facts. Change them here only. */
export const SITE = {
  url: "https://pheerah.vercel.app",
  name: "Pheerah Praditthaphong",
  shortName: "Pheerah",
  jobTitle: "Project Manager",
  email: "Pheerah.p@gmail.com",
  linkedin: "https://linkedin.com/in/pheerah",
  title: "Pheerah Praditthaphong – Project & Product Leader",
  description: "12 years in software delivery: IT project management, ERP delivery and Agile product ownership.",
  ogDescription: "IT Project Manager · Product Owner · ERP & enterprise delivery. 12 years in software.",
  profilePhoto: "/img/profile.jpg",
} as const;

export const RESUME = {
  /** Default résumé used by the main download buttons. */
  file: "/resume.pdf",
  downloadName: "Pheerah_Praditthaphong_Resume.pdf",
} as const;

/** Public routes; used by the sitemap and anything that needs the list. */
export const ROUTES = [
  { path: "/", priority: 1 },
  { path: "/case-studies", priority: 0.7 },
  { path: "/projects", priority: 0.7 },
] as const;

export type NavItem = { href: string; label: Bi; match?: string };

export const NAV: NavItem[] = [
  { href: "/#about", label: ["About", "เกี่ยวกับ"] },
  { href: "/#exp", label: ["Experience", "ประสบการณ์"] },
  { href: "/case-studies", label: ["Case studies", "ผลงานเชิงลึก"], match: "/case-studies" },
  { href: "/projects", label: ["Projects", "โปรเจกต์"], match: "/projects" },
  { href: "/#contact", label: ["Contact", "ติดต่อ"] },
];
