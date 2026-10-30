import type { Metadata } from "next";
import Link from "next/link";
import { B, T } from "@/components/T";
import { cases } from "@/lib/cases";

export const metadata: Metadata = {
  title: "Case studies – Pheerah Praditthaphong",
  description:
    "Three delivery case studies: NetSuite ERP integration, the T Connected application and the TrueID Payment & Subscription platform.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  return (
    <main className="wrap">
      <div className="phead">
        <div className="kicker"><T en="Case studies" th="ผลงานเชิงลึก" /></div>
        <h1>
          <T en="How the work " th="งานเกิดขึ้น" />
          <span
            style={{
              background: "linear-gradient(90deg,var(--accent),var(--accent2))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <T en="got delivered" th="อย่างไร" />
          </span>
        </h1>
        <p className="lead">
          <T
            en="Context, my role, what I did and what was delivered, on three projects."
            th="บริบท บทบาทของฉัน สิ่งที่ทำ และสิ่งที่ส่งมอบ จากสามโครงการ"
          />
        </p>
        <div className="toc">
          {cases.map((c) => (
            <a key={c.id} href={`#${c.id}`}>
              <B v={c.title} />
            </a>
          ))}
        </div>
      </div>

      {cases.map((c) => (
        <article key={c.id} id={c.id} className="card cs rv">
          <h2 style={{ fontSize: 26, margin: 0 }}><B v={c.title} /></h2>
          <div className="org" style={{ color: "var(--mute)", fontSize: 14 }}><B v={c.org} /></div>
          <div className="meta">
            {c.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          <h4><T en="Context" th="บริบท" /></h4>
          <p><B v={c.context} /></p>

          <h4><T en="My role" th="บทบาทของฉัน" /></h4>
          <p><B v={c.role} /></p>

          <h4><T en="What I did" th="สิ่งที่ทำ" /></h4>
          <ul>
            {c.did.map((d) => (
              <li key={d[0]}><B v={d} /></li>
            ))}
          </ul>

          <h4><T en="Delivered" th="สิ่งที่ส่งมอบ" /></h4>
          <div className="stat-row">
            {c.delivered.map((s) => (
              <div key={s.n}>
                <b>{s.n}</b>
                <span><B v={s.l} /></span>
              </div>
            ))}
          </div>
        </article>
      ))}

      <div className="more" style={{ margin: "8px 0 24px" }}>
        <Link className="btn g" href="/projects">
          <T en="All projects →" th="โปรเจกต์ทั้งหมด →" />
        </Link>
        <span style={{ width: 10 }} />
        <Link className="btn g" href="/">
          <T en="← Back to home" th="← กลับหน้าแรก" />
        </Link>
      </div>
    </main>
  );
}
