import type { GlyphName } from "@/components/ui/Glyph";
import type { Bi } from "@/components/ui/T";

/**
 * Everything here comes from the résumé (skills list or the work-experience bullets).
 * Do not add a skill that is not on the résumé; update the résumé first.
 */

export type KeySkill = { icon: GlyphName; label: Bi };

export const keySkills: KeySkill[] = [
  { icon: "workflow", label: ["End-to-End Project Lifecycle Management", "การบริหารโครงการตลอดวงจร"] },
  { icon: "repeat", label: ["Delivery Methodologies", "วิธีการส่งมอบงาน"] },
  { icon: "risk", label: ["Risk, Issue & Dependency Management", "การบริหารความเสี่ยง ปัญหา และความเชื่อมโยงของงาน"] },
  { icon: "change", label: ["Scope & Change Management", "การบริหารขอบเขตและการเปลี่ยนแปลง"] },
  { icon: "handshake", label: ["Stakeholder & Cross-Functional Alignment", "การสอดประสาน stakeholder และทีมข้ามสายงาน"] },
  { icon: "rocket", label: ["Release & Resource Management", "การบริหารการปล่อยระบบและทรัพยากร"] },
  { icon: "chart", label: ["Reporting & Delivery Visibility", "การรายงานและการทำให้เห็นความคืบหน้า"] },
  { icon: "governance", label: ["Project Governance & Continuous Improvement", "ธรรมาภิบาลโครงการและการปรับปรุงต่อเนื่อง"] },
  { icon: "team", label: ["Team Leadership & Collaboration", "ภาวะผู้นำและการทำงานร่วมกัน"] },
  { icon: "idea", label: ["Analytical Thinking & Problem Solving", "การคิดวิเคราะห์และแก้ปัญหา"] },
];

export type Tech = { icon: GlyphName; name: string };
export type TechGroup = { title: Bi; items: Tech[] };

export const techGroups: TechGroup[] = [
  {
    title: ["Languages & frameworks", "ภาษาและเฟรมเวิร์ก"],
    items: [
      { icon: "javascript", name: "JavaScript" },
      { icon: "react", name: "React.js" },
      { icon: "nextjs", name: "Next.js" },
    ],
  },
  {
    title: ["Testing & automation", "การทดสอบและระบบอัตโนมัติ"],
    items: [
      { icon: "cypress", name: "Cypress.io" },
      { icon: "selenium", name: "Selenium WebDriver" },
      { icon: "merge", name: "CI/CD pipelines" },
    ],
  },
  {
    title: ["Data, APIs & design", "ข้อมูล API และการออกแบบ"],
    items: [
      { icon: "database", name: "SQL" },
      { icon: "table", name: "Database design" },
      { icon: "uml", name: "UML" },
      { icon: "plug", name: "RESTful API" },
    ],
  },
  {
    title: ["Delivery tools", "เครื่องมือส่งมอบงาน"],
    items: [
      { icon: "jira", name: "Jira" },
      { icon: "confluence", name: "Confluence" },
      { icon: "gantt", name: "Gantt chart" },
      { icon: "git", name: "GitFlow" },
      { icon: "excel", name: "Excel" },
      { icon: "powerpoint", name: "PowerPoint" },
      { icon: "word", name: "Word" },
    ],
  },
  {
    title: ["AI coding agents", "AI coding agent"],
    items: [
      { icon: "claude", name: "Claude Code" },
      { icon: "gemini", name: "Antigravity (Gemini)" },
      { icon: "openai", name: "ChatGPT Codex" },
    ],
  },
  {
    title: ["Practices", "แนวปฏิบัติ"],
    items: [
      { icon: "repeat", name: "Agile / Scrum" },
      { icon: "activity", name: "Monitoring dashboards" },
      { icon: "boxes", name: "Microservices" },
    ],
  },
];

export type Credential = { icon: GlyphName; title: string; sub: string; url?: string };

/** Add `url` (e.g. a Credly or issuer verification link) when the owner has one; it becomes a "Verify" link. */
export const certifications: Credential[] = [
  { icon: "verified", title: "CompTIA Project+", sub: "IT Project Management · 2025" },
  { icon: "award", title: "ITIL Foundation Certificate", sub: "IT Service Management · 2025" },
];

export const education: Credential[] = [
  { icon: "school", title: "MSc, Information Technology Management", sub: "NIDA, Bangkok · 2025" },
  { icon: "school", title: "BSc, Information Technology", sub: "The Far Eastern University, Chiang Mai · 2014" },
];
