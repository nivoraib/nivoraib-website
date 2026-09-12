export interface CareerRole {
  id: string;
  title: string;
  department: "AI & ML" | "Frontend & Product" | "Curriculum & Pedagogy" | "Systems Engineering";
  type: string;
  location: string;
  summary: string;
  focusAreas: string[];
}

export const CAREER_ROLES: CareerRole[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI / Agent Systems Engineer",
    department: "AI & ML",
    type: "Full-Time",
    location: "Remote / Hybrid — New Delhi, India",
    summary: "Help architect and optimize multi-agent LangGraph workflows that solve context rot and execute long-horizon academic tasks.",
    focusAreas: [
      "Agent harness engineering and external state persistence",
      "Retrieval-Augmented Generation (RAG) over complex curriculum taxonomies",
      "Independent verification and self-correcting graph topologies",
    ],
  },
  {
    id: "lead-frontend-architect",
    title: "Staff Frontend Architect",
    department: "Frontend & Product",
    type: "Full-Time",
    location: "Remote / Hybrid — New Delhi, India",
    summary: "Lead the UI/UX architecture of our high-density teacher workspace, prioritizing responsiveness, clarity, and cognitive flow.",
    focusAreas: [
      "Next.js, TypeScript, and state management for interactive document editing",
      "Real-time audit visualization and evidence cards",
      "Accessible design systems tailored for high-workload educators",
    ],
  },
  {
    id: "ib-pedagogy-lead",
    title: "Lead IB Curriculum & Subject Specialist",
    department: "Curriculum & Pedagogy",
    type: "Full-Time / Advisory",
    location: "Remote",
    summary: "Bridge authoritative IB Diploma Programme pedagogical standards into programmatic verification rules and agent prompts.",
    focusAreas: [
      "Subject guide mapping across Sciences, Mathematics, and Humanities",
      "Internal Assessment (IA) criteria modeling and moderation rubric codification",
      "Developing benchmark suites for educational accuracy and command term fidelity",
    ],
  },
  {
    id: "platform-security-engineer",
    title: "Platform & Cloud Security Engineer",
    department: "Systems Engineering",
    type: "Full-Time",
    location: "Remote / Hybrid — New Delhi, India",
    summary: "Build bulletproof multi-tenant infrastructure protecting student and teacher data across international school boundaries.",
    focusAreas: [
      "Strict data isolation and tenant boundary enforcement",
      "PostgreSQL persistence, Redis caching, and vector indexing operations",
      "Observability pipelines with OpenTelemetry for process-level monitoring",
    ],
  },
];
