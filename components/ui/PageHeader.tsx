import type { ReactNode } from "react";
import { B, type Bi } from "./T";

const accentStyle = {
  background: "linear-gradient(90deg,var(--accent),var(--ink))",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

type Props = {
  kicker: Bi;
  /** Plain first part of the heading. */
  title: Bi;
  /** Gradient-coloured last part of the heading. */
  accent: Bi;
  lead: Bi;
  children?: ReactNode;
};

/** Heading block shared by the inner pages (Projects, Case studies). */
export function PageHeader({ kicker, title, accent, lead, children }: Props) {
  return (
    <div className="phead">
      <div className="kicker"><B v={kicker} /></div>
      <h1>
        <B v={title} />
        <span style={accentStyle}><B v={accent} /></span>
      </h1>
      <p className="lead"><B v={lead} /></p>
      {children}
    </div>
  );
}
