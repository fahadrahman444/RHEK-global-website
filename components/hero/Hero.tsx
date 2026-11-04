import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Building2, Calendar, MapPin, Sparkles } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function Hero() {
  return (
    <section className="relative pt-4 pb-6 lg:pt-7 lg:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: High-Contrast Editorial Typography */}
        <div className="lg:col-span-7">
          {/* Eyebrow / Category Tag */}
          <div className="inline-flex items-center gap-2 rounded-md border border-[#EBEBEB] bg-white px-2.5 py-0.5 text-[11px] font-semibold text-[#101010] mb-3.5 shadow-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F] animate-pulse" />
            <span className="text-[#101010] uppercase tracking-wider text-[10.5px] font-bold">
              B2B Demand Generation &amp; Digital Engineering
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-heading text-[32px] sm:text-[44px] lg:text-[50px] font-bold leading-[1.1] tracking-[-0.035em] text-[#101010]">
            Exclusive commercial leads and high-performance digital systems.
          </h1>

          {/* Subheading */}
          <p className="mt-3 text-[15.5px] leading-relaxed text-[#525252] max-w-[560px]">
            {RHEK_CONFIG.company.subheadline}
          </p>

          {/* Action CTAs */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/#leads"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-6 py-3 text-[13.5px] font-semibold tracking-wide transition-all duration-300 min-h-[44px] shadow-sm group"
            >
              <span>Get Exclusive Leads</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border border-[#E5E5E5] bg-white hover:border-[#101010] hover:bg-[#FAFAFA] text-[#101010] px-5 py-3 text-[13.5px] font-semibold transition-all duration-300 min-h-[44px]"
            >
              <span>Explore Capabilities</span>
            </Link>
          </div>

          {/* Micro Trust Proof Bar */}
          <div className="mt-6 pt-5 border-t border-[#EBEBEB] flex flex-wrap items-center gap-y-2.5 gap-x-5 text-[12.5px] text-[#525252]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#E9204F]" />
              <span className="font-medium text-[#101010]">100% Exclusive Walkthroughs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#E9204F]" />
              <span className="font-medium text-[#101010]">Pay-Nothing-Upfront Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
              <span className="font-medium text-[#101010]">Direct Facility Decision-Makers</span>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural B2B Performance & Lead Scoping Console */}
        <div className="lg:col-span-5">
          <div className="rounded-xl border border-[#E5E5E5] bg-white p-5 sm:p-6 shadow-xs">
            {/* Console Header */}
            <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-[#F0F0F0]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#101010]" />
                <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#101010]">
                  Commercial Lead Terminal
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded bg-[#FAFAFA] border border-[#EBEBEB] px-2 py-0.5 text-[10.5px] font-semibold text-[#525252]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                Live Network Active
              </span>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-3 gap-2.5 pb-3.5 mb-3.5 border-b border-[#F0F0F0]">
              <div className="rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] p-2.5 text-center">
                <span className="block text-[18px] font-bold text-[#101010] leading-none">
                  $110
                </span>
                <span className="block text-[9.5px] text-[#737373] mt-1 font-medium uppercase tracking-tight">
                  Starting Rate
                </span>
              </div>
              <div className="rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] p-2.5 text-center">
                <span className="block text-[18px] font-bold text-[#E9204F] leading-none">
                  100%
                </span>
                <span className="block text-[9.5px] text-[#737373] mt-1 font-medium uppercase tracking-tight">
                  Exclusive
                </span>
              </div>
              <div className="rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] p-2.5 text-center">
                <span className="block text-[18px] font-bold text-[#101010] leading-none">
                  98.4%
                </span>
                <span className="block text-[9.5px] text-[#737373] mt-1 font-medium uppercase tracking-tight">
                  Verified Contact
                </span>
              </div>
            </div>

            {/* Live Sample Lead Item */}
            <div className="rounded-lg border border-[#EBEBEB] bg-[#FAFAFA] p-3 mb-3.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10.5px] font-semibold text-[#E9204F] uppercase tracking-wider">
                  Latest Verified Facility
                </span>
                <span className="text-[10.5px] text-[#737373]">Walkthrough Confirmed</span>
              </div>
              <p className="text-[13.5px] font-bold text-[#101010] leading-snug">
                Tri-State Medical &amp; Clinical Facility
              </p>
              <div className="mt-2.5 grid grid-cols-2 gap-1.5 text-[11.5px] text-[#525252]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-[#101010]" />
                  <span>New York Metro</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-[#101010]" />
                  <span>42,000 sq.ft</span>
                </div>
                <div className="flex items-center gap-1.5 col-span-2">
                  <Calendar className="h-3.5 w-3.5 text-[#101010]" />
                  <span>5x/week Nightly Janitorial</span>
                </div>
              </div>
            </div>

            {/* Action Bar inside Console */}
            <Link
              href="/contact?service=Janitorial%20Lead%20Generation"
              className="w-full flex items-center justify-between rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-3.5 py-2.5 text-[12.5px] font-semibold transition-colors duration-300"
            >
              <span>Check Territory Availability</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
