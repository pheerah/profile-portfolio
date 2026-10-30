import { teaser } from "@/lib/content/home";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { icons } from "../ui/Icon";
import { Section } from "../ui/Section";
import { B, T } from "../ui/T";

export default function SelectedWork() {
  return (
    <Section
      id="work"
      kicker={["Selected work", "ผลงานที่เลือกมา"]}
      title={["Systems I've helped deliver", "ระบบที่ฉันมีส่วนช่วยส่งมอบ"]}
      lead={["Consumer apps, payments and connected-car platforms used by real customers.", "แอปสำหรับผู้บริโภค ระบบชำระเงิน และแพลตฟอร์มรถยนต์เชื่อมต่อที่มีผู้ใช้จริง"]}
    >
      <div className="teaser">
        {teaser.map((c, i) => (
          <Card key={c.title} href="/projects" index={i}>
            <div className="ic">{icons[c.icon]}</div>
            <h3>{c.title}</h3>
            <p><B v={c.text} /></p>
          </Card>
        ))}
      </div>
      <div className="more" style={{ gap: 10, flexWrap: "wrap" }}>
        <Button href="/case-studies" variant="p"><T en="Read the case studies →" th="อ่านผลงานเชิงลึก →" /></Button>
        <Button href="/projects"><T en="View all projects →" th="ดูโปรเจกต์ทั้งหมด →" /></Button>
      </div>
    </Section>
  );
}
