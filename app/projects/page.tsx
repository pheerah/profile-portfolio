import { BackLinks } from "@/components/ui/BackLinks";
import { PageHeader } from "@/components/ui/PageHeader";
import { T } from "@/components/ui/T";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects – Pheerah Praditthaphong",
  description:
    "Selected systems delivered (True iService, TrueID My Account, T Connected, NetSuite ERP integration) and tools built with AI coding agents (UAT Tracker, Horoscope, TeamFlow).",
  path: "/projects",
});

export default function Projects() {
  return (
    <main id="main" className="wrap">
      <PageHeader
        kicker={["Projects", "โปรเจกต์"]}
        title={["Systems I've helped ", "ระบบที่ฉันมีส่วนช่วย"]}
        accent={["bring to life", "ให้เกิดขึ้นจริง"]}
        lead={["Web, mobile and ERP — from consumer apps to enterprise integrations.", "เว็บ มือถือ และ ERP — ตั้งแต่แอปสำหรับผู้บริโภคจนถึงการเชื่อมต่อระบบองค์กร"]}
      />
      <ProjectsGrid />
      <p style={{ textAlign: "center", color: "var(--mute)", fontSize: 13, maxWidth: 640, margin: "8px auto 0" }}>
        <T
          en="App screenshots are from the official App Store listings and remain the property of their owners (TRUE Corporation, True Digital Group, TOYOTA Connected Asia Pacific). Shown for portfolio purposes; current app versions may differ from the versions I worked on."
          th="ภาพหน้าจอแอปมาจากหน้า App Store อย่างเป็นทางการและเป็นทรัพย์สินของเจ้าของ (TRUE Corporation, True Digital Group, TOYOTA Connected Asia Pacific) แสดงเพื่อประกอบผลงานเท่านั้น แอปเวอร์ชันปัจจุบันอาจต่างจากเวอร์ชันที่ฉันทำงานด้วย"
        />
      </p>
      <BackLinks to={["case-studies"]} />
    </main>
  );
}
