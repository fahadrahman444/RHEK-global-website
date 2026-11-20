import React from "react";
import { XCircle, CheckCircle2, ArrowRight } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternComparisonProps } from "./types";

export function PatternComparison({
  id = "comparison",
  badge = "THE DIFFERENCE",
  title,
  description,
  leftCard,
  rightCard,
}: PatternComparisonProps) {
  return (
    <section id={id} className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-brand-surface">
      <div className="site-container">
        {/* Uniform Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          maxWidth="max-w-2xl"
        />

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch relative">
          {/* Left: The Outdated Approach */}
          <div className="rounded-2xl border border-red-200/80 bg-white p-6 sm:p-8 space-y-5 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-red-100">
                <div className="h-8 w-8 rounded-lg bg-red-100/80 flex items-center justify-center text-red-600 shrink-0">
                  <XCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-heading font-bold text-brand-black">{leftCard.title}</h3>
                  <p className="text-[12px] text-brand-slate">{leftCard.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {leftCard.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-red-50/40 border border-red-100/70">
                    <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[13.5px] font-bold text-brand-black">{item.title}</h4>
                      <p className="text-[12px] text-brand-body mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono font-semibold uppercase text-red-600/80">
              High maintenance · Leaky pipeline
            </div>
          </div>

          {/* Right: The RHEK Standard */}
          <div className="rounded-2xl border border-brand-black bg-white p-6 sm:p-8 space-y-5 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-4 border-b border-brand-border">
                <div className="h-8 w-8 rounded-lg bg-brand-red flex items-center justify-center text-white shrink-0">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[17px] font-heading font-bold text-brand-black">{rightCard.title}</h3>
                  <p className="text-[12px] text-brand-slate">{rightCard.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {rightCard.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-surface border border-brand-border">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[13.5px] font-bold text-brand-black">{item.title}</h4>
                      <p className="text-[12px] text-brand-body mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[11px] font-mono font-semibold uppercase text-brand-red">
              Sub-second speed · Guaranteed ROI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
