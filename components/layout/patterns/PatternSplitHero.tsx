import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "@/components/common/icons";
import { Button } from "@/components/common/Button";
import type { SplitHeroProps } from "./types";

export function PatternSplitHero({
  id = "overview",
  badge,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  proofCard,
  trustBadges,
  jumpLinks,
}: SplitHeroProps) {
  return (
    <section id={id} className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-20 border-b border-brand-border bg-white scroll-mt-24">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Column: 7 Cols */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
            {badge && (
              <div className="inline-flex items-center gap-1.5 rounded-md border border-brand-border bg-brand-surface px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-black shadow-2xs">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                <span>{badge}</span>
              </div>
            )}

            {/* Display Headline */}
            <h1 className="text-[28px] sm:text-4xl lg:text-[48px] font-heading font-bold text-brand-black tracking-[-0.03em] leading-tight sm:leading-tight lg:leading-[1.15]">
              {title}
            </h1>

            {/* Subheading (65ch max width) */}
            <p className="text-[14.5px] sm:text-[16px] text-brand-body leading-relaxed max-w-2xl font-sans">
              {subhead}
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 pt-1.5">
              <Button
                variant="primary"
                size="md"
                href={primaryCta.href}
                onClick={primaryCta.onClick}
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
              >
                {primaryCta.label}
              </Button>

              {secondaryCta && (
                <Button
                  variant="secondary"
                  size="md"
                  href={secondaryCta.href}
                  onClick={secondaryCta.onClick}
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>

            {/* In-Hero Jump Rail (Native smooth scroll) */}
            {jumpLinks && jumpLinks.length > 0 && (
              <div className="pt-2 border-t border-brand-border">
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-slate mr-1 shrink-0">
                    Jump To:
                  </span>
                  {jumpLinks.map((tab) => {
                    const targetHref = tab.id.startsWith("#") ? tab.id : `#${tab.id}`;
                    return (
                      <a
                        key={tab.id}
                        href={targetHref}
                        className="px-2.5 py-1 rounded-md bg-brand-surface hover:bg-brand-black hover:text-white border border-brand-border hover:border-brand-black text-brand-body text-[11px] sm:text-[11.5px] font-semibold whitespace-nowrap hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                      >
                        {tab.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 5 Cols Proof Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-brand-border bg-white p-5 sm:p-6 shadow-md relative overflow-hidden transition-all">
              {/* Card Top Window Bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-brand-border-subtle">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11.5px] font-mono text-brand-slate ml-1.5">
                    {proofCard.title || "verified-metrics.log"}
                  </span>
                </div>
                {proofCard.liveStatus && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10.5px] font-mono font-bold bg-brand-red/10 text-brand-red">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-ping" />
                    {proofCard.liveStatus}
                  </span>
                )}
              </div>

              {/* Metric Stat Blocks Grid */}
              <div className={`grid gap-3 my-4 ${proofCard.stats.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                {proofCard.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-brand-surface border border-brand-border">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-brand-slate truncate">
                      {stat.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-heading font-bold text-brand-black mt-0.5">
                      {stat.value}
                    </p>
                    {stat.sublabel && (
                      <p className="text-[10.5px] text-brand-body mt-0.5 truncate">
                        {stat.sublabel}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Tech Chips Non-Text UI */}
              {proofCard.techChips && proofCard.techChips.length > 0 && (
                <div className="p-3 rounded-xl bg-brand-surface border border-brand-border space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-slate">
                    Enabler Standards
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proofCard.techChips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-0.5 rounded bg-white border border-brand-border text-[11px] font-mono font-medium text-brand-black"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footnote */}
              {proofCard.footnote && (
                <div className="mt-3.5 pt-3.5 border-t border-brand-border-subtle flex items-center justify-between text-[11.5px]">
                  <span className="text-brand-slate">{proofCard.footnote.text}</span>
                  {proofCard.footnote.linkHref && (
                    <Link
                      href={proofCard.footnote.linkHref}
                      className="font-bold text-brand-red hover:underline"
                    >
                      {proofCard.footnote.linkText || "Learn More"} →
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Integrated Trust Bar */}
        {trustBadges && trustBadges.length > 0 && (
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-brand-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-slate">
                Commercial Standards
              </span>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                {trustBadges.map((badgeItem, idx) => {
                  const IconComp = badgeItem.icon || CheckCircle2;
                  return (
                    <div key={idx} className="flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-black">
                      <IconComp className="h-4 w-4 text-brand-red shrink-0" />
                      <span>{badgeItem.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
