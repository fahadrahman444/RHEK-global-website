"use client";

import { ShieldCheck, CheckCircle2, Award, Zap, Code, Cpu } from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function WebDevTechStack() {
  const technologies = [
    { name: "Next.js 15", category: "Core Framework", desc: "React Server Components, App Router & Static Generation" },
    { name: "TypeScript 5", category: "Language", desc: "Strict end-to-end type safety with zero runtime crashes" },
    { name: "Tailwind CSS", category: "Design Tokens", desc: "Utility-first responsive styles with zero dead CSS" },
    { name: "Framer Motion", category: "Animation", desc: "Declarative hardware-accelerated micro-interactions" },
    { name: "Node.js / APIs", category: "Backend Engine", desc: "Serverless edge functions and robust REST/GraphQL APIs" },
    { name: "PostgreSQL", category: "Database", desc: "ACID-compliant relational persistence & high concurrency" },
  ];

  const benchmarks = [
    { metric: "100/100", label: "Google Lighthouse", note: "Performance, Accessibility & Best Practices" },
    { metric: "< 0.9s", label: "Largest Contentful Paint", note: "Sub-second global CDN delivery" },
    { metric: "99.9%", label: "Guaranteed SLA Uptime", note: "High-availability edge infrastructure" },
    { metric: "WCAG AA", label: "Accessibility Level", note: "Accessible for all users and assistive devices" },
    { metric: "100%", label: "Code Ownership", note: "Full IP and repository rights transferred to you" },
    { metric: "+180%", label: "Average Inquiry Lift", note: "Measured conversion increase over legacy sites" },
  ];

  const guaranteePoints = [
    "14-day unconditional 100% money-back refund guarantee if not fully satisfied.",
    "Full intellectual property and GitHub source code repository transferred to your company.",
    "Zero hidden maintenance fees or proprietary lock-in hosting contracts.",
    "Certified WCAG 2.2 Level AA accessibility and cross-device testing.",
    "Post-launch 30-day dedicated warranty support for zero-friction handoff.",
  ];

  return (
    <section
      id="technologies"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-[#FAFAFA]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#101010]/5 text-[#101010] text-[11px] font-bold uppercase tracking-wider mb-3">
            Why Choose RHEK GLOBAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-[1.15]">
            Modern Tech Stack &amp; Uncompromising Engineering Standards
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            We avoid fragile templates, slow page builders, and technical shortcuts. Every solution is hand-crafted with industry-standard technologies to ensure longevity, security, and peak performance.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {technologies.map((tech, idx) => (
            <SpotlightCard
              key={idx}
              mode="light"
              className="p-5 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#101010]"
              contentClassName="relative z-10"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold uppercase text-[#737373]">
                  {tech.category}
                </span>
                <span className="h-2 w-2 rounded-full bg-[#E9204F]" />
              </div>
              <h3 className="text-lg font-bold text-[#101010]">{tech.name}</h3>
              <p className="text-[13px] text-[#525252] mt-1">{tech.desc}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 mb-16">
          {benchmarks.map((b, idx) => (
            <SpotlightCard
              key={idx}
              mode="light"
              className="p-4 rounded-xl bg-white border border-[#EBEBEB] text-center"
              contentClassName="relative z-10"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#101010] tracking-tight">
                {b.metric}
              </p>
              <p className="text-[12px] font-bold text-[#E9204F] mt-1">{b.label}</p>
              <p className="text-[11px] text-[#737373] mt-0.5">{b.note}</p>
            </SpotlightCard>
          ))}
        </div>

        {/* 100% Money-Back Guarantee Card */}
        <SpotlightCard
          mode="dark"
          className="rounded-2xl border-2 border-[#101010] bg-[#101010] p-8 sm:p-10 text-white shadow-xl"
          contentClassName="relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9204F] text-white text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>100% Risk Reversal</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Our 14-Day Money-Back Guarantee
              </h3>
              <p className="text-[14px] text-[#A3A3A3] leading-relaxed">
                We stand firmly behind the quality of our code and design. If within 14 days of project kickoff you feel we are not the right fit, we will refund 100% of your deposit—no friction, no disputes.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-3">
              {guaranteePoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px] text-[#E0E0E0]">
                  <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
