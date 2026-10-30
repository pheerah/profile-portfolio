import { ImageResponse } from "next/og";

export const alt = "Pheerah Praditthaphong – Project & Product Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
          <div style={{ fontSize: 28, color: "#9ff0e2", fontWeight: 700 }}>pheerah.vercel.app</div>
        </div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 36, letterSpacing: -2 }}>
          Pheerah Praditthaphong
        </div>
        <div style={{ fontSize: 40, marginTop: 18, color: "#5eead4", fontWeight: 700 }}>
          Project & Product Delivery Leader
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#c4dadd" }}>
          IT Project Manager · Product Owner · ERP & enterprise delivery · 12 years in software
        </div>
      </div>
    ),
    size
  );
}
