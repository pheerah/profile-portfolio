import { jobs, type Job } from "@/lib/content/experience";
import { Card } from "../ui/Card";
import { Glyph } from "../ui/Glyph";
import { Section } from "../ui/Section";
import { B, T } from "../ui/T";

/** Show this many bullets up front; longer lists fold the rest into a native <details> (works without JS). */
const SHOWN = 3;
const FOLD_FROM = 5;

function Bullets({ items }: { items: Job["bullets"] }) {
  return (
    <>
      {items.map((b) => (
        <li key={b.h[0]}>
          <b><B v={b.h} />:</b> <B v={b.t} />
        </li>
      ))}
    </>
  );
}

function JobBullets({ bullets }: { bullets: Job["bullets"] }) {
  if (bullets.length < FOLD_FROM) {
    return (
      <ul>
        <Bullets items={bullets} />
      </ul>
    );
  }
  const rest = bullets.slice(SHOWN);
  return (
    <>
      <ul>
        <Bullets items={bullets.slice(0, SHOWN)} />
      </ul>
      <details className="jmore">
        <summary>
          <span className="s-more"><T en={`Show ${rest.length} more`} th={`ดูเพิ่มอีก ${rest.length} ข้อ`} /></span>
          <span className="s-less"><T en="Show less" th="ย่อ" /></span>
        </summary>
        <ul>
          <Bullets items={rest} />
        </ul>
      </details>
    </>
  );
}

export default function Experience() {
  return (
    <Section
      id="exp"
      kicker={["Experience", "ประสบการณ์"]}
      title={["Where I've delivered", "ที่ที่ฉันส่งมอบงาน"]}
      lead={["Enterprise ERP, connected-car applications and large-scale consumer payments.", "ERP องค์กร แอปรถยนต์เชื่อมต่อ และระบบชำระเงินสำหรับผู้บริโภคขนาดใหญ่"]}
    >
      <div className="tl">
        {jobs.map((j) => (
          <div key={j.title[0] + j.when[0]} className="job rv">
            <Card reveal={false}>
              <div className="top">
                <h3><Glyph name={j.icon} size={18} className="jic" /><B v={j.title} /></h3>
                <span className="when"><B v={j.when} /></span>
              </div>
              <div className="org"><B v={j.org} /></div>
              <JobBullets bullets={j.bullets} />
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
