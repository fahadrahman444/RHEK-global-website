"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Clock, Users } from "lucide-react";
import { SpotlightCard } from "@/components/common/SpotlightCard";

const PIPELINE_PHASES = [
  {
    phase: "01",
    title: "Territory Scoping & Target Lock",
    subtitle: "Days 1–3",
    description: "Define target zip codes, square footage parameters, and current vendor replacement criteria with complete local exclusivity.",
    badge: "Exclusivity Locked",
  },
  {
    phase: "02",
    title: "Multi-Touch SDR Outreach",
    subtitle: "Days 4–7",
    description: "Dedicated sales specialists execute multi-touch phone, email, and LinkedIn cadences to confirmed property and facility managers.",
    badge: "Omnichannel Active",
  },
  {
    phase: "03",
    title: "Walkthrough Qualification",
    subtitle: "Days 8–14",
    description: "Every appointment is verified for walkthrough willingness, square footage, cleaning frequencies, and decision-maker status.",
    badge: "100% Verified",
  },
  {
    phase: "04",
    title: "Calendar Handover & Closing",
    subtitle: "Ongoing",
    description: "Appointments are synced directly to your calendar with full facility briefing notes and immediate territory protection.",
    badge: "Contract Ready",
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
  return (
    <section id="process" className="site-container scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
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
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Initiate Cadence</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Visual Connected Pipeline Stepper */}
      <div className="relative">
        {/* Desktop Connected Connecting Line */}
        <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[2px] bg-neutral-200 z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative z-10">
          {PIPELINE_PHASES.map((p) => (
            <SpotlightCard
              key={p.phase}
              mode="light"
              className="rounded-2xl border border-neutral-200/90 bg-white p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#101010] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Node Pill & Phase Number */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#101010] text-white font-mono text-[13px] font-bold group-hover:bg-[#E9204F] transition-colors shadow-2xs">
                    {p.phase}
                  </div>
                  <span className="text-[11px] font-bold font-mono text-[#737373] bg-neutral-100 px-2 py-0.5 rounded">
                    {p.subtitle}
                  </span>
                </div>

                <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/50 mb-1.5">
                  {p.badge}
                </span>

                <h3 className="font-heading text-[15px] sm:text-[16px] font-bold text-[#101010] leading-snug group-hover:text-[#E9204F] transition-colors">
                  {p.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] sm:text-[13px] text-[#525252] leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-neutral-100 flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-semibold text-[#101010]">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#16A34A]" />
                <span>Phase Milestone Verified</span>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* 4 SLA Commitments Strip */}
      <div className="mt-4 sm:mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
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
