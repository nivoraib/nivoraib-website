export interface FeatureItem {
  id: string;
  title: string;
  category: "planning" | "assessment" | "ib-core" | "workspace" | "reliability";
  badge?: string;
  summary: string;
  details: string[];
  ctaText?: string;
  ctaHref?: string;
  icon: string;
}

export const FEATURES_DATA: FeatureItem[] = [
  // 1. Academic Planning
  {
    id: "unit-planning",
    title: "Unit Planner",
    category: "planning",
    badge: "Curriculum-Aligned",
    summary: "Create multi-week IB DP inquiry units grounded in official subject guides, ATL skills, and conceptual lenses.",
    details: [
      "Automatic mapping to official IB syllabus learning outcomes",
      "Integrated conceptual understandings and global contexts",
      "Explicit ATL (Approaches to Teaching and Learning) skill ladders",
      "Seamless export to Word, PDF, or school curriculum formats"
    ],
    ctaText: "Explore Unit Planning",
    ctaHref: "/dashboard?workflow=unit-planner",
    icon: "Layers",
  },
  {
    id: "lesson-planning",
    title: "Lesson Planner",
    category: "planning",
    badge: "Time-Audited",
    summary: "Plan 45 to 90-minute classes with minute-by-minute activity pacing and built-in differentiated scaffolding.",
    details: [
      "Rigorous timing arithmetic validation (sum of activities = total period)",
      "Tiered differentiation for standard, EAL, SEN, and extension students",
      "Embedded formative checks with authoritative IB command terms",
      "Instant teacher script prompts and lab safety briefings"
    ],
    ctaText: "Plan a Lesson",
    ctaHref: "/dashboard?workflow=lesson-planner",
    icon: "Clock",
  },
  {
    id: "curriculum-sequencing",
    title: "Curriculum Mapping & Sequencing",
    category: "planning",
    summary: "Ensure 2-year DP syllabus coverage across Higher Level (HL) and Standard Level (SL) cohorts without topic collision.",
    details: [
      "Cohort timeline tracking across DP Year 1 and Year 2",
      "Prerequisite concept dependency mapping",
      "Cross-curricular touchpoints with TOK and CAS"
    ],
    ctaText: "View Curriculum Mapping",
    ctaHref: "/platform#curriculum",
    icon: "Network",
  },

  // 2. Assessment
  {
    id: "assessment-generator",
    title: "Assessment Generator",
    category: "assessment",
    badge: "Official Command Terms",
    summary: "Generate summative quizzes, semester exams, and mock tests with verifiable mark schemes and examiner notes.",
    details: [
      "Paper 1, Paper 2, and Paper 3 authentic styling",
      "Official command term taxonomy enforcement (e.g. state vs determine vs evaluate)",
      "Full markscheme generation with alternative acceptable answers",
      "Strict mark allocation arithmetic validation"
    ],
    ctaText: "Generate an Assessment",
    ctaHref: "/dashboard?workflow=assessment",
    icon: "FileCheck2",
  },
  {
    id: "question-bank",
    title: "Dynamic Question Bank",
    category: "assessment",
    summary: "A living repository of structured items tagged by cognitive level (AO1, AO2, AO3), difficulty, and syllabus code.",
    details: [
      "Multiple-choice, short-response, and extended essay prompts",
      "Annotated worked solutions with teacher guidance notes",
      "Instant test composition by dragging items into exam sets"
    ],
    ctaText: "Browse Question Bank",
    ctaHref: "/dashboard?workflow=question-bank",
    icon: "Database",
  },
  {
    id: "evaluation-engine",
    title: "Pedagogical Evaluation",
    category: "assessment",
    badge: "Audit Telemetry",
    summary: "Inspect candidate materials against pedagogical standards before they ever reach the student.",
    details: [
      "Verification of syllabus statement coverage",
      "Cognitive balance verification (preventing over-reliance on basic recall)",
      "Constructive feedback for teacher refinement"
    ],
    ctaText: "Learn About Evaluation",
    ctaHref: "/platform#validation",
    icon: "ShieldAlert",
  },

  // 3. IB Workflows
  {
    id: "ia-assistant",
    title: "Internal Assessment (IA) Assistant",
    category: "ib-core",
    badge: "Criterion-Referenced",
    summary: "Guide students through inquiry-based IA phases while maintaining strict academic integrity boundaries.",
    details: [
      "Research question refinement using IB feasibility criteria",
      "Criterion-by-criterion formative scaffolding (Criteria A through E)",
      "Ethical guidelines and safety protocol checks",
      "Zero direct ghostwriting safeguard — maintains teacher and student voice"
    ],
    ctaText: "Explore IA Support",
    ctaHref: "/dashboard?workflow=ia-assistant",
    icon: "GraduationCap",
  },
  {
    id: "ee-guide",
    title: "Extended Essay (EE) Guide",
    category: "ib-core",
    summary: "Support the 4,000-word independent research process across all 3 compulsory RPPF reflection milestones.",
    details: [
      "Structured prompt generation for the 3 formal reflection sessions",
      "Source evaluation matrices (OPCVL methodology)",
      "Criterion A to E rubric checklists for draft moderation"
    ],
    ctaText: "View EE Workflow",
    ctaHref: "/features#ib-core",
    icon: "BookOpen",
  },
  {
    id: "tok-guide",
    title: "TOK Integration Guide",
    category: "ib-core",
    summary: "Weave Theory of Knowledge seamlessly into subject teaching and scaffold the TOK Exhibition and Essay.",
    details: [
      "Direct integration of Knowledge Questions into STEM and Humanities units",
      "Scaffolding for the 35 official TOK exhibition prompts",
      "Formative feedback aligned to official TOK assessment rubrics"
    ],
    ctaText: "View TOK Integration",
    ctaHref: "/features#ib-core",
    icon: "Sparkles",
  },

  // 4. Teacher Workspace
  {
    id: "resource-library",
    title: "Curated Resource Library",
    category: "workspace",
    summary: "Store, index, and retrieve teacher documents, syllabus guides, lab sheets, and school guidelines in one place.",
    details: [
      "Semantic indexing of uploaded course documents",
      "Instant context injection into generation workflows",
      "Cross-cohort department sharing and version history"
    ],
    ctaText: "Open Resource Library",
    ctaHref: "/dashboard?workflow=resource-library",
    icon: "FolderSearch",
  },
  {
    id: "reusable-memory",
    title: "Previous Work & Scoped Memory",
    category: "workspace",
    badge: "Zero Context Rot",
    summary: "Keep historical lesson plans and departmental standards readily available without prompt bloat.",
    details: [
      "Scoped subtask context prevents AI drift and hallucinations",
      "Recall past successful lab activities and unit assessments",
      "Department-wide synchronization of grading standards"
    ],
    ctaText: "Discover Workspace Memory",
    ctaHref: "/platform#memory",
    icon: "HardDrive",
  },

  // 5. Reliability
  {
    id: "deterministic-validation",
    title: "5 Deterministic Validation Checks",
    category: "reliability",
    badge: "Zero-Token Gate",
    summary: "Every generated artifact passes automated programmatic checks before being presented for teacher review.",
    details: [
      "IB Command-Term exact taxonomy verification",
      "Syllabus statement coverage against official subject guides",
      "Activity timing arithmetic verification",
      "Assessment criteria and mark weighting verification",
      "Pydantic strict schema and JSON typing validation"
    ],
    ctaText: "Understand Our Auditing",
    ctaHref: "/platform#validation",
    icon: "ShieldCheck",
  },
  {
    id: "teacher-approval-gate",
    title: "Teacher In The Loop (Approval Gate)",
    category: "reliability",
    badge: "Teacher Decides",
    summary: "AI generates candidates; the system validates structure; only the teacher approves publication.",
    details: [
      "Explicit state transitions: GENERATED -> VALIDATING -> VALIDATED -> TEACHER REVIEW -> PUBLISHED",
      "Full audit trail visibility showing what passed and what needs review",
      "Granular inline editing and single-click artifact regeneration"
    ],
    ctaText: "See State Transitions",
    ctaHref: "/how-it-works#invariant",
    icon: "UserCheck",
  }
];
