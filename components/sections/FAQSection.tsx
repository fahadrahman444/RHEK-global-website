"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle } from "lucide-react";
import { RHEK_CONFIG } from "@/data/rhek-config";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do I get started with RHEK GLOBAL?",
    answer:
      "Simply contact our team or book a meeting through our website. We will discuss your requirements, understand your goals, and recommend suitable solutions for your business.",
  },
  {
    question: "Does RHEK GLOBAL offer a Money-Back Guarantee?",
    answer:
      "Yes. We offer a 100% Money-Back Guarantee for eligible services under our applicable refund policy. Our commitment is to provide professional service, transparency, and client satisfaction. Please review our official guarantee terms for eligibility and conditions.",
  },
  {
    question: "How are Janitorial Commercial Cleaning leads generated and verified?",
    answer:
      "Our dedicated B2B SDR cold-calling team directly contacts verified business facility decision-makers, confirms their current cleaning needs, square footage, and schedule requirements, and locks in a confirmed walkthrough date and time. Every lead is 100% exclusive to your company.",
  },
  {
    question: "What web development and 3D technologies does RHEK GLOBAL specialize in?",
    answer:
      "We design and engineer premium 3D websites, custom corporate portals, Shopify eCommerce stores, and full-stack Next.js/React applications with modern UI/UX, strict TypeScript type safety, and optimized search performance.",
  },
  {
    question: "What industries does RHEK GLOBAL service?",
    answer:
      "We provide tailored digital marketing, sales development, and outsourcing solutions across 10+ core industries including Commercial Cleaning, Real Estate, Healthcare, E-Commerce, Tech/SaaS, Hospitality, Education, Logistics, and Startups.",
  },
  {
    question: "What is your typical project delivery and onboarding timeline?",
    answer:
      "Following our 7-step work process (Initial Consultation $\\rightarrow$ Requirement Planning $\\rightarrow$ Strategy), campaigns and engineering sprints typically kick off within 3 to 5 business days after requirements alignment.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 lg:py-16 px-6 lg:px-10 bg-white border-t border-[#F3F3F3]">
      <div className="mx-auto max-w-[840px]">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F3F3F3] bg-[#FAFAFA] px-3.5 py-1 text-[12px] font-extrabold uppercase tracking-wider text-[#E9204F] mb-3 font-display">
            <HelpCircle className="h-3.5 w-3.5 text-[#E9204F]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#101010] tracking-[-0.04em]">
            Common Questions About RHEK GLOBAL
          </h2>
          <p className="mt-2.5 text-[16px] text-[#747474] max-w-[540px] mx-auto font-sans">
            Everything you need to know about our services, guarantees, and workflow.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#F3F3F3] bg-[#FAFAFA] transition-all duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] hover:border-[#E9204F]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-[16px] font-extrabold font-display text-[#101010] min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform duration-700 ease-[cubic-bezier(0.17,0.67,0,1.01)] ${
                      isOpen ? "rotate-180 text-[#E9204F]" : "text-[#747474]"
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-[#F3F3F3] px-5 pb-5 pt-3 text-[15px] leading-relaxed text-[#747474] font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#747474] font-sans">
            Have a custom question or need a tailored proposal?{" "}
            <Link
              href="/contact"
              className="font-bold font-display text-[#E9204F] hover:text-[#101010] transition-colors duration-700"
            >
              Get in touch with our team &rarr;
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
