import { projects } from "@/lib/content/projects";
import type { GlyphName } from "../ui/Glyph";
import { Card } from "../ui/Card";
import { Glyph } from "../ui/Glyph";
import { Section } from "../ui/Section";
import { B, T } from "../ui/T";
import { Diagram } from "../work/Diagrams";

const AGENTS: { icon: GlyphName; name: string }[] = [
  { icon: "claude", name: "Claude Code" },
  { icon: "gemini", name: "Antigravity (Gemini)" },
  { icon: "openai", name: "ChatGPT Codex" },
];

/** What has been built with AI coding agents (status is shown honestly), plus the next idea. */
export default function AIBuilt() {
  const built = projects.filter((p) => p.tags.includes("ai"));
  return (
    <Section
      id="ai"
      kicker={["Built with AI", "สร้างด้วย AI"]}
      title={["AI coding agents as my build team", "ใช้ AI coding agent เป็นทีมสร้างระบบ"]}
      lead={[
        "I build my own tools with AI coding agents and put them to use. Here is what is live, what is in progress and where I am heading.",
        "ฉันสร้างระบบของตัวเองด้วย AI coding agent แล้วนำไปใช้งานจริง นี่คือสิ่งที่ใช้งานแล้ว สิ่งที่กำลังพัฒนา และทิศทางต่อไป",
      ]}
    >
      <ul className="agents">
        {AGENTS.map((a) => (
          <li key={a.name}>
            <Glyph name={a.icon} size={22} />
            {a.name}
          </li>
        ))}
      </ul>

      <div className="grid">
        {built.map((p, i) => (
          <Card key={p.title[0]} href="/projects" index={i}>
            <div className="ic"><Glyph name={p.glyph ?? "clipboard"} size={24} /></div>
            <h3><B v={p.title} /></h3>
            {p.status && (
              <span className={p.status.live ? "st live" : "st dev"}><B v={p.status.label} /></span>
            )}
            <p><B v={p.body} /></p>
          </Card>
        ))}
      </div>

      <Card tilt={false} className="vision" index={0}>
        <span className="st vision"><T en="Vision" th="แนวคิด" /></span>
        <h3>
          <T en="Next: an autonomous AI dev team" th="ถัดไป: ทีมพัฒนา AI ที่ทำงานเอง" />
        </h3>
        <p>
          <T
            en="The idea: I give one request in one place. An orchestrator decides how to split the work, assigns it between Antigravity (Gemini), Claude Code and ChatGPT Codex, and brings one summary back."
            th="แนวคิด: ฉันสั่งงานที่เดียว ตัวกลาง (orchestrator) คิดต่อเองว่าจะแบ่งงานอย่างไร มอบหมายให้ Antigravity (Gemini), Claude Code และ ChatGPT Codex แล้วสรุปผลทั้งหมดกลับมาให้"
          />
        </p>
        <div className="diagram">
          <Diagram name="aiteam" />
        </div>
      </Card>
    </Section>
  );
}
