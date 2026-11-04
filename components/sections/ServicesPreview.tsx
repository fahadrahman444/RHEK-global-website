"use client";

import Link from "next/link";
import {
  Sparkles,
  Code2,
  Megaphone,
  Video,
  Mail,
  Headphones,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Building2,
  Gauge,
  CheckCircle2,
} from "lucide-react";

export function ServicesPreview() {
  return (
    <section id="services" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="max-w-[620px]">
          <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Integrated Solutions
          </span>
          <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
            Specialized Engines Engineered for Predictable B2B Scale
          </h2>
          <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#525252]">
            Move beyond generic agencies. We deploy dedicated outbound sales cadences, custom web architecture, and back-office pipelines.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#101010] hover:bg-[#E9204F] text-white px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 min-h-[38px] shrink-0 self-start md:self-auto shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>All Capabilities</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Modern Visual Bento Showcase */}
      <div className="space-y-3 sm:space-y-4">
        {/* Top Bento Duo: Outbound Demand Engine + Full-Stack Web Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
          
          {/* Bento Anchor 1: Commercial Sales & Janitorial Leads */}
          <div className="lg:col-span-7 rounded-2xl border border-neutral-200/90 bg-[#FAFAFA] p-4 sm:p-6 flex flex-col justify-between hover:border-[#101010] hover:bg-white hover:shadow-lg transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#101010] text-white">
                    <Sparkles className="h-4 w-4 text-[#E9204F]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#101010]">
                    Demand Generation &amp; SDR Cadences
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
                  Live Intake Active
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#101010] leading-snug">
                Exclusive Commercial Appointments With Zero Shared Prospects
              </h3>
              <p className="text-[12.5px] sm:text-[13.5px] text-[#525252] mt-1.5 leading-relaxed">
                Dedicated outbound SDRs qualify facility square footage, current cleaning vendor terms, and book confirmed on-site walkthroughs.
              </p>

              {/* Visual Simulated Lead Docket UI */}
              <div className="mt-4 rounded-xl bg-white border border-neutral-200/80 p-3.5 shadow-2xs">
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-neutral-100 text-[11px]">
                  <span className="font-bold text-[#101010] flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Confirmed Walkthrough Handover</span>
                  </span>
                  <span className="text-[#737373] font-mono">ID: #JK-8940</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-[11.5px]">
                  <div className="rounded-lg bg-neutral-50 p-2 border border-neutral-200/50">
                    <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#64748B] uppercase">
                      <Building2 className="h-3 w-3 text-[#101010]" />
                      <span>Facility</span>
                    </div>
                    <div className="font-bold text-[#101010] mt-0.5 truncate">Surgery Center</div>
                    <div className="text-[10px] text-[#737373]">42,000 sq ft</div>
                  </div>

                  <div className="rounded-lg bg-neutral-50 p-2 border border-neutral-200/50">
                    <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#64748B] uppercase">
                      <MapPin className="h-3 w-3 text-[#101010]" />
                      <span>Territory</span>
                    </div>
                    <div className="font-bold text-[#101010] mt-0.5 truncate">Dallas Metro</div>
                    <div className="text-[10px] text-[#737373]">Exclusive Lock</div>
                  </div>

                  <div className="rounded-lg bg-neutral-50 p-2 border border-neutral-200/50">
                    <div className="flex items-center gap-1 text-[9.5px] font-bold text-[#64748B] uppercase">
                      <Calendar className="h-3 w-3 text-[#101010]" />
                      <span>Scheduled</span>
                    </div>
                    <div className="font-bold text-[#101010] mt-0.5 truncate">Thu 10:30 AM</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">Walkthrough Set</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/70 flex items-center justify-between">
              <span className="text-[11.5px] text-[#525252] font-medium">
                Pay-Nothing-Upfront Option Available
              </span>
              <Link
                href="/services/janitorial-lead-generation"
                className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#101010] group-hover:text-[#E9204F] transition-colors"
              >
                <span>Lead Gen Specs</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Bento Anchor 2: Web Engineering & Systems */}
          <div className="lg:col-span-5 rounded-2xl border border-neutral-200/90 bg-[#101010] text-white p-4 sm:p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
                    <Code2 className="h-4 w-4 text-[#E9204F]" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">
                    Digital Systems Architecture
                  </span>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#16A34A] bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  99.8 CWV Score
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                Production-Grade Next.js Platforms Engineered for Conversion
              </h3>
              <p className="text-[12.5px] text-[#A3A3A3] mt-1.5 leading-relaxed">
                Sub-second load speeds, strict TypeScript types, declarative Framer Motion interactions, and seamless CRM integrations.
              </p>

              {/* Visual Performance Gauge UI */}
              <div className="mt-4 rounded-xl bg-white/[0.04] border border-white/10 p-3 text-[11px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#A3A3A3] font-mono text-[10.5px]">Lighthouse Audit Score</span>
                  <span className="font-bold text-[#16A34A] flex items-center gap-1">
                    <Gauge className="h-3.5 w-3.5" />
                    <span>100 / 100</span>
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono">
                  <div className="bg-white/[0.03] rounded-lg p-1.5 border border-white/5">
                    <div className="text-[9px] text-[#737373] uppercase">LCP Speed</div>
                    <div className="font-bold text-white text-[12px] mt-0.5">0.8s</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-1.5 border border-white/5">
                    <div className="text-[9px] text-[#737373] uppercase">CLS Shift</div>
                    <div className="font-bold text-white text-[12px] mt-0.5">0.00</div>
                  </div>
                  <div className="bg-white/[0.03] rounded-lg p-1.5 border border-white/5">
                    <div className="text-[9px] text-[#737373] uppercase">Type Safety</div>
                    <div className="font-bold text-emerald-400 text-[12px] mt-0.5">100%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11.5px] text-[#A3A3A3]">
                Zero WordPress Bloat. Pure Next.js.
              </span>
              <Link
                href="/services/web-design-development"
                className="inline-flex items-center gap-1 text-[12px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
              >
                <span>Engineering Stack</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bento Row: 4 Snug Visual Capability Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
          {/* Tile 1: Paid Social Ads */}
          <Link
            href="/services/social-media-advertising"
            className="group rounded-xl border border-neutral-200/90 bg-[#FAFAFA] p-3 sm:p-4 hover:border-[#101010] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200 text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Megaphone className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded">
                  3.8x Target ROAS
                </span>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors">
                Paid Social Ads
              </h4>
              <p className="text-[11px] text-[#525252] mt-1 leading-snug">
                Meta &amp; LinkedIn precision account-based ad funnels.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-semibold text-[#101010]">
              <span>Specs &amp; Pricing</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* Tile 2: Video Production */}
          <Link
            href="/services/video-production"
            className="group rounded-xl border border-neutral-200/90 bg-[#FAFAFA] p-3 sm:p-4 hover:border-[#101010] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200 text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Video className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold text-[#101010] bg-neutral-100 px-2 py-0.5 rounded">
                  4K / Motion
                </span>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors">
                Video Production
              </h4>
              <p className="text-[11px] text-[#525252] mt-1 leading-snug">
                High-converting VSLs, product reels &amp; motion graphics.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-semibold text-[#101010]">
              <span>Specs &amp; Pricing</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* Tile 3: Email Outreach */}
          <Link
            href="/services/email-marketing"
            className="group rounded-xl border border-neutral-200/90 bg-[#FAFAFA] p-3 sm:p-4 hover:border-[#101010] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200 text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold text-[#16A34A] bg-emerald-50 px-2 py-0.5 rounded">
                  99.2% Inbox
                </span>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors">
                Email Outreach
              </h4>
              <p className="text-[11px] text-[#525252] mt-1 leading-snug">
                Custom domain warmup, inbox rotation &amp; targeted copy.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-semibold text-[#101010]">
              <span>Specs &amp; Pricing</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* Tile 4: Virtual Assistant */}
          <Link
            href="/services/virtual-assistant"
            className="group rounded-xl border border-neutral-200/90 bg-[#FAFAFA] p-3 sm:p-4 hover:border-[#101010] hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white border border-neutral-200 text-[#101010] group-hover:bg-[#101010] group-hover:text-white transition-colors">
                  <Headphones className="h-3.5 w-3.5" />
                </div>
                <span className="text-[10px] font-bold text-[#101010] bg-neutral-100 px-2 py-0.5 rounded">
                  Dedicated Ops
                </span>
              </div>
              <h4 className="text-[13px] sm:text-[14px] font-bold text-[#101010] group-hover:text-[#E9204F] transition-colors">
                Virtual Assistant
              </h4>
              <p className="text-[11px] text-[#525252] mt-1 leading-snug">
                Executive calendar scheduling, CRM maintenance &amp; ops.
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-semibold text-[#101010]">
              <span>Specs &amp; Pricing</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
