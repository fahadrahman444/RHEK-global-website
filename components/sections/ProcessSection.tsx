import Link from "next/link";
import { Target, MessageSquare, Award, TrendingUp, ArrowRight, Zap } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function ProcessSection() {
  const { headline, subheadline, steps, principles } = RHEK_CONFIG.workProcess;

  return (
    <section id="process" className="site-container scroll-mt-24">
      {/* Section Header */}
      <div className="max-w-[760px] mb-4 sm:mb-6">
        <span className="inline-block text-[10px] sm:text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
          Execution Framework
        </span>
        <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
          {headline}
        </h2>
        <p className="mt-1.5 text-[13.5px] sm:text-[14.5px] leading-relaxed text-[#525252]">
          {subheadline}
        </p>
      </div>

      {/* Mobile Swipe Hint */}
      <div className="md:hidden flex items-center justify-between text-[10.5px] text-[#737373] mb-2 px-0.5">
        <span>Swipe through 7-step execution roadmap</span>
        <span className="font-semibold text-[#101010]">7 Steps →</span>
      </div>

      {/* 7 Steps + 1 CTA Card (Balanced 4x2 Grid on Desktop) */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 scrollbar-none -mx-1 px-1 sm:mx-0 sm:px-0 mb-5 sm:mb-7">
        {steps.map((stepItem, index) => (
          <div
            key={index}
            className="min-w-[72%] sm:min-w-[260px] md:min-w-0 snap-center shrink-0 md:shrink group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3 sm:p-4 hover:bg-white hover:border-[#101010] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <span className="inline-block font-mono text-[9px] sm:text-[10.5px] font-bold text-[#101010] bg-white border border-[#EBEBEB] rounded px-1.5 sm:px-2 py-0.5 mb-1.5 sm:mb-2 group-hover:border-[#E9204F]/40 group-hover:text-[#E9204F] transition-colors">
                Step 0{stepItem.step}
              </span>
              <h3 className="text-[13px] sm:text-[14.5px] font-bold text-[#101010] mb-1 sm:mb-1.5 leading-snug group-hover:text-[#E9204F] transition-colors">
                {stepItem.title}
              </h3>
              <p className="text-[11px] sm:text-[12.5px] text-[#525252] leading-relaxed line-clamp-3 sm:line-clamp-none">
                {stepItem.description}
              </p>
            </div>
          </div>
        ))}

        {/* 8th Slot: Balanced Callout Card (Fills Desktop Grid Dead Space) */}
        <div className="min-w-[72%] sm:min-w-[260px] md:min-w-0 snap-center shrink-0 md:shrink flex flex-col justify-between rounded-xl bg-[#101010] p-3 sm:p-4 text-white shadow-xs hover:shadow-md transition-all">
          <div>
            <div className="flex items-center gap-1.5 text-[#E9204F] mb-1.5">
              <Zap className="h-3.5 w-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Ready to Deploy</span>
            </div>
            <h3 className="text-[13.5px] sm:text-[15px] font-bold text-white mb-1 leading-snug">
              Launch Your Territory
            </h3>
            <p className="text-[11px] sm:text-[12px] text-[#A3A3A3] leading-relaxed">
              Initiate custom SDR onboarding or full-stack engineering scoping within 24 hours.
            </p>
          </div>
          <Link
            href="/#contact"
            className="mt-3 inline-flex items-center justify-between rounded-lg bg-white/10 hover:bg-[#E9204F] text-white px-3 py-1.5 text-[11.5px] font-semibold transition-colors w-full"
          >
            <span>Start Scoping</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* 4 Working Principles Footer Strip */}
      <div className="border-t border-[#EBEBEB] pt-4 sm:pt-6">
        <div className="mb-3 sm:mb-4">
          <span className="text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
            Operating Values
          </span>
          <h3 className="text-[16px] sm:text-[18px] font-bold text-[#101010] mt-0.5">
            4 Disciplined Execution Principles
          </h3>
        </div>

        {/* 4 Principles — Compact 2-column mobile grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className="group flex flex-col sm:flex-row items-start gap-2 sm:gap-2.5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-2.5 sm:p-3.5 hover:border-[#101010] hover:bg-white hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="mt-0.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] shrink-0 group-hover:bg-[#101010] group-hover:text-white transition-colors duration-200">
                {idx === 0 && <Target className="h-3 sm:h-4 w-3 sm:w-4" />}
                {idx === 1 && <MessageSquare className="h-3 sm:h-4 w-3 sm:w-4" />}
                {idx === 2 && <Award className="h-3 sm:h-4 w-3 sm:w-4" />}
                {idx === 3 && <TrendingUp className="h-3 sm:h-4 w-3 sm:w-4" />}
              </div>
              <div>
                <h4 className="text-[12px] sm:text-[14px] font-bold text-[#101010] leading-snug group-hover:text-[#E9204F] transition-colors">
                  {principle.title}
                </h4>
                <p className="mt-0.5 text-[10.5px] sm:text-[13px] text-[#525252] leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
