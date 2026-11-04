import { Target, MessageSquare, Award, TrendingUp } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function ProcessSection() {
  const { headline, subheadline, steps, principles } = RHEK_CONFIG.workProcess;

  return (
    <section id="process" className="site-container scroll-mt-24">
      <div className="rounded-2xl bg-white border border-[#EBEBEB] p-5 sm:p-7 lg:p-9 shadow-xs">
        {/* Section Header */}
        <div className="max-w-[760px] mb-6">
          <span className="inline-block text-[10.5px] font-bold uppercase tracking-widest text-[#737373] mb-1">
            Execution Framework
          </span>
          <h2 className="font-heading text-[24px] sm:text-[32px] font-bold text-[#101010] tracking-[-0.035em] leading-[1.15]">
            {headline}
          </h2>
          <p className="mt-1.5 text-[14.5px] leading-relaxed text-[#525252]">
            {subheadline}
          </p>
        </div>

        {/* 7-Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-4 hover:bg-white hover:border-[#101010] hover:shadow-2xs transition-all duration-200"
            >
              <div>
                <span className="inline-block font-mono text-[10.5px] font-bold text-[#101010] bg-white border border-[#EBEBEB] rounded px-2 py-0.5 mb-2">
                  Step 0{stepItem.step}
                </span>
                <h3 className="text-[14.5px] font-bold text-[#101010] mb-1.5 leading-snug">
                  {stepItem.title}
                </h3>
                <p className="text-[12.5px] text-[#525252] leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Working Principles Footer Strip */}
        <div className="border-t border-[#EBEBEB] pt-6">
          <div className="mb-4">
            <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
              Operating Values
            </span>
            <h3 className="text-[18px] font-bold text-[#101010] mt-0.5">
              4 Disciplined Execution Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3.5 hover:border-[#101010] transition-colors"
              >
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] shrink-0">
                  {idx === 0 && <Target className="h-4 w-4" />}
                  {idx === 1 && <MessageSquare className="h-4 w-4" />}
                  {idx === 2 && <Award className="h-4 w-4" />}
                  {idx === 3 && <TrendingUp className="h-4 w-4" />}
                </div>
                <div>
                  <h4 className="text-[14px] font-bold text-[#101010] leading-snug">
                    {principle.title}
                  </h4>
                  <p className="mt-1 text-[13px] text-[#525252] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
