import type { CSSProperties } from "react";
import type { Project } from "@/lib/content/projects";
import { Card } from "../ui/Card";
import { Chips } from "../ui/Chips";
import { B } from "../ui/T";

/** One project tile: gradient "stage" with device frames, then text. Hidden via data-hide by the filter. */
export default function ProjectCard({ project: p, index, hidden }: { project: Project; index: number; hidden: boolean }) {
  const style = { "--c1": p.c1, "--c2": p.c2 } as CSSProperties;
  const dual = p.shots.length > 1;
  const shots = p.shots.map((s) => (
    <div key={s.alt} className={`dev ${s.cls}`} style={s.height ? { height: s.height } : undefined}>
      {s.src && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={s.src} alt={s.alt} onError={(e) => e.currentTarget.remove()} />
      )}
      <div className="ph-t" dangerouslySetInnerHTML={{ __html: s.label }} />
    </div>
  ));
  return (
    <Card className="proj" index={index} dataHide={hidden} style={style}>
      <div className="shot">
        <span className="badge"><B v={p.badge} /></span>
        {dual ? <div className="dual">{shots}</div> : shots}
      </div>
      <div className="body">
        <h3><B v={p.title} /></h3>
        <div className="org"><B v={p.org} /></div>
        <p><B v={p.body} /></p>
        <Chips items={p.chips} className="tg" />
      </div>
    </Card>
  );
}
