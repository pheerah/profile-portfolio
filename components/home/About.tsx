import { about } from "@/lib/content/home";
import { Card } from "../ui/Card";
import { icons } from "../ui/Icon";
import { Section } from "../ui/Section";
import { B } from "../ui/T";

export default function About() {
  return (
    <Section
      id="about"
      kicker={["About", "เกี่ยวกับ"]}
      title={["What I do", "สิ่งที่ฉันทำ"]}
      lead={["From developer to team lead to project manager — I speak both business and engineering.", "จากนักพัฒนา สู่หัวหน้าทีม และผู้จัดการโครงการ — เข้าใจทั้งภาษาธุรกิจและวิศวกรรม"]}
    >
      <div className="grid">
        {about.map((c, i) => (
          <Card key={c.title[0]} index={i}>
            <div className="ic">{icons[c.icon]}</div>
            <h3><B v={c.title} /></h3>
            <p><B v={c.text} /></p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
