"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "@/components/common/icons";
import { motion, AnimatePresence } from "framer-motion";
import type { ServiceFaq } from "@/data/service-extensions";

interface ServiceFaqAccordionProps {
  faqs: ServiceFaq[];
  title?: string;
  subtitle?: string;
}

export function ServiceFaqAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our service scopes, deliverables, and guarantees.",
}: ServiceFaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-3">
          <HelpCircle className="h-3.5 w-3.5 text-[#E9204F]" />
          <span>Clear Answers</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
          {title}
        </h2>
        <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "border-[#101010] bg-white shadow-sm ring-1 ring-[#101010]/5"
                  : "border-[#EBEBEB] bg-[#FAFAFA] hover:border-[#D0D0D0]"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-[14.5px] sm:text-[15.5px] text-[#101010]"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 ${
                    isOpen
                      ? "rotate-180 bg-[#101010] text-white border-[#101010]"
                      : "bg-white text-[#737373] border-[#EBEBEB]"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-4 pb-5 sm:px-5 pt-1 text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed border-t border-[#F0F0F0]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
