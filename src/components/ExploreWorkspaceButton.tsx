"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { useComingSoon } from "@/components/ComingSoonModal";

export default function ExploreWorkspaceButton() {
  const { openComingSoon } = useComingSoon();

  return (
    <button
      onClick={() => openComingSoon("Platform Preview")}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 dark:bg-white hover:bg-navy-800 dark:hover:bg-slate-100 text-white dark:text-zinc-950 text-xs font-bold shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-150 self-start sm:self-auto cursor-pointer"
    >
      <span>Explore Workspace</span>
      <ArrowRight className="w-3.5 h-3.5" />
    </button>
  );
}
