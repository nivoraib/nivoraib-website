import React from "react";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageSquare, School, ShieldCheck, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact Nivoraib — Inquiries, Demos & Partnerships",
  description: "Get in touch with the Nivoraib founding team for pilot access, school partnerships, curriculum inquiries, or career questions.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col space-y-16 sm:space-y-20 py-12 sm:py-16">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <SectionHeader
          badge="Direct Inquiries"
          title="Connect with the Nivoraib Team"
          subtitle="Whether you are an IB Diploma coordinator interested in pilot access, an educator with pedagogical feedback, or an engineer exploring roles, we look forward to speaking with you."
        />
      </section>

      {/* 2. Contact Grid: Left Form, Right Contact Info */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right: Contact Information & FAQ (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-navy-900 rounded-2xl border border-slate-200 dark:border-navy-750 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-extrabold text-navy-900 dark:text-white">
                Inquiry Routing
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-3">
                  <School className="w-5 h-5 text-brand-indigo dark:text-brand-lavender shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 dark:text-white block">School &amp; Pilot Partnerships</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      Early access for IB DP coordinator teams and department heads.
                    </span>
                    <div className="font-mono text-xs text-brand-indigo dark:text-brand-lavender mt-1">
                      partnerships@nivoraib.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 dark:text-white block">General &amp; Advisory Inquiries</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      Curriculum alignment, feedback, and academic questions.
                    </span>
                    <div className="font-mono text-xs text-emerald-700 dark:text-emerald-400 mt-1">
                      hello@nivoraib.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 dark:text-white block">Response Time</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      Inquiries are reviewed by the founding engineering and curriculum team within 24–48 hours.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 dark:text-white block">Headquarters</strong>
                    <span className="text-slate-500 dark:text-slate-400 text-xs">
                      New Delhi, India &mdash; Est. 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-navy-750 text-xs text-slate-500 dark:text-slate-400 space-y-1.5">
                <div className="font-semibold text-navy-900 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  Privacy &amp; Data Ethics Guarantee
                </div>
                <p className="leading-relaxed">
                  We never share educator or school contact information with third-party advertisers. All correspondence adheres to strict academic data ethics.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
