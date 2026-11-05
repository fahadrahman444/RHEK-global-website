"use client";

import { VerticalTimeline, type TimelineStage } from "@/components/layout/patterns/VerticalTimeline";

const SPRINT_STAGES: TimelineStage[] = [
  {
    step: "Sprint 01",
    stageNumber: "01",
    title: "Technical Discovery & Architecture Blueprint",
    duration: "Week 1 · Days 1–5",
    focus: "Airtight Requirements & Data Contracts",
    description: "We audit your existing web footprint, map high-value user journeys, establish strict TypeScript data contracts, and blueprint an architecture designed for sub-second Core Web Vitals.",
    deliverables: [
      "Technical Specification & Sitemap Document",
      "Sub-Second LCP Performance Architecture Blueprint",
      "Database schema & API endpoint contracts",
      "Territory exclusivity & NDA governance",
    ],
    outputArtifact: "Production Architecture Blueprint & Spec Contract",
  },
  {
    step: "Sprint 02",
    stageNumber: "02",
    title: "Swiss UI/UX & Interactive Design System",
    duration: "Week 2 · Days 6–10",
    focus: "12-Column Typographic Precision",
    description: "We craft high-fidelity responsive layouts in Figma adhering to our 12-column Swiss Architectural Grid, typographic contrast hierarchy, and conversion funnels before writing code.",
    deliverables: [
      "Full Figma design system & token library",
      "Interactive desktop & mobile responsive prototypes",
      "WCAG 2.2 Level AA accessibility color validation",
      "Stakeholder design sign-off review",
    ],
    outputArtifact: "Figma Component & Design Token System",
  },
  {
    step: "Sprint 03",
    stageNumber: "03",
    title: "Next.js 15 App Router & API Implementation",
    duration: "Week 3 · Days 11–18",
    focus: "Zero-Slop Clean Engineering",
    description: "Senior full-stack engineers implement the platform using Next.js 15, strict TypeScript, server components (RSC), Tailwind CSS, Framer Motion, and secure CRM form pipelines.",
    deliverables: [
      "Production-grade Next.js App Router codebase",
      "Zero 'any' strict TypeScript verification",
      "Lead capture and CRM webhook integrations",
      "Double-click mutation locks and CSRF protection",
    ],
    outputArtifact: "Functional Staging Environment & Clean Git Repo",
  },
  {
    step: "Sprint 04",
    stageNumber: "04",
    title: "Lighthouse 100 QA, Domain DNS & Handoff",
    duration: "Week 4 · Days 19–24",
    focus: "Performance Benchmark & 100% IP Handover",
    description: "We execute cross-device stress testing, Core Web Vitals diagnostics, production SSL/DNS configuration, and provide full codebase handover with a 30-day post-launch warranty.",
    deliverables: [
      "Verified 95–100 Google Lighthouse audit score",
      "Production DNS cutover with zero downtime",
      "100% codebase and intellectual property transfer",
      "30-day post-deployment engineering warranty",
    ],
    outputArtifact: "100% Code Ownership & Production Deployment",
  },
];

export function WebDevProcessRoadmap() {
  return (
    <section
      id="process"
      className="py-16 md:py-24 border-b border-[#EBEBEB] bg-[#FAFAFA]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-1 rounded inline-block mb-3">
            Section 03 · Systematic Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-tight sm:leading-tight lg:leading-[1.18]">
            Our Process: From Concept to Production in 4 Sprints
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-3 leading-relaxed">
            No endless delays or scope creep. We follow an agile, milestone-driven framework that guarantees on-time delivery, code transparency, and measurable business outcomes.
          </p>
        </div>

        {/* Pattern C: Swiss Vertical Timeline */}
        <VerticalTimeline stages={SPRINT_STAGES} />
      </div>
    </section>
  );
}
