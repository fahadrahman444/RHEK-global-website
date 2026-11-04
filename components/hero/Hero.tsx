import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function Hero() {
  return (
    <section className="relative pt-3 pb-4 sm:pb-6 lg:pt-5 lg:pb-8">
      <div className="max-w-[800px]">
        {/* Main Editorial Headline */}
        <h1 className="font-heading text-[26px] sm:text-[40px] lg:text-[46px] font-bold leading-[1.15] sm:leading-[1.1] tracking-[-0.035em] text-[#101010]">
          Exclusive commercial leads and high-performance digital systems.
        </h1>

        {/* Subheading */}
        <p className="mt-2.5 sm:mt-3 text-[14px] sm:text-[15.5px] leading-relaxed text-[#525252] max-w-[620px]">
          {RHEK_CONFIG.company.subheadline}
        </p>

        {/* Action CTAs — Side-by-side on mobile */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 sm:gap-3">
          <Link
            href="/#leads"
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-3 sm:px-6 py-2 sm:py-3 text-[12px] sm:text-[13.5px] font-semibold tracking-wide transition-all duration-300 min-h-[42px] sm:min-h-[44px] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 group whitespace-nowrap"
          >
            <span className="hidden sm:inline">Get Exclusive Leads</span>
            <span className="sm:hidden">Get Leads</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] hover:bg-[#FAFAFA] text-[#101010] px-3 sm:px-5 py-2 sm:py-3 text-[12px] sm:text-[13.5px] font-semibold transition-all duration-300 min-h-[42px] sm:min-h-[44px] hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Explore Capabilities</span>
            <span className="sm:hidden">Capabilities</span>
          </Link>
        </div>

        {/* Micro Trust Proof Bar — Compact responsive row */}
        <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-[#EBEBEB] flex flex-wrap items-center gap-2.5 sm:gap-y-2.5 sm:gap-x-6 text-[11.5px] sm:text-[12.5px] text-[#525252]">
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
    </section>
  );
}
