"use client";

import { Check, ArrowUpRight, Sparkles, Gift } from "@/components/common/icons";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function WebDevPricingClean() {
  const scrollToCta = () => {
    const el = document.getElementById("cta");
    if (el) {
      const offset = 140;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  const tiers = [
    {
      name: "Starter Website",
      price: "$2,500",
      type: "Fixed Bid",
      timeline: "2 Weeks",
      desc: "Perfect for emerging businesses seeking an authoritative, high-speed digital presence to win credibility.",
      features: [
        "Up to 5 bespoke Next.js pages",
        "Swiss Minimal responsive design",
        "Lighthouse 95+ performance guarantee",
        "Mobile-first touch ergonomics",
        "Contact form & email notification setup",
        "14-day money-back guarantee",
      ],
      popular: false,
    },
    {
      name: "Professional Business",
      price: "$4,800",
      type: "Fixed Bid",
      timeline: "3–4 Weeks",
      desc: "Comprehensive corporate presence engineered for established brands generating active inbound sales pipeline.",
      features: [
        "Up to 12 custom Next.js pages",
        "Full Figma design system & tokens",
        "Interactive lead capture & calculators",
        "100/100 Lighthouse benchmark target",
        "Custom animations via Framer Motion",
        "Technical SEO & OpenGraph metadata",
        "30-day post-launch warranty",
      ],
      popular: true,
    },
    {
      name: "Enterprise Web App",
      price: "$9,500+",
      type: "Custom Scope",
      timeline: "4–6 Weeks",
      desc: "Complex full-stack web applications, customer portals, or headless e-commerce architectures with custom databases.",
      features: [
        "Full-stack Next.js 15 App Router",
        "PostgreSQL / Supabase database architecture",
        "Authentication & Role-Based Access Control",
        "Third-party API & CRM integrations",
        "Stripe / headless payment gateway",
        "Dedicated project engineer & SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#E9204F]/10 text-[#E9204F] text-[11px] font-bold uppercase tracking-wider mb-3">
            Investment &amp; Packages
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-tight sm:leading-tight lg:leading-[1.18]">
            Transparent, Fixed-Bid Pricing. No Hidden Surprises.
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            Every quote includes complete source code ownership, performance guarantees, and milestone-based invoicing.
          </p>
        </div>

        {/* 3 Tier Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {tiers.map((tier, idx) => (
            <SpotlightCard
              key={idx}
              mode="light"
              spotlightColor={tier.popular ? "rgba(233, 32, 79, 0.28)" : undefined}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-200 relative ${
                tier.popular
                  ? "border-2 border-[#E9204F] bg-white shadow-xl ring-1 ring-[#E9204F]/20"
                  : "border border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#101010]"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#E9204F] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-sm flex items-center gap-1 z-30">
                  <Sparkles className="h-3 w-3" />
                  <span>Most Popular Choice</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EBEBEB]">
                  <h3 className="text-xl font-bold text-[#101010]">{tier.name}</h3>
                  <span className="text-[11px] font-mono font-bold text-[#737373] bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">
                    {tier.timeline}
                  </span>
                </div>

                <div className="my-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#101010] tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-sm font-semibold text-[#737373]">
                      / {tier.type}
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#525252] mt-3 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#EBEBEB] space-y-3 mb-8">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#737373]">
                    What is Included:
                  </p>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-[13px] text-[#101010]">
                      <Check className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToCta}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-6 text-[14px] font-bold transition-all duration-200 min-h-[46px] ${
                  tier.popular
                    ? "bg-[#E9204F] hover:bg-[#101010] text-white shadow-md hover:shadow-lg"
                    : "bg-[#101010] hover:bg-[#E9204F] text-white"
                }`}
              >
                <span>Select {tier.name}</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </SpotlightCard>
          ))}
        </div>

        {/* Limited Q4 Promotional Offer Banner */}
        <SpotlightCard
          mode="light"
          spotlightColor="rgba(233, 32, 79, 0.22)"
          className="rounded-2xl border border-[#E9204F]/30 bg-[#E9204F]/5 p-6 sm:p-8"
          contentClassName="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#E9204F] text-white flex items-center justify-center shrink-0">
              <Gift className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#E9204F] text-white text-[10px] font-bold uppercase tracking-wider">
                  Limited Q4 Promotion
                </span>
                <span className="text-[12px] font-bold text-[#101010]">$500 Complimentary Value</span>
              </div>
              <h4 className="text-lg font-bold text-[#101010] mt-1">
                Complimentary Technical SEO &amp; Core Web Vitals Audit
              </h4>
              <p className="text-[13px] text-[#525252] mt-0.5">
                Every project proposal signed this quarter receives a free diagnostic audit of your legacy digital assets.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToCta}
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#101010] hover:bg-[#E9204F] text-white text-[13px] font-bold transition-colors min-h-[42px]"
          >
            <span>Claim Q4 Promo</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </SpotlightCard>
      </div>
    </section>
  );
}
