import RoadmapClient from "./RoadmapClient";

export const metadata = {
  title: "Roadmap — NivoraIB Product Evolution",
  description: "Explore the NivoraIB technical and pedagogical roadmap: what is built today in Stage 1, what is in active development for Stage 2, and future exploration areas.",
  alternates: { canonical: "https://www.nivoraib.com/roadmap" },
};

export default function RoadmapPage() {
  return (
    <div className="flex flex-col space-y-20 sm:space-y-24 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 justify-center">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 border-brand-soft/50 dark:border-zinc-700 inline-flex items-center gap-1.5">
              Product Evolution
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-navy-900 dark:text-zinc-100">
            The Technical &amp; Pedagogical Roadmap
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
            A transparent breakdown of what is built today in Stage 1, what is in active architectural development for Stage 2, and what we are exploring for the future.
          </p>
        </div>
      </section>

      <RoadmapClient />
    </div>
  );
}
