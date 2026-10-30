import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Projects – Pheerah Praditthaphong",
  description:
    "Selected systems delivered: True iService, TrueID My Account, T Connected and NetSuite ERP integration.",
  alternates: { canonical: "/projects" },
};

export default function Projects() {
  return (
    <main className="wrap">
      <div className="phead">
        <div className="kicker"><T en="Projects" th="โปรเจกต์" /></div>
        <h1>
          <T en="Systems I've helped " th="ระบบที่ฉันมีส่วนช่วย" />
          <span
            style={{
              background: "linear-gradient(90deg,var(--accent),var(--accent2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <T en="bring to life" th="ให้เกิดขึ้นจริง" />
          </span>
        </h1>
        <p className="lead">
          <T
            en="Web, mobile and ERP — from consumer apps to enterprise integrations."
            th="เว็บ มือถือ และ ERP — ตั้งแต่แอปสำหรับผู้บริโภคจนถึงการเชื่อมต่อระบบองค์กร"
          />
        </p>
      </div>

      <ProjectsGrid />

      <p style={{ textAlign: "center", color: "var(--mute)", fontSize: 13, maxWidth: 640, margin: "8px auto 0" }}>
        <T
          en="App screenshots are from the official App Store listings and remain the property of their owners (TRUE Corporation, True Digital Group, TOYOTA Connected Asia Pacific). Shown for portfolio purposes; current app versions may differ from the versions I worked on."
          th="ภาพหน้าจอแอปมาจากหน้า App Store อย่างเป็นทางการและเป็นทรัพย์สินของเจ้าของ (TRUE Corporation, True Digital Group, TOYOTA Connected Asia Pacific) แสดงเพื่อประกอบผลงานเท่านั้น แอปเวอร์ชันปัจจุบันอาจต่างจากเวอร์ชันที่ฉันทำงานด้วย"
        />
      </p>
      <div className="more" style={{ margin: "24px 0 8px" }}>
        <Link className="btn g" href="/case-studies">
          <T en="Read the case studies →" th="อ่านผลงานเชิงลึก →" />
        </Link>
        <span style={{ width: 10 }} />
        <Link className="btn g" href="/">
          <T en="← Back to home" th="← กลับหน้าแรก" />
        </Link>
      </div>
    </main>
  );
}
