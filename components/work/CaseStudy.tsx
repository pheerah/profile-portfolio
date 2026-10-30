import type { Case } from "@/lib/content/cases";
import { Card } from "../ui/Card";
import { Chips } from "../ui/Chips";
import { B, T } from "../ui/T";
import { Glyph, type GlyphName } from "../ui/Glyph";
import { Diagram } from "./Diagrams";

function H4({ icon, children }: { icon: GlyphName; children: React.ReactNode }) {
  return (
    <h3 className="cs-h">
      <Glyph name={icon} size={16} />
      {children}
    </h3>
  );
}

/** One case study: context → role → what I did → delivered. */
export default function CaseStudy({ c }: { c: Case }) {
  return (
    <Card id={c.id} tilt={false} className="cs">
      <h2 style={{ fontSize: 26, margin: 0 }}><B v={c.title} /></h2>
      <div className="org" style={{ color: "var(--mute)", fontSize: 14 }}><B v={c.org} /></div>
      <Chips items={c.tags} className="meta" />
      {c.diagram && (
        <div className="diagram">
          <Diagram name={c.diagram} />
        </div>
      )}

      <H4 icon="info"><T en="Context" th="บริบท" /></H4>
      <p><B v={c.context} /></p>

      {c.challenge && (
        <>
          <H4 icon="flag"><T en="The challenge" th="ความท้าทาย" /></H4>
          <p><B v={c.challenge} /></p>
        </>
      )}

      <H4 icon="role"><T en="My role" th="บทบาทของฉัน" /></H4>
      <p><B v={c.role} /></p>

      <H4 icon="checklist"><T en="What I did" th="สิ่งที่ทำ" /></H4>
      <ul>
        {c.did.map((d) => (
          <li key={d[0]}><B v={d} /></li>
        ))}
      </ul>

      {c.decisions && c.decisions.length > 0 && (
        <>
          <H4 icon="scale"><T en="Decisions I made" th="การตัดสินใจของฉัน" /></H4>
          <ul>
            {c.decisions.map((d) => (
              <li key={d[0]}><B v={d} /></li>
            ))}
          </ul>
        </>
      )}

      <H4 icon="delivered"><T en="Delivered" th="สิ่งที่ส่งมอบ" /></H4>
      <div className="stat-row">
        {c.delivered.map((s) => (
          <div key={s.n}>
            <b>{s.n}</b>
            <span><B v={s.l} /></span>
          </div>
        ))}
      </div>
      {c.outcome && (
        <>
          <H4 icon="growth"><T en="What changed" th="สิ่งที่เปลี่ยนไป" /></H4>
          <p className="callout"><B v={c.outcome} /></p>
        </>
      )}
    </Card>
  );
}
