import { CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Handshake } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

export function WhyChooseUsSection() {
  const { whyChooseUs, companyProfile } = RHEK_CONFIG;

  return (
    <section className="site-container">
      <div className="rounded-[32px] bg-[#101010] text-white p-6 sm:p-10 lg:p-14 shadow-xl border border-white/10">
        {/* Header */}
        <div className="max-w-[760px] mb-12">
          <span className="inline-block text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] bg-white/10 border border-white/20 px-3.5 py-1 rounded-full mb-3 shadow-2xs font-display">
            Why Choose RHEK GLOBAL
          </span>
          <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold tracking-[-0.04em] leading-[1.15] mt-1.5 text-white">
            Your Trusted Partner in{" "}
            <span className="text-[#E9204F]">Intelligent Growth</span>
          </h2>
          <p className="mt-3 text-[16px] leading-relaxed text-[#ACACAC] font-sans">
            At RHEK GLOBAL, we bring together digital expertise, creative design, sales development, and dedicated operational outsourcing under one roof to simplify your operations and maximize business outcomes.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl bg-white/5 border border-white/10 p-6 transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:bg-[#E9204F] hover:border-[#E9204F] group"
            >
              <div>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#E9204F] group-hover:bg-white group-hover:text-[#E9204F] transition-all duration-700">
                  {idx === 0 && <Sparkles className="h-5 w-5" />}
                  {idx === 1 && <Zap className="h-5 w-5" />}
                  {idx === 2 && <Users className="h-5 w-5" />}
                  {idx === 3 && <ShieldCheck className="h-5 w-5" />}
                  {idx === 4 && <CheckCircle2 className="h-5 w-5" />}
                  {idx === 5 && <Handshake className="h-5 w-5" />}
                </div>
                <h3 className="text-[18px] font-extrabold font-display text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#ACACAC] group-hover:text-white/90 leading-relaxed font-sans transition-colors duration-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission, Vision & Core Values Strip */}
        <div className="border-t border-white/10 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
                Our Mission
              </span>
              <h4 className="text-[20px] font-extrabold font-display text-white mt-1">
                {companyProfile.mission.headline}
              </h4>
              <p className="text-[14.5px] text-[#ACACAC] mt-1.5 leading-relaxed font-sans">
                {companyProfile.mission.text}
              </p>
            </div>

            <div>
              <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
                Our Vision
              </span>
              <h4 className="text-[20px] font-extrabold font-display text-white mt-1">
                {companyProfile.vision.headline}
              </h4>
              <p className="text-[14.5px] text-[#ACACAC] mt-1.5 leading-relaxed font-sans">
                {companyProfile.vision.text}
              </p>
            </div>
          </div>

          <div>
            <span className="text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] font-display">
              Our 5 Core Values
            </span>
            <div className="mt-4 space-y-3">
              {companyProfile.coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-[13.5px] rounded-xl bg-white/5 border border-white/5 p-3.5 transition-colors duration-700 hover:border-white/20"
                >
                  <span className="font-extrabold font-display text-white whitespace-nowrap">
                    {val.name}:
                  </span>
                  <span className="text-[#ACACAC] font-sans">{val.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
