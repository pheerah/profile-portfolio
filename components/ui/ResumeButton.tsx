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
  children,
}: {
  where: "hero" | "nav" | "contact" | "preview";
  variant?: "p" | "g";
  small?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      className={btnClass(variant, small)}
      href={RESUME.file}
      download={RESUME.downloadName}
      onClick={() => track("resume_download", { where })}
    >
      {children}
    </a>
  );
}
