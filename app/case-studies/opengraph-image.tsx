import { ogImage, ogSize } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = `Case studies – ${SITE.name}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return ogImage({
    kicker: "Case studies",
    title: "How the work got delivered",
    subtitle: `NetSuite ERP · UAT Tracker · T Connected · TrueID — ${SITE.name}`,
  });
}
