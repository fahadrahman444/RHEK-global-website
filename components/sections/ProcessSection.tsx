"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Clock,
  Users,
  ChevronRight,
  Target,
} from "@/components/common/icons";

interface PipelinePhase {
  phase: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  timeframe: string;
  badge: string;
  description: string;
  detailedScope: string;
  deliverables: string[];
  milestoneOutput: string;
}

const PIPELINE_PHASES: PipelinePhase[] = [
  {
    phase: "01",
    stepNumber: "Stage 01",
    title: "Territory Scoping & Target Lock",
    subtitle: "Days 1–3",
    timeframe: "Days 1–3 · Setup & Governance",
    badge: "Exclusivity Locked",
    description:
      "Define target zip codes, square footage parameters, and current vendor replacement criteria with complete local exclusivity.",
    detailedScope:
      "We establish your strict territorial perimeter, identify all commercial facilities above your target square footage, and cross-reference active janitorial contracts to pinpoint prime displacement opportunities.",
    deliverables: [
      "County and zip code territorial exclusivity perimeter locked",
      "High-margin commercial facility criteria (>10,000 sq ft)",
      "Cleaned, verified property & facility manager database",
      "Written SLA contract with zero local competitor overlap",
    ],
    milestoneOutput: "Confirmed Exclusivity Perimeter & Target Account Dossier",
  },
  {
    phase: "02",
    stepNumber: "Stage 02",
    title: "Multi-Touch SDR Outreach",
    subtitle: "Days 4–7",
    timeframe: "Days 4–7 · Pipeline Activation",
    badge: "Omnichannel Active",
    description:
      "Dedicated sales specialists execute multi-touch phone, email, and LinkedIn cadences to confirmed property and facility managers.",
    detailedScope:
      "Our trained industry SDRs engage facility decision-makers directly through verified phone outreach, consultative email sequences, and professional LinkedIn touchpoints to surface dissatisfaction with incumbent cleaners.",
    deliverables: [
      "Dedicated commercial janitorial sales development reps (SDRs)",
      "Multi-touch phone outreach directly to facility decision-makers",
      "Deliverability-monitored consultative email cadences",
      "Real-time pipeline transparency with logged conversation notes",
    ],
    milestoneOutput: "Active Multi-Channel Cadence & Verified Decision-Maker Conversations",
  },
  {
    phase: "03",
    stepNumber: "Stage 03",
    title: "Walkthrough Qualification",
    subtitle: "Days 8–14",
    timeframe: "Days 8–14 · Strict Verification",
    badge: "100% Verified",
    description:
      "Every appointment is verified for walkthrough willingness, square footage, cleaning frequencies, and decision-maker status.",
    detailedScope:
      "Before any meeting reaches your calendar, our QA managers audit the lead against our 4-point qualification standard to ensure genuine purchasing authority, verified facility scope, and immediate quote readiness.",
    deliverables: [
      "Confirmed facility willingness for an on-site walkthrough",
      "Documented square footage, cleaning frequencies & floor types",
      "Verified dissatisfaction with incumbent or expiring contract date",
      "Sole or primary commercial purchasing authority confirmed",
    ],
    milestoneOutput: "100% Verified Walkthrough Docket with Decision-Maker Signoff",
  },
  {
    phase: "04",
    stepNumber: "Stage 04",
    title: "Calendar Handover & Closing",
    subtitle: "Ongoing",
    timeframe: "Ongoing Cadence · Guaranteed Delivery",
    badge: "Contract Ready",
    description:
      "Appointments are synced directly to your calendar with full facility briefing notes and immediate territory protection.",
    detailedScope:
      "Confirmed appointments are dispatched directly to your calendar with full facility notes, contact direct dial, and pre-walkthrough briefing. Any unverified meeting is replaced immediately at zero cost.",
    deliverables: [
      "Direct Google / Outlook calendar invite synchronization",
      "Complete facility briefing with verified square footage & scope",
      "Property manager direct dial phone and verified business email",
      "Automatic replacement guarantee for any unqualified meeting",
    ],
    milestoneOutput: "Confirmed Walkthrough Dispatched with Full Opportunity Dossier",
  },
];

const EXECUTION_METRICS = [
  {
    icon: Clock,
    label: "24-Hour SLA Delivery",
    detail: "Rapid lead handover and real-time appointment notifications.",
  },
  {
    icon: ShieldCheck,
    label: "100% Territory Exclusivity",
    detail: "Zero shared leads. Your county is protected under contract.",
  },
  {
    icon: Users,
    label: "Direct Executive Access",
    detail: "Dedicated account lead and real-time pipeline reporting.",
  },
  {
    icon: Zap,
    label: "Pay-Nothing-Upfront Option",
    detail: "Performance-aligned agreements with zero upfront financial risk.",
  },
];

export function ProcessSection() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = PIPELINE_PHASES[activePhaseIndex];

  return (
    <section id="process" className="site-container scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="max-w-[620px]">
          <span className="block mb-1 text-xs font-semibold uppercase tracking-widest text-[#E9204F]">
            Execution Cadence
          </span>
          <h2 className="font-heading text-[24px] sm:text-[30px] lg:text-[34px] font-bold text-[#101010] tracking-tight leading-tight">
            4-Stage Pipeline from Scoping to Confirmed Handover
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-zinc-600">
            A systematic, repeatable operating cadence designed to eliminate dry pipeline spells and protect your margins.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-[#101010] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-200 min-h-[42px] shrink-0 self-start md:self-auto shadow-xs hover:-translate-y-0.5"
        >
          <span>Initiate Cadence</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Two-Column Interactive Stepper Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Left Column: Progress Rail */}
        <div className="lg:col-span-5 relative">
          <div
            role="tablist"
            aria-label="Process Stages"
            className="flex flex-col gap-2.5 relative z-10"
          >
            {PIPELINE_PHASES.map((p, idx) => {
              const isActive = activePhaseIndex === idx;

              return (
                <button
                  key={p.phase}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`stage-panel-${p.phase}`}
                  id={`stage-tab-${p.phase}`}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`group w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101010] cursor-pointer ${
                    isActive
                      ? "bg-white border-[#101010] shadow-sm ring-1 ring-[#101010]"
                      : "bg-[#FAFAFA] border-zinc-200/80 hover:bg-white hover:border-zinc-300"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-[12px] font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-[#101010] text-white"
                        : "bg-white text-zinc-500 border border-zinc-200"
                    }`}
                  >
                    {p.phase}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400">
                        {p.subtitle}
                      </span>
                      {isActive && (
                        <span className="text-[10.5px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-[14.5px] font-bold text-[#101010] leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-1 text-[12px] text-zinc-600 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="shrink-0 self-center hidden sm:flex items-center justify-center">
                    <ChevronRight
                      className={`h-4 w-4 transition-all duration-200 ${
                        isActive ? "text-[#E9204F] opacity-100" : "text-zinc-300 opacity-40"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Stage Detail View — Clean 1-Border Card Without Nested Boxes */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 sm:p-7 shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.phase}
                id={`stage-panel-${activePhase.phase}`}
                role="tabpanel"
                aria-labelledby={`stage-tab-${activePhase.phase}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#E9204F]">
                      {activePhase.stepNumber}
                    </span>
                    <span className="text-xs text-slate-400">
                      · Step {activePhaseIndex + 1} of {PIPELINE_PHASES.length}
                    </span>
                  </div>

                  <span className="text-xs text-zinc-600">
                    {activePhase.timeframe}
                  </span>
                </div>

                {/* Scope */}
                <div>
                  <h3 className="font-heading text-[20px] font-bold text-[#101010] leading-snug">
                    {activePhase.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-zinc-600 leading-relaxed">
                    {activePhase.detailedScope}
                  </p>
                </div>

                {/* Deliverables List: Clean Typographic Rows with No Clunky Nested Boxes */}
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Stage Deliverables
                  </div>
                  <div className="space-y-2">
                    {activePhase.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-[13px] text-zinc-700 py-1"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-3.5 rounded-xl bg-[#FAFAFA] border border-zinc-200/70 flex items-start gap-3">
                  <Target className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Primary Outcome
                    </div>
                    <div className="text-[13px] font-semibold text-slate-800 mt-0.5">
                      {activePhase.milestoneOutput}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Protected under RHEK GLOBAL commercial SLA</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-colors duration-200 min-h-[40px]"
                  >
                    <span>Schedule Initial Scoping</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 4 SLA Commitments Strip — Clean 1-Border Metric Cards */}
      <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {EXECUTION_METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className="rounded-xl border border-zinc-200/80 bg-[#FAFAFA] p-3.5 flex items-start gap-2.5 transition-colors hover:bg-white hover:border-zinc-300"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-zinc-200 text-[#101010] shrink-0 mt-0.5">
                <Icon className="h-3.5 w-3.5 text-[#E9204F]" />
              </div>
              <div>
                <div className="text-[13px] font-bold text-[#101010] leading-tight">
                  {m.label}
                </div>
                <div className="text-[11.5px] text-zinc-500 mt-0.5 leading-snug">
                  {m.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}