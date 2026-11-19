"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
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
import { PIPELINE_PHASES } from "@/data/services-data";

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
      {/* Standardized Section Header */}
      <SectionHeader
        badge="Execution Cadence"
        title="4-Stage Pipeline from Scoping to Confirmed Handover"
        description="A systematic, repeatable operating cadence designed to eliminate dry pipeline spells and protect your margins."
        maxWidth="max-w-[620px]"
        cta={
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Initiate Cadence
          </Button>
        }
      />

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
                  className={`group w-full text-left p-3 sm:p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#101010] cursor-pointer ${
                    isActive
                      ? "bg-white border-brand-black shadow-sm ring-1 ring-[#101010]"
                      : "bg-brand-surface border-zinc-200/80 hover:bg-white hover:border-zinc-300"
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg font-mono text-[11px] sm:text-[12px] font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-brand-black text-white"
                        : "bg-white text-zinc-500 border border-zinc-200"
                    }`}
                  >
                    {p.phase}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className="text-[10.5px] sm:text-[11px] font-medium tracking-wider uppercase text-slate-400">
                        {p.subtitle}
                      </span>
                      {isActive && (
                        <span className="text-[10px] sm:text-[10.5px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-[13.5px] sm:text-[14.5px] font-bold text-brand-black leading-snug">
                      {p.title}
                    </h3>

                    <p className="mt-0.5 sm:mt-1 text-[11.5px] sm:text-[12px] text-zinc-600 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="shrink-0 self-center hidden sm:flex items-center justify-center">
                    <ChevronRight
                      className={`h-4 w-4 transition-all duration-200 ${
                        isActive ? "text-brand-red opacity-100" : "text-zinc-300 opacity-40"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Live Stage Detail View — Clean 1-Border Card */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-4 sm:p-7 shadow-xs">
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
                className="space-y-4 sm:space-y-5"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-zinc-100">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-brand-red">
                      {activePhase.stepNumber}
                    </span>
                    <span className="text-[11px] sm:text-xs text-slate-400">
                      · Step {activePhaseIndex + 1} of {PIPELINE_PHASES.length}
                    </span>
                  </div>

                  <span className="text-[11px] sm:text-xs text-zinc-600">
                    {activePhase.timeframe}
                  </span>
                </div>

                {/* Scope */}
                <div>
                  <h3 className="font-heading text-[18px] sm:text-[20px] font-bold text-brand-black leading-snug">
                    {activePhase.title}
                  </h3>
                  <p className="mt-1 sm:mt-2 text-[13px] sm:text-[14px] text-zinc-600 leading-relaxed">
                    {activePhase.detailedScope}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-1">
                  <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                    Stage Deliverables
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {activePhase.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 sm:gap-2.5 text-[12.5px] sm:text-[13px] text-zinc-700 py-0.5"
                      >
                        <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-3 sm:p-3.5 rounded-xl bg-brand-surface border border-zinc-200/70 flex items-start gap-2.5 sm:gap-3">
                  <Target className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Primary Outcome
                    </div>
                    <div className="text-[12.5px] sm:text-[13px] font-semibold text-slate-800 mt-0.5">
                      {activePhase.milestoneOutput}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-zinc-100">
                  <div className="flex items-center gap-1.5 text-[11.5px] sm:text-xs text-zinc-500">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Protected under RHEK commercial SLA</span>
                  </div>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-black hover:bg-brand-red text-white px-4 py-2 text-[12px] sm:text-[12.5px] font-semibold transition-colors duration-200 min-h-[38px] sm:min-h-[40px]"
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

      {/* 4 SLA Commitments Strip — 2x2 Grid on Mobile, 4 Columns on Desktop */}
      <div className="mt-5 sm:mt-7 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {EXECUTION_METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <div
              key={i}
              className="rounded-xl border border-zinc-200/80 bg-brand-surface p-2.5 sm:p-3.5 flex items-start gap-2 sm:gap-2.5 transition-colors hover:bg-white hover:border-zinc-300"
            >
              <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-lg bg-white border border-zinc-200 text-brand-black shrink-0 mt-0.5">
                <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand-red" />
              </div>
              <div className="min-w-0">
                <div className="text-[12px] sm:text-[13px] font-bold text-brand-black leading-tight">
                  {m.label}
                </div>
                <div className="text-[10.5px] sm:text-[11.5px] text-zinc-500 mt-0.5 leading-snug line-clamp-2">
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