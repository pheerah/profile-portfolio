"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadIcon } from "./Icon";
import { T } from "./T";

const setPref = (key: string, val: string, attr: string) => {
  document.documentElement.setAttribute(attr, val);
  if (attr === "data-lang") document.documentElement.lang = val;
  try {
    localStorage.setItem(key, val);
  } catch {}
};

export default function Nav() {
  const path = usePathname();
  const on = (p: string) => (path.startsWith(p) ? "l on" : "l");
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/#top">
          <i>PP</i>Pheerah
        </Link>
        <Link className="l" href="/#about"><T en="About" th="เกี่ยวกับ" /></Link>
        <Link className="l" href="/#exp"><T en="Experience" th="ประสบการณ์" /></Link>
        <Link className={on("/case-studies")} href="/case-studies"><T en="Case studies" th="ผลงานเชิงลึก" /></Link>
        <Link className={on("/projects")} href="/projects"><T en="Projects" th="โปรเจกต์" /></Link>
        <Link className="l" href="/#contact"><T en="Contact" th="ติดต่อ" /></Link>
        <div className="tools">
          <button
            className="tool"
            aria-label="Switch language / สลับภาษา"
            onClick={() => {
              const next = document.documentElement.dataset.lang === "th" ? "en" : "th";
              setPref("lang", next, "data-lang");
            }}
          >
            <T en="ไทย" th="EN" />
          </button>
          <button
            className="tool"
            aria-label="Toggle dark mode"
            onClick={() => {
              const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
              setPref("theme", next, "data-theme");
            }}
          >
            <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></svg>
            <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          </button>
        </div>
        <a className="btn p sm" href="/resume.pdf" download="Pheerah_Praditthaphong_Resume.pdf">
          <DownloadIcon />
          <T en="Résumé" th="เรซูเม่" />
        </a>
      </div>
    </nav>
  );
}
