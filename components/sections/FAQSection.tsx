"use client";

import Link from "next/link";
import { FaqAccordion } from "@/components/common/FaqAccordion";

const faqs = [
  {
    question: "How do I get started with RHEK GLOBAL?",
    answer:
      "Simply submit an inquiry or schedule a scoping call through our website. We analyze your requirements, review target geography, and recommend direct solutions tailored to your operational goals.",
  },
  {
    question: "Does RHEK GLOBAL offer a Money-Back Guarantee?",
    answer:
      "Yes. We offer a 100% Money-Back Guarantee on eligible campaigns under our standard SLA policy. Our commitment is rooted in direct accountability, verified appointment criteria, and replacement protection.",
  },
  {
    question: "How are Janitorial Commercial Cleaning leads generated and verified?",
    answer:
      "Our dedicated outbound SDR team directly connects with commercial facility decision-makers, confirms active cleaning requirements, square footage, and schedule frequency, and confirms a direct walkthrough date and time. Every appointment is 100% exclusive to your company.",
  },
  {
    question: "What web development technologies does RHEK GLOBAL specialize in?",
    answer:
      "We design and engineer Next.js App Router websites, bespoke corporate portals, eCommerce stores, and full-stack web applications with modern UI/UX, strict TypeScript type safety, and optimized Core Web Vitals.",
  },
  {
    question: "What industries does RHEK GLOBAL service?",
    answer:
      "We provide targeted digital marketing, sales development, and outsourcing solutions across 10+ core industries including Commercial Cleaning, Real Estate, Healthcare, E-Commerce, Tech/SaaS, Hospitality, Education, Logistics, and Professional Services.",
  },
  {
    question: "What is your typical onboarding timeline?",
    answer:
      "Following our disciplined 7-step process, client onboarding and outbound sprint configurations typically initiate within 3 to 5 business days after requirements sign-off.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-10 lg:py-14 bg-white border-t border-brand-border">
      <FaqAccordion
        faqs={faqs}
        title="Common Questions About RHEK GLOBAL"
        subtitle="Operational details regarding our campaigns, SLA guarantees, and engagement processes."
        badge="Frequently Asked Questions"
      />

      <div className="mt-8 text-center">
        <p className="text-[13.5px] text-brand-caption">
          Have a question not listed here?{" "}
          <Link
            href="/contact"
            className="font-bold text-brand-black hover:text-brand-red underline underline-offset-4 transition-colors"
          >
            Contact our engineering team directly
          </Link>
        </p>
      </div>
    </section>
  );
}
