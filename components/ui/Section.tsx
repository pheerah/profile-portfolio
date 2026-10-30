import type { CSSProperties, ReactNode } from "react";
import { B, type Bi } from "./T";

type Props = {
  id: string;
  kicker: Bi;
  title: Bi;
  lead?: Bi;
  style?: CSSProperties;
  children: ReactNode;
};

/** A home-page section: kicker, heading, optional lead, then content. */
export function Section({ id, kicker, title, lead, style, children }: Props) {
  return (
    <section id={id} style={style}>
      <div className="kicker"><B v={kicker} /></div>
      <h2><B v={title} /></h2>
      {lead && (
        <p className="lead"><B v={lead} /></p>
      )}
      {children}
    </section>
  );
}
