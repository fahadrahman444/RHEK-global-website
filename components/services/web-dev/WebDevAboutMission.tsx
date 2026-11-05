import { Shield, Sparkles, Award, Users, TrendingUp, Target, Eye } from "@/components/common/icons";
import { SpotlightCard } from "./SpotlightCard";

const CORE_VALUES = [
  {
    title: "Integrity & Transparency",
    desc: "Building relationships through honesty, trust, and accountability in every code commit and invoice.",
    icon: Shield,
  },
  {
    title: "Innovation & Creativity",
    desc: "Embracing modern ideas, frameworks, and edge technologies to deliver smarter digital solutions.",
    icon: Sparkles,
  },
  {
    title: "Quality & Excellence",
    desc: "Maintaining rigorous professional standards, strict typing, and consistent sub-second speed.",
    icon: Award,
  },
  {
    title: "Client-Centric Approach",
    desc: "Putting client requirements, commercial conversion, and long-term business objectives first.",
    icon: Users,
  },
  {
    title: "Continuous Growth",
    desc: "Constantly expanding our technical capabilities to create enduring commercial value.",
    icon: TrendingUp,
  },
];

export function WebDevAboutMission() {
  return (
    <section id="sec-09" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        
        {/* Top: Who We Are Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
              <span>Section 09 • Who We Are</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
              Your Trusted Partner in Digital Acceleration.
            </h2>
            <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
              At RHEK GLOBAL, we bring together digital engineering expertise, creative solutions, strategic outbound marketing, and professional outsourcing under one integrated platform.
            </p>
          </div>

          {/* Mission & Vision Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SpotlightCard className="p-7 bg-[#141417]">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E9204F] mb-4">
                <Target className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#A3A3A3] block mb-1">
                OUR MISSION
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Empowering Businesses. Enabling Growth.
              </h3>
              <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                To provide innovative, reliable, and result-oriented business solutions that help organizations improve efficiency, expand their reach, and achieve their goals.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-7 bg-[#141417]">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#10B981] mb-4">
                <Eye className="h-5 w-5" />
              </div>
              <span className="font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#A3A3A3] block mb-1">
                OUR VISION
              </span>
              <h3 className="font-heading text-xl font-bold text-white mb-2">
                Building a Smarter Future for Businesses Worldwide.
              </h3>
              <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                To become a globally recognized business solutions partner through innovation, professional excellence, and long-term client relationships.
              </p>
            </SpotlightCard>
          </div>
        </div>

        {/* 5 Core Values from PDF */}
        <div className="pt-10 border-t border-white/10">
          <div className="mb-8">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] block mb-1">
              FOUNDATIONAL PILLARS
            </span>
            <h3 className="font-heading text-2xl font-bold text-white">
              Our 5 Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <SpotlightCard
                  key={val.title}
                  spotlightColor="rgba(233, 32, 79, 0.12)"
                  className="p-5 sm:p-6 group hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-3.5 group-hover:bg-[#E9204F] group-hover:border-[#E9204F] transition-all duration-300">
                      <ValIcon className="h-4 w-4" />
                    </div>
                    <span className="font-mono text-[9.5px] text-[#737373] block mb-1">
                      VALUE 0{idx + 1}
                    </span>
                    <h4 className="font-heading text-[14.5px] font-bold text-white leading-snug group-hover:text-white transition-colors">
                      {val.title}
                    </h4>
                    <p className="mt-2 text-[12px] text-[#A3A3A3] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
