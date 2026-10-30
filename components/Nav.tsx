"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DownloadIcon } from "./Icon";

export default function Nav() {
  const onProjects = usePathname().startsWith("/projects");
  return (
    <nav>
      <div className="wrap">
        <Link className="logo" href="/#top">
          <i>PP</i>Pheerah
        </Link>
        <Link className="l" href="/#about">About</Link>
        <Link className="l" href="/#exp">Experience</Link>
        <Link className={onProjects ? "l on" : "l"} href="/projects">Projects</Link>
        <Link className="l" href="/#contact">Contact</Link>
        <a className="btn p sm" href="/resume.pdf" download="Pheerah_Praditthaphong_Resume.pdf">
          <DownloadIcon />
          Résumé
        </a>
      </div>
    </nav>
  );
}
