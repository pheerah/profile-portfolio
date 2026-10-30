import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cx, delay } from "@/lib/cx";

type Props = {
  /** Render as a link card. */
  href?: string;
  /** Position in its list; sets the reveal stagger. */
  index?: number;
  tilt?: boolean;
  reveal?: boolean;
  id?: string;
  className?: string;
  style?: CSSProperties;
  dataHide?: boolean;
  children: ReactNode;
};

/** The site's card: optional 3D tilt, optional reveal-on-scroll, optional link. */
export function Card({ href, index = 0, tilt = true, reveal = true, id, className, style, dataHide, children }: Props) {
  const cls = cx("card", tilt && "tilt", reveal && "rv", reveal && delay(index), className);
  if (href) {
    return (
      <Link id={id} className={cls} style={style} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <div id={id} className={cls} style={style} data-hide={dataHide || undefined}>
      {children}
    </div>
  );
}
