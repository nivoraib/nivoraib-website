import React from "react";
import Link from "next/link";
import { ResourceItem } from "@/data/resources";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";

export default function ResourceCard({
  resource,
  featured = false,
}: {
  resource: ResourceItem;
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group h-full ${
        featured
          ? "border-brand-soft/80 dark:border-brand-indigo/40 hover:border-brand-indigo/60 dark:hover:border-brand-indigo/70 bg-gradient-to-br from-white via-white to-brand-light/30 dark:from-navy-900 dark:via-navy-900 dark:to-navy-850 p-6 sm:p-7 shadow-sm hover:shadow-card-hover"
          : "border-slate-200 dark:border-navy-800 hover:border-slate-300 dark:hover:border-navy-600 bg-white dark:bg-navy-900 p-6 shadow-sm hover:shadow-card-hover"
      }`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-brand-lavender bg-brand-light dark:bg-brand-indigo/20 px-2.5 py-0.5 rounded-full border border-brand-soft/40 dark:border-brand-indigo/30">
            {resource.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <Clock className="w-3 h-3" />
            <span>{resource.readTime}</span>
          </div>
        </div>

        <div>
          <h3
            className={`font-bold text-navy-900 dark:text-white group-hover:text-brand-indigo dark:group-hover:text-brand-lavender transition-colors leading-snug ${
              featured ? "text-lg sm:text-xl" : "text-base sm:text-lg"
            }`}
          >
            {resource.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {resource.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {resource.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-navy-800 px-2 py-0.5 rounded border border-slate-200/60 dark:border-navy-700/60"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between text-xs">
        <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
          <Calendar className="w-3 h-3" />
          {resource.date}
        </span>
        <Link
          href={`/resources#${resource.slug}`}
          className="font-bold text-brand-dark dark:text-brand-lavender hover:text-brand-indigo dark:hover:text-white inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
        >
          <span>Read Brief</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
