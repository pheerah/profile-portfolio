import type { Case } from "@/lib/content/cases";
import { Card } from "../ui/Card";
import { Chips } from "../ui/Chips";
import { B, T } from "../ui/T";

/** One case study: context → role → what I did → delivered. */
export default function CaseStudy({ c }: { c: Case }) {
  return (
    <Card id={c.id} tilt={false} className="cs">
      <h2 style={{ fontSize: 26, margin: 0 }}><B v={c.title} /></h2>
      <div className="org" style={{ color: "var(--mute)", fontSize: 14 }}><B v={c.org} /></div>
      <Chips items={c.tags} className="meta" />

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
    </Card>
  );
}
