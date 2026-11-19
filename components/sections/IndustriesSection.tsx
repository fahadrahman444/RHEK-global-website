"use client";

import Link from "next/link";
import {
  Sparkles,
  Building2,
  Activity,
  ShoppingBag,
  Laptop,
  Compass,
  GraduationCap,
  ShieldCheck,
  Truck,
  Rocket,
  ArrowRight,
} from "@/components/common/icons";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/common/Button";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SECTOR_DATA } from "@/data/services-data";

const SECTOR_ICONS = {
  Activity,
  Laptop,
  Building2,
  GraduationCap,
  Truck,
  ShoppingBag,
  ShieldCheck,
  Compass,
  Rocket,
  Sparkles,
};

export function IndustriesSection() {
  return (
    <section id="industries" className="site-container scroll-mt-24">
      {/* Standardized Section Header */}
      <SectionHeader
        badge="Sector Coverage"
        title="Tailored Lead Criteria Across 10 Commercial Verticals"
        description="Every industry has unique cleaning schedules, compliance gates, and decision-maker profiles. We filter specifically for your ideal account profile."
        maxWidth="max-w-[620px]"
        cta={
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
            rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
          >
            Target My Sector
          </Button>
        }
      />

      {/* Visual Sector Matrix — Clean 1-Border Cards with Compact Mobile Spacing */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
        {SECTOR_DATA.map((sector, i) => {
          const Icon = SECTOR_ICONS[sector.iconName];
          return (
            <SpotlightCard
              key={i}
              mode="light"
              className="group rounded-xl border border-zinc-200/80 bg-white p-3 sm:p-4 shadow-2xs hover:border-zinc-400 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-brand-surface border border-zinc-200/80 text-brand-black group-hover:bg-brand-black group-hover:text-white transition-colors">
                    <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-[13px] sm:text-[15px] font-bold text-brand-black leading-snug group-hover:text-brand-red transition-colors">
                  {sector.name}
                </h3>

                <div className="mt-1.5 sm:mt-2.5 space-y-0.5">
                  <div className="text-[11.5px] sm:text-[12px] font-semibold text-slate-800 truncate">
                    {sector.typicalScope}
                  </div>
                  <div className="text-[11px] sm:text-[11.5px] text-zinc-500 truncate">
                    {sector.cadence}
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex mt-3.5 pt-2 border-t border-zinc-100 items-center justify-between text-[11.5px] font-medium text-slate-400 group-hover:text-brand-black">
                <span>Scope Ready</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:text-brand-red" />
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      {/* Customized Scope Callout Banner */}
      <div className="mt-4 sm:mt-5 rounded-xl border border-zinc-200/80 bg-brand-surface p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
        <div>
          <div className="text-[13.5px] sm:text-[14.5px] font-bold text-brand-black">
            Operating in a specialized regional niche?
          </div>
          <p className="text-[12px] sm:text-[13px] text-zinc-600 mt-0.5">
            We configure custom square footage thresholds, emergency cleaning filters, and local zip codes for your exact capability profile.
          </p>
        </div>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-zinc-200/80 hover:border-brand-black px-3.5 py-1.5 text-[12px] font-semibold text-brand-black whitespace-nowrap transition-colors min-h-[36px] shrink-0 shadow-2xs"
        >
          <span>Request Custom Scoping</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}