import { CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Handshake } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function WhyChooseUsSection() {
  const { whyChooseUs, companyProfile } = RHEK_CONFIG;

  return (
    <section className="site-container">
      <div className="rounded-2xl bg-[#101010] text-white p-7 sm:p-11 lg:p-14 shadow-lg border border-white/10">
        {/* Header */}
        <div className="max-w-[760px] mb-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-white/10 border border-white/15 px-3 py-1 rounded mb-3">
            Institutional Advantages
          </span>
          <h2 className="font-heading text-[30px] sm:text-[40px] font-bold tracking-[-0.035em] leading-[1.15] mt-1 text-white">
            Your Dedicated Partner in Commercial Growth
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-[#A3A3A3]">
            RHEK GLOBAL combines targeted B2B sales pipelines, precision digital engineering, and specialized operational support to generate measurable enterprise outcomes.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl bg-white/[0.03] border border-white/10 p-5 hover:border-white/25 transition-colors"
            >
              <div>
                <div className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#E9204F]">
                  {idx === 0 && <Sparkles className="h-4 w-4" />}
                  {idx === 1 && <Zap className="h-4 w-4" />}
                  {idx === 2 && <Users className="h-4 w-4" />}
                  {idx === 3 && <ShieldCheck className="h-4 w-4" />}
                  {idx === 4 && <CheckCircle2 className="h-4 w-4" />}
                  {idx === 5 && <Handshake className="h-4 w-4" />}
                </div>
                <h3 className="text-[16px] font-bold text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission, Vision & Core Values Strip */}
        <div className="border-t border-white/10 pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Our Mission
              </span>
              <h4 className="text-[17px] font-bold text-white mt-1">
                {companyProfile.mission.headline}
              </h4>
              <p className="text-[13.5px] text-[#A3A3A3] mt-1 leading-relaxed">
                {companyProfile.mission.text}
              </p>
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                Our Vision
              </span>
              <h4 className="text-[17px] font-bold text-white mt-1">
                {companyProfile.vision.headline}
              </h4>
              <p className="text-[13.5px] text-[#A3A3A3] mt-1 leading-relaxed">
                {companyProfile.vision.text}
              </p>
            </div>
          </div>

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
              5 Core Values
            </span>
            <div className="mt-3 space-y-2.5">
              {companyProfile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-[13px] rounded-lg bg-white/[0.02] border border-white/5 p-3 hover:border-white/15 transition-colors"
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
