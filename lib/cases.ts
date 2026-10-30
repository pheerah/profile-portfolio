import type { Bi } from "@/components/T";

/** Case studies use only facts already in the résumé. No invented outcomes or numbers. */
export type Case = {
  id: string;
  title: Bi;
  org: Bi;
  tags: string[];
  context: Bi;
  role: Bi;
  did: Bi[];
  delivered: { n: string; l: Bi }[];
};

export const cases: Case[] = [
  {
    id: "netsuite-erp",
    title: ["NetSuite ERP integration", "การเชื่อมต่อ NetSuite ERP"],
    org: ["Always Pioneering Innovation · client Saha Pathanapibul · 2026 – Present", "Always Pioneering Innovation · ลูกค้า Saha Pathanapibul · 2026 – ปัจจุบัน"],
    tags: ["ERP", "NetSuite", "Vendors", "Governance"],
    context: [
      "Saha Pathanapibul needed its internal applications to exchange data reliably with NetSuite ERP, with several parties involved: business users, internal teams and NetSuite vendors.",
      "Saha Pathanapibul ต้องการให้แอปพลิเคชันภายในแลกเปลี่ยนข้อมูลกับ NetSuite ERP ได้อย่างเชื่อถือได้ โดยมีหลายฝ่ายเกี่ยวข้อง ทั้งผู้ใช้งานฝั่งธุรกิจ ทีมภายใน และเวนเดอร์ NetSuite",
    ],
    role: [
      "Project Manager: owned the delivery framework and the alignment between business, engineering and vendors.",
      "Project Manager: รับผิดชอบเฟรมเวิร์กการส่งมอบ และการสอดประสานระหว่างฝ่ายธุรกิจ วิศวกรรม และเวนเดอร์",
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
    id: "t-connected",
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
    title: ["TrueID Payment & Subscription", "TrueID Payment & Subscription"],
    org: ["True Digital · 2018 – 2024", "True Digital · 2018 – 2024"],
    tags: ["Payments", "CI/CD", "Monitoring", "Agile"],
    context: [
      "A revenue-generating payment and subscription platform where stability and release quality directly mattered.",
      "แพลตฟอร์มชำระเงินและสมาชิกที่สร้างรายได้ ซึ่งเสถียรภาพและคุณภาพการปล่อยระบบส่งผลโดยตรงต่อธุรกิจ",
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
      { n: "99.99%", l: ["uptime on revenue-critical services", "uptime ของบริการที่สร้างรายได้หลัก"] },
      { n: "5", l: ["people led (4 developers, 1 QA)", "คนในทีมที่นำ (นักพัฒนา 4 QA 1)"] },
    ],
  },
];

export const practices: { h: Bi; t: Bi }[] = [
  {
    h: ["Align early", "สอดประสานตั้งแต่ต้น"],
    t: ["Act as the central liaison between business users, engineering and vendors, and lead the forums where decisions are made.", "เป็นผู้ประสานงานกลางระหว่างฝ่ายธุรกิจ วิศวกรรม และเวนเดอร์ และนำเวทีที่ใช้ตัดสินใจ"],
  },
  {
    h: ["Keep delivery visible", "ทำให้การส่งมอบมองเห็นได้"],
    t: ["Maintain timelines, dependency maps and progress dashboards, and give executives clear milestone updates.", "ดูแลไทม์ไลน์ แผนผังความเชื่อมโยง และ dashboard ความคืบหน้า พร้อมอัปเดต milestone ให้ผู้บริหารเห็นชัดเจน"],
  },
  {
    h: ["Manage risk before it bites", "จัดการความเสี่ยงก่อนเกิดปัญหา"],
    t: ["Identify risks proactively and clear critical blockers so the team keeps momentum and timelines hold.", "ระบุความเสี่ยงเชิงรุกและเคลียร์คอขวดสำคัญ เพื่อให้ทีมไม่สะดุดและกำหนดการอยู่ในแผน"],
  },
  {
    h: ["Release with readiness", "ปล่อยระบบอย่างพร้อมจริง"],
    t: ["Run readiness checks, plan deployments and validate after delivery, backed by CI/CD and automated testing from my engineering years.", "ตรวจความพร้อม วางแผน deploy และตรวจสอบหลังส่งมอบ โดยอาศัย CI/CD และการทดสอบอัตโนมัติจากประสบการณ์สายวิศวกรรม"],
  },
  {
    h: ["Improve and mentor", "ปรับปรุงและเป็นพี่เลี้ยง"],
    t: ["Review outcomes, fold in team feedback, and mentor project managers and developers to lift how the whole team delivers.", "ทบทวนผล นำข้อเสนอแนะของทีมมาปรับปรุง และเป็นพี่เลี้ยงให้ PM และนักพัฒนา เพื่อยกระดับการส่งมอบของทั้งทีม"],
  },
];
