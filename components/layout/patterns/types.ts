import React from "react";
import type { Icon } from "@/components/common/icons";

export interface PatternCtaAction {
  label: string;
  href?: string;
  onClick?: () => void;
}

// 1. Split Hero Types
export interface SplitHeroProofStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface SplitHeroProps {
  id?: string;
  badge?: string;
  title: React.ReactNode;
  subhead: string;
  primaryCta: PatternCtaAction;
  secondaryCta?: PatternCtaAction;
  proofCard: {
    title?: string;
    liveStatus?: string;
    stats: SplitHeroProofStat[];
    techChips?: string[];
    footnote?: {
      text: string;
      linkText?: string;
      linkHref?: string;
      onClick?: () => void;
    };
  };
  trustBadges?: Array<{
    icon?: Icon;
    text: string;
  }>;
  jumpLinks?: Array<{
    id: string;
    label: string;
  }>;
}

// 2. Comparison Types
export interface ComparisonItem {
  title: string;
  desc: string;
}

export interface PatternComparisonProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  leftCard: {
    title: string;
    subtitle: string;
    items: ComparisonItem[];
  };
  rightCard: {
    title: string;
    subtitle: string;
    items: ComparisonItem[];
  };
}

// 3. Bento Grid Types
export interface BentoItem {
  icon: Icon;
  title: string;
  description: string; // 8-12 words
  caption?: string;     // Tech or outcome tag e.g. "Next.js 15 · RSC"
  href?: string;
}

export interface PatternBentoGridProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  items: BentoItem[];
  columns?: 2 | 3 | 4;
}

// 4. Spec Accordion Types
export interface TechStripItem {
  name: string;
  category?: string;
  badge?: string;
}

export interface SpecBenchmark {
  label: string;
  value: string;
  desc: string;
}

export interface PatternSpecAccordionProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  techStrip: TechStripItem[];
  accordionTitle?: string;
  benchmarks?: SpecBenchmark[];
  codeSnippet?: {
    filename: string;
    code: string;
    language?: string;
  };
  specDetails?: Array<{
    title: string;
    items: string[];
  }>;
}

// 5. Stepper Types
export interface StepperStep {
  stepNumber: string;
  stepLabel: string;
  title: string;
  duration: string;
  deliverables: string[]; // max 3 bullets
  artifact: string;       // "What you get at the end"
}

export interface PatternStepperProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  steps: StepperStep[];
}

// 6. Social Proof Types
export interface SocialProofStat {
  value: string;
  label: string;
  caption: string;
}

export interface SocialProofTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
}

export interface PatternSocialProofProps {
  id?: string;
  badge?: string;
  title?: string;
  description?: string;
  stats: SocialProofStat[];
  testimonials: SocialProofTestimonial[];
}

// 7. Tiered Pricing Types
export interface PricingTier {
  name: string;
  price: string;
  type: string;
  timeline: string;
  desc: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onSelect?: () => void;
  href?: string;
}

export interface PatternTieredPricingProps {
  id?: string;
  badge?: string;
  title: string;
  description?: string;
  tiers: PricingTier[];
  sharedInclusions?: string;
}

// 8. CTA Band Types
export interface PatternCtaBandProps {
  id?: string;
  badge?: string;
  title: React.ReactNode;
  subhead: string;
  primaryCta: PatternCtaAction;
  secondaryCta?: PatternCtaAction;
  riskReversal?: string;
  bullets?: string[];
}
