"use client";

import { ShieldCheck, CheckCircle2, Cpu, Code2, Layout, Database, Gauge } from "@/components/common/icons";
import { CapabilityStrip, type CapabilityStripItem } from "@/components/layout/patterns/CapabilityStrip";
import { SpotlightCard } from "@/components/common/SpotlightCard";

const TECH_STRIP_ITEMS: CapabilityStripItem[] = [
  {
    icon: Code2,
    tag: "Core Framework",
    title: "Next.js 15 & React 19",
    description: "Server Components (RSC), static prerendering, and streaming SSR for sub-second page delivery.",
    metric: "Sub-Second LCP",
  },
  {
    icon: Cpu,
    tag: "Architecture",
    title: "Strict TypeScript 5",
    description: "End-to-end type safety, domain model contracts, and zero runtime crashes.",
    metric: "Zero 'any' Types",
  },
  {
    icon: Layout,
    tag: "Design System",
    title: "Tailwind & Swiss Grid",
    description: "Mathematical 8-point spacing foundation with zero dead CSS or layout shifts.",
    metric: "CLS < 0.05",
  },
  {
    icon: Database,
    tag: "Data Layer",
    title: "PostgreSQL & Edge APIs",
    description: "High-concurrency persistence, ACID transactional safety, and edge webhooks.",
    metric: "99.9% Uptime",
  },
];

const BENCHMARKS_STRIP: CapabilityStripItem[] = [
  {
    tag: "Benchmark 01",
    title: "100/100 Lighthouse",
    description: "Verified top scores across Performance, Accessibility, and Best Practices.",
    metric: "100 / 100",
  },
  {
    tag: "Benchmark 02",
    title: "Sub-0.9s LCP",
    description: "Largest Contentful Paint measured under real network throttled conditions.",
    metric: "< 0.9s LCP",
  },
  {
    tag: "Benchmark 03",
    title: "WCAG 2.2 Level AA",
    description: "Certified keyboard navigation, screen reader support, and high contrast ratios.",
    metric: "WCAG AA",
  },
  {
    tag: "Benchmark 04",
    title: "100% IP Ownership",
    description: "Clean GitHub repository and full copyright transferred upon completion.",
    metric: "Full Transfer",
  },
];

const GUARANTEE_POINTS = [
  "14-day unconditional 100% money-back refund guarantee if not fully satisfied.",
  "Full intellectual property and GitHub source code repository transferred to your company.",
  "Zero hidden maintenance fees or proprietary lock-in hosting contracts.",
  "Certified WCAG 2.2 Level AA accessibility and cross-device testing.",
  "Post-launch 30-day dedicated warranty support for zero-friction handoff.",
];

export function WebDevTechStack() {
  return (
    <section
      id="technologies"
      className="py-16 md:py-24 border-b border-[#EBEBEB] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-14 sm:space-y-16">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-1 rounded inline-block mb-3">
            Section 04 · Infrastructure Standards
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-tight sm:leading-tight lg:leading-[1.18]">
            Engineering Stack &amp; Verified Performance Standards
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-3 leading-relaxed">
            We avoid fragile templates, slow page builders, and technical shortcuts. Every system is hand-crafted with modern web architecture to guarantee longevity, security, and peak conversion speed.
          </p>
        </div>

        {/* Technology Capability Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-[11px] sm:text-[12px] font-mono font-bold text-[#737373]">
            <span>ENGINEERING STACK FOUNDATION</span>
            <span className="text-[#E9204F]">PRODUCTION TECH SPEC</span>
          </div>
          <CapabilityStrip items={TECH_STRIP_ITEMS} />
        </div>

        {/* Benchmarks Strip */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-[12px] font-mono font-bold text-[#737373]">
            <span>AUDITED SERVICE LEVEL BENCHMARKS</span>
            <span className="text-[#101010]">VERIFIED TELEMETRY</span>
          </div>
          <CapabilityStrip items={BENCHMARKS_STRIP} />
        </div>

        {/* Asymmetric 5/7 Risk Reversal Card */}
        <SpotlightCard
          mode="dark"
          className="rounded-2xl border-2 border-[#101010] bg-[#101010] p-7 sm:p-10 text-white shadow-xl"
          contentClassName="relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9204F] text-white text-[11px] font-bold uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>100% Risk Reversal</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                Our 14-Day Money-Back Guarantee
              </h3>
              <p className="text-[13.5px] text-[#A3A3A3] leading-relaxed">
                We stand firmly behind the quality of our code and design. If within 14 days of project kickoff you feel we are not the right fit, we will refund 100% of your deposit—no friction, no disputes.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-2.5">
              {GUARANTEE_POINTS.map((point, pIdx) => (
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
