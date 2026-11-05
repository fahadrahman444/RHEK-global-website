import { CheckCircle2, ShieldCheck, Zap, Code, Lock, Cpu } from "@/components/common/icons";

export function WebDevArchitecture() {
  const standards = [
    {
      icon: Zap,
      title: "Sub-Second Global LCP",
      desc: "Static Generation (SSG) and edge caching guarantee your pages paint under 800ms worldwide.",
      stat: "< 0.8s LCP",
    },
    {
      icon: Code,
      title: "Strict Static Typing",
      desc: "Every prop, API payload, and state hook is strictly typed. Zero loose 'any' types in production.",
      stat: "100% Type-Safe",
    },
    {
      icon: Cpu,
      title: "Minimalist Dependency Ladder",
      desc: "We avoid bloated npm libraries. Lightweight, audited packages mean tiny bundle footprints.",
      stat: "< 85KB Bundle",
    },
    {
      icon: Lock,
      title: "Full Code Ownership & Freedom",
      desc: "Zero monthly proprietary builder fees. You receive full GitHub repository ownership and deployment CI/CD.",
      stat: "100% Ownership",
    },
  ];

  return (
    <section id="sec-06" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Two-Column Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (5 Cols): Main Heading and Brand Philosophy */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
                <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                <span>Section 06 • Why Choose RHEK GLOBAL</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
                Software Craftsmanship Instead of Generic AI Slop.
              </h2>
              <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
                Most agency websites are heavy WordPress installations or brittle drag-and-drop templates running 40 third-party plugins. They crash during traffic spikes and fail mobile performance audits.
              </p>
              <p className="mt-3.5 text-[14.5px] text-[#A3A3A3] leading-relaxed">
                We treat your commercial website as a mission-critical web application: hand-crafted TypeScript, atomic design tokens, and sub-second edge distribution.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 rounded-2xl bg-white/5 p-5 border border-white/10">
              <span className="font-mono text-[11px] font-bold text-[#E9204F] uppercase tracking-wider block mb-1.5">
                GUARANTEED ACCESSIBILITY
              </span>
              <p className="text-[13px] text-white/90 font-medium leading-relaxed">
                Every website we deliver is verified against WCAG 2.2 Level AA accessibility standards, semantic landmarks, and safe touch targets.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Architectural Standards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {standards.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-white/10 bg-[#141417] hover:border-[#E9204F]/50 hover:-translate-y-1.5 p-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#E9204F]/5"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-[#E9204F] group-hover:border-[#E9204F] transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-[#10B981] bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full group-hover:border-emerald-500/60 transition-colors">
                      {s.stat}
                    </span>
                  </div>
                  <h3 className="font-heading text-[17px] font-bold text-white mb-2 leading-snug group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-[#A3A3A3] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
