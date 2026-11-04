import { TrendingUp, Award, Zap, Smartphone, ShieldCheck, Code } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const STATS = [
  { value: "100+", label: "Websites Shipped", sub: "Production Next.js & React architectures", icon: Code },
  { value: "0.8s", label: "Average Global LCP", sub: "Sub-second mobile first contentful paint", icon: Zap },
  { value: "98/100", label: "Average Lighthouse Score", sub: "Google PageSpeed performance index", icon: Award },
  { value: "100%", label: "Mobile Touch Responsive", sub: "Zero horizontal overflow bugs", icon: Smartphone },
  { value: "99.99%", label: "High-Availability Uptime", sub: "Global edge CDN distribution", icon: TrendingUp },
  { value: "100%", label: "Source Code Handover", sub: "Zero proprietary lock-in or licensing fees", icon: ShieldCheck },
];

export function WebDevStatistics() {
  return (
    <section id="sec-07" className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <TrendingUp className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Section 07 • Achievements &amp; Statistics</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            Driving Growth. Delivering Measurable Outcomes.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            Our engineering track record is measured in verifiable benchmarks: sub-second page loads, higher conversion rates, and robust enterprise scalability.
          </p>
        </div>

        {/* 6-Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <SpotlightCard
                key={idx}
                spotlightColor="rgba(233, 32, 79, 0.15)"
                className="p-7 sm:p-8 group hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-[11px] font-bold text-[#737373] uppercase tracking-wider">
                      BENCHMARK 0{idx + 1}
                    </span>
                    <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A3A3A3] group-hover:text-[#E9204F] transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="pt-6">
                    <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#E9204F] transition-all">
                      {stat.value}
                    </span>
                    <h3 className="font-heading text-[16px] font-bold text-white mt-2 leading-snug">
                      {stat.label}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#A3A3A3] leading-relaxed">
                      {stat.sub}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
