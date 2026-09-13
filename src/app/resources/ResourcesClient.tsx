"use client";

import React, { useState } from "react";
import ResourceCard from "@/components/ResourceCard";
import CTASection from "@/components/CTASection";
import { RESOURCES_DATA, ResourceItem } from "@/data/resources";
import { Search, ShieldCheck } from "lucide-react";

export default function ResourcesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Insights" },
    { id: "Research", label: "Research Briefs" },
    { id: "Engineering & Reliability", label: "Engineering & Reliability" },
    { id: "IB Pedagogy", label: "IB Pedagogy" },
    { id: "Product Updates", label: "Product Updates" },
  ];

  const filteredResources = RESOURCES_DATA.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* 2. Search & Category Filters */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? "bg-navy-900 dark:bg-white text-white dark:text-zinc-950 shadow-sm"
                    : "bg-slate-100 dark:bg-zinc-850 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800 border border-transparent dark:border-zinc-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-500 dark:text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search topics or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 dark:border-zinc-700 text-xs text-navy-900 dark:text-zinc-100 placeholder:text-slate-500 dark:placeholder:text-zinc-400 outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20 transition-all bg-white dark:bg-zinc-850"
            />
          </div>
        </div>

        {/* Resources Bento Grid */}
        {filteredResources.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-zinc-850/60 rounded-2xl border border-slate-200 dark:border-zinc-800">
            <p className="text-sm text-slate-500 dark:text-zinc-400">
              No articles or briefs found matching your filter.
            </p>
          </div>
        ) : filteredResources.length === 5 ? (
          /* Intentional 6-Column Bento Composition for 5 Cards: Row 1 = 2x Span 3, Row 2 = 3x Span 2 */
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* Top Row: 2 Anchor Research Briefs (50% / 50%) */}
            {filteredResources.slice(0, 2).map((res) => (
              <div key={res.id} className="md:col-span-3 flex flex-col">
                <ResourceCard resource={res} featured={true} />
              </div>
            ))}
            {/* Bottom Row: 3 Focus Articles (33.3% / 33.3% / 33.3%) */}
            {filteredResources.slice(2, 5).map((res) => (
              <div key={res.id} className="md:col-span-2 flex flex-col">
                <ResourceCard resource={res} />
              </div>
            ))}
          </div>
        ) : (
          /* Dynamically Balanced Grid for Filtered Counts (1, 2, 3, or 4) */
          <div
            className={`grid grid-cols-1 ${
              filteredResources.length === 1
                ? "max-w-xl mx-auto"
                : filteredResources.length === 2
                ? "md:grid-cols-2"
                : filteredResources.length === 4
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            } gap-6`}
          >
            {filteredResources.map((res) => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        )}
      </section>

      {/* 3. Featured Article Deep Dive: Research to Product Alignment */}
      <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="bg-white dark:bg-zinc-850 text-navy-900 dark:text-zinc-100 rounded-2xl p-8 sm:p-10 space-y-6 shadow-card dark:shadow-xl border border-slate-200/90 dark:border-zinc-700">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-dark dark:text-zinc-300">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            Executive Architecture Brief
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100">
            The Core Hypothesis: Harness Engineering Over Foundation Model Hype
          </h3>

          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            Recent empirical literature shows that changing the execution harness alone—introducing decoupled state managers, scoped context prompts, and independent read-only auditing—improved task completion significantly on identical underlying model weights.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-750 font-mono text-xs text-emerald-800 dark:text-emerald-300 space-y-1">
            <div className="text-slate-500 dark:text-zinc-400 text-[11px]">// Proven Systems Engineering Principle</div>
            <div>Reliable Agent Behavior is a Systems-Level Property, Not Just a Prompt.</div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            For NivoraIB, investing in deterministic validation, persistent state, and teacher-centric review is how we make generative AI clinically useful in high-stakes IB classrooms.
          </p>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        badgeText="Knowledge Hub"
        title="Stay Informed on NivoraIB Research &amp; Product Updates"
        subtitle="Schedule a 15-minute briefing with our founding engineering and curriculum team."
        primaryCtaText="Contact Team"
        primaryCtaHref="/contact"
        secondaryCtaText="View Roadmap"
        secondaryCtaHref="/roadmap"
      />
    </>
  );
}
