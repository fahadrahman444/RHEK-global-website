"use client";

import { ArrowRight, Compass, LayoutTemplate, TerminalSquare, Rocket } from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function WebDevProcessRoadmap() {
  const steps = [
    {
      step: "01",
      icon: Compass,
      title: "Discovery & Architecture",
      duration: "Days 1–5",
      desc: "We analyze your business objectives, target audience, competitive landscape, and technical requirements to define an airtight system architecture and sitemap.",
      deliverables: ["Product Specification Document", "Information Architecture", "Core Web Vitals Target Blueprint"],
    },
    {
      step: "02",
      icon: LayoutTemplate,
      title: "Swiss UI/UX & Prototyping",
      duration: "Weeks 1–2",
      desc: "We design high-fidelity responsive layouts in Figma applying our 12-column grid, typographic contrast, and conversion funnels before writing a single line of code.",
      deliverables: ["Interactive Figma Prototype", "Design Token Library", "Stakeholder Sign-Off Review"],
    },
    {
      step: "03",
      icon: TerminalSquare,
      title: "Next.js & TypeScript Build",
      duration: "Weeks 2–4",
      desc: "Senior engineers implement the codebase in Next.js 15 with strict TypeScript, clean Tailwind styling, Framer Motion interactions, and API integrations.",
      deliverables: ["Clean Git Repository", "Zero 'any' Strict Typing", "Integrated Contact & Lead Workflows"],
    },
    {
      step: "04",
      icon: Rocket,
      title: "Lighthouse 100 QA & Launch",
      duration: "Final Week",
      desc: "We execute comprehensive cross-browser validation, WCAG 2.2 AA accessibility audits, Core Web Vitals stress tests, and seamless production deployment.",
      deliverables: ["100/100 Lighthouse Benchmark", "SSL & Domain DNS Handover", "30-Day Post-Launch Warranty"],
    },
  ];

  return (
    <section
      id="process"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E9204F]/10 text-[#E9204F] text-[11px] font-bold uppercase tracking-wider mb-3">
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-[1.15]">
            Our Process: From Concept to Production in 4 Sprints
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            No endless delays or scope creep. We follow an agile, milestone-driven framework that guarantees on-time delivery, code transparency, and measurable business outcomes.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={index}
                mode="light"
                className="p-6 rounded-2xl hover:border-[#101010]"
              >
                <div>
                  {/* Step & Timeline Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#EBEBEB]">
                    <span className="text-2xl font-black text-[#E9204F] font-mono">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold font-mono px-2 py-0.5 rounded bg-white border border-[#E5E5E5] text-[#737373]">
                      {item.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mt-5 mb-2">
                    <Icon className="h-5 w-5 text-[#101010]" />
                    <h3 className="text-lg font-bold text-[#101010]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[13.5px] text-[#525252] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBEBEB]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#737373] mb-2">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-1.5 text-[12px] text-[#525252]">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#E9204F] font-bold">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
