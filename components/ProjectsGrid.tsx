"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { filters, projects } from "@/lib/data";

export default function ProjectsGrid() {
  const [active, setActive] = useState<string>("all");

  return (
    <>
      <div className="filters">
        {filters.map(([key, label]) => (
          <button key={key} className={active === key ? "on" : undefined} onClick={() => setActive(key)}>
            {label}
          </button>
        ))}
      </div>

      <div className="pgrid">
        {projects.map((p) => {
          const hide = active !== "all" && !p.tags.includes(active);
          const style = { "--c1": p.c1, "--c2": p.c2 } as CSSProperties;
          const dual = p.shots.length > 1;
          const shots = p.shots.map((s) => (
            <div
              key={s.alt}
              className={`dev ${s.cls}`}
              style={s.height ? { height: s.height } : undefined}
            >
              {s.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.src} alt={s.alt} onError={(e) => e.currentTarget.remove()} />
              )}
              <div className="ph-t" dangerouslySetInnerHTML={{ __html: s.label }} />
            </div>
          ));
          return (
            <article
              key={p.title}
              className={`card proj tilt rv ${p.delay}`}
              data-hide={hide || undefined}
              style={style}
            >
              <div className="shot">
                <span className="badge">{p.badge}</span>
                {dual ? <div className="dual">{shots}</div> : shots}
              </div>
              <div className="body">
                <h3>{p.title}</h3>
                <div className="org">{p.org}</div>
                <p>{p.body}</p>
                <div className="tg">
                  {p.chips.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
