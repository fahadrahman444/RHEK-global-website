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
  Calendar,
  Sparkles,
} from "@/components/common/icons";
import { SpotlightCard } from "@/components/common/SpotlightCard";

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
      "Walkthrough appointments are synchronized into your Google, Outlook, or CRM calendar with full facility briefing notes, square footage estimates, and automated prospect SMS/email reminder cadences to eliminate no-shows.",
    deliverables: [
      "Direct two-way calendar sync (Google, Outlook, or CRM)",
      "Facility dossier briefing sheet with decision-maker insights",
      "Automated prospect SMS and email reminders to eliminate no-shows",
      "Post-walkthrough quote follow-up cadences and pipeline reporting",
    ],
    milestoneOutput: "On-Calendar Walkthrough with Complete Facility Dossier",
  },
];

const EXECUTION_METRICS = [
  {
    icon: Clock,
    label: "48-Hour Delivery SLA",
    detail: "Fastest initial appointment turnaround in commercial janitorial.",
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
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Execution Framework
          </span>
          <h2 className="font-heading text-[22px] sm:text-[28px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-tight">
            4-Stage Pipeline from Scoping to Confirmed Handover
          </h2>
          <p className="mt-1.5 text-[14px] sm:text-[15px] leading-relaxed text-[#525252]">
            A systematic, repeatable operating cadence designed to eliminate dry pipeline spells and protect your margins.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[44px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Initiate Cadence</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Two-Column Interactive Stepper Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-start">
        {/* Left Column: Vertical Progress Rail / Timeline Stepper */}
        <div className="lg:col-span-5 relative">
          {/* Continuous Vertical Timeline Spine */}
          <div className="absolute left-[23px] sm:left-[27px] top-6 bottom-6 w-[2px] bg-neutral-200 z-0" />

          <div
            role="tablist"
            aria-label="Process Stages"
            className="flex flex-col gap-3 relative z-10"
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
                  onMouseEnter={() => setActivePhaseIndex(idx)}
                  className={`group w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 sm:gap-4 min-h-[52px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101010] cursor-pointer ${
                    isActive
                      ? "bg-white border-[#101010] shadow-[0_4px_16px_rgba(0,0,0,0.06)] ring-1 ring-[#101010]"
                      : "bg-[#FAFAFA]/80 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                  }`}
                >
                  {/* Numbered Milestone Node (Directly anchored to the spine) */}
                  <div
                    className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl font-mono text-[12.5px] sm:text-[13px] font-bold transition-all duration-200 shadow-2xs ${
                      isActive
                        ? "bg-[#101010] text-white ring-4 ring-[#101010]/10"
                        : "bg-white text-neutral-600 border border-neutral-300 group-hover:border-[#101010] group-hover:text-[#101010]"
                    }`}
                  >
                    {p.phase}
                  </div>

                  {/* Stage Summary Block */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10.5px] sm:text-[11px] font-bold font-mono tracking-wider uppercase text-[#737373]">
                        {p.subtitle}
                      </span>
                      <span
                        className={`text-[10.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border transition-colors ${
                          isActive
                            ? "text-emerald-700 bg-emerald-50 border-emerald-200"
                            : "text-neutral-500 bg-neutral-100 border-neutral-200"
                        }`}
                      >
                        {p.badge}
                      </span>
                    </div>

                    <h3
                      className={`font-heading text-[14px] sm:text-[15.5px] font-bold leading-snug transition-colors ${
                        isActive ? "text-[#101010]" : "text-neutral-700 group-hover:text-[#101010]"
                      }`}
                    >
                      {p.title}
                    </h3>

                    <p className="mt-1 text-[12px] sm:text-[12.5px] text-[#737373] line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  {/* Indicator Arrow */}
                  <div className="shrink-0 self-center hidden sm:flex items-center justify-center">
                    <ChevronRight
                      className={`h-4 w-4 transition-all duration-200 ${
                        isActive
                          ? "text-[#E9204F] translate-x-0.5 opacity-100"
                          : "text-neutral-300 opacity-40 group-hover:opacity-80"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Stage Detail Spotlight */}
        <div className="lg:col-span-7">
          <SpotlightCard
            mode="light"
            className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            contentClassName="relative z-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase.phase}
                id={`stage-panel-${activePhase.phase}`}
                role="tabpanel"
                aria-labelledby={`stage-tab-${activePhase.phase}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Stage Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-1 rounded-md">
                      {activePhase.stepNumber}
                    </span>
                    <span className="text-[12px] font-semibold text-[#737373]">
                      · Step {activePhaseIndex + 1} of {PIPELINE_PHASES.length}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-medium text-[#525252] bg-neutral-100 px-2.5 py-1 rounded-md">
                    <Clock className="h-3.5 w-3.5 text-[#737373]" />
                    <span>{activePhase.timeframe}</span>
                  </div>
                </div>

                {/* Title & Detailed Scope */}
                <div className="space-y-2">
                  <h3 className="font-heading text-[20px] sm:text-[23px] font-bold text-[#101010] leading-snug">
                    {activePhase.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed">
                    {activePhase.detailedScope}
                  </p>
                </div>

                {/* Verified Milestone Deliverables */}
                <div className="pt-2 space-y-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                    <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
                    <span>Verified Stage Deliverables:</span>
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePhase.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 rounded-xl border border-neutral-100 bg-[#FAFAFA] p-2.5 sm:p-3 text-[12.5px] sm:text-[13px] text-[#262626]"
                      >
                        <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Handover Milestone Artifact Banner */}
                <div className="pt-1">
                  <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/50 p-3 sm:p-3.5 flex items-start gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white shrink-0 mt-0.5 shadow-2xs">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                        Primary Stage Outcome
                      </div>
                      <div className="text-[12.5px] sm:text-[13px] font-semibold text-emerald-950 mt-0.5">
                        {activePhase.milestoneOutput}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stage Action Strip */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-neutral-100">
                  <div className="flex items-center gap-2 text-[12px] text-[#737373]">
                    <ShieldCheck className="h-4 w-4 text-[#16A34A] shrink-0" />
                    <span>Guaranteed by RHEK GLOBAL commercial SLA</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-3.5 py-2 text-[12px] font-semibold transition-all duration-200 min-h-[44px]"
                  >
                    <span>Schedule Initial Scoping</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </SpotlightCard>
        </div>
      </div>

      {/* 4 SLA Commitments Strip */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {EXECUTION_METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <SpotlightCard
              key={i}
              mode="light"
              className="rounded-xl border border-neutral-200/70 bg-[#FAFAFA] p-3 sm:p-3.5 flex items-start gap-2.5 hover:bg-white hover:border-[#101010] transition-colors"
              contentClassName="relative z-10 flex items-start gap-2.5"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200 text-[#101010] shrink-0 mt-0.5 shadow-2xs">
                <Icon className="h-3.5 w-3.5 text-[#E9204F]" />
              </div>
              <div>
                <div className="text-[12.5px] sm:text-[13px] font-bold text-[#101010] leading-tight">
                  {m.label}
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-[#525252] mt-0.5 leading-snug">
                  {m.detail}
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>
    </section>
  );
}
