"use client";

import { FaqAccordion } from "@/components/common/FaqAccordion";

const faqs = [
  {
    question: "How long does a typical custom website build take?",
    answer: "Our standard delivery timeline is 2 to 4 weeks depending on scope. Starter websites (up to 5 pages) typically ship in 10 to 14 business days. Professional corporate platforms (10-15 pages) take 3 to 4 weeks. Enterprise full-stack applications with custom databases or APIs take 4 to 6 weeks. Every project is executed in milestone sprints with transparent weekly demos.",
  },
  {
    question: "Do we get 100% code and intellectual property ownership?",
    answer: "Yes, absolutely. Upon final milestone payment, 100% of the intellectual property, design assets (Figma files), and production code (GitHub repository) are transferred directly to your organization. You are never locked into proprietary platforms, agency-owned hosting, or licensing fees.",
  },
  {
    question: "Why do you engineer with Next.js instead of WordPress or Webflow?",
    answer: "While WordPress and Webflow are common for quick templates, they suffer from heavy plugin vulnerabilities, bloated scripts, slower database queries, and poor Core Web Vitals scores. Next.js 15 delivers static generation and edge computing, ensuring instantaneous sub-second page loads (<1.0s LCP), enterprise-grade security with zero plugin attack vectors, and superior organic search rankings.",
  },
  {
    question: "Can our marketing team update copy and blog posts without coding?",
    answer: "Yes. We configure lightweight headless CMS solutions (such as Sanity, Strapi, or MDX markdown pipelines) allowing your marketing team to edit text, update case studies, publish articles, and manage leads via an intuitive visual dashboard without touching code.",
  },
  {
    question: "How does the 14-day 100% money-back guarantee work?",
    answer: "We believe in complete accountability. If within the first 14 days of project kickoff you are not completely satisfied with our communication, design prototypes, or engineering pace, you can request a cancellation. We will refund 100% of your deposit with zero questions asked.",
  },
  {
    question: "What ongoing maintenance and support do you provide post-launch?",
    answer: "All web builds include a complimentary 30-day post-launch warranty covering bug fixes, browser adjustments, and performance monitoring. Following launch, we offer optional monthly SLA maintenance retainers covering security updates, dependency upgrades, monthly backups, and dedicated feature requests.",
  },
];

export function WebDevFaq() {
  return (
    <section
      id="faqs"
      className="py-12 sm:py-16 md:py-24 border-b border-[#EBEBEB] bg-[#FAFAFA]"
    >
      <div className="site-container">
        <FaqAccordion
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our engineering standards, timelines, pricing, and ownership policies."
          badge="Got Questions?"
        />
      </div>
    </section>
  );
}
