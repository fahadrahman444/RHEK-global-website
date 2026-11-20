import React from "react";
import { Check, Sparkles, ShieldCheck } from "@/components/common/icons";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { PatternTieredPricingProps } from "./types";

export function PatternTieredPricing({
  id = "pricing",
  badge = "INVESTMENT",
  title = "Transparent, Fixed-Bid Pricing",
  description = "Every package includes complete source code ownership, milestone invoicing, and performance guarantees.",
  tiers,
  sharedInclusions = "All tiers include 100% intellectual property ownership, 14-day refund guarantee, and WCAG 2.2 Level AA compliance.",
}: PatternTieredPricingProps) {
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

        {/* 3 Tier Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 relative ${
                tier.popular
                  ? "border-2 border-brand-red bg-white shadow-lg ring-1 ring-brand-red/20"
                  : "border border-brand-border bg-brand-surface hover:border-brand-black hover:shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-red text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="h-3 w-3" />
                  <span>Most Popular</span>
                </div>
              )}

              <div className="space-y-5">
                {/* Tier Header */}
                <div className="space-y-2 pb-4 border-b border-brand-border">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[18px] font-heading font-bold text-brand-black">
                      {tier.name}
                    </h3>
                    <span className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-zinc-200/60 text-brand-black">
                      {tier.type}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-brand-black">
                      {tier.price}
                    </span>
                    <span className="text-[12px] font-mono text-brand-slate">
                      · {tier.timeline}
                    </span>
                  </div>

                  <p className="text-[13px] text-brand-body leading-snug">
                    {tier.desc}
                  </p>
                </div>

                {/* Features Check List */}
                <div className="space-y-2.5">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-slate">
                    Included Deliverables:
                  </p>
                  <ul className="space-y-2 text-[13px] text-brand-body">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-6 mt-6 border-t border-brand-border">
                <Button
                  variant={tier.popular ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                  href={tier.href}
                  onClick={tier.onSelect}
                >
                  {tier.ctaText || "Select Package"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Shared Inclusions Footer Bar */}
        {sharedInclusions && (
          <div className="rounded-xl border border-brand-border bg-brand-surface p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left shadow-2xs">
            <ShieldCheck className="h-5 w-5 text-brand-red shrink-0" />
            <p className="text-[13px] font-medium text-brand-black">
              {sharedInclusions}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
