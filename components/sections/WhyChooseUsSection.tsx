import { CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Handshake } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function WhyChooseUsSection() {
  const { whyChooseUs, companyProfile } = RHEK_CONFIG;

  return (
    <section className="site-container">
      <div className="rounded-2xl bg-[#101010] text-white p-4 sm:p-8 lg:p-10">
        {/* Header */}
        <div className="max-w-[760px] mb-4 sm:mb-6">
          <span className="inline-block text-[9.5px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F] bg-white/10 border border-white/15 px-2 py-0.5 rounded mb-1.5 sm:mb-2">
            Institutional Advantages
          </span>
          <h2 className="font-heading text-[20px] sm:text-[30px] lg:text-[32px] font-bold tracking-[-0.035em] leading-[1.15] mt-0.5 text-white">
            Your Dedicated Partner in Commercial Growth
          </h2>
          <p className="mt-1 text-[12.5px] sm:text-[14.5px] leading-relaxed text-[#A3A3A3] line-clamp-2 sm:line-clamp-none">
            RHEK GLOBAL combines targeted B2B sales pipelines, precision digital engineering, and specialized operational support to generate measurable enterprise outcomes.
          </p>
        </div>

        {/* 6 Value Pillars Grid — Compact 2-column mobile grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 mb-5 sm:mb-8">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between rounded-xl bg-white/[0.03] border border-white/10 p-2.5 sm:p-4 hover:border-white/30 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="mb-1.5 sm:mb-2.5 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-white/10 text-[#E9204F] group-hover:scale-110 group-hover:bg-[#E9204F] group-hover:text-white transition-all duration-300">
                  {idx === 0 && <Sparkles className="h-3 sm:h-4 w-3 sm:w-4" />}
                  {idx === 1 && <Zap className="h-3 sm:h-4 w-3 sm:w-4" />}
                  {idx === 2 && <Users className="h-3 sm:h-4 w-3 sm:w-4" />}
                  {idx === 3 && <ShieldCheck className="h-3 sm:h-4 w-3 sm:w-4" />}
                  {idx === 4 && <CheckCircle2 className="h-3 sm:h-4 w-3 sm:w-4" />}
                  {idx === 5 && <Handshake className="h-3 sm:h-4 w-3 sm:w-4" />}
                </div>
                <h3 className="text-[12px] sm:text-[15px] font-bold text-white mb-0.5 sm:mb-1 leading-snug group-hover:text-[#E9204F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[10.5px] sm:text-[12.5px] text-[#A3A3A3] leading-relaxed line-clamp-3 sm:line-clamp-none">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission, Vision & Core Values Strip */}
        <div className="border-t border-white/10 pt-4 sm:pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Our Mission
              </span>
              <h4 className="text-[15px] sm:text-[17px] font-bold text-white mt-0.5 sm:mt-1">
                {companyProfile.mission.headline}
              </h4>
              <p className="text-[11.5px] sm:text-[13.5px] text-[#A3A3A3] mt-0.5 sm:mt-1 leading-relaxed">
                {companyProfile.mission.text}
              </p>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Our Vision
              </span>
              <h4 className="text-[15px] sm:text-[17px] font-bold text-white mt-0.5 sm:mt-1">
                {companyProfile.vision.headline}
              </h4>
              <p className="text-[11.5px] sm:text-[13.5px] text-[#A3A3A3] mt-0.5 sm:mt-1 leading-relaxed">
                {companyProfile.vision.text}
              </p>
            </div>
          </div>

          <div>
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
              5 Core Values
            </span>
            <div className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2.5">
              {companyProfile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-[11px] sm:text-[13px] rounded-lg bg-white/[0.02] border border-white/5 p-2 sm:p-3 hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span className="font-bold text-white whitespace-nowrap">
                    {val.name}:
                  </span>
                  <span className="text-[#A3A3A3]">{val.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
