import type { GlyphName } from "@/components/ui/Glyph";
import type { Bi } from "@/components/ui/T";

/** Real, approved images only (device frame + file). No frame is drawn for a screenshot we don't have. */
export type Shot = { cls: "br" | "ph"; src: string; alt: string; height?: number };

/** Résumé-fact diagrams (see components/work/Diagrams.tsx). */
export type DiagramKey = "netsuite" | "team" | "release" | "uat" | "aiteam";

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
  /** Shown instead of screenshots when there are none. */
  diagram?: DiagramKey;
  /** Large icon on the stage when there is neither a screenshot nor a diagram. */
  glyph?: GlyphName;
  /** Honest delivery status, shown as a pill: live = in use, otherwise in development. */
  status?: { label: Bi; live: boolean };
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
    shots: [{ cls: "ph", src: "/img/true-iservice-app.jpg", alt: "True iService app" }],
  },
  {
    title: ["TrueID My Account", "TrueID My Account"],
    org: ["True Digital", "True Digital"],
    badge: ["Web + App", "เว็บ + แอป"],
    tags: ["web", "mobile"],
    c1: "#9a1b1b",
    c2: "#ea580c",
    body: [
      "Account experience within the TrueID ecosystem, alongside the TrueID Payment & Subscription platform.",
      "ประสบการณ์บัญชีผู้ใช้ในระบบนิเวศ TrueID ควบคู่กับแพลตฟอร์ม TrueID Payment & Subscription",
    ],
    chips: ["Product Owners", "Payments", "Monitoring", "Tier-3 support"],
    shots: [{ cls: "ph", src: "/img/trueid-myaccount-app.jpg", alt: "TrueID app" }],
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
      { cls: "ph", src: "/img/t-connected-1.jpg", alt: "T Connected app" },
      { cls: "ph", src: "/img/t-connected-2.jpg", alt: "T Connected app screen 2", height: 178 },
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
    shots: [],
    diagram: "netsuite",
  },
  {
    title: ["UAT Tracker for SPC New ERP", "UAT Tracker สำหรับ SPC New ERP"],
    org: ["Saha Pathanapibul · NetSuite · 2026 – Present", "สหพัฒนภิบูล · NetSuite · 2026 – ปัจจุบัน"],
    badge: ["AI-built", "สร้างด้วย AI"],
    tags: ["ai", "web", "erp"],
    c1: "#134e4a",
    c2: "#4338ca",
    body: [
      "System for running user acceptance testing of the SPC New ERP (NetSuite) for Saha Pathanapibul users: a daily test plan, scenario details, a page to record test results, and a user guide.",
      "ระบบสำหรับทำ UAT ของ SPC New ERP (NetSuite) ให้ผู้ใช้ของบริษัทสหพัฒนภิบูล มีแผนทดสอบรายวัน รายละเอียด scenario หน้าบันทึกผลทดสอบ และคู่มือการใช้งาน",
    ],
    chips: ["UAT", "NetSuite", "Test tracking", "User guide"],
    shots: [],
    diagram: "uat",
    status: { label: ["In use", "ใช้งานจริง"], live: true },
  },
  {
    title: ["Horoscope", "Horoscope"],
    org: ["Web app", "เว็บแอป"],
    badge: ["AI-built", "สร้างด้วย AI"],
    tags: ["ai", "web"],
    c1: "#312e81",
    c2: "#7c3aed",
    body: [
      "Astrology web app: daily and monthly horoscope readings from the stars, tarot card draws and lottery lucky numbers.",
      "เว็บแอปดูดวง ทำนายจากดวงดาวรายวัน/รายเดือน เปิดไพ่ทาโร่ และดูเลขเด็ด",
    ],
    chips: ["Horoscope", "Tarot", "Daily / monthly", "Lucky numbers"],
    shots: [],
    glyph: "moon",
    status: { label: ["In use", "ใช้งานจริง"], live: true },
  },
  {
    title: ["TeamFlow", "TeamFlow"],
    org: ["Team project management", "ระบบบริหารโครงการสำหรับทีม"],
    badge: ["AI-built", "สร้างด้วย AI"],
    tags: ["ai", "web"],
    c1: "#0f766e",
    c2: "#1d4ed8",
    body: [
      "Project management system for organising a team's tasks, in the spirit of Jira and ClickUp.",
      "ระบบบริหารโครงการสำหรับจัดการงานของทีม แนวเดียวกับ Jira / ClickUp",
    ],
    chips: ["Task management", "Team collaboration", "Project tracking"],
    shots: [],
    glyph: "kanban",
    status: { label: ["In development", "กำลังพัฒนา"], live: false },
  },
];

export const filters: readonly (readonly [string, Bi])[] = [
  ["all", ["All", "ทั้งหมด"]],
  ["web", ["Web", "เว็บ"]],
  ["mobile", ["Mobile", "มือถือ"]],
  ["erp", ["ERP", "ERP"]],
  ["ai", ["AI-built", "สร้างด้วย AI"]],
];
