import type { GlyphName } from "@/components/ui/Glyph";
import type { Bi } from "@/components/ui/T";

export type Job = {
  icon: GlyphName;
  title: Bi;
  when: Bi;
  org: Bi;
  bullets: { h: Bi; t: Bi }[];
};

const now: Bi = ["2026 – Present", "2026 – ปัจจุบัน"];
const PM: Bi = ["Project Manager", "ผู้จัดการโครงการ"];

export const jobs: Job[] = [
  {
    icon: "building",
    title: PM,
    when: now,
    org: ["Always Pioneering Innovation · client Saha Pathanapibul", "Always Pioneering Innovation · ลูกค้า Saha Pathanapibul"],
    bullets: [
      { h: ["ERP Framework Standardization", "การวางมาตรฐานเฟรมเวิร์ก ERP"], t: ["Established end-to-end ERP project frameworks for Saha Pathanapibul, from planning to deployment.", "วางเฟรมเวิร์กโครงการ ERP แบบครบวงจรให้ Saha Pathanapibul ตั้งแต่การวางแผนจนถึงการ deploy"] },
      { h: ["Stakeholder & Vendor Coordination", "การประสานงาน stakeholder และเวนเดอร์"], t: ["Bridged communication between internal teams, business users and NetSuite vendors to align technical delivery with business needs.", "เชื่อมการสื่อสารระหว่างทีมภายใน ผู้ใช้งานฝั่งธุรกิจ และเวนเดอร์ NetSuite เพื่อให้การส่งมอบด้านเทคนิคสอดคล้องกับความต้องการทางธุรกิจ"] },
      { h: ["System Integration & API Management", "การเชื่อมต่อระบบและการจัดการ API"], t: ["Directed internal application integration with NetSuite ERP, validating over 40 API endpoints for data synchronization.", "กำกับการเชื่อมต่อแอปพลิเคชันภายในกับ NetSuite ERP และตรวจสอบ API endpoint กว่า 40 รายการเพื่อการซิงก์ข้อมูล"] },
      { h: ["Team Leadership & AI Adoption", "ภาวะผู้นำทีมและการนำ AI มาใช้"], t: ["Led the Business Analyst team in adopting AI-driven tools to streamline workflows, enhance productivity and accelerate delivery.", "นำทีม Business Analyst นำเครื่องมือที่ใช้ AI มาปรับปรุงขั้นตอนการทำงาน เพิ่มประสิทธิภาพ และเร่งการส่งมอบ"] },
      { h: ["UAT Tracker", "UAT Tracker"], t: ["Built a UAT tracking system with AI coding agents so Saha Pathanapibul users could run and record user acceptance testing of the SPC New ERP (NetSuite): daily test plans, scenario details, result recording and a user guide.", "สร้างระบบ UAT Tracker ด้วย AI coding agent ให้ผู้ใช้ของสหพัฒนภิบูลทำและบันทึกผล UAT ของ SPC New ERP (NetSuite) มีแผนทดสอบรายวัน รายละเอียด scenario การบันทึกผล และคู่มือการใช้งาน"] },
      { h: ["Mentorship & Performance", "การเป็นพี่เลี้ยงและพัฒนาผลงาน"], t: ["Mentored Project Managers and development teams across concurrent projects to cultivate best practices and elevate performance.", "เป็นพี่เลี้ยงให้ Project Manager และทีมพัฒนาในหลายโครงการพร้อมกัน เพื่อสร้างแนวปฏิบัติที่ดีและยกระดับผลงาน"] },
      { h: ["Executive Reporting & Strategic Alignment", "การรายงานผู้บริหารและการสอดประสานเชิงกลยุทธ์"], t: ["Delivered strategic updates to executive leadership, ensuring transparency on project milestones and overall alignment.", "รายงานความคืบหน้าเชิงกลยุทธ์ต่อผู้บริหาร เพื่อความโปร่งใสของ milestone และความสอดคล้องโดยรวม"] },
      { h: ["Risk Management & Issue Resolution", "การบริหารความเสี่ยงและแก้ไขปัญหา"], t: ["Proactively managed project risks and resolved critical blockers to maintain team momentum and safeguard timelines.", "บริหารความเสี่ยงเชิงรุกและแก้ปัญหาคอขวดสำคัญ เพื่อรักษาจังหวะของทีมและกำหนดการ"] },
    ],
  },
  {
    icon: "car",
    title: PM,
    when: ["2024 – 2026", "2024 – 2026"],
    org: ["Toyota Connected Asia Pacific", "Toyota Connected Asia Pacific"],
    bullets: [
      { h: ["End-to-End Project Management", "การบริหารโครงการแบบครบวงจร"], t: ["Delivered 10+ projects within scope, budget and time constraints, directing full-lifecycle system development for the T Connected application.", "ส่งมอบกว่า 10 โครงการตามขอบเขต งบประมาณ และเวลา โดยกำกับการพัฒนาระบบตลอดวงจรของแอป T Connected"] },
      { h: ["Cross-Functional Team Leadership", "การนำทีมข้ามสายงาน"], t: ["Led and coordinated a multidisciplinary team of 2 Business Analysts, 2 System Analysts and 2 external vendor developer teams, optimizing delivery processes.", "นำและประสานทีมสหสาขา ได้แก่ Business Analyst 2 คน System Analyst 2 คน และทีมนักพัฒนาจากเวนเดอร์ภายนอก 2 ทีม พร้อมปรับปรุงกระบวนการส่งมอบ"] },
      { h: ["Stakeholder & Risk Management", "การบริหาร stakeholder และความเสี่ยง"], t: ["Acted as the central liaison for stakeholders, leading decision-making forums while proactively mitigating project risks and minimizing delivery impact.", "เป็นผู้ประสานงานหลักของ stakeholder นำเวทีตัดสินใจ และลดความเสี่ยงของโครงการเชิงรุกเพื่อลดผลกระทบต่อการส่งมอบ"] },
      { h: ["Planning & Delivery Tracking", "การวางแผนและติดตามการส่งมอบ"], t: ["Maintained clear project timelines, dependency maps and progress dashboards to provide transparent visibility and ensure resource alignment.", "ดูแลไทม์ไลน์ แผนผังความเชื่อมโยงของงาน และ dashboard ความคืบหน้า เพื่อให้เห็นภาพชัดเจนและจัดสรรทรัพยากรสอดคล้องกัน"] },
      { h: ["Release Coordination", "การประสานงานการปล่อยระบบ"], t: ["Orchestrated release activities, encompassing readiness checks, deployment planning and post-delivery validation.", "ประสานกิจกรรมการปล่อยระบบ ทั้งการตรวจความพร้อม การวางแผน deploy และการตรวจสอบหลังส่งมอบ"] },
      { h: ["Continuous Delivery Improvement", "การปรับปรุงการส่งมอบอย่างต่อเนื่อง"], t: ["Evaluated delivery outcomes and integrated team feedback to refine workflows and elevate overall project execution effectiveness.", "ประเมินผลการส่งมอบและนำข้อเสนอแนะของทีมมาปรับปรุงขั้นตอนการทำงาน เพื่อยกระดับประสิทธิภาพการดำเนินโครงการ"] },
    ],
  },
  {
    icon: "phone",
    title: ["Software Engineering Team Lead", "หัวหน้าทีมวิศวกรรมซอฟต์แวร์"],
    when: ["2018 – 2024", "2018 – 2024"],
    org: ["True Digital", "True Digital"],
    bullets: [
      { h: ["Technical Delivery & Product Alignment", "การส่งมอบเชิงเทคนิคและการสอดประสานกับผลิตภัณฑ์"], t: ["Led end-to-end technical delivery for the TrueID Payment & Subscription system, collaborating with Product Owners to translate business needs into robust architectural designs.", "นำการส่งมอบเชิงเทคนิคแบบครบวงจรของระบบ TrueID Payment & Subscription ร่วมกับ Product Owner เพื่อแปลงความต้องการทางธุรกิจเป็นสถาปัตยกรรมที่แข็งแรง"] },
      { h: ["Quality Control & CI/CD Automation", "การควบคุมคุณภาพและ CI/CD อัตโนมัติ"], t: ["Integrated CI/CD pipelines with comprehensive automated testing prior to production, catching bugs early during deployment and reducing post-release errors.", "เชื่อม CI/CD pipeline เข้ากับการทดสอบอัตโนมัติก่อนขึ้น production จับบั๊กได้เร็วระหว่าง deploy และลดข้อผิดพลาดหลังปล่อยระบบ"] },
      { h: ["Operational Support & System Stability", "การสนับสนุนการปฏิบัติการและเสถียรภาพของระบบ"], t: ["Engineered monitoring dashboards and served as the Tier-3 escalation point, rapidly resolving production issues for critical revenue-generating services.", "สร้าง dashboard สำหรับ monitoring และเป็นจุด escalation ระดับ Tier-3 แก้ปัญหา production อย่างรวดเร็วให้บริการสำคัญที่สร้างรายได้"] },
      { h: ["Agile Leadership & Execution", "ภาวะผู้นำและการดำเนินงานแบบ Agile"], t: ["Championed Agile/Scrum practices by facilitating sprint ceremonies and refining backlogs, ensuring visibility and steady delivery progress.", "ผลักดันแนวปฏิบัติ Agile/Scrum โดยดำเนินกิจกรรม sprint และปรับปรุง backlog เพื่อให้เห็นความคืบหน้าและส่งมอบอย่างสม่ำเสมอ"] },
      { h: ["Team Leadership & Mentorship", "ภาวะผู้นำทีมและการเป็นพี่เลี้ยง"], t: ["Directed and mentored a cross-functional team of 5 (4 Developers, 1 QA), cultivating technical proficiency, collaboration and adherence to shared delivery standards.", "กำกับและเป็นพี่เลี้ยงทีมข้ามสายงาน 5 คน (นักพัฒนา 4 QA 1) พัฒนาทักษะเทคนิค การทำงานร่วมกัน และการยึดมาตรฐานการส่งมอบร่วมกัน"] },
    ],
  },
  {
    icon: "phone",
    title: ["Senior Frontend Developer", "Senior Frontend Developer"],
    when: ["2017 – 2018", "2017 – 2018"],
    org: ["True Digital", "True Digital"],
    bullets: [
      { h: ["End-to-End Feature Delivery", "การส่งมอบฟีเจอร์แบบครบวงจร"], t: ["Engineered responsive user interfaces and integrated backend microservices for the True iService application, ensuring functionality aligned with business objectives.", "พัฒนาหน้าจอแบบ responsive และเชื่อม microservice ฝั่งหลังบ้านของแอป True iService ให้ใช้งานสอดคล้องกับเป้าหมายทางธุรกิจ"] },
      { h: ["Quality & Production Stability", "คุณภาพและเสถียรภาพบน production"], t: ["Enforced GitFlow version control, validated builds via CI/CD pipelines and resolved production issues with cross-functional teams.", "กำกับการใช้ GitFlow ตรวจสอบ build ผ่าน CI/CD pipeline และแก้ปัญหา production ร่วมกับทีมข้ามสายงาน"] },
      { h: ["Agile Collaboration & Execution", "การทำงานร่วมกันแบบ Agile"], t: ["Partnered closely with Product Owners in Agile environments to refine user stories, ensuring technical scopes were prioritized and features delivered to specification.", "ทำงานใกล้ชิดกับ Product Owner ในทีม Agile เพื่อปรับปรุง user story จัดลำดับขอบเขตเชิงเทคนิค และส่งมอบฟีเจอร์ตามข้อกำหนด"] },
    ],
  },
  {
    icon: "cloud",
    title: ["Product Developer", "Product Developer"],
    when: ["2015 – 2017", "2015 – 2017"],
    org: ["RAPID 4 CLOUD", "RAPID 4 CLOUD"],
    bullets: [
      { h: ["End-to-End Solution Development", "การพัฒนาโซลูชันแบบครบวงจร"], t: ["Executed full-lifecycle product development, translating business requirements into technical solutions; designed relational data models and resolved complex integration issues to keep systems stable.", "พัฒนาผลิตภัณฑ์ตลอดวงจร แปลงความต้องการทางธุรกิจเป็นโซลูชันเชิงเทคนิค ออกแบบโมเดลข้อมูลเชิงสัมพันธ์ และแก้ปัญหาการเชื่อมต่อที่ซับซ้อนเพื่อให้ระบบเสถียร"] },
      { h: ["Quality Assurance & Automated Testing", "การประกันคุณภาพและการทดสอบอัตโนมัติ"], t: ["Engineered an automated testing framework using Selenium WebDriver to validate data accuracy and integration between Oracle Fusion Applications and backend databases, reducing manual testing effort and improving release readiness.", "สร้างเฟรมเวิร์กทดสอบอัตโนมัติด้วย Selenium WebDriver เพื่อตรวจความถูกต้องของข้อมูลและการเชื่อมต่อระหว่าง Oracle Fusion Applications กับฐานข้อมูลหลังบ้าน ลดงานทดสอบด้วยมือและเพิ่มความพร้อมก่อนปล่อยระบบ"] },
    ],
  },
  {
    icon: "megaphone",
    title: ["Campaign Developer", "Campaign Developer"],
    when: ["2014 – 2015", "2014 – 2015"],
    org: ["Digital Alchemy", "Digital Alchemy"],
    bullets: [
      { h: ["Requirement & Campaign Planning", "การรวบรวมความต้องการและวางแผนแคมเปญ"], t: ["Collaborated directly with clients to translate business objectives into technical plans across marketing, data and technical teams.", "ทำงานร่วมกับลูกค้าโดยตรงเพื่อแปลงเป้าหมายทางธุรกิจเป็นแผนเชิงเทคนิคระหว่างทีมการตลาด ข้อมูล และเทคนิค"] },
      { h: ["Workflow Engineering & Delivery", "การออกแบบ workflow และการส่งมอบ"], t: ["Designed and executed complex campaign workflows using IBM Unica, coordinating cross-functional efforts for on-time, high-quality delivery.", "ออกแบบและดำเนิน workflow แคมเปญที่ซับซ้อนด้วย IBM Unica ประสานงานข้ามทีมเพื่อส่งมอบทันเวลาและมีคุณภาพ"] },
      { h: ["Data Logic & Execution Oversight", "ตรรกะข้อมูลและการกำกับการดำเนินงาน"], t: ["Managed end-to-end campaign execution and validated data logic with engineering teams, ensuring consistency between front-end requirements and backend systems.", "ดูแลการดำเนินแคมเปญแบบครบวงจรและตรวจตรรกะข้อมูลร่วมกับทีมวิศวกรรม เพื่อให้ความต้องการหน้าบ้านสอดคล้องกับระบบหลังบ้าน"] },
      { h: ["Quality Assurance & Compliance", "การประกันคุณภาพและการปฏิบัติตามข้อกำหนด"], t: ["Conducted QA on campaign data accuracy and logic, ensuring adherence to data privacy regulations and internal compliance standards.", "ตรวจสอบคุณภาพความถูกต้องของข้อมูลและตรรกะแคมเปญ ให้เป็นไปตามกฎหมายคุ้มครองข้อมูลและมาตรฐานภายในองค์กร"] },
    ],
  },
];
