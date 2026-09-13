import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources — Research Briefs & IB Pedagogy Insights",
  description: "Explore how NivoraIB adapts long-horizon AI agent research to the high-stakes domain of the International Baccalaureate Diploma Programme. Research briefs, reliability notes, and pedagogy insights.",
  alternates: { canonical: "https://www.nivoraib.com/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="flex flex-col space-y-16 sm:space-y-20 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border-brand-soft/50 dark:border-zinc-700 inline-flex items-center gap-1.5">
              Knowledge Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-navy-900 dark:text-zinc-100">
            Research Briefs, Reliability Notes &amp; IB Pedagogy
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            Explore how we adapt long-horizon AI agent research to the high-stakes domain of the International Baccalaureate Diploma Programme.
          </p>
        </div>
      </section>

      <ResourcesClient />
    </div>
  );
}
