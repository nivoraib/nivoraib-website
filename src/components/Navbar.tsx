"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon } from "lucide-react";
import { MAIN_NAV } from "@/data/navigation";
import { useComingSoon } from "@/components/ComingSoonModal";
import { useTheme } from "@/components/ThemeProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openComingSoon } = useComingSoon();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
    setCompanyDropdown(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 py-3.5 transition-colors duration-200 ease-out border-b ${
        scrolled
          ? "bg-[#EBF6F7]/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-subtle border-slate-200/80 dark:border-zinc-800/90"
          : "bg-[#EBF6F7]/90 dark:bg-zinc-950/90 backdrop-blur-sm border-slate-200/60 dark:border-zinc-900/90"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 xl:px-10">
        {/* Single Horizontal Flex Row with Centered Alignment */}
        <div className="flex items-center justify-between h-12">
          {/* BRAND: Official Brand Logo & Name with generous right margin */}
          <div className="flex items-center shrink-0 mr-8 min-[1240px]:mr-12 2xl:mr-14">
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo rounded-xl p-1 -ml-1 transition-transform duration-150 active:scale-[0.98]"
            >
              {/* EXACT OFFICIAL LOGO ASSET FROM Video/logo/1788871377642.jpg */}
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center bg-white dark:bg-white/95 rounded-lg p-0.5 border border-slate-200/60 dark:border-zinc-700/80 shadow-2xs">
                <Image
                  src="/logo/1788871377642.jpg"
                  alt="Nivoraib Logo"
                  width={40}
                  height={40}
                  sizes="40px"
                  className="w-full h-full object-contain rounded-md group-hover:scale-105 transition-transform duration-200"
                  priority
                />
              </div>
              {/* Brand Name Only — No Subtitle */}
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-navy-900 dark:text-zinc-100 group-hover:text-brand-indigo dark:group-hover:text-zinc-200 transition-colors duration-150 leading-none select-none whitespace-nowrap">
                Nivoraib
              </span>
            </Link>
          </div>

          {/* NAVIGATION: All items strictly on ONE line with whitespace: nowrap and line-height: 1 */}
          <nav className="hidden min-[1240px]:flex items-center gap-1.5 2xl:gap-3 flex-1">
            {MAIN_NAV.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setCompanyDropdown(true)}
                    onMouseLeave={() => setCompanyDropdown(false)}
                  >
                    <button
                      className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-xl whitespace-nowrap leading-none transition-all duration-150 ${
                        pathname.startsWith("/about") ||
                        pathname.startsWith("/team") ||
                        pathname.startsWith("/careers") ||
                        pathname.startsWith("/roadmap") ||
                        pathname.startsWith("/contact")
                          ? "text-brand-indigo dark:text-zinc-100 bg-brand-light/60 dark:bg-zinc-800 font-bold"
                          : "text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-zinc-800/80"
                      }`}
                      onClick={() => setCompanyDropdown(!companyDropdown)}
                      aria-expanded={companyDropdown}
                    >
                      <span className="whitespace-nowrap leading-none">{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          companyDropdown ? "rotate-180 text-brand-indigo dark:text-zinc-200" : "text-slate-500 dark:text-zinc-400"
                        }`}
                      />
                    </button>

                    {companyDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-card rounded-2xl animate-in fade-in zoom-in-95 duration-150 z-50">
                        <div className="bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-750 rounded-2xl p-2 shadow-xl">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              prefetch={false}
                              className={`flex flex-col p-2.5 rounded-xl transition-colors duration-150 ${
                                pathname === sub.href
                                  ? "bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-100 font-semibold"
                                  : "hover:bg-slate-50 dark:hover:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white"
                              }`}
                            >
                              <div className="flex items-center justify-between text-sm font-medium whitespace-nowrap">
                                <span className="whitespace-nowrap leading-none">{sub.label}</span>
                                {sub.badge && (
                                  <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full whitespace-nowrap leading-none border border-emerald-200/50 dark:border-emerald-800/50">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                              {sub.description && (
                                <span className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                                  {sub.description}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Special handling for Product Preview: clean normal nav item with NO badge, triggers Coming Soon modal
              if (item.label === "Product Preview") {
                return (
                  <button
                    key={item.label}
                    onClick={() => openComingSoon("Product Preview")}
                    className="inline-flex items-center px-3 py-2 text-sm font-semibold rounded-xl text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-zinc-800/80 whitespace-nowrap leading-none transition-all duration-150 cursor-pointer"
                  >
                    <span className="whitespace-nowrap leading-none">{item.label}</span>
                  </button>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`inline-flex items-center px-3 py-2 text-sm font-semibold rounded-xl whitespace-nowrap leading-none transition-all duration-150 ${
                    isActive
                      ? "text-brand-indigo dark:text-zinc-100 bg-brand-light/60 dark:bg-zinc-800 font-bold"
                      : "text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-zinc-800/80"
                  }`}
                >
                  <span className="whitespace-nowrap leading-none">{item.label}</span>
                </Link>
              );
            })}

            {/* Talk to Us as the final navigation item in the navigation row */}
            <Link
              href="/contact"
              className={`inline-flex items-center px-3 py-2 text-sm font-semibold rounded-xl whitespace-nowrap leading-none transition-all duration-150 ${
                pathname === "/contact"
                  ? "text-brand-indigo dark:text-zinc-100 bg-brand-light/60 dark:bg-zinc-800 font-bold"
                  : "text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-zinc-800/80"
              }`}
            >
              <span className="whitespace-nowrap leading-none">Talk to Us</span>
            </Link>
          </nav>

          {/* CTA & Theme Toggle */}
          <div className="hidden min-[1240px]:flex items-center shrink-0 ml-6 min-[1240px]:ml-8 2xl:ml-10 gap-2.5">
            {/* Theme Toggle Button with Fast 250ms Rotation/Scale Crossfade */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="theme-toggle-control relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-600 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800/80 cursor-pointer border border-transparent hover:border-slate-200 dark:hover:border-zinc-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo active:scale-95 transition-all group"
            >
              <Sun
                className={`theme-toggle-icon w-4 h-4 text-amber-400 absolute ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
              <Moon
                className={`theme-toggle-icon w-4 h-4 text-slate-600 dark:text-zinc-300 group-hover:text-navy-900 dark:group-hover:text-white absolute ${
                  theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </button>

            {/* Explore Platform CTA Button with glide arrow */}
            <button
              onClick={() => openComingSoon("Explore Platform")}
              className="inline-flex items-center justify-center gap-2 bg-navy-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-navy-800 dark:hover:bg-slate-100 text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] whitespace-nowrap leading-none transition-all duration-200 group cursor-pointer"
            >
              <span className="whitespace-nowrap leading-none">Explore Platform</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200 shrink-0" />
            </button>
          </div>

          {/* Mobile Right Menu Button & Quick Controls */}
          <div className="flex min-[1240px]:hidden items-center gap-2">
            {/* Quick Mobile Theme Toggle with 250ms micro-interaction */}
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              className="theme-toggle-control relative w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
            >
              <Sun
                className={`theme-toggle-icon w-4 h-4 text-amber-400 absolute ${
                  theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                }`}
              />
              <Moon
                className={`theme-toggle-icon w-4 h-4 text-slate-600 absolute ${
                  theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </button>

            <button
              onClick={() => openComingSoon("Explore Platform")}
              className="inline-flex items-center bg-navy-900 dark:bg-white text-white dark:text-zinc-950 text-xs font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-transform whitespace-nowrap leading-none shadow-2xs"
            >
              Explore
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-zinc-300 hover:text-navy-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-indigo active:scale-95 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="min-[1240px]:hidden fixed inset-x-0 top-[73px] bg-[#EBF6F7] dark:bg-zinc-950 border-b border-slate-200 dark:border-zinc-800 shadow-2xl max-h-[calc(100vh-73px)] overflow-y-auto animate-in fade-in duration-150">
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-1">
              {MAIN_NAV.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="pt-2">
                      <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        {item.label}
                      </div>
                      <div className="pl-2 space-y-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            prefetch={false}
                            className={`flex items-center justify-between px-3.5 py-2 rounded-xl text-sm font-medium transition-colors ${
                              pathname === sub.href
                                ? "bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-100 font-semibold"
                                : "text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900"
                            }`}
                          >
                            <span>{sub.label}</span>
                            {sub.badge && (
                              <span className="text-[10px] font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-200/50 dark:border-emerald-800/50">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (item.label === "Product Preview") {
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        setIsOpen(false);
                        openComingSoon("Product Preview");
                      }}
                      className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-900 text-left transition-colors"
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={false}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-brand-light dark:bg-zinc-800 text-brand-dark dark:text-zinc-100 font-semibold"
                        : "text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-900"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Theme Toggle Row */}
            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-zinc-900/60">
              <span className="text-sm font-semibold text-slate-700 dark:text-zinc-300">Theme</span>
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 text-xs font-bold text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700 shadow-2xs active:scale-95 transition-all"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Switch to Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-slate-600" />
                    <span>Switch to Dark</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full text-center py-3 px-4 rounded-xl border border-slate-300 dark:border-zinc-700 text-sm font-semibold text-slate-800 dark:text-zinc-200 hover:bg-slate-50 dark:hover:bg-zinc-900 active:scale-98 transition-all"
              >
                Talk to Us
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openComingSoon("Explore Platform");
                }}
                className="w-full text-center py-3 px-4 rounded-xl bg-navy-900 dark:bg-white text-white dark:text-zinc-950 text-sm font-bold hover:bg-navy-800 dark:hover:bg-slate-100 flex items-center justify-center gap-2 active:scale-98 transition-all"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
