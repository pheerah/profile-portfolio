import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects – Pheerah Praditthaphong",
  description:
    "Selected systems delivered: True iService, TrueID My Account, T Connected and NetSuite ERP integration.",
};

export default function Projects() {
  return (
    <>
      <main className="wrap">
        <div className="phead">
          <div className="kicker">Projects</div>
          <h1>
            Systems I&apos;ve helped{" "}
            <span
              style={{
                background: "linear-gradient(90deg,var(--accent),var(--accent2))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              bring to life
            </span>
          </h1>
          <p className="lead">Web, mobile and ERP — from consumer apps to enterprise integrations.</p>
        </div>

        <ProjectsGrid />

        <p style={{ textAlign: "center", color: "var(--mute)", fontSize: 13, maxWidth: 640, margin: "8px auto 0" }}>
          App screenshots are from the official App Store listings and remain the property of their owners (TRUE
          Corporation, True Digital Group, TOYOTA Connected Asia Pacific). Shown for portfolio purposes; current app
          versions may differ from the versions I worked on.
        </p>
        <div className="more" style={{ margin: "24px 0 8px" }}>
          <Link className="btn g" href="/">
            ← Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
