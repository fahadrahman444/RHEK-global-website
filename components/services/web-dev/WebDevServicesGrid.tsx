"use client";

import { EditorialRows, type EditorialRowItem } from "@/components/layout/patterns/EditorialRows";

const SERVICES_DATA: EditorialRowItem[] = [
  {
    index: "01",
    subtitle: "Enterprise Applications",
    title: "Custom Full-Stack Web Applications",
    description: "Mission-critical Next.js 15 web applications engineered with strict TypeScript typing, sub-second latency, and scalable backend integrations built for enterprise concurrency.",
    deliverables: ["Next.js App Router & RSC", "Strict TypeScript data contracts", "Secure REST & GraphQL APIs", "Role-based access control (RBAC)"],
    tags: ["Next.js 15", "TypeScript", "React 19", "Node.js"],
    href: "/contact?service=web-development",
  },
  {
    index: "02",
    subtitle: "Digital Headquarters",
    title: "Corporate & B2B Web Portals",
    description: "High-authority digital headquarters designed to establish market leadership, communicate technical credibility, and convert qualified commercial prospects.",
    deliverables: ["Custom Figma token architecture", "12-column Swiss layout system", "Executive narrative positioning", "Interactive case study telemetry"],
    tags: ["Swiss Design", "Figma Tokens", "Tailwind CSS"],
    href: "/contact?service=web-development",
  },
  {
    index: "03",
    subtitle: "Design Architecture",
    title: "UI/UX & Scalable Design Systems",
    description: "Production component libraries crafted for frictionless user journeys, high typographic contrast, and guaranteed WCAG 2.2 AA accessibility compliance.",
    deliverables: ["Atomic component architecture", "Mobile-first touch ergonomics", "WCAG 2.2 AA accessibility audit", "Micro-interaction polish with Framer Motion"],
    tags: ["Framer Motion", "Design Tokens", "WCAG 2.2 AA"],
    href: "/contact?service=web-development",
  },
  {
    index: "04",
    subtitle: "Commercial Commerce",
    title: "Headless E-Commerce & Checkout Engines",
    description: "Sub-second product catalogs, custom quotation calculators, and frictionless Stripe checkout funnels engineered with zero page-builder bloat.",
    deliverables: ["Headless Shopify / Stripe pipelines", "Dynamic quote configurators", "High-velocity cart transitions", "Zero template lock-in"],
    tags: ["Headless", "Stripe API", "Sub-Second LCP"],
    href: "/contact?service=web-development",
  },
  {
    index: "05",
    subtitle: "Performance Engineering",
    title: "Core Web Vitals & Technical SEO Architecture",
    description: "Sub-second Largest Contentful Paint (LCP ≤ 0.9s), zero Cumulative Layout Shift, semantic JSON-LD structured data, and rich OpenGraph metadata designed for top search rankings.",
    deliverables: ["Lighthouse 95–100 benchmark guarantee", "Semantic JSON-LD schema", "Clean metadata & automated XML sitemaps", "Zero render-blocking scripts"],
    tags: ["Lighthouse 100", "LCP < 0.9s", "Schema.org"],
    href: "/contact?service=web-development",
  },
  {
    index: "06",
    subtitle: "Reliability & Uptime",
    title: "Continuous Maintenance & 99.9% SLA Support",
    description: "Continuous vulnerability patching, automated dependency upgrades, 24/7 uptime monitoring, and guaranteed response SLAs backed by our senior web engineering division.",
    deliverables: ["24/7 automated uptime telemetry", "Monthly zero-slop dependency audits", "Dedicated senior developer support", "Guaranteed 4-hour SLA response"],
    tags: ["99.9% Uptime", "Zero-CVE Patching", "Direct SLA"],
    href: "/contact?service=web-development",
  },
];

export function WebDevServicesGrid() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 border-b border-[#EBEBEB] bg-white"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-1 rounded inline-block mb-3">
              Section 02 · Full-Lifecycle Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-tight sm:leading-tight lg:leading-[1.18]">
              Core Capabilities: Built on Clean Code, Not Templates
            </h2>
            <p className="text-base sm:text-lg text-[#525252] mt-3 leading-relaxed">
              Every system is engineered from clean foundations. We handle every stage with senior precision, strict TypeScript typing, and architectural craftsmanship.
            </p>
          </div>

          <div className="text-[12.5px] font-mono text-[#737373] hidden md:block text-right">
            <span>6 CAPABILITIES AVAILABLE</span>
            <br />
            <span className="text-[#101010] font-bold">SWISS EDITORIAL DIRECTORY</span>
          </div>
        </div>

        {/* Pattern A: Full-Width Editorial Rows */}
        <EditorialRows items={SERVICES_DATA} />
      </div>
    </section>
  );
}
