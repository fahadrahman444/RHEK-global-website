"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "@/components/common/icons";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
  defaultOpenIndex?: number | null;
}

export function FaqAccordion({
  faqs,
  title,
  subtitle,
  badge = "Frequently Asked Questions",
  className,
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("max-w-4xl mx-auto w-full", className)}>
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {badge && (
            <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black mb-3 shadow-2xs">
              <HelpCircle className="h-3.5 w-3.5 text-brand-red" />
              <span>{badge}</span>
            </div>
          )}
          {title && (
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={cn(
                "rounded-xl border transition-all duration-200 overflow-hidden",
                isOpen
                  ? "border-brand-black bg-white shadow-sm ring-1 ring-[#101010]/5"
                  : "border-brand-border bg-brand-surface hover:border-[#D0D0D0]"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-4.5 sm:p-5 text-left font-bold text-[14.5px] sm:text-[15.5px] text-brand-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E9204F]"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-200",
                    isOpen
                      ? "rotate-180 bg-brand-black text-white border-brand-black"
                      : "bg-white text-[#737373] border-brand-border"
                  )}
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
                    <div className="px-4.5 pb-5 sm:px-5 pt-1 text-[13.5px] sm:text-[14px] text-[#525252] leading-relaxed border-t border-[#F0F0F0]">
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
