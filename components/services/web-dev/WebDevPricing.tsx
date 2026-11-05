import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Clock } from "@/components/common/icons";
import { SERVICES_DETAILED_DATA } from "@/data/services-data";
import { SpotlightCard } from "./SpotlightCard";

export function WebDevPricing() {
  const service = SERVICES_DETAILED_DATA["web-development"];
  const tiers = service?.pricingTiers || [];

  return (
    <section id="sec-03" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
            <span>Section 03 • Pricing &amp; Service Options</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            Fixed-Bid Packages. Zero Hidden Fees.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            Transparent, milestone-based engineering agreements backed by our 100% code quality warranty and 30-day post-launch support.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => (
            <SpotlightCard
              key={tier.name}
              spotlightColor={tier.highlighted ? "rgba(233, 32, 79, 0.22)" : "rgba(255, 255, 255, 0.08)"}
              className={`p-7 sm:p-9 hover:-translate-y-2 transition-all duration-300 ${
                tier.highlighted
                  ? "bg-[#18181D] border-2 border-[#E9204F] shadow-2xl shadow-[#E9204F]/15"
                  : "bg-[#141417] hover:border-white/25"
              }`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                    {tier.period}
                  </span>
                  {tier.badge && (
                    <span className="rounded-full bg-[#E9204F] text-white px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wider shadow-sm">
                      {tier.badge}
                    </span>
                  )}
                </div>

                {/* Title & Price */}
                <div className="pt-6 pb-4">
                  <h3 className="font-heading text-2xl font-bold leading-snug">
                    {tier.name}
                  </h3>
                  <div className="mt-4 mb-3 flex items-baseline gap-2">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-[#A3A3A3]">
                    {tier.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="pt-6 border-t border-white/10">
                  <p className="text-[11.5px] font-bold uppercase tracking-wider mb-3.5 text-[#A3A3A3]">
                    Scope Deliverables:
                  </p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-[13px]">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-white/95 leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-8 mt-6">
                <Link
                  href={`#consultation?package=${encodeURIComponent(tier.name)}`}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-5 text-[13.5px] font-semibold transition-all duration-200 min-h-[46px] group ${
                    tier.highlighted
                      ? "bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white shadow-lg shadow-[#E9204F]/25"
                      : "bg-white/10 hover:bg-white hover:text-[#101010] text-white border border-white/15"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Small Promotional Offer Callout from genetorial.pdf */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#18181D] via-[#1F1F24] to-[#18181D] border border-[#E9204F]/40 p-6 sm:p-7 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-[#E9204F]/20 border border-[#E9204F]/40 flex items-center justify-center text-[#E9204F] shrink-0 mt-0.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="rounded bg-[#E9204F] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
                  Limited Opportunity
                </span>
                <span className="text-[12px] text-[#A3A3A3] flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3 text-[#E9204F]" /> Valid for Q4 Clients
                </span>
              </div>
              <h4 className="font-heading text-lg font-bold text-white">
                Free Technical Architecture &amp; PageSpeed Audit ($500 Value)
              </h4>
              <p className="text-[13px] text-[#A3A3A3] mt-1 max-w-xl leading-relaxed">
                Book any web development scope this month and receive a comprehensive technical performance audit, security vulnerability assessment, and database architecture review at zero additional charge.
              </p>
            </div>
          </div>

          <Link
            href="#sec-10"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white px-6 py-3 text-[13px] font-semibold transition-all duration-200 shadow-md whitespace-nowrap min-h-[44px]"
          >
            <span>Claim Promotional Scope</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Guarantee Trust Seal */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[13px] text-[#A3A3A3]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="h-5 w-5 text-[#10B981]" />
            <span className="text-white/90">
              Every package includes our 30-day post-launch bug warranty &amp; 100% source code repository handover.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
