"use client";

import { FaqAccordion } from "@/components/common/FaqAccordion";
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
  return (
    <FaqAccordion
      faqs={faqs}
      title={title}
      subtitle={subtitle}
      badge="Clear Answers"
    />
  );
}
