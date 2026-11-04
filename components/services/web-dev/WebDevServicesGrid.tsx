"use client";

import {
  Code2,
  Globe2,
  Layout,
  ShoppingCart,
  Gauge,
  ShieldCheck,
  Check,
} from "lucide-react";

export function WebDevServicesGrid() {
  const services = [
    {
      icon: Code2,
      title: "Custom Web Applications",
      desc: "Full-stack web applications built with Next.js 15, strict TypeScript, and secure backend APIs engineered for high-concurrency commercial scale.",
      features: ["Next.js App Router & SSR", "Strict TypeScript typing", "Secure API integrations", "Role-based access control"],
    },
    {
      icon: Globe2,
      title: "Corporate & B2B Web Portals",
      desc: "Authoritative digital headquarters designed to establish market leadership, communicate technical credibility, and convert enterprise prospects.",
      features: ["Custom brand design system", "12-column Swiss layout", "Executive positioning", "Interactive case study showcases"],
    },
    {
      icon: Layout,
      title: "UI/UX & Design Systems",
      desc: "Scalable Figma design tokens and component libraries crafted for frictionless user journeys, high contrast, and WCAG AA accessibility.",
      features: ["Component library architecture", "Mobile-first touch ergonomics", "WCAG 2.2 AA compliant", "Micro-interaction polish"],
    },
    {
      icon: ShoppingCart,
      title: "Headless E-Commerce & Checkout",
      desc: "Sub-second product catalogs, custom quotation workflows, and frictionless Stripe checkout funnels with zero template lock-in.",
      features: ["Headless architecture", "Stripe & billing integrations", "Dynamic product configurators", "Optimized checkout funnel"],
    },
    {
      icon: Gauge,
      title: "Core Web Vitals & SEO Engineering",
      desc: "Engineered from the ground up for 95-100 Google Lighthouse benchmarks, sub-second LCP, dynamic OpenGraph, and rich schema markup.",
      features: ["Sub-second LCP / INP / CLS", "Semantic structured data", "Clean metadata & sitemaps", "Zero render-blocking scripts"],
    },
    {
      icon: ShieldCheck,
      title: "Maintenance & 99.9% SLA Support",
      desc: "Continuous dependency updates, zero-vulnerability security patching, automated uptime monitoring, and dedicated developer support.",
      features: ["24/7 uptime monitoring", "Monthly security patches", "Scheduled performance audits", "Guaranteed SLA response times"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-[#FAFAFA]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#101010]/5 text-[#101010] text-[11px] font-bold uppercase tracking-wider mb-3">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-[1.15]">
            What We Offer: Full-Lifecycle Web Engineering
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            From initial system architecture and bespoke UI/UX design to production deployment and long-term maintenance, we handle every stage with senior engineering precision.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-[#E5E5E5] bg-white p-7 transition-all duration-200 hover:border-[#101010] hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FAFAFA] border border-[#EBEBEB] text-[#101010] group-hover:bg-[#E9204F] group-hover:text-white group-hover:border-[#E9204F] transition-colors duration-200">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-bold text-[#101010] mt-5 mb-2 group-hover:text-[#E9204F] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[14px] text-[#525252] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F0F0F0] space-y-2">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[12.5px] font-medium text-[#737373]">
                      <Check className="h-3.5 w-3.5 text-[#E9204F] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
