import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "p" | "g";

/** Class string for anything that should look like a button (also used by real <button>s). */
export const btnClass = (variant: Variant = "g", small = false, extra?: string) =>
  cx("btn", variant, small && "sm", extra);

type Props = {
  href: string;
  variant?: Variant;
  small?: boolean;
  /** Pass a file name (or true) to make it a download link. */
  download?: string | true;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

/**
 * One link-button for every case:
 * internal route → next/link, file download / mailto → <a>, https → <a target=_blank>.
 */
export function Button({ href, variant = "g", small, download, className, style, children }: Props) {
  const cls = btnClass(variant, small, className);
  if (download) {
    return (
      <a className={cls} style={style} href={href} download={download === true ? "" : download}>
        {children}
      </a>
    );
  }
  if (/^https?:\/\//.test(href)) {
    return (
      <a className={cls} style={style} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a className={cls} style={style} href={href}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} style={style} href={href}>
      {children}
    </Link>
  );
}
