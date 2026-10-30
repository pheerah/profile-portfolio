import { practices } from "@/lib/content/cases";
import { Card } from "../ui/Card";
import { Section } from "../ui/Section";
import { B } from "../ui/T";

export default function HowIWork() {
  return (
    <Section
      id="how"
      kicker={["How I work", "วิธีทำงาน"]}
      title={["Five habits behind steady delivery", "นิสัยการทำงานห้าข้อเบื้องหลังการส่งมอบที่สม่ำเสมอ"]}
      lead={["What I do on every project, drawn from my delivery and engineering roles.", "สิ่งที่ฉันทำในทุกโครงการ มาจากประสบการณ์ด้านการส่งมอบและวิศวกรรม"]}
    >
      <div className="how">
        {practices.map((p, i) => (
          <Card key={p.h[0]} index={i % 2}>
            <div className="n">{i + 1}</div>
            <div>
              <h3><B v={p.h} /></h3>
              <p><B v={p.t} /></p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
