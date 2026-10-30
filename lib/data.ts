export type Job = {
  title: string;
  when: string;
  org: string;
  bullets: [string, string][];
};

export const jobs: Job[] = [
  {
    title: "Project Manager",
    when: "2026 – Present",
    org: "Always Pioneering Innovation · client Saha Pathanapibul",
    bullets: [
      ["ERP Framework Standardization", "Established end-to-end ERP project frameworks for Saha Pathanapibul, from planning to deployment."],
      ["Stakeholder & Vendor Coordination", "Bridged communication between internal teams, business users and NetSuite vendors to align technical delivery with business needs."],
      ["System Integration & API Management", "Directed internal application integration with NetSuite ERP, validating over 40 API endpoints for data synchronization."],
      ["Team Leadership & AI Adoption", "Led the Business Analyst team in adopting AI-driven tools to streamline workflows, enhance productivity and accelerate delivery."],
      ["Mentorship & Performance", "Mentored Project Managers and development teams across concurrent projects to cultivate best practices and elevate performance."],
      ["Executive Reporting & Strategic Alignment", "Delivered strategic updates to executive leadership, ensuring transparency on project milestones and overall alignment."],
      ["Risk Management & Issue Resolution", "Proactively managed project risks and resolved critical blockers to maintain team momentum and safeguard timelines."],
    ],
  },
  {
    title: "Project Manager",
    when: "2024 – 2026",
    org: "Toyota Connected Asia Pacific",
    bullets: [
      ["End-to-End Project Management", "Delivered 10+ projects within scope, budget and time constraints, directing full-lifecycle system development for the T Connected application."],
      ["Cross-Functional Team Leadership", "Led and coordinated a multidisciplinary team of 2 Business Analysts, 2 System Analysts and 2 external vendor developer teams, optimizing delivery processes."],
      ["Stakeholder & Risk Management", "Acted as the central liaison for stakeholders, leading decision-making forums while proactively mitigating project risks and minimizing delivery impact."],
      ["Planning & Delivery Tracking", "Maintained clear project timelines, dependency maps and progress dashboards to provide transparent visibility and ensure resource alignment."],
      ["Release Coordination", "Orchestrated release activities, encompassing readiness checks, deployment planning and post-delivery validation."],
      ["Continuous Delivery Improvement", "Evaluated delivery outcomes and integrated team feedback to refine workflows and elevate overall project execution effectiveness."],
    ],
  },
  {
    title: "Software Engineering Team Lead",
    when: "2018 – 2024",
    org: "True Digital",
    bullets: [
      ["Technical Delivery & Product Alignment", "Led end-to-end technical delivery for the TrueID Payment & Subscription system, collaborating with Product Owners to translate business needs into robust architectural designs."],
      ["Quality Control & CI/CD Automation", "Integrated CI/CD pipelines with comprehensive automated testing prior to production, catching bugs early during deployment and reducing post-release errors."],
      ["Operational Support & System Stability", "Engineered monitoring dashboards and served as the Tier-3 escalation point, rapidly resolving production issues to maintain 99.99% uptime for critical revenue-generating services."],
      ["Agile Leadership & Execution", "Championed Agile/Scrum practices by facilitating sprint ceremonies and refining backlogs, ensuring visibility and steady delivery progress."],
      ["Team Leadership & Mentorship", "Directed and mentored a cross-functional team of 5 (4 Developers, 1 QA), cultivating technical proficiency, collaboration and adherence to shared delivery standards."],
    ],
  },
  {
    title: "Senior Frontend Developer",
    when: "2017 – 2018",
    org: "True Digital",
    bullets: [
      ["End-to-End Feature Delivery", "Engineered responsive user interfaces and integrated backend microservices for the True iService application, ensuring functionality aligned with business objectives."],
      ["Quality & Production Stability", "Enforced GitFlow version control, validated builds via CI/CD pipelines and resolved production issues with cross-functional teams."],
      ["Agile Collaboration & Execution", "Partnered closely with Product Owners in Agile environments to refine user stories, ensuring technical scopes were prioritized and features delivered to specification."],
    ],
  },
  {
    title: "Product Developer",
    when: "2015 – 2017",
    org: "RAPID 4 CLOUD",
    bullets: [
      ["End-to-End Solution Development", "Executed full-lifecycle product development, translating business requirements into technical solutions; designed relational data models and resolved complex integration issues to keep systems stable."],
      ["Quality Assurance & Automated Testing", "Engineered an automated testing framework using Selenium WebDriver to validate data accuracy and integration between Oracle Fusion Applications and backend databases, reducing manual testing effort and improving release readiness."],
    ],
  },
  {
    title: "Campaign Developer",
    when: "2014 – 2015",
    org: "Digital Alchemy",
    bullets: [
      ["Requirement & Campaign Planning", "Collaborated directly with clients to translate business objectives into technical plans across marketing, data and technical teams."],
      ["Workflow Engineering & Delivery", "Designed and executed complex campaign workflows using IBM Unica, coordinating cross-functional efforts for on-time, high-quality delivery."],
      ["Data Logic & Execution Oversight", "Managed end-to-end campaign execution and validated data logic with engineering teams, ensuring consistency between front-end requirements and backend systems."],
      ["Quality Assurance & Compliance", "Conducted QA on campaign data accuracy and logic, ensuring adherence to data privacy regulations and internal compliance standards."],
    ],
  },
];

export type Shot = { cls: "br" | "ph"; src: string; alt: string; label: string; height?: number };

export type Project = {
  title: string;
  org: string;
  badge: string;
  tags: string[]; // filter categories
  c1: string;
  c2: string;
  delay: "" | "d1" | "d2";
  body: string;
  chips: string[];
  /** two or more shots are laid out side by side */
  shots: Shot[];
};

export const projects: Project[] = [
  {
    title: "True iService",
    org: "True Digital · 2017 – 2018",
    badge: "Web + App",
    tags: ["web", "mobile"],
    c1: "#7c1d1d",
    c2: "#be123c",
    delay: "",
    body: "Self-service web and mobile app. Built responsive interfaces and integrated backend microservices; enforced GitFlow and CI/CD build validation.",
    chips: ["Frontend", "Microservices", "CI/CD", "Agile"],
    shots: [
      { cls: "br", src: "/img/true-iservice-web.jpg", alt: "True iService web", label: "True iService<br>Web" },
      { cls: "ph", src: "/img/true-iservice-app.jpg", alt: "True iService app", label: "True iService<br>App" },
    ],
  },
  {
    title: "TrueID My Account",
    org: "True Digital",
    badge: "Web + App",
    tags: ["web", "mobile"],
    c1: "#9a1b1b",
    c2: "#ea580c",
    delay: "d1",
    body: "Account experience within the TrueID ecosystem, alongside the TrueID Payment & Subscription platform that sustained 99.99% uptime.",
    chips: ["Product Owners", "Payments", "Monitoring", "Tier-3 support"],
    shots: [
      { cls: "br", src: "/img/trueid-myaccount-web.jpg", alt: "TrueID My Account", label: "TrueID<br>My Account" },
      { cls: "ph", src: "/img/trueid-myaccount-app.jpg", alt: "TrueID app", label: "TrueID<br>App" },
    ],
  },
  {
    title: "T Connected",
    org: "Toyota Connected Asia Pacific · 2024 – 2026",
    badge: "Mobile app",
    tags: ["mobile"],
    c1: "#7f1d1d",
    c2: "#111827",
    delay: "d2",
    body: "Connected-car application. Directed full-lifecycle delivery across 2 BAs, 2 SAs and 2 external vendor developer teams, within scope, budget and time.",
    chips: ["Program delivery", "Vendors", "Releases", "Stakeholders"],
    shots: [
      { cls: "ph", src: "/img/t-connected-1.jpg", alt: "T Connected app", label: "T Connected" },
      { cls: "ph", src: "/img/t-connected-2.jpg", alt: "T Connected app screen 2", label: "Remote &<br>Vehicle", height: 178 },
    ],
  },
  {
    title: "NetSuite ERP Integration",
    org: "Always Pioneering Innovation · Saha Pathanapibul · 2026 – Present",
    badge: "ERP",
    tags: ["erp", "web"],
    c1: "#0e3a40",
    c2: "#1e3a8a",
    delay: "",
    body: "End-to-end ERP project framework and integration of internal applications with NetSuite, validating 40+ API endpoints with vendors and business users.",
    chips: ["NetSuite", "REST API", "Vendor mgmt", "Governance"],
    shots: [{ cls: "br", src: "/img/netsuite-integration.jpg", alt: "NetSuite integration", label: "NetSuite ERP<br>Integration" }],
  },
];

export const filters = [
  ["all", "All"],
  ["web", "Web"],
  ["mobile", "Mobile"],
  ["erp", "ERP"],
] as const;
