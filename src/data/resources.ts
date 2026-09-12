export interface ResourceItem {
  id: string;
  title: string;
  category: "Research" | "Engineering & Reliability" | "IB Pedagogy" | "Product Updates";
  readTime: string;
  date: string;
  summary: string;
  tags: string[];
  slug: string;
}

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: "research-horizon-gap",
    title: "Closing the Horizon Gap in AI-Assisted Teaching",
    category: "Research",
    readTime: "6 min read",
    date: "September 2026",
    summary: "Why single-turn LLM generation fails in multi-week unit planning, and how decoupled harness orchestration prevents context rot.",
    tags: ["Long-Horizon Tasks", "Context Rot", "Harness Engineering"],
    slug: "closing-the-horizon-gap",
  },
  {
    id: "five-context-layers",
    title: "The Five Context Layers of Curriculum-Grounded AI",
    category: "IB Pedagogy",
    readTime: "5 min read",
    date: "September 2026",
    summary: "A breakdown of how NivoraIB grounds generation across the official IB Subject Guide, teacher documents, school policies, and previous work.",
    tags: ["Curriculum Grounding", "RAG", "IB DP"],
    slug: "five-context-layers-explained",
  },
  {
    id: "deterministic-auditing-invariant",
    title: "Generated ≠ Validated: Engineering Deterministic Pedagogical Gates",
    category: "Engineering & Reliability",
    readTime: "8 min read",
    date: "September 2026",
    summary: "How zero-token programmatic checks verify command terms, timing arithmetic, and syllabus statements before teacher review.",
    tags: ["Reliability", "Deterministic Auditing", "LangGraph"],
    slug: "deterministic-auditing-invariant",
  },
  {
    id: "ia-supervision-integrity",
    title: "Scaffolding Internal Assessments Without Compromising Student Voice",
    category: "IB Pedagogy",
    readTime: "4 min read",
    date: "August 2026",
    summary: "Balancing formative feedback and inquiry questions while strictly maintaining the zero-ghostwriting invariant for IB DP coursework.",
    tags: ["Internal Assessment", "Academic Integrity", "Scaffolding"],
    slug: "ia-supervision-integrity",
  },
  {
    id: "stage-1-architecture-brief",
    title: "NivoraIB Stage 1 Architecture & Execution Overview",
    category: "Product Updates",
    readTime: "5 min read",
    date: "August 2026",
    summary: "An overview of Stage 1 execution milestones, multi-agent workspace topology, and teacher-in-the-loop state transitions.",
    tags: ["Product Roadmap", "Architecture", "Stage 1"],
    slug: "stage-1-architecture-brief",
  }
];
