export interface TeamMember {
  id: string;
  name?: string;                   // Real name — set only for confirmed members
  roleTitle: string;               // Role: Founder / Co-Founder / AI Engineer / etc.
  department: "Founding Leadership" | "AI & Systems Engineering" | "Curriculum & Pedagogy" | "Product & Design";
  isConfirmed: boolean;            // true = confirmed person; false = role unconfirmed
  linkedIn?: string;               // Only for confirmed members
  scope: string;
  responsibilities: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  // ── Founding Leadership ──────────────────────────────────────────────────

  {
    id: "deepak-sagar",
    name: "Deepak Sagar",
    roleTitle: "Founder",
    department: "Founding Leadership",
    isConfirmed: true,
    linkedIn: "https://www.linkedin.com/in/deepak-sagar-6149723ba/",
    scope: "Product Vision & Company Leadership",
    responsibilities: [
      "Defining the NivoraIB product strategy, roadmap, and AI architecture philosophy",
      "Leading relationships with IB Diploma Programme educators and partner schools",
      "Overseeing the teacher-first design invariant and Stage 1 academic audit system",
    ],
  },

  {
    id: "anshuman-singh",
    name: "Anshuman Singh",
    roleTitle: "Co-Founder",
    department: "Founding Leadership",
    isConfirmed: true,
    linkedIn: "https://www.linkedin.com/in/ansuman-singh-663b7a381/",
    scope: "Engineering Leadership & Technical Architecture",
    responsibilities: [
      "Co-leading the technical architecture of the NivoraIB multi-agent workspace",
      "Building core orchestration infrastructure, persistent state, and LangGraph pipelines",
      "Driving engineering quality and deterministic reliability standards across the platform",
    ],
  },

  {
    id: "harsh-raj",
    name: "Harsh Raj",
    roleTitle: "Co-Founder",
    department: "Founding Leadership",
    isConfirmed: true,
    linkedIn: "https://www.linkedin.com/in/harsh-raj-81a133330/",
    scope: "Product Strategy & Growth",
    responsibilities: [
      "Co-leading product development and go-to-market strategy for NivoraIB",
      "Managing partnerships with IB schools and educator communities",
      "Overseeing user experience research and curriculum alignment feedback loops",
    ],
  },

  // ── AI & Systems Engineering ─────────────────────────────────────────────

  {
    id: "gagandeep-singh",
    name: "Gagandeep Singh",
    roleTitle: "AI Engineer",
    department: "AI & Systems Engineering",
    isConfirmed: true,
    linkedIn: "https://www.linkedin.com/in/gagandeep1278/",
    scope: "AI Systems & Multi-Agent Engineering",
    responsibilities: [
      "Designing and building the AI agent pipelines and retrieval-augmented generation systems",
      "Implementing deterministic pedagogical audit checks and verification gate logic",
      "Optimizing long-horizon agent reliability, context scoping, and anti-rot mechanisms",
    ],
  },

  {
    id: "fullstack-tbd",
    name: undefined,
    roleTitle: "Full Stack — To Be Decided",
    department: "AI & Systems Engineering",
    isConfirmed: false,
    linkedIn: undefined,
    scope: "Frontend & Platform Engineering",
    responsibilities: [
      "Building and maintaining the teacher-facing NivoraIB workspace interface",
      "Implementing responsive, accessible UI components and end-to-end workflows",
      "Ensuring platform reliability, performance, and cross-device compatibility",
    ],
  },
];
