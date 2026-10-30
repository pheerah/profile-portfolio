import type { Bi } from "@/components/ui/T";
import type { GlyphName } from "@/components/ui/Glyph";
import type { DiagramKey } from "./projects";

/** Case studies use only facts already in the résumé. No invented outcomes or numbers. */
export type Case = {
  id: string;
  diagram?: DiagramKey;
  title: Bi;
  org: Bi;
  tags: string[];
  context: Bi;
  /** The next three are optional: fill in only facts the owner confirms; each renders its own block when present. */
  challenge?: Bi;
  role: Bi;
  did: Bi[];
  decisions?: Bi[];
  delivered: { n: string; l: Bi }[];
  outcome?: Bi;
};

export const cases: Case[] = [
  {
    id: "netsuite-erp",
    diagram: "netsuite",
    title: ["NetSuite ERP integration", "การเชื่อมต่อ NetSuite ERP"],
    org: ["Always Pioneering Innovation · client Saha Pathanapibul · 2026 – Present", "Always Pioneering Innovation · ลูกค้า Saha Pathanapibul · 2026 – ปัจจุบัน"],
    tags: ["ERP", "NetSuite", "Vendors", "Governance"],
    context: [
      "Integration of Saha Pathanapibul's internal applications with NetSuite ERP, involving business users, internal teams and NetSuite vendors.",
      "การเชื่อมต่อแอปพลิเคชันภายในของ Saha Pathanapibul กับ NetSuite ERP โดยมีผู้ใช้งานฝั่งธุรกิจ ทีมภายใน และเวนเดอร์ NetSuite เกี่ยวข้อง",
    ],
    role: [
      "Project Manager: established the ERP project framework, directed the integration and kept business, engineering and vendors aligned.",
      "Project Manager: วางเฟรมเวิร์กโครงการ ERP กำกับการเชื่อมต่อ และประสานให้ฝ่ายธุรกิจ วิศวกรรม และเวนเดอร์ไปในทิศทางเดียวกัน",
    ],
    did: [
      ["Established end-to-end ERP project frameworks, from planning to deployment.", "วางเฟรมเวิร์กโครงการ ERP แบบครบวงจร ตั้งแต่วางแผนจนถึง deploy"],
      ["Directed the integration of internal applications with NetSuite ERP.", "กำกับการเชื่อมต่อแอปภายในกับ NetSuite ERP"],
      ["Validated over 40 API endpoints for data synchronization together with vendors and business users.", "ตรวจสอบ API endpoint กว่า 40 รายการเพื่อการซิงก์ข้อมูล ร่วมกับเวนเดอร์และผู้ใช้งานฝั่งธุรกิจ"],
      ["Managed risks proactively and cleared critical blockers to protect timelines.", "บริหารความเสี่ยงเชิงรุกและเคลียร์คอขวดสำคัญเพื่อรักษากำหนดการ"],
      ["Reported progress and alignment to executive leadership.", "รายงานความคืบหน้าและความสอดคล้องต่อผู้บริหาร"],
    ],
    delivered: [
      { n: "40+", l: ["API endpoints validated", "API endpoint ที่ตรวจสอบ"] },
      { n: "E2E", l: ["ERP framework, planning to deployment", "เฟรมเวิร์ก ERP ตั้งแต่วางแผนถึง deploy"] },
    ],
  },
  {
    id: "uat-tracker",
    diagram: "uat",
    title: ["UAT Tracker for SPC New ERP", "UAT Tracker สำหรับ SPC New ERP"],
    org: ["Saha Pathanapibul · NetSuite · 2026 – Present", "สหพัฒนภิบูล · NetSuite · 2026 – ปัจจุบัน"],
    tags: ["UAT", "NetSuite", "ERP", "AI-built"],
    context: [
      "A system for running user acceptance testing of the SPC New ERP (NetSuite) for Saha Pathanapibul, where users record their test results.",
      "ระบบสำหรับทำ UAT ของ SPC New ERP (NetSuite) ให้บริษัทสหพัฒนภิบูล โดยผู้ใช้บันทึกผลทดสอบในระบบ",
    ],
    role: [
      "Project Manager: built the tracker with AI coding agents and put it into use with the client's users.",
      "Project Manager: สร้าง tracker ด้วย AI coding agent และนำไปใช้งานจริงกับผู้ใช้ของลูกค้า",
    ],
    did: [
      ["A daily test plan that shows what each user has to test that day.", "แผนทดสอบรายวันที่บอกว่าผู้ใช้แต่ละคนต้องทดสอบอะไรในวันนั้น"],
      ["Scenario details for every test the users have to perform.", "รายละเอียด scenario ของทุกการทดสอบที่ผู้ใช้ต้องทำ"],
      ["A page where users record their test results.", "หน้าสำหรับให้ผู้ใช้บันทึกผลการทดสอบ"],
      ["A user guide for working with the system.", "คู่มือการใช้งานระบบ"],
    ],
    delivered: [
      { n: "In use", l: ["running UAT with the client's users", "ใช้ทำ UAT จริงกับผู้ใช้ของลูกค้า"] },
      { n: "4", l: ["parts: daily plan, scenarios, result page, user guide", "ส่วนหลัก: แผนรายวัน scenario หน้าบันทึกผล คู่มือ"] },
    ],
  },
  {
    id: "t-connected",
    diagram: "team",
    title: ["T Connected application", "แอป T Connected"],
    org: ["Toyota Connected Asia Pacific · 2024 – 2026", "Toyota Connected Asia Pacific · 2024 – 2026"],
    tags: ["Program delivery", "Vendors", "Releases", "Stakeholders"],
    context: [
      "A connected-car application delivered through a multidisciplinary team and external vendor developer teams.",
      "แอปรถยนต์เชื่อมต่อที่ส่งมอบผ่านทีมสหสาขาและทีมนักพัฒนาจากเวนเดอร์ภายนอก",
    ],
    role: [
      "Project Manager: directed full-lifecycle delivery and acted as the central liaison for stakeholders.",
      "Project Manager: กำกับการส่งมอบตลอดวงจร และเป็นผู้ประสานงานหลักของ stakeholder",
    ],
    did: [
      ["Led 2 Business Analysts, 2 System Analysts and 2 external vendor developer teams.", "นำ Business Analyst 2 คน System Analyst 2 คน และทีมนักพัฒนาเวนเดอร์ภายนอก 2 ทีม"],
      ["Led decision-making forums and mitigated project risks to limit delivery impact.", "นำเวทีตัดสินใจและลดความเสี่ยงของโครงการเพื่อจำกัดผลกระทบต่อการส่งมอบ"],
      ["Maintained timelines, dependency maps and progress dashboards for visibility and resource alignment.", "ดูแลไทม์ไลน์ แผนผังความเชื่อมโยง และ dashboard ความคืบหน้า เพื่อให้เห็นภาพและจัดสรรทรัพยากร"],
      ["Coordinated releases: readiness checks, deployment planning and post-delivery validation.", "ประสานการปล่อยระบบ: ตรวจความพร้อม วางแผน deploy และตรวจสอบหลังส่งมอบ"],
      ["Used delivery reviews and team feedback to refine workflows.", "นำผลทบทวนการส่งมอบและข้อเสนอแนะของทีมมาปรับปรุงขั้นตอนทำงาน"],
    ],
    delivered: [
      { n: "10+", l: ["projects within scope, budget and time", "โครงการตามขอบเขต งบประมาณ และเวลา"] },
      { n: "6", l: ["teams coordinated (2 BA, 2 SA, 2 vendor)", "ทีมที่ประสาน (BA 2, SA 2, เวนเดอร์ 2)"] },
    ],
  },
  {
    id: "trueid-payment",
    diagram: "release",
    title: ["TrueID Payment & Subscription", "TrueID Payment & Subscription"],
    org: ["True Digital · 2018 – 2024", "True Digital · 2018 – 2024"],
    tags: ["Payments", "CI/CD", "Monitoring", "Agile"],
    context: [
      "The TrueID Payment & Subscription system, supporting critical revenue-generating services.",
      "ระบบ TrueID Payment & Subscription ซึ่งรองรับบริการสำคัญที่สร้างรายได้",
    ],
    role: [
      "Software Engineering Team Lead: led technical delivery with Product Owners and ran the team's Agile practices.",
      "Software Engineering Team Lead: นำการส่งมอบเชิงเทคนิคร่วมกับ Product Owner และดูแลแนวปฏิบัติ Agile ของทีม",
    ],
    did: [
      ["Worked with Product Owners to translate business needs into architectural designs.", "ทำงานกับ Product Owner เพื่อแปลงความต้องการทางธุรกิจเป็นสถาปัตยกรรม"],
      ["Integrated CI/CD pipelines with automated testing before production to catch bugs early.", "เชื่อม CI/CD pipeline กับการทดสอบอัตโนมัติก่อนขึ้น production เพื่อจับบั๊กให้เร็ว"],
      ["Built monitoring dashboards and served as the Tier-3 escalation point.", "สร้าง dashboard สำหรับ monitoring และเป็นจุด escalation ระดับ Tier-3"],
      ["Facilitated sprint ceremonies and refined backlogs.", "ดำเนินกิจกรรม sprint และปรับปรุง backlog"],
      ["Directed and mentored a team of 5 (4 developers, 1 QA).", "กำกับและเป็นพี่เลี้ยงทีม 5 คน (นักพัฒนา 4 QA 1)"],
    ],
    delivered: [
      { n: "CI/CD", l: ["automated tests before production", "ทดสอบอัตโนมัติก่อนขึ้น production"] },
      { n: "5", l: ["people led (4 developers, 1 QA)", "คนในทีมที่นำ (นักพัฒนา 4 QA 1)"] },
    ],
  },
];

export const practices: { icon: GlyphName; h: Bi; t: Bi }[] = [
  {
    icon: "handshake",
    h: ["Align early", "สอดประสานตั้งแต่ต้น"],
    t: ["Act as the central liaison between business users, engineering and vendors, and lead the forums where decisions are made.", "เป็นผู้ประสานงานกลางระหว่างฝ่ายธุรกิจ วิศวกรรม และเวนเดอร์ และนำเวทีที่ใช้ตัดสินใจ"],
  },
  {
    icon: "chart",
    h: ["Keep delivery visible", "ทำให้การส่งมอบมองเห็นได้"],
    t: ["Maintain timelines, dependency maps and progress dashboards, and give executives clear milestone updates.", "ดูแลไทม์ไลน์ แผนผังความเชื่อมโยง และ dashboard ความคืบหน้า พร้อมอัปเดต milestone ให้ผู้บริหารเห็นชัดเจน"],
  },
  {
    icon: "risk",
    h: ["Manage risk before it bites", "จัดการความเสี่ยงก่อนเกิดปัญหา"],
    t: ["Identify risks proactively and clear critical blockers so the team keeps momentum and timelines hold.", "ระบุความเสี่ยงเชิงรุกและเคลียร์คอขวดสำคัญ เพื่อให้ทีมไม่สะดุดและกำหนดการอยู่ในแผน"],
  },
  {
    icon: "rocket",
    h: ["Release with readiness", "ปล่อยระบบอย่างพร้อมจริง"],
    t: ["Run readiness checks, plan deployments and validate after delivery, backed by CI/CD and automated testing from my engineering years.", "ตรวจความพร้อม วางแผน deploy และตรวจสอบหลังส่งมอบ โดยอาศัย CI/CD และการทดสอบอัตโนมัติจากประสบการณ์สายวิศวกรรม"],
  },
  {
    icon: "growth",
    h: ["Improve and mentor", "ปรับปรุงและเป็นพี่เลี้ยง"],
    t: ["Review outcomes, fold in team feedback, and mentor project managers and developers to lift how the whole team delivers.", "ทบทวนผล นำข้อเสนอแนะของทีมมาปรับปรุง และเป็นพี่เลี้ยงให้ PM และนักพัฒนา เพื่อยกระดับการส่งมอบของทั้งทีม"],
  },
];
