import type { Bi } from "@/components/ui/T";

export type Shot = { cls: "br" | "ph"; src?: string; alt: string; label: string; height?: number };

export type Project = {
  title: Bi;
  org: Bi;
  badge: Bi;
  tags: string[]; // filter categories
  c1: string;
  c2: string;
  body: Bi;
  chips: string[];
  shots: Shot[];
};

export const projects: Project[] = [
  {
    title: ["True iService", "True iService"],
    org: ["True Digital · 2017 – 2018", "True Digital · 2017 – 2018"],
    badge: ["Web + App", "เว็บ + แอป"],
    tags: ["web", "mobile"],
    c1: "#7c1d1d",
    c2: "#be123c",
    body: [
      "Self-service web and mobile app. Built responsive interfaces and integrated backend microservices; enforced GitFlow and CI/CD build validation.",
      "เว็บและแอปบริการตนเอง พัฒนาหน้าจอแบบ responsive และเชื่อม microservice ฝั่งหลังบ้าน พร้อมกำกับ GitFlow และการตรวจ build ผ่าน CI/CD",
    ],
    chips: ["Frontend", "Microservices", "CI/CD", "Agile"],
    shots: [
      { cls: "br", alt: "True iService web", label: "True iService<br>Web" },
      { cls: "ph", src: "/img/true-iservice-app.jpg", alt: "True iService app", label: "True iService<br>App" },
    ],
  },
  {
    title: ["TrueID My Account", "TrueID My Account"],
    org: ["True Digital", "True Digital"],
    badge: ["Web + App", "เว็บ + แอป"],
    tags: ["web", "mobile"],
    c1: "#9a1b1b",
    c2: "#ea580c",
    body: [
      "Account experience within the TrueID ecosystem, alongside the TrueID Payment & Subscription platform that sustained 99.99% uptime.",
      "ประสบการณ์บัญชีผู้ใช้ในระบบนิเวศ TrueID ควบคู่กับแพลตฟอร์ม TrueID Payment & Subscription ที่รักษา uptime ได้ 99.99%",
    ],
    chips: ["Product Owners", "Payments", "Monitoring", "Tier-3 support"],
    shots: [
      { cls: "br", alt: "TrueID My Account", label: "TrueID<br>My Account" },
      { cls: "ph", src: "/img/trueid-myaccount-app.jpg", alt: "TrueID app", label: "TrueID<br>App" },
    ],
  },
  {
    title: ["T Connected", "T Connected"],
    org: ["Toyota Connected Asia Pacific · 2024 – 2026", "Toyota Connected Asia Pacific · 2024 – 2026"],
    badge: ["Mobile app", "แอปมือถือ"],
    tags: ["mobile"],
    c1: "#7f1d1d",
    c2: "#111827",
    body: [
      "Connected-car application. Directed full-lifecycle delivery across 2 BAs, 2 SAs and 2 external vendor developer teams, within scope, budget and time.",
      "แอปรถยนต์เชื่อมต่อ กำกับการส่งมอบตลอดวงจรร่วมกับ BA 2 คน SA 2 คน และทีมนักพัฒนาเวนเดอร์ภายนอก 2 ทีม ตามขอบเขต งบประมาณ และเวลา",
    ],
    chips: ["Program delivery", "Vendors", "Releases", "Stakeholders"],
    shots: [
      { cls: "ph", src: "/img/t-connected-1.jpg", alt: "T Connected app", label: "T Connected" },
      { cls: "ph", src: "/img/t-connected-2.jpg", alt: "T Connected app screen 2", label: "Remote &<br>Vehicle", height: 178 },
    ],
  },
  {
    title: ["NetSuite ERP Integration", "การเชื่อมต่อ NetSuite ERP"],
    org: ["Always Pioneering Innovation · Saha Pathanapibul · 2026 – Present", "Always Pioneering Innovation · Saha Pathanapibul · 2026 – ปัจจุบัน"],
    badge: ["ERP", "ERP"],
    tags: ["erp", "web"],
    c1: "#0e3a40",
    c2: "#1e3a8a",
    body: [
      "End-to-end ERP project framework and integration of internal applications with NetSuite, validating 40+ API endpoints with vendors and business users.",
      "เฟรมเวิร์กโครงการ ERP แบบครบวงจรและการเชื่อมแอปภายในกับ NetSuite ตรวจสอบ API endpoint กว่า 40 รายการร่วมกับเวนเดอร์และผู้ใช้งานฝั่งธุรกิจ",
    ],
    chips: ["NetSuite", "REST API", "Vendor mgmt", "Governance"],
    shots: [{ cls: "br", alt: "NetSuite integration", label: "NetSuite ERP<br>Integration" }],
  },
];

export const filters: readonly (readonly [string, Bi])[] = [
  ["all", ["All", "ทั้งหมด"]],
  ["web", ["Web", "เว็บ"]],
  ["mobile", ["Mobile", "มือถือ"]],
  ["erp", ["ERP", "ERP"]],
];
