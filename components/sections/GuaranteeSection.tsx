import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function GuaranteeSection() {
  const { headline, subtitle, description, commitments } = RHEK_CONFIG.moneyBackGuarantee;

  return (
    <section id="guarantee" className="site-container scroll-mt-24">
      {/* Dark Architectural Section */}
      <div className="relative overflow-hidden rounded-2xl bg-[#101010] p-5 sm:p-7 lg:p-9 text-white shadow-lg border border-white/10">
        <div className="relative z-10 max-w-[820px]">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 rounded bg-white/10 border border-white/15 px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-[#E9204F] mb-2.5">
            <Lock className="h-3 w-3 text-[#E9204F]" />
            <span>Risk-Reversal Commitment</span>
          </div>

          <h2 className="font-heading text-[24px] sm:text-[32px] font-bold tracking-[-0.035em] leading-[1.14] text-white">
            {headline}
          </h2>

          <p className="mt-1.5 text-[15px] sm:text-[17px] font-semibold text-[#E9204F]">
            {subtitle}
          </p>

          <p className="mt-2 text-[14px] leading-relaxed text-[#A3A3A3]">
            {description}
          </p>
        </div>

        {/* 5 Commitments Grid */}
        <div className="relative z-10 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-6 border-t border-white/10">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:border-white/25 transition-colors"
            >
              <div className="flex items-center gap-2 text-[#E9204F] mb-1.5">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <h3 className="text-[14.5px] font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12.5px] leading-relaxed text-[#A3A3A3]">
                {item.description}
              </p>
            </div>
          ))}

          {/* Consultation Callout */}
          <div className="flex flex-col justify-between rounded-xl bg-white/[0.06] border border-white/15 p-4">
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-white/70">
                Transparent SLA Terms
              </span>
              <p className="text-[13px] font-semibold text-white mt-1 leading-snug">
                Every commercial inquiry campaign operates under explicit delivery timelines and replacement criteria.
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-white hover:text-[#101010] px-3.5 py-1.5 text-[12px] font-semibold text-white transition-colors duration-200 w-fit min-h-[36px]"
            >
              <span>Review SLA Scope</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
