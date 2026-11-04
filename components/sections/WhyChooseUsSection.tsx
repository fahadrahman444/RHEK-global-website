import { CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Handshake } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function WhyChooseUsSection() {
  const { whyChooseUs, companyProfile } = RHEK_CONFIG;

  return (
    <section className="site-container">
      {/* Header */}
      <div className="max-w-[760px] mb-4 sm:mb-6">
        <span className="inline-block text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373] mb-1">
          Institutional Advantages
        </span>
        <h2 className="font-heading text-[22px] sm:text-[30px] lg:text-[32px] font-bold tracking-[-0.035em] leading-[1.15] text-[#101010]">
          Your Dedicated Partner in Commercial Growth
        </h2>
        <p className="mt-1.5 text-[13px] sm:text-[14.5px] leading-relaxed text-[#525252]">
          RHEK GLOBAL combines targeted B2B sales pipelines, precision digital engineering, and specialized operational support to generate measurable enterprise outcomes.
        </p>
      </div>

      {/* 6 Value Pillars Grid — Clean 2-column on mobile, 3-column on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-7">
        {whyChooseUs.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col justify-between rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3 sm:p-4 hover:border-[#101010] hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div>
              <div className="mb-2 sm:mb-2.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-white border border-[#EBEBEB] text-[#101010] group-hover:scale-105 group-hover:bg-[#101010] group-hover:text-white transition-all duration-300">
                {idx === 0 && <Sparkles className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {idx === 1 && <Zap className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {idx === 2 && <Users className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {idx === 3 && <ShieldCheck className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {idx === 4 && <CheckCircle2 className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
                {idx === 5 && <Handshake className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
              </div>
              <h3 className="text-[12.5px] sm:text-[15px] font-bold text-[#101010] mb-1 leading-snug group-hover:text-[#E9204F] transition-colors">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-[12.5px] text-[#525252] leading-relaxed line-clamp-3 sm:line-clamp-none">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mission, Vision & Core Values Strip */}
      <div className="border-t border-[#EBEBEB] pt-4 sm:pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3.5 sm:p-4">
            <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F]">
              Our Mission
            </span>
            <h4 className="text-[14px] sm:text-[16px] font-bold text-[#101010] mt-0.5">
              {companyProfile.mission.headline}
            </h4>
            <p className="text-[11.5px] sm:text-[13px] text-[#525252] mt-1 leading-relaxed">
              {companyProfile.mission.text}
            </p>
          </div>

          <div className="rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] p-3.5 sm:p-4">
            <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F]">
              Our Vision
            </span>
            <h4 className="text-[14px] sm:text-[16px] font-bold text-[#101010] mt-0.5">
              {companyProfile.vision.headline}
            </h4>
            <p className="text-[11.5px] sm:text-[13px] text-[#525252] mt-1 leading-relaxed">
              {companyProfile.vision.text}
            </p>
          </div>
        </div>

        <div>
          <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#737373]">
            5 Institutional Principles
          </span>
          <div className="mt-2 space-y-1.5">
            {companyProfile.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-[11.5px] sm:text-[12.5px] rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] p-2.5 hover:border-[#101010] transition-colors"
              >
                <span className="font-bold text-[#101010] whitespace-nowrap">
                  {val.name}:
                </span>
                <span className="text-[#525252]">{val.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
