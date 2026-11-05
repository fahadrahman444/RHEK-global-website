import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { SpotlightCard } from "@/components/common/SpotlightCard";

export function GuaranteeSection() {
  const { headline, subtitle, description, commitments } = RHEK_CONFIG.moneyBackGuarantee;

  return (
    <section id="guarantee" className="site-container scroll-mt-24">
      {/* Dark Architectural Section */}
      <SpotlightCard
        mode="dark"
        className="rounded-2xl bg-[#101010] p-4 sm:p-8 lg:p-10 text-white"
        contentClassName="relative z-10"
      >
        <div className="relative z-10 max-w-[820px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E9204F] mb-2 sm:mb-2.5">
            <Lock className="h-3 w-3 text-[#E9204F]" />
            <span>Risk-Reversal Commitment</span>
          </div>

          <h2 className="font-heading text-[22px] sm:text-[28px] lg:text-[32px] font-bold tracking-[-0.035em] leading-[1.15] text-white">
            {headline}
          </h2>

          <p className="mt-1.5 text-[14px] sm:text-[15.5px] font-semibold text-[#E9204F]">
            {subtitle}
          </p>

          <p className="mt-1 sm:mt-2 text-[13px] sm:text-[14px] leading-relaxed text-[#A3A3A3] line-clamp-3 sm:line-clamp-none">
            {description}
          </p>
        </div>

        {/* 5 Commitments Grid */}
        <div className="relative z-10 mt-5 sm:mt-6 grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5 pt-5 sm:pt-6 border-t border-white/10">
          {commitments.map((item, i) => (
            <SpotlightCard
              key={i}
              mode="dark"
              className="rounded-xl bg-white/[0.03] border border-white/10 p-3 sm:p-4 hover:border-white/30"
              contentClassName="relative z-10"
            >
              <div className="flex items-center gap-1.5 text-[#E9204F] mb-1.5">
                <ShieldCheck className="h-4 w-4 shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-[13.5px] sm:text-[15px] font-bold text-white group-hover:text-[#E9204F] transition-colors leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] sm:text-[12.5px] leading-relaxed text-[#A3A3A3] line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>
            </SpotlightCard>
          ))}

          {/* Consultation Callout */}
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-between rounded-xl bg-white/[0.06] border border-white/15 p-3 sm:p-4 hover:border-white/30 transition-all duration-300">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/70">
                Transparent SLA Terms
              </span>
              <p className="text-[12.5px] sm:text-[13px] font-semibold text-white mt-1 leading-snug">
                Every commercial inquiry campaign operates under explicit delivery timelines and replacement criteria.
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3.5 py-1.5 text-[11.5px] sm:text-[12px] font-semibold text-white transition-all duration-200 w-fit min-h-[36px] hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Review SLA Scope</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
