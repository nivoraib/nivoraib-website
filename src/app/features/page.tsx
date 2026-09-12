import React from "react";
import Link from "next/link";
import { FEATURES_DATA, FeatureItem } from "@/data/features";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import { Layers, FileCheck2, GraduationCap, FolderSearch, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Features — Academic Workflows for IB DP Teachers",
  description: "Explore the complete feature suite of Nivoraib: Unit Planner, Lesson Planner, Assessment Generator, IA Assistant, TOK Guide, and Deterministic Validation.",
};

export default function FeaturesPage() {
  const categories = [
    { id: "planning", label: "Academic Planning", icon: Layers, desc: "Syllabus mapping, inquiry unit planning, and paced 90-minute lesson plans." },
    { id: "assessment", label: "Assessment & Item Generation", icon: FileCheck2, desc: "Summative Paper 1/2/3 tests, question banks, and verified markschemes." },
    { id: "ib-core", label: "IB DP Core & Moderation", icon: GraduationCap, desc: "Scaffolding for Internal Assessments (IA), Extended Essay (EE), and TOK integration." },
    { id: "workspace", label: "Teacher Workspace & Scoped Memory", icon: FolderSearch, desc: "Resource libraries, classroom assistant, and persistent cohort history." },
    { id: "reliability", label: "Deterministic Reliability & Auditing", icon: ShieldCheck, desc: "Programmatic audit checks and teacher-in-the-loop signoff invariants." },
  ];

  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Product Capabilities"
          title="Specialized Features for the Academic Rigor of IB DP"
          subtitle="Every feature is designed around how experienced IB teachers plan, instruct, and assess—grounded by official subject guides and audited before classroom delivery."
        />
      </section>

      {/* 2. Categorized Feature Sections */}
      {categories.map((cat) => {
        const items = FEATURES_DATA.filter((f) => f.category === cat.id);
        const Icon = cat.icon;

        return (
          <section key={cat.id} id={cat.id} className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-8 scroll-mt-24">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-zinc-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border border-brand-soft/40 dark:border-zinc-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy-900 dark:text-zinc-100">
                    {cat.label}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-zinc-400">
                  {cat.desc}
                </p>
              </div>

              <span className="text-xs font-mono text-slate-500 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-850 px-3 py-1 rounded-full border border-slate-200 dark:border-zinc-700 self-start sm:self-auto">
                {items.length} {items.length === 1 ? "Capability" : "Capabilities"}
              </span>
            </div>

            <div
              className={`grid grid-cols-1 ${
                items.length === 2
                  ? "md:grid-cols-2"
                  : items.length === 4
                  ? "md:grid-cols-2"
                  : "md:grid-cols-2 lg:grid-cols-3"
              } gap-6`}
            >
              {items.map((feat) => (
                <FeatureCard key={feat.id} feature={feat} />
              ))}
            </div>
          </section>
        );
      })}

      {/* 3. CTA */}
      <CTASection
        badgeText="Product Capabilities"
        title="Experience the NivoraIB Academic Workflows"
        subtitle="Join IB Diploma coordinators and educators experiencing curriculum-grounded planning and assessment generation."
        primaryCtaText="Explore the Platform"
        primaryCtaHref="/dashboard"
        secondaryCtaText="Talk to Us"
        secondaryCtaHref="/contact"
      />
    </div>
  );
}
