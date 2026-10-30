import type { Bi } from "@/components/ui/T";
import type { IconName } from "@/components/ui/Icon";

export const marquee = [
  "IT Project Management",
  "Product Ownership",
  "Agile / Scrum",
  "ERP · NetSuite",
  "Stakeholder & Vendor Management",
  "Release Management",
  "CI/CD",
];

export const stats: { value: string; suffix?: string; decimals?: number; label: Bi }[] = [
  { value: "12", label: ["years in software", "ปีในสายซอฟต์แวร์"] },
  { value: "10", suffix: "+", label: ["projects delivered", "โครงการที่ส่งมอบ"] },
  { value: "40", suffix: "+", label: ["API endpoints validated (NetSuite)", "API endpoint ที่ตรวจสอบ (NetSuite)"] },
  { value: "99.99", suffix: "%", decimals: 2, label: ["uptime on revenue-critical services", "uptime ของบริการที่สร้างรายได้หลัก"] },
];

export const about: { icon: IconName; title: Bi; text: Bi }[] = [
  {
    icon: "pm",
    title: ["IT Project Management", "การบริหารโครงการ IT"],
    text: ["End-to-end delivery of ERP and enterprise software: scope, risks, vendors, releases and executive reporting.", "ส่งมอบระบบ ERP และซอฟต์แวร์องค์กรแบบครบวงจร: ขอบเขต ความเสี่ยง เวนเดอร์ การปล่อยระบบ และการรายงานผู้บริหาร"],
  },
  {
    icon: "po",
    title: ["Product Ownership", "Product Ownership"],
    text: ["Agile/Scrum, backlog refinement and user stories, working closely with Product Owners, BAs and developers.", "Agile/Scrum การปรับปรุง backlog และ user story ทำงานใกล้ชิดกับ Product Owner, BA และนักพัฒนา"],
  },
  {
    icon: "tech",
    title: ["Technical Leadership", "ภาวะผู้นำด้านเทคนิค"],
    text: ["Former Senior Frontend Developer and Engineering Team Lead, with CI/CD, monitoring and production support experience.", "อดีต Senior Frontend Developer และ Engineering Team Lead มีประสบการณ์ด้าน CI/CD, monitoring และการดูแล production"],
  },
];

export const teaser: { icon: IconName; title: string; text: Bi }[] = [
  { icon: "screen", title: "True iService", text: ["Web & mobile app · True Digital", "เว็บและแอป · True Digital"] },
  { icon: "user", title: "TrueID My Account", text: ["Account experience · True Digital", "ประสบการณ์บัญชีผู้ใช้ · True Digital"] },
  { icon: "phone", title: "T Connected", text: ["Toyota connected-car app", "แอปรถยนต์เชื่อมต่อของ Toyota"] },
];

export const skillTags = [
  "Agile / Scrum",
  "Stakeholder management",
  "Vendor management",
  "Risk & change",
  "Release management",
  "ERP / NetSuite",
  "Jira · Confluence",
  "SQL · REST API",
  "JavaScript · React",
];

export const education: { title: string; sub: string }[] = [
  { title: "MSc, Information Technology Management", sub: "NIDA, Bangkok · 2025" },
  { title: "BSc, Information Technology", sub: "The Far Eastern University, Chiang Mai · 2014" },
];

export const certifications: { title: string; sub: string }[] = [
  { title: "CompTIA Project+", sub: "IT Project Management · 2025" },
  { title: "ITIL Foundation Certificate", sub: "IT Service Management · 2025" },
];
