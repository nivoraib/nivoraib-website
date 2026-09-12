export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export const MAIN_NAV: NavItem[] = [
  {
    label: "Platform",
    href: "/platform",
    description: "The AI-native architecture designed for IB Diploma educators",
  },
  {
    label: "Features",
    href: "/features",
    description: "Specialized workflows for unit planning, assessment, and internal assessment",
  },
  {
    label: "How It Works",
    href: "/how-it-works",
    description: "From teacher request to verified, curriculum-grounded output",
  },
  {
    label: "Product Preview",
    href: "/dashboard",
    description: "Explore the interactive workspace preview and verification engine",
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Why we are building an AI workspace for IB teachers" },
      { label: "Team", href: "/team", description: "Founding structure and multidisciplinary group" },
      { label: "Careers", href: "/careers", badge: "Hiring", description: "Join our founding engineering, AI, and curriculum team" },
      { label: "Roadmap", href: "/roadmap", description: "Stage 1 reliability through Stage 2 pedagogical evaluation" },
      { label: "Contact", href: "/contact", description: "Schedule a walkthrough or reach our team" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Research briefs, reliability engineering notes, and pedagogy articles",
  },
];

export const FOOTER_NAV = {
  product: [
    { label: "Platform Overview", href: "/platform" },
    { label: "Feature Matrix", href: "/features" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Stage 1 Roadmap", href: "/roadmap" },
  ],
  reliability: [
    { label: "Five Context Layers", href: "/platform#context-layers" },
    { label: "Deterministic Auditing", href: "/features#reliability" },
    { label: "Core Invariant", href: "/how-it-works#invariant" },
    { label: "Teacher Approval Gate", href: "/platform#human-in-the-loop" },
  ],
  company: [
    { label: "About NivoraIB", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers & Openings", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  resources: [
    { label: "Research to Product", href: "/resources" },
    { label: "IB Curriculum Alignment", href: "/resources" },
    { label: "Reliability Engineering", href: "/resources" },
    { label: "Product Updates", href: "/resources" },
  ],
};
