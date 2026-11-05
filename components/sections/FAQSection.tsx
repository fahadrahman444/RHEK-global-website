"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "@/components/common/icons";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-10 lg:py-14 px-6 lg:px-10 bg-white border-t border-[#EBEBEB]">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#101010] mb-2.5 shadow-2xs">
            <HelpCircle className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#101010] tracking-[-0.035em]">
            Common Questions About RHEK GLOBAL
          </h2>
          <p className="mt-2 text-[14.5px] text-[#525252] max-w-[540px] mx-auto">
            Operational details regarding our campaigns, SLA guarantees, and engagement processes.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-[#EBEBEB] bg-[#FAFAFA] transition-colors hover:border-[#101010]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-4.5 sm:p-5 text-left text-[15px] font-bold text-[#101010] min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#101010]" : "text-[#737373]"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#EBEBEB] px-4.5 sm:px-5 pb-4.5 sm:pb-5 pt-3 text-[14px] leading-relaxed text-[#525252]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-[13.5px] text-[#737373]">
            Have a custom scoping requirement?{" "}
            <Link
              href="/contact"
              className="font-semibold text-[#101010] hover:text-[#E9204F] transition-colors"
            >
              Consult our team &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
