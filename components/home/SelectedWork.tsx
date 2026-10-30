import Link from "next/link";
import { teaser } from "@/lib/content/home";
import { Button } from "../ui/Button";
import { Glyph } from "../ui/Glyph";
import { icons } from "../ui/Icon";
import { Section } from "../ui/Section";
import { T } from "../ui/T";

/** A compact strip that points to the full pages, so the home page doesn't repeat the project cards. */
export default function SelectedWork() {
  return (
    <Section
      id="work"
      kicker={["Selected work", "ผลงานที่เลือกมา"]}
      title={["Systems I've helped deliver", "ระบบที่ฉันมีส่วนช่วยส่งมอบ"]}
    >
      <ul className="workstrip">
        {teaser.map((c) => (
          <li key={c.title} className="rv">
            <Link href="/projects">
              <span className="wsic">{icons[c.icon]}</span>
              {c.title}
            </Link>
          </li>
        ))}
        <li className="rv">
          <Link href="/projects">
            <span className="wsic"><Glyph name="building" size={22} /></span>
            NetSuite ERP
          </Link>
        </li>
      </ul>
      <div className="more" style={{ gap: 10, flexWrap: "wrap", justifyContent: "flex-start" }}>
        <Button href="/case-studies" variant="p"><T en="Read the case studies →" th="อ่านผลงานเชิงลึก →" /></Button>
        <Button href="/projects"><T en="View all projects →" th="ดูโปรเจกต์ทั้งหมด →" /></Button>
      </div>
    </Section>
  );
}
