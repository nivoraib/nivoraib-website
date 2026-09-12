export interface RoadmapStage {
  stageNumber: string;
  stageName: string;
  status: "Now — In Active Implementation" | "Next — Design & Architecture" | "Future — Planned Exploration";
  badgeColor: string;
  timeframe: string;
  headline: string;
  description: string;
  deliverables: {
    title: string;
    description: string;
    isKeyDifferentiator?: boolean;
  }[];
}

export const ROADMAP_DATA: RoadmapStage[] = [
  {
    stageNumber: "Stage 1",
    stageName: "Deterministic Reliability & Core Workflows",
    status: "Now — In Active Implementation",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    timeframe: "Current Focus (2026)",
    headline: "Zero-Token Deterministic Auditing & Teacher Invariant",
    description: "Establishing the core teacher-in-the-loop workspace, multi-agent orchestration, and programmatic validation gates for DP academic tasks.",
    deliverables: [
      {
        title: "The Core Reliability Invariant",
        description: "Hard enforcement of Generated ≠ Validated ≠ Teacher Approved ≠ Published across all agent transitions.",
        isKeyDifferentiator: true,
      },
      {
        title: "5 Deterministic Pedagogical Audit Checks",
        description: "Zero-token programmatic checks for IB command terms, syllabus statement coverage, timing arithmetic, assessment criteria, and Pydantic schema validation.",
        isKeyDifferentiator: true,
      },
      {
        title: "Per-Subtask Context Scoping (Anti-Context-Rot)",
        description: "Decoupled prompt harnesses feeding agents only current contracts, verified prior outputs, and scoped syllabus chunks.",
      },
      {
        title: "Stage 1 Academic Workflows",
        description: "Interactive surfaces for Unit Planner, Lesson Planner, Assessment Generator, Question Bank, IA Assistant, and Resource Library.",
      },
      {
        title: "Persistent Task State Architecture",
        description: "Durably tracking subtask progress, requirements, and audit reports so teacher progress is never lost.",
      },
    ],
  },
  {
    stageNumber: "Stage 2",
    stageName: "Pedagogical Auditing & Step Diagnostics",
    status: "Next — Design & Architecture",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
    timeframe: "Next Horizon (Late 2026 / Early 2027)",
    headline: "Model-Based Evaluation & Telemetry Dashboards",
    description: "Augmenting deterministic checks with model-based pedagogical auditors inspecting conceptual depth, cognitive progression, and TOK integration.",
    deliverables: [
      {
        title: "Independent Pedagogical Auditor Node",
        description: "Secondary LLM auditor running in an isolated read-only context evaluating nuanced pedagogical progression.",
        isKeyDifferentiator: true,
      },
      {
        title: "Step-Level Telemetry & Traceability",
        description: "Process-level diagnostic tracking via OpenTelemetry to detect early subtle error cascades in long units.",
      },
      {
        title: "Needs-Review Escalation Interface",
        description: "When an agent fails audit thresholds, structured pedagogical diff cards highlight specific areas needing human decision.",
      },
      {
        title: "Departmental Memory & Standard Harmonization",
        description: "Cross-cohort alignment tools allowing departmental heads to review grading standards across parallel DP classes.",
      },
    ],
  },
  {
    stageNumber: "Stage 3",
    stageName: "Collaborative Intelligence & Multi-Campus Scale",
    status: "Future — Planned Exploration",
    badgeColor: "bg-slate-100 text-slate-700 border-slate-200",
    timeframe: "Future Roadmap",
    headline: "Whole-School Academic Synthesis",
    description: "Extending the workspace across interdisciplinary DP teams, multi-campus school groups, and multilingual curriculum materials.",
    deliverables: [
      {
        title: "Interdisciplinary Unit (IDU) Co-Planning",
        description: "Simultaneous co-creation graphs supporting Sciences, Humanities, and Language teachers building cross-curricular units.",
      },
      {
        title: "Multilingual Grounding",
        description: "Direct alignment across English, Spanish, and French official IB documentation and teacher materials.",
      },
      {
        title: "School-Wide Curriculum Auditing",
        description: "Instant visibility for DP Coordinators on 2-year syllabus completion, ATL coverage, and assessment spacing.",
      },
    ],
  },
];
