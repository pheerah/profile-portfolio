import { ogImage, ogSize } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = `Projects – ${SITE.name}`;
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return ogImage({
    kicker: "Projects",
    title: "Systems I've helped bring to life",
    subtitle: `True iService · TrueID · T Connected · NetSuite ERP — ${SITE.name}`,
  });
}
