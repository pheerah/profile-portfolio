"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { initEffects } from "@/lib/effects";

/** Mounts the page effects and re-runs them on every route change (new DOM, new targets). */
export default function Effects() {
  const pathname = usePathname();
  useEffect(() => initEffects(), [pathname]);
  return null;
}
