"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPref, setPref } from "@/lib/prefs";
import { NAV, RESUME } from "@/lib/site";
import { Button } from "../ui/Button";
import { DownloadIcon } from "../ui/Icon";
import { B, T } from "../ui/T";

const MoonIcon = () => (
  <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" />
  </svg>
);

const SunIcon = () => (
  <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);

export default function Nav() {
  const path = usePathname();
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/#top">
          <i>PP</i>Pheerah
        </Link>
        {NAV.map((n) => (
          <Link key={n.href} className={n.match && path.startsWith(n.match) ? "l on" : "l"} href={n.href}>
            <B v={n.label} />
          </Link>
        ))}
        <div className="tools">
          <button
            className="tool"
            aria-label="Switch language / สลับภาษา"
            onClick={() => setPref("lang", getPref.lang() === "th" ? "en" : "th")}
          >
            <T en="ไทย" th="EN" />
          </button>
          <button
            className="tool"
            aria-label="Toggle dark mode"
            onClick={() => setPref("theme", getPref.theme() === "dark" ? "light" : "dark")}
          >
            <MoonIcon />
            <SunIcon />
          </button>
        </div>
        <Button href={RESUME.file} variant="p" small download={RESUME.downloadName}>
          <DownloadIcon />
          <T en="Résumé" th="เรซูเม่" />
        </Button>
      </div>
    </nav>
  );
}
