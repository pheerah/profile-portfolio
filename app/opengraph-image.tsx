import { ogImage, ogSize } from "@/lib/og";
import { SITE } from "@/lib/site";

export const alt = SITE.title;
export const size = ogSize;
export const contentType = "image/png";

export default function OgImage() {
  return ogImage({
    kicker: "Portfolio",
    title: SITE.name,
    subtitle: "Project & Product Delivery Leader · IT Project Manager · Product Owner · 12 years in software",
  });
}
