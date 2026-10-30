import { jobs } from "@/lib/content/experience";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { B } from "../ui/T";

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
                <h3><B v={j.title} /></h3>
                <span className="when"><B v={j.when} /></span>
              </div>
              <div className="org"><B v={j.org} /></div>
              <ul>
                {j.bullets.map((b) => (
                  <li key={b.h[0]}>
                    <b><B v={b.h} />:</b> <B v={b.t} />
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
