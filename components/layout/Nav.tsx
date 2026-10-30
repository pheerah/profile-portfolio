"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getPref, setPref } from "@/lib/prefs";
import { NAV } from "@/lib/site";
import { DownloadIcon } from "../ui/Icon";
import ResumeButton from "../ui/ResumeButton";
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
  // The menu belongs to the page it was opened on, so going to another page closes it without an effect.
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;
  const setOpen = (v: boolean) => setOpenAt(v ? path : null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // While the phone menu is open: Escape closes it (focus goes back to the button), and so does a tap outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenAt(null);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenAt(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <nav ref={navRef} data-open={open || undefined}>
      <div className="wrap">
        <Link className="logo" href="/#top">
          <i>PP</i>Pheerah
        </Link>
        <div className="navlinks" id="site-menu">
          {NAV.map((n) => (
            <Link
              key={n.href}
              className={n.match?.some((m) => path.startsWith(m)) ? "l on" : "l"}
              aria-current={n.match?.some((m) => path.startsWith(m)) ? "page" : undefined}
              href={n.href}
              onClick={() => setOpenAt(null)}
            >
              <B v={n.label} />
            </Link>
          ))}
        </div>
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
        <ResumeButton where="nav" small ariaLabel="Download résumé / ดาวน์โหลดเรซูเม่">
          <DownloadIcon />
          <span className="btn-label"><T en="Résumé" th="เรซูเม่" /></span>
        </ResumeButton>
        <button
          ref={buttonRef}
          className="tool menu-btn"
          aria-label="Menu / เมนู"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </nav>
  );
}
