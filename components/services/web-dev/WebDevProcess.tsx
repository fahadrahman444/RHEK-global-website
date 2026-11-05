import { Compass, Palette, Code2, Rocket, ArrowRight } from "@/components/common/icons";
import Link from "next/link";

interface ProcessStep {
  number: string;
  phase: string;
  duration: string;
  icon: typeof Compass;
  title: string;
  description: string;
  deliverables: string[];
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "Discovery & Architecture",
    duration: "Week 1",
    icon: Compass,
    title: "System Spec & Conversion Mapping",
    description:
      "We unpack your business objectives, target buyer personas, competitive landscape, and technical integration requirements.",
    deliverables: [
      "Technical architecture document",
      "Information architecture & sitemap",
      "Conversion funnel wireframes",
    ],
  },
  {
    number: "02",
    phase: "Design System",
    duration: "Week 2",
    icon: Palette,
    title: "Swiss Minimalist Design Tokens",
    description:
      "We design interactive prototypes in Figma using strict 12-column grids, verified contrast tokens, and fluid responsive behaviors.",
    deliverables: [
      "High-fidelity desktop & mobile UI",
      "Interactive Framer Motion prototypes",
      "Typography & color token system",
    ],
  },
  {
    number: "03",
    phase: "Engineering",
    duration: "Weeks 3–4",
    icon: Code2,
    title: "Production Next.js Implementation",
    description:
      "We translate designs into strict TypeScript and Next.js App Router code, hooking up form pipelines, analytics, and headless APIs.",
    deliverables: [
      "Server-rendered Next.js codebase",
      "Webhook & CRM form integrations",
      "Dynamic SEO & OpenGraph tags",
    ],
  },
  {
    number: "04",
    phase: "Validation & Launch",
    duration: "Week 5",
    icon: Rocket,
    title: "Lighthouse Audit & Global Edge Deployment",
    description:
      "Rigorous end-to-end QA, Core Web Vitals profiling, DNS cutover to Vercel/Cloudflare, and 30-day warranty activation.",
    deliverables: [
      "95+ Lighthouse certification report",
      "DNS configuration & edge SSL",
      "30-day code warranty & bug-fix guarantee",
    ],
  },
];

export function WebDevProcess() {
  return (
    <section className="border-t border-white/10 bg-[#0A0A0B] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
            <span>Execution Roadmap</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            From Architecture to Global Edge Launch.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            A predictable, transparent 4-stage engineering sprint that eliminates surprise delays, scope creep, and communication breakdowns.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => {
            const StepIcon = step.icon;
            return (
              <div
                key={step.number}
                className="group rounded-2xl border border-white/10 bg-[#121214] p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:border-[#E9204F]/60 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E9204F]/5"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-[12px] font-bold text-white tracking-wider">
                      STAGE {step.number}
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#A3A3A3] group-hover:border-white/20 transition-colors">
                      {step.duration}
                    </span>
                  </div>

                  <div className="pt-5 pb-3">
                    <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-[#E9204F] group-hover:border-[#E9204F] transition-all duration-300">
                      <StepIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#E9204F] block">
                      {step.phase}
                    </span>
                    <h3 className="font-heading text-[17px] font-bold text-white mt-1.5 leading-snug group-hover:text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[13px] text-[#A3A3A3] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 space-y-2 text-[12px] text-white/90">
                    {step.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2">
                        <span className="text-[#E9204F] font-bold">•</span>
                        <span className="leading-snug text-[#A3A3A3]">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[13px]">
          <span className="text-[#A3A3A3]">
            Need an expedited 14-day turnaround for a product launch?
          </span>
          <Link
            href="#consultation"
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#E9204F] transition-colors"
          >
            <span>Request Fast-Track Scope</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
