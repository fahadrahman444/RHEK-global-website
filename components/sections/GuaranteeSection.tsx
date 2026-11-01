import Link from "next/link";
import { ShieldCheck, Lock, ArrowUpRight } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function GuaranteeSection() {
  const { headline, subtitle, description, commitments } = RHEK_CONFIG.moneyBackGuarantee;

  return (
    <section id="guarantee" className="site-container scroll-mt-24">
      {/* Dark Section — Solid #101010 surface */}
      <div className="relative overflow-hidden rounded-[32px] bg-[#101010] p-6 sm:p-10 lg:p-14 text-white shadow-xl border border-white/10">
        <div className="relative z-10 max-w-[820px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1 text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] mb-5 font-display">
            <Lock className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Zero-Risk Guarantee</span>
          </div>

          <h2 className="font-display text-[32px] sm:text-[44px] font-extrabold tracking-[-0.04em] leading-[1.14] text-white">
            {headline}
          </h2>

          <p className="mt-2 font-display text-[18px] sm:text-[22px] font-bold text-[#E9204F]">
            {subtitle}
          </p>

          <p className="mt-4 text-[16px] leading-relaxed text-[#ACACAC] font-sans">
            {description}
          </p>
        </div>

        {/* 5 Commitments Grid */}
        <div className="relative z-10 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 border-t border-white/10">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 p-5 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#E9204F] hover:border-[#E9204F] group"
            >
              <div className="flex items-center gap-2 text-[#E9204F] group-hover:text-white mb-2.5 transition-colors duration-700">
                <ShieldCheck className="h-4.5 w-4.5 shrink-0" />
                <h3 className="text-[16px] font-extrabold font-display text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[14px] leading-relaxed text-[#ACACAC] group-hover:text-white/90 font-sans transition-colors duration-700">
                {item.description}
              </p>
            </div>
          ))}

          {/* Quick Consultation Callout */}
          <div className="flex flex-col justify-between rounded-2xl bg-[#E9204F] p-5 text-white shadow-lg">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-white/80 font-display">
                Transparent Agreements
              </span>
              <p className="text-[15px] font-bold text-white mt-1.5 font-sans leading-snug">
                {RHEK_CONFIG.company.tagline}
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white text-[#101010] hover:bg-[#101010] hover:text-white px-5 py-2.5 text-[13px] font-bold font-display uppercase tracking-wider transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] w-fit min-h-[44px]"
            >
              <span>Discuss Guarantee</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
