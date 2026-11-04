import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function Hero() {
  const { stats } = RHEK_CONFIG;

  return (
    <section className="relative pt-2 pb-3 sm:pb-5 lg:pt-4 lg:pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7">
          {/* Eyebrow Status Pill */}
          <div className="inline-flex items-center gap-1.5 rounded-md border border-[#EBEBEB] bg-white px-2.5 py-0.5 text-[10.5px] font-semibold text-[#101010] uppercase tracking-wider mb-2.5 shadow-2xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Commercial Growth &amp; Digital Engineering</span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-heading text-[26px] sm:text-[38px] lg:text-[44px] font-bold leading-[1.12] sm:leading-[1.1] tracking-[-0.035em] text-[#101010]">
            Exclusive commercial leads and high-performance digital systems.
          </h1>

          {/* Subheading */}
          <p className="mt-2.5 sm:mt-3 text-[13.5px] sm:text-[15px] leading-relaxed text-[#525252] max-w-[580px]">
            {RHEK_CONFIG.company.subheadline}
          </p>

          {/* Action CTAs — Side-by-side on mobile */}
          <div className="mt-4 sm:mt-5 grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3">
            <Link
              href="/#leads"
              className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-3 sm:px-6 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold tracking-wide transition-all duration-300 min-h-[42px] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group whitespace-nowrap"
            >
              <span className="hidden sm:inline">Get Exclusive Leads</span>
              <span className="sm:hidden">Get Leads</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] hover:bg-[#FAFAFA] text-[#101010] px-3 sm:px-5 py-2 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold transition-all duration-300 min-h-[42px] hover:shadow-2xs hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Explore Capabilities</span>
              <span className="sm:hidden">Capabilities</span>
            </Link>
          </div>

          {/* Micro Trust Proof Bar */}
          <div className="mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-[#EBEBEB] flex flex-wrap items-center gap-2 sm:gap-y-2 sm:gap-x-5 text-[11px] sm:text-[12px] text-[#525252]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">100% Exclusive Walkthroughs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">Pay-Nothing-Upfront Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
              <span className="font-medium text-[#101010]">Direct Facility Decision-Makers</span>
            </div>
          </div>
        </div>

        {/* Right Column: Balanced Performance Matrix (Fills Desktop Dead Space) */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] p-3.5 sm:p-5 shadow-2xs">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EBEBEB]">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[#101010]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#101010]">
                  Performance Matrix
                </span>
              </div>
              <span className="text-[10px] font-semibold text-[#16A34A] bg-[#16A34A]/10 px-2 py-0.5 rounded">
                Verified Metrics
              </span>
            </div>

            {/* 2x2 Clean Stat Tiles */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white border border-[#EBEBEB] p-2.5 sm:p-3 hover:border-[#101010] transition-colors"
                >
                  <div className="font-heading text-lg sm:text-xl font-bold text-[#101010] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] sm:text-[11.5px] font-bold text-[#101010] mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                  <div className="text-[10px] sm:text-[10.5px] text-[#737373] mt-0.5 leading-snug">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Operational Status */}
            <div className="mt-3 pt-2.5 border-t border-[#EBEBEB] flex items-center justify-between text-[11px] text-[#737373]">
              <span>Territory Intake: North America &amp; Global</span>
              <span className="font-semibold text-[#101010]">Active Q4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
