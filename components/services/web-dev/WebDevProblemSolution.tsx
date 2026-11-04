"use client";

import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";

export function WebDevProblemSolution() {
  const problems = [
    {
      title: "Slow, Bloated Page Speed",
      desc: "Heavy monolithic CMS templates and dozens of unmaintained plugins causing 4+ second load times and high visitor bounce rates.",
    },
    {
      title: "Generic Template Appearance",
      desc: "Lookalike designs that fail to communicate commercial authority, technical competence, or enterprise credibility to decision-makers.",
    },
    {
      title: "Broken Lead Conversion Paths",
      desc: "Confusing navigation, cluttered forms without mobile optimization, and missing conversion tracking that leak qualified pipeline.",
    },
  ];

  const solutions = [
    {
      title: "Sub-Second Next.js Performance",
      desc: "Clean static and server-rendered Next.js 15 pages loading in under 1 second, scoring 95-100 on Google Lighthouse.",
    },
    {
      title: "Bespoke Swiss Minimal UI",
      desc: "Architectural 12-column grid layout, authoritative typography, and purposeful whitespace engineered specifically for your brand.",
    },
    {
      title: "Conversion-Engineered Architecture",
      desc: "Frictionless interactive booking forms, clear call-to-actions, and rigorous analytics to maximize qualified inbound inquiries.",
    },
  ];

  return (
    <section
      id="problem-solution"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E9204F]/10 text-[#E9204F] text-[11px] font-bold uppercase tracking-wider mb-3">
            The Industry Problem vs. Our Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-[1.15]">
            Most B2B Websites Bleed High-Value Inquiries. Here is How We Fix It.
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            Your website is your company&apos;s primary commercial asset. We replace sluggish, fragile website templates with custom, high-velocity digital infrastructure built to win trust and close deals.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: The Outdated Approach */}
          <div className="rounded-2xl border border-red-200/60 bg-red-50/20 p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-red-200/40">
              <div className="h-8 w-8 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                <XCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#101010]">The Outdated Approach</h3>
                <p className="text-[12px] text-[#737373]">Bloated CMS templates &amp; generic page builders</p>
              </div>
            </div>

            <div className="space-y-4">
              {problems.map((prob, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-red-100">
                  <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold text-[#101010]">{prob.title}</h4>
                    <p className="text-[13px] text-[#525252] mt-1 leading-relaxed">{prob.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Rate Global Standard */}
          <div className="rounded-2xl border border-[#101010] bg-[#101010] p-6 sm:p-8 space-y-6 text-white shadow-xl">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="h-8 w-8 rounded-lg bg-[#E9204F] flex items-center justify-center text-white">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The Rate Global Standard</h3>
                <p className="text-[12px] text-[#A3A3A3]">Custom Next.js &amp; Swiss Minimal Engineering</p>
              </div>
            </div>

            <div className="space-y-4">
              {solutions.map((sol, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-bold text-white">{sol.title}</h4>
                    <p className="text-[13px] text-[#A3A3A3] mt-1 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
