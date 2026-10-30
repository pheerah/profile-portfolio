import { BackLinks } from "@/components/ui/BackLinks";
import { PageHeader } from "@/components/ui/PageHeader";
import { B } from "@/components/ui/T";
import CaseStudy from "@/components/work/CaseStudy";
import { cases } from "@/lib/content/cases";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Case studies – Pheerah Praditthaphong",
  description:
    "Delivery case studies: NetSuite ERP integration, the UAT Tracker for the SPC New ERP, the T Connected application and the TrueID Payment & Subscription platform.",
  path: "/case-studies",
});

export default function CaseStudies() {
  return (
    <main id="main" className="wrap">
      <PageHeader
        kicker={["Case studies", "ผลงานเชิงลึก"]}
        title={["How the work ", "งานเกิดขึ้น"]}
        accent={["got delivered", "อย่างไร"]}
        lead={["Context, my role, what I did and what was delivered, project by project.", "บริบท บทบาทของฉัน สิ่งที่ทำ และสิ่งที่ส่งมอบ ของแต่ละโครงการ"]}
      >
        <div className="toc">
          {cases.map((c) => (
            <a key={c.id} href={`#${c.id}`}><B v={c.title} /></a>
          ))}
        </div>
      </PageHeader>
      {cases.map((c) => (
        <CaseStudy key={c.id} c={c} />
      ))}
      <BackLinks to={["projects"]} />
    </main>
  );
}
