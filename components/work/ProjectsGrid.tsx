"use client";

import { useState } from "react";
import { filters, projects } from "@/lib/content/projects";
import { B } from "../ui/T";
import ProjectCard from "./ProjectCard";

/** Filter pills + project grid. Filtering is state here; hiding uses data-hide so reveal classes survive. */
export default function ProjectsGrid() {
  const [active, setActive] = useState("all");
  return (
    <>
      <div className="filters">
        {filters.map(([key, label]) => (
          <button key={key} className={active === key ? "on" : undefined} onClick={() => setActive(key)}>
            <B v={label} />
          </button>
        ))}
      </div>
      <div className="pgrid">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title[0]}
            project={p}
            index={i % 3}
            hidden={active !== "all" && !p.tags.includes(active)}
          />
        ))}
      </div>
    </>
  );
}
