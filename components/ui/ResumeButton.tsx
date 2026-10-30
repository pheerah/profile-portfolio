"use client";

import { track } from "@vercel/analytics";
import type { ReactNode } from "react";
import { RESUME } from "@/lib/site";
import { btnClass } from "./Button";

/**
 * The résumé download button. It counts clicks silently (Vercel Analytics custom event
 * "resume_download", with where it was clicked) instead of showing a visitor counter.
 */
export default function ResumeButton({
  where,
  variant = "p",
  small,
  ariaLabel,
  children,
}: {
  where: "hero" | "nav" | "contact" | "preview";
  variant?: "p" | "g";
  small?: boolean;
  /** Needed when the visible text is hidden (icon-only on phones). */
  ariaLabel?: string;
  children: ReactNode;
}) {
  return (
    <a
      className={btnClass(variant, small)}
      href={RESUME.file}
      download={RESUME.downloadName}
      aria-label={ariaLabel}
      onClick={() => track("resume_download", { where })}
    >
      {children}
    </a>
  );
}
