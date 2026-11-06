import Link from "next/link";
import { ShieldCheck, Lock, ArrowRight } from "@/components/common/icons";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function GuaranteeSection() {
  const { headline, subtitle, description, commitments } = RHEK_CONFIG.moneyBackGuarantee;

  return (
    <section id="guarantee" className="site-container scroll-mt-24">
      {/* Light Architectural Section Container */}
      <div className="rounded-2xl bg-[#FAFAFA] border border-zinc-200/80 p-4 sm:p-8 lg:p-10 text-[#101010]">
        <div className="max-w-[820px]">
          {/* Subtle Dynamic Status Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#E9204F] mb-3">
            <Lock className="h-3 w-3 text-[#E9204F]" />
            <span>Risk-Reversal Commitment</span>
          </div>

          <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-[1.15] text-[#101010]">
            {headline}
          </h2>

          <p className="mt-1 text-[14px] sm:text-[16px] font-semibold text-[#E9204F]">
            {subtitle}
          </p>

          <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-[15px] leading-relaxed text-zinc-600">
            {description}
          </p>
        </div>

        {/* Mobile View (< md): Unified Swiss Trust Card (Compact 1-Container Checklist) */}
        <div className="mt-5 md:hidden rounded-xl bg-white border border-zinc-200/80 p-3.5 divide-y divide-zinc-100">
          {commitments.map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-2.5 ${i > 0 ? "pt-2.5" : ""} ${
                i < commitments.length - 1 ? "pb-2.5" : ""
              }`}
            >
              <ShieldCheck className="h-4 w-4 text-[#E9204F] shrink-0 mt-0.5" />
              <div className="min-w-0">
                <h3 className="text-[13px] font-bold text-[#101010] leading-snug">
                  {item.title}
                </h3>
                <p className="text-[12px] text-zinc-600 leading-normal mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Compact Mobile SLA Row */}
          <div className="pt-3 mt-1 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Transparent SLA Terms
              </span>
              <p className="text-[11.5px] text-zinc-600 truncate">
                Timelines &amp; replacement criteria
              </p>
            </div>
            <Link
              href="/#contact"
              className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-[#E9204F] hover:bg-[#101010] px-3 py-1.5 text-[11.5px] font-semibold text-white transition-all min-h-[36px]"
            >
              <span>Review SLA</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Desktop View (>= md): 5 Commitments Grid — Clean 1-Border Cards */}
        <div className="mt-6 sm:mt-8 hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6 border-t border-zinc-200/70">
          {commitments.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-white border border-zinc-200/80 p-4 sm:p-5 hover:border-zinc-400 hover:shadow-2xs transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-[#E9204F] mb-2">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <h3 className="text-[14px] sm:text-[15px] font-bold text-[#101010] leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] leading-relaxed text-zinc-600">
                {item.description}
              </p>
            </div>
          ))}

          {/* SLA Terms Card */}
          <div className="flex flex-col justify-between rounded-xl bg-white border border-zinc-200/80 p-4 sm:p-5 hover:border-zinc-400 transition-all duration-200">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Transparent SLA Terms
              </span>
              <p className="text-[13px] font-semibold text-[#101010] mt-1.5 leading-snug">
                Every commercial inquiry campaign operates under explicit delivery timelines and replacement criteria.
              </p>
            </div>
            <Link
              href="/#contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-[#E9204F] hover:bg-[#101010] px-4 py-2 text-[12px] sm:text-[13px] font-semibold text-white transition-all duration-200 w-fit min-h-[36px] shadow-xs"
            >
              <span>Review SLA Scope</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
