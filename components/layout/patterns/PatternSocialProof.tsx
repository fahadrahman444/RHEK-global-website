import React from "react";
import { Quote, Sparkles, Building2 } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternSocialProofProps } from "./types";

export function PatternSocialProof({
  id = "social-proof",
  badge = "MEASURED IMPACT",
  title = "Real Pipeline Growth and Verified Speed",
  description = "Measured outcomes from production deployments across high-growth B2B and technology companies.",
  stats,
  testimonials,
}: PatternSocialProofProps) {
  return (
    <section id={id} className="py-14 sm:py-20 md:py-24 border-b border-brand-border bg-brand-surface">
      <div className="site-container space-y-10 sm:space-y-12">
        {/* Uniform Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          description={description}
          maxWidth="max-w-2xl"
        />

        {/* 1. Metric Stat Blocks Grid (Non-Text UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-brand-border bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-slate">
                  {stat.label}
                </p>
                <p className="text-4xl sm:text-5xl font-heading font-bold text-brand-black mt-2 tracking-tight">
                  {stat.value}
                </p>
              </div>
              <p className="text-[13px] text-brand-body mt-3 pt-3 border-t border-brand-border-subtle leading-relaxed">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Testimonial Cards Row */}
        {testimonials && testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-2">
            {testimonials.map((test, i) => (
              <div
                key={i}
                className="rounded-2xl border border-brand-border bg-white p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-brand-black transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-brand-red">
                    <Quote className="h-6 w-6" />
                    {test.metric && (
                      <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-brand-red/10 text-brand-red">
                        {test.metric}
                      </span>
                    )}
                  </div>
                  <p className="text-[13.5px] text-brand-black leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-brand-border-subtle flex items-center justify-between">
                  <div>
                    <p className="text-[13.5px] font-bold text-brand-black">{test.author}</p>
                    <p className="text-[12px] text-brand-slate">{test.role}</p>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-1 rounded bg-brand-surface border border-brand-border text-brand-black">
                    <Building2 className="h-3 w-3 text-brand-slate" />
                    <span className="truncate max-w-[100px]">{test.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
