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

/** Profile summary shown under the hero heading. Keep it to 2-3 sentences, all backed by the résumé. */
export const SUMMARY: Bi = [
  "IT Project Manager with 12 years in software, from developer to team lead to project manager, so I speak both business and engineering. I lead ERP and enterprise delivery across users and vendors, and build my own tools with AI coding agents.",
  "IT Project Manager ประสบการณ์ 12 ปีในสายซอฟต์แวร์ จากนักพัฒนา สู่หัวหน้าทีม และผู้จัดการโครงการ จึงเข้าใจทั้งภาษาธุรกิจและวิศวกรรม นำการส่งมอบระบบ ERP และระบบองค์กรร่วมกับผู้ใช้และเวนเดอร์ และสร้างเครื่องมือของตัวเองด้วย AI coding agent",
];

/**
 * Optional quick facts shown under the hero buttons, e.g. { label: ["Target roles", "ตำแหน่งที่สนใจ"], value: [...] }.
 * Leave empty until the owner confirms them; nothing renders while the list is empty.
 */
export const FACTS: { label: Bi; value: Bi }[] = [
  // From the résumé. Add "Target roles" / "Work mode" here once the owner confirms them.
  { label: ["Languages", "ภาษา"], value: ["Thai (native) · English (working)", "ไทย (เจ้าของภาษา) · อังกฤษ (ระดับทำงาน)"] },
  { label: ["Certified", "ใบรับรอง"], value: ["CompTIA Project+ · ITIL Foundation", "CompTIA Project+ · ITIL Foundation"] },
];

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
  { href: "/#ai", label: ["Built with AI", "สร้างด้วย AI"] },
  { href: "/case-studies", label: ["Case studies", "ผลงานเชิงลึก"], match: "/case-studies" },
  { href: "/projects", label: ["Projects", "โปรเจกต์"], match: "/projects" },
  { href: "/#contact", label: ["Contact", "ติดต่อ"] },
];
