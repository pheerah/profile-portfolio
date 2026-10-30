import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { SITE } from "./site";

export const ogSize = { width: 1200, height: 630 };

const FONT_DIR = path.join(process.cwd(), "node_modules", "@fontsource", "plus-jakarta-sans", "files");

/** The site font in regular and extra-bold, read at build time (the default font has no bold weight). */
async function loadFonts() {
  const read = (file: string) =>
    // Constant file names inside our own dependency folder; no user input reaches this path.
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    readFile(path.join(FONT_DIR, file));
  const [regular, bold] = await Promise.all([
    read("plus-jakarta-sans-latin-400-normal.woff"),
    read("plus-jakarta-sans-latin-800-normal.woff"),
  ]);
  return [
    { name: "Jakarta", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Jakarta", data: bold, weight: 800 as const, style: "normal" as const },
  ];
}

/** One OG-image template; each route passes its own heading. Rendered at build time. */
export async function ogImage({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 84px",
          background: "linear-gradient(150deg,#F6FAFE 0%,#E5F1FB 45%,#FBE3EE 100%)",
          color: "#1B2A5C",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg,#C2456B,#A8365A)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            PP
          </div>
          <div style={{ fontSize: 28, color: "#8A2848", fontWeight: 700 }}>
            {`${kicker} · ${SITE.url.replace("https://", "")}`}
          </div>
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, marginTop: 36, letterSpacing: -2 }}>{title}</div>
        <div style={{ fontSize: 34, marginTop: 24, color: "#4A5688" }}>{subtitle}</div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}
