import React from "react";
import { Check, Clock, CheckCircle2 } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternStepperProps } from "./types";

export function PatternStepper({
  id = "process",
  badge = "PROCESS",
  title,
  description,
  steps,
}: PatternStepperProps) {
  return (
    <section id={id} className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-white">
      <div className="site-container">
        {/* Uniform Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          maxWidth="max-w-2xl"
        />

        {/* 4-Step Stepper Grid (Horizontal on lg, 2 cols on md, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-brand-border bg-brand-surface p-6 flex flex-col justify-between relative hover:border-brand-black transition-colors"
            >
              <div className="space-y-4">
                {/* Step Top Bar: Sprint pill + Step Number */}
                <div className="flex items-center justify-between pb-3 border-b border-brand-border">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2 py-0.5 rounded">
                    <span>{step.stepLabel}</span>
                  </div>
                  <span className="text-2xl font-mono font-bold text-zinc-300">
                    {step.stepNumber}
                  </span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-slate">
                  <Clock className="h-3 w-3" />
                  <span>{step.duration}</span>
                </div>

                {/* Outcome Title */}
                <h3 className="text-[16px] font-heading font-bold text-brand-black leading-snug">
                  {step.title}
                </h3>

                {/* Deliverables (Max 3 bullets rule) */}
                <ul className="space-y-2 pt-1 text-[12.5px] text-brand-body">
                  {step.deliverables.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What You Get At The End (Artifact) */}
              <div className="pt-4 mt-5 border-t border-brand-border-subtle">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-slate">
                  Handoff Artifact:
                </p>
                <div className="mt-1 inline-flex items-center gap-1.5 text-[11.5px] font-bold text-brand-black bg-white px-2.5 py-1 rounded-md border border-brand-border shadow-2xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand-red shrink-0" />
                  <span className="truncate">{step.artifact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
