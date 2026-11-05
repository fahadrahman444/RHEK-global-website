"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "@/components/common/icons";

export function WebDevFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How long does a typical custom website build take?",
      a: "Our standard delivery timeline is 2 to 4 weeks depending on scope. Starter websites (up to 5 pages) typically ship in 10 to 14 business days. Professional corporate platforms (10-15 pages) take 3 to 4 weeks. Enterprise full-stack applications with custom databases or APIs take 4 to 6 weeks. Every project is executed in milestone sprints with transparent weekly demos.",
    },
    {
      q: "Do we get 100% code and intellectual property ownership?",
      a: "Yes, absolutely. Upon final milestone payment, 100% of the intellectual property, design assets (Figma files), and production code (GitHub repository) are transferred directly to your organization. You are never locked into proprietary platforms, agency-owned hosting, or licensing fees.",
    },
    {
      q: "Why do you engineer with Next.js instead of WordPress or Webflow?",
      a: "While WordPress and Webflow are common for quick templates, they suffer from heavy plugin vulnerabilities, bloated scripts, slower database queries, and poor Core Web Vitals scores. Next.js 15 delivers static generation and edge computing, ensuring instantaneous sub-second page loads (<1.0s LCP), enterprise-grade security with zero plugin attack vectors, and superior organic search rankings.",
    },
    {
      q: "Can our marketing team update copy and blog posts without coding?",
      a: "Yes. We configure lightweight headless CMS solutions (such as Sanity, Strapi, or MDX markdown pipelines) allowing your marketing team to edit text, update case studies, publish articles, and manage leads via an intuitive visual dashboard without touching code.",
    },
    {
      q: "How does the 14-day 100% money-back guarantee work?",
      a: "We believe in complete accountability. If within the first 14 days of project kickoff you are not completely satisfied with our communication, design prototypes, or engineering pace, you can request a cancellation. We will refund 100% of your deposit with zero questions asked.",
    },
    {
      q: "What ongoing maintenance and support do you provide post-launch?",
      a: "All web builds include a complimentary 30-day post-launch warranty covering bug fixes, browser adjustments, and performance monitoring. Following launch, we offer optional monthly SLA maintenance retainers covering security updates, dependency upgrades, monthly backups, and dedicated feature requests.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faqs"
      className="py-20 md:py-28 border-b border-[#EBEBEB] bg-[#FAFAFA]"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#101010]/5 text-[#101010] text-[11px] font-bold uppercase tracking-wider mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101010] tracking-tight leading-[1.15]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#525252] mt-4 leading-relaxed">
            Everything you need to know about our engineering standards, timelines, pricing, and ownership policies.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-[#FAFAFA] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#101010] pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 ${
                      isOpen
                        ? "bg-[#101010] text-white border-[#101010] rotate-180"
                        : "bg-[#FAFAFA] text-[#737373] border-[#E5E5E5]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-[14.5px] text-[#525252] leading-relaxed border-t border-[#F0F0F0]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
