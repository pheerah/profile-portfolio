import { ImageResponse } from "next/og";
import { SITE } from "./site";

export const ogSize = { width: 1200, height: 630 };

/** One OG-image template; each route passes its own heading. Rendered at build time. */
export function ogImage({ kicker, title, subtitle }: { kicker: string; title: string; subtitle: string }) {
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
          background: "linear-gradient(160deg,#071a1e 0%,#0e3a40 55%,#17335c 100%)",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg,#14b8a6,#6366f1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            PP
          </div>
          <div style={{ fontSize: 28, color: "#9ff0e2", fontWeight: 700 }}>
            {`${kicker} · ${SITE.url.replace("https://", "")}`}
          </div>
        </div>
        <div style={{ fontSize: 80, fontWeight: 800, lineHeight: 1.05, marginTop: 36, letterSpacing: -2 }}>{title}</div>
        <div style={{ fontSize: 34, marginTop: 24, color: "#c4dadd" }}>{subtitle}</div>
      </div>
    ),
    ogSize
  );
}
