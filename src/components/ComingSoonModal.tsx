"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface ComingSoonContextType {
  isOpen: boolean;
  openComingSoon: (contextNote?: string) => void;
  closeComingSoon: () => void;
}

const ComingSoonContext = createContext<ComingSoonContextType>({
  isOpen: false,
  openComingSoon: () => {},
  closeComingSoon: () => {},
});

export function useComingSoon() {
  return useContext(ComingSoonContext);
}

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState<string | null>(null);

  const openComingSoon = useCallback((contextNote?: string) => {
    setNote(contextNote || null);
    setIsOpen(true);
  }, []);

  const closeComingSoon = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Keyboard accessibility: Escape key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeComingSoon();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeComingSoon]);

  const value = React.useMemo(
    () => ({ isOpen, openComingSoon, closeComingSoon }),
    [isOpen, openComingSoon, closeComingSoon]
  );

  return (
    <ComingSoonContext.Provider value={value}>
      {children}

      {/* Modal Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          {/* Subtle blurred backdrop with fade entrance */}
          <div
            onClick={closeComingSoon}
            className="fixed inset-0 bg-navy-950/60 dark:bg-zinc-950/70 backdrop-blur-sm transition-opacity duration-200 ease-out"
          />

          {/* Modal Card with subtle scale & fade entrance */}
          <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/90 dark:border-zinc-750 shadow-2xl p-6 sm:p-8 text-center space-y-6 z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Top Close Button */}
            <button
              onClick={closeComingSoon}
              aria-label="Close dialog"
              className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Emblem / Badge */}
            <div className="mx-auto w-14 h-14 rounded-2xl bg-brand-light dark:bg-zinc-800 flex items-center justify-center border border-brand-soft/60 dark:border-zinc-700 shadow-2xs">
              <div className="relative w-9 h-9 bg-white dark:bg-white/95 rounded-lg p-0.5 border border-slate-200/60 dark:border-zinc-700">
                <Image
                  src="/logo/1788871377642.jpg"
                  alt="Nivoraib"
                  width={36}
                  height={36}
                  sizes="36px"
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-200 text-xs font-mono font-semibold border border-brand-soft/50 dark:border-zinc-700">
                <Sparkles className="w-3.5 h-3.5 text-brand-indigo dark:text-zinc-300" />
                <span>Pilot Access Cohort</span>
              </div>
              <h3 id="coming-soon-title" className="text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-zinc-100 tracking-tight">
                Workspace Preview
              </h3>
              <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 font-medium leading-snug max-w-sm mx-auto">
                The NivoraIB workspace is currently onboarding partner schools and educators.
              </p>
              <p className="text-xs text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Connect with our founding team to explore the interactive platform, schedule a faculty walkthrough, or join our early partner cohort.
              </p>
            </div>

            {/* Reliability indicator */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-850 border border-slate-200/80 dark:border-zinc-750 text-xs text-slate-600 dark:text-zinc-300 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>Partnering with IB World Schools &amp; DP coordinators worldwide.</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={closeComingSoon}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy-900 dark:bg-white hover:bg-navy-800 dark:hover:bg-slate-100 text-white dark:text-zinc-950 font-bold text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                Got It
              </button>
              <Link
                href="/contact?reason=demo"
                onClick={closeComingSoon}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-750 text-slate-800 dark:text-zinc-200 font-semibold text-sm transition-all active:scale-[0.98]"
              >
                <span>Request Pilot Access</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </ComingSoonContext.Provider>
  );
}
