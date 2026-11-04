import { Code2, Layout, Database, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "./SpotlightCard";

interface Capability {
  number: string;
  badge: string;
  icon: typeof Code2;
  title: string;
  description: string;
  features: string[];
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    badge: "Core Architecture",
    icon: Code2,
    title: "Next.js 15 & React Platforms",
    description:
      "Enterprise marketing sites and customer portals built with Next.js App Router, React Server Components (RSC), and edge caching for sub-second performance.",
    features: [
      "Sub-second Core Web Vitals (LCP < 0.8s)",
      "Server-side rendering & dynamic SEO schema",
      "Next.js optimized asset and image pipelines",
      "Zero page-builder or WordPress bloat",
    ],
  },
  {
    number: "02",
    badge: "Design Engineering",
    icon: Layout,
    title: "High-Conversion UI & Design Systems",
    description:
      "Bespoke Swiss-minimalist interfaces with strict 12-column alignment, tokenized Tailwind spacing, and fluid Framer Motion micro-interactions.",
    features: [
      "Tokenized 12-column grid layout system",
      "WCAG 2.2 AA accessibility compliance",
      "Mobile-first touch ergonomics (≥44px)",
      "Elimination of layout shift (CLS ≤ 0.02)",
    ],
  },
  {
    number: "03",
    badge: "Full-Stack Scale",
    icon: Database,
    title: "Full-Stack SaaS & Web Apps",
    description:
      "Resilient, type-safe web applications powered by strict TypeScript, PostgreSQL / Supabase, secure session auth, and real-time APIs.",
    features: [
      "Strict end-to-end TypeScript (Zero any)",
      "Role-based authentication & permissions",
      "PostgreSQL, Supabase & REST/GraphQL APIs",
      "Stripe, Resend & webhook automations",
    ],
  },
];

export function WebDevCapabilities() {
  return (
    <section id="sec-02" className="border-t border-white/10 bg-[#0E0E10] py-20 lg:py-28 text-white">
      <div className="site-container">
        {/* Left-Aligned Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E9204F]" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-[-0.035em] leading-[1.12]">
            Modern Web Systems Engineered Without Compromise.
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-[#A3A3A3] leading-relaxed">
            We combine Swiss typographic precision with modern React engineering to create digital products that command authority and turn visitors into qualified customers.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAPABILITIES.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <SpotlightCard
                key={cap.number}
                className="group p-7 sm:p-8 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  {/* Card Top: Number + Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="font-mono text-[12px] font-bold text-white/90 tracking-wider">
                      CAPABILITY {cap.number}
                    </span>
                    <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#A3A3A3]">
                      {cap.badge}
                    </span>
                  </div>

                  {/* Card Icon + Heading */}
                  <div className="pt-6 pb-4">
                    <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:bg-[#E9204F] group-hover:border-[#E9204F] transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white leading-snug group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] text-[#A3A3A3] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="pt-4 border-t border-white/10 space-y-2.5 text-[13px]">
                    {cap.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-white/90">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Link */}
                <div className="pt-6 mt-6 border-t border-white/10">
                  <Link
                    href="#consultation"
                    className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-white group-hover:text-[#E9204F] transition-colors"
                  >
                    <span>Scope this capability</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
