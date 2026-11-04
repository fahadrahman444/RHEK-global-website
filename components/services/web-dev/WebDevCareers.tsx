import Link from "next/link";
import { ArrowRight, Briefcase, Sparkles, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

export function WebDevCareers() {
  const roles = [
    { title: "Senior Next.js / React Engineer", type: "Full-Time", location: "Remote / Hybrid", level: "Senior (4+ Yrs)" },
    { title: "Design Systems & UI/UX Specialist", type: "Full-Time", location: "Remote / Hybrid", level: "Mid-Senior" },
    { title: "Technical Project Architect", type: "Contract / FT", location: "Global Remote", level: "Senior" },
  ];

  return (
    <section id="sec-11" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
              <Briefcase className="h-3.5 w-3.5 text-[#E9204F]" />
              <span>Section 11 • Careers</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
              Grow With Us. Build Global Systems.
            </h2>

            <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
              We are constantly seeking brilliant software engineers, design system architects, and technical problem-solvers to deliver high-impact digital platforms for ambitious global clients.
            </p>

            <div className="mt-6 space-y-2.5 text-[13px] text-[#A3A3A3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                <span className="text-white/90">Autonomous engineering culture &amp; modern tooling</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                <span className="text-white/90">Competitive compensation &amp; performance incentives</span>
              </div>
            </div>

            <Link
              href="/careers"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white hover:text-[#101010] text-white py-3.5 px-6 text-[13.5px] font-semibold transition-all duration-200"
            >
              <span>Explore All Open Roles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {roles.map((role, idx) => (
              <SpotlightCard
                key={idx}
                className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#A3A3A3]">
                      {role.type}
                    </span>
                    <span className="text-[11.5px] text-[#737373]">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-white transition-colors">
                    {role.title}
                  </h3>
                  <span className="text-[12px] text-[#A3A3A3] mt-0.5 block">
                    {role.level}
                  </span>
                </div>

                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#E9204F] group-hover:text-white transition-colors self-start sm:self-center"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </SpotlightCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
