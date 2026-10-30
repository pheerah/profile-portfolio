import { SITE } from "@/lib/site";
import { T } from "../ui/T";

export default function Footer() {
  return (
    <footer>
      © {SITE.name} · <T en="Built with Next.js" th="สร้างด้วย Next.js" />
    </footer>
  );
}
