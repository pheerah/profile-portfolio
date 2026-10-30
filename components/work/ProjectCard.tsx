import type { CSSProperties } from "react";
import type { Project } from "@/lib/content/projects";
import { Card } from "../ui/Card";
import { Chips } from "../ui/Chips";
import { Glyph } from "../ui/Glyph";
import { B } from "../ui/T";
import { Diagram } from "./Diagrams";

/** One project tile: gradient stage (real screenshots in device frames, or a résumé-fact diagram), then text. */
export default function ProjectCard({ project: p, index, hidden }: { project: Project; index: number; hidden: boolean }) {
  const style = { "--c1": p.c1, "--c2": p.c2, "--p1": p.p1, "--p2": p.p2 } as CSSProperties;
  const shots = p.shots.map((s) => (
    <div key={s.src} className={`dev ${s.cls}`} style={s.height ? { height: s.height } : undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={s.src} alt={s.alt} />
    </div>
  ));
  return (
    <Card className="proj" index={index} dataHide={hidden} style={style}>
      <div className="shot">
        <span className="badge"><B v={p.badge} /></span>
        {p.diagram && (
          <div className="diagram-in">
            <Diagram name={p.diagram} />
          </div>
        )}
        {p.glyph && (
          <div className="glyph-big">
            <Glyph name={p.glyph} size={72} />
          </div>
        )}
        {shots.length > 1 ? <div className="dual">{shots}</div> : shots}
      </div>
      <div className="body">
        <h2><B v={p.title} /></h2>
        {p.status && (
          <span className={p.status.live ? "st live" : "st dev"}><B v={p.status.label} /></span>
        )}
        <div className="org"><B v={p.org} /></div>
        <p><B v={p.body} /></p>
        <Chips items={p.chips} className="tg" />
      </div>
    </Card>
  );
}
