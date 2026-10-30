import { Button } from "./Button";
import { T } from "./T";

/** Footer links of the inner pages. `to` lists the pages to link besides home. */
export function BackLinks({ to }: { to: ("projects" | "case-studies")[] }) {
  return (
    <div className="more" style={{ margin: "24px 0 8px", gap: 10, flexWrap: "wrap" }}>
      {to.includes("case-studies") && (
        <Button href="/case-studies"><T en="Read the case studies →" th="อ่านผลงานเชิงลึก →" /></Button>
      )}
      {to.includes("projects") && (
        <Button href="/projects"><T en="All projects →" th="โปรเจกต์ทั้งหมด →" /></Button>
      )}
      <Button href="/"><T en="← Back to home" th="← กลับหน้าแรก" /></Button>
    </div>
  );
}
