import { certifications, education, keySkills, techGroups, type Credential } from "@/lib/content/skills";
import { Card } from "../ui/Card";
import { Glyph } from "../ui/Glyph";
import { Section } from "../ui/Section";
import { B, T } from "../ui/T";

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="subh">{children}</h3>;
}

function CredentialCard({ c, index }: { c: Credential; index: number }) {
  return (
    <Card index={index} className="cred">
      <span className="ic"><Glyph name={c.icon} size={26} /></span>
      <div>
        <b>{c.title}</b>
        <small>{c.sub}</small>
        {c.url && (
          <a className="verify" href={c.url} target="_blank" rel="noopener noreferrer">
            <T en="Verify credential →" th="ตรวจสอบใบรับรอง →" />
          </a>
        )}
      </div>
    </Card>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      kicker={["Skills & credentials", "ทักษะและวุฒิการศึกษา"]}
      title={["Skills, tools & credentials", "ทักษะ เครื่องมือ และวุฒิการศึกษา"]}
    >
      <SubHeading><T en="Key skills" th="ทักษะหลัก" /></SubHeading>
      <div className="skills">
        {keySkills.map((s, i) => (
          <Card key={s.label[0]} index={i % 4} tilt={false} className="skill">
            <span className="ic"><Glyph name={s.icon} size={22} /></span>
            <span><B v={s.label} /></span>
          </Card>
        ))}
      </div>

      <SubHeading><T en="Technical skills & tools" th="ทักษะเชิงเทคนิคและเครื่องมือ" /></SubHeading>
      <div className="tech">
        {techGroups.map((g, i) => (
          <Card key={g.title[0]} index={i % 3} tilt={false}>
            <h4><B v={g.title} /></h4>
            <ul className="tchips">
              {g.items.map((t) => (
                <li key={t.name}>
                  <Glyph name={t.icon} size={18} />
                  {t.name}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <SubHeading><T en="Certifications" th="ใบรับรอง" /></SubHeading>
      <div className="two">
        {certifications.map((c, i) => (
          <CredentialCard key={c.title} c={c} index={i} />
        ))}
      </div>

      <SubHeading><T en="Education" th="การศึกษา" /></SubHeading>
      <div className="two">
        {education.map((c, i) => (
          <CredentialCard key={c.title} c={c} index={i} />
        ))}
      </div>
    </Section>
  );
}
