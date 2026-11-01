import { Target, MessageSquare, Award, TrendingUp } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function ProcessSection() {
  const { headline, subheadline, steps, principles } = RHEK_CONFIG.workProcess;

  return (
    <section id="process" className="site-container scroll-mt-24">
      <div className="rounded-[32px] bg-white border border-[#F3F3F3] p-6 sm:p-10 lg:p-14 shadow-xs">
        {/* Section Header */}
        <div className="max-w-[760px] mb-12">
          <div className="w-10 h-0.5 bg-[#E9204F] mb-3" />
          <span className="inline-block text-[12px] font-extrabold uppercase tracking-widest text-[#E9204F] mb-1 font-display">
            Our Work Process
          </span>
          <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold text-[#101010] tracking-[-0.04em] leading-[1.15]">
            {headline}
          </h2>
          <p className="mt-3 text-[17px] leading-relaxed text-[#747474] font-sans">
            {subheadline}
          </p>
        </div>

        {/* 7-Step Horizontal / Grid Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {steps.map((stepItem, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-2xl bg-[#F3F3F3] p-6 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#101010] hover:text-white hover:shadow-xl"
            >
              <div>
                <span className="inline-block font-display text-[12px] font-extrabold text-white bg-[#E9204F] rounded-lg px-2.5 py-1 mb-3 shadow-2xs">
                  Step {stepItem.step}
                </span>
                <h3 className="text-[17px] font-extrabold font-display text-[#101010] group-hover:text-white mb-2 leading-snug transition-colors duration-700">
                  {stepItem.title}
                </h3>
                <p className="text-[14.5px] text-[#747474] group-hover:text-[#ACACAC] leading-relaxed font-sans transition-colors duration-700">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Working Principles Footer Strip */}
        <div className="border-t border-[#F3F3F3] pt-10">
          <div className="mb-6">
            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#747474] font-display">
              Core Execution Values
            </span>
            <h3 className="text-[22px] font-extrabold font-display text-[#101010] mt-1">
              Our 4 Working Principles
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {principles.map((principle, idx) => (
              <div
                key={idx}
                className="group flex items-start gap-3 rounded-2xl bg-[#FAFAFA] border border-[#F3F3F3] p-5 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F] hover:shadow-sm"
              >
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#F3F3F3] text-[#E9204F] shrink-0 group-hover:bg-[#E9204F] group-hover:text-white transition-all duration-700">
                  {idx === 0 && <Target className="h-4 w-4" />}
                  {idx === 1 && <MessageSquare className="h-4 w-4" />}
                  {idx === 2 && <Award className="h-4 w-4" />}
                  {idx === 3 && <TrendingUp className="h-4 w-4" />}
                </div>
                <div>
                  <h4 className="text-[15px] font-extrabold font-display text-[#101010] leading-tight">
                    {principle.title}
                  </h4>
                  <p className="mt-1 text-[13.5px] text-[#747474] leading-relaxed font-sans">
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
