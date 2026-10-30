import { certifications, education, skillTags } from "@/lib/content/home";
import { Card } from "../ui/Card";
import { Chips } from "../ui/Chips";
import { Section } from "../ui/Section";
import { T } from "../ui/T";

function Facts({ items }: { items: { title: string; sub: string }[] }) {
  return (
    <>
      {items.map((x) => (
        <div key={x.title} className="row">
          <b>{x.title}</b>
          <small>{x.sub}</small>
        </div>
      ))}
    </>
  );
}

export default function Skills() {
  return (
    <Section id="skills" kicker={["Skills & credentials", "ทักษะและวุฒิการศึกษา"]} title={["Toolkit", "เครื่องมือและทักษะ"]}>
      <Chips items={skillTags} className="tags" reveal />
      <div className="two">
        <Card index={0}>
          <h3><T en="Education" th="การศึกษา" /></h3>
          <Facts items={education} />
        </Card>
        <Card index={1}>
          <h3><T en="Certifications" th="ใบรับรอง" /></h3>
          <Facts items={certifications} />
        </Card>
      </div>
    </Section>
  );
}
