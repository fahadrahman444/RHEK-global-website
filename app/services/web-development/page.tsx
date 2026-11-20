import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PatternSplitHero } from "@/components/layout/patterns/PatternSplitHero";
import { PatternComparison } from "@/components/layout/patterns/PatternComparison";
import { PatternBentoGrid } from "@/components/layout/patterns/PatternBentoGrid";
import { PatternSpecAccordion } from "@/components/layout/patterns/PatternSpecAccordion";
import { PatternStepper } from "@/components/layout/patterns/PatternStepper";
import { PatternSocialProof } from "@/components/layout/patterns/PatternSocialProof";
import { PatternTieredPricing } from "@/components/layout/patterns/PatternTieredPricing";
import { PatternCtaBand } from "@/components/layout/patterns/PatternCtaBand";
import { WebDevFaq } from "@/components/services/web-dev/WebDevFaq";
import {
  Code2,
  Layout,
  ShieldCheck,
  ShoppingBag,
  Gauge,
  Cpu,
} from "@/components/common/icons";

export const metadata: Metadata = {
  title: "Web Design & Development Services | RHEK GLOBAL",
  description:
    "Sub-second Next.js web applications, 12-column Swiss UI, and conversion engineering delivered in 4 sprints with 100% code ownership.",
  alternates: {
    canonical: "https://rhekglobal.com/services/web-development",
  },
  openGraph: {
    title: "Web Design & Development Services | RHEK GLOBAL",
    description:
      "Sub-second Next.js web applications, 12-column Swiss UI, and conversion engineering delivered in 4 sprints with 100% code ownership.",
    url: "https://rhekglobal.com/services/web-development",
    siteName: "RHEK GLOBAL",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <div className="relative min-h-screen bg-white text-brand-body selection:bg-brand-red selection:text-white">
      {/* Global Master Navigation */}
      <Navbar variant="light" />

      <main>
        {/* 1. Hero: Outcome-first split hero + trust bar */}
        <PatternSplitHero
          id="overview"
          badge="WEB DEVELOPMENT"
          title={
            <>
              Websites Engineered to Generate{" "}
              <span className="text-brand-red inline-block">Real Pipeline.</span>
            </>
          }
          subhead="Sub-second load times, WCAG 2.2 AA accessibility, and 100% code ownership delivered in four fixed-bid sprints."
          primaryCta={{
            label: "Book Strategy Call",
            href: "/contact?service=web-development",
          }}
          secondaryCta={{
            label: "View Capabilities",
            href: "#capabilities",
          }}
          proofCard={{
            title: "verified-benchmarks.log",
            liveStatus: "LIVE BENCHMARK",
            stats: [
              { value: "100/100", label: "Lighthouse", sublabel: "Perf & SEO" },
              { value: "<0.9s", label: "Core Vitals", sublabel: "Sub-Second LCP" },
              { value: "100%", label: "Ownership", sublabel: "Full Transfer" },
            ],
            techChips: ["Next.js 15", "TypeScript 5", "Tailwind CSS", "WCAG 2.2 AA"],
            footnote: {
              text: "Need custom development scope?",
              linkText: "Request Quote",
              linkHref: "/contact?service=web-development",
            },
          }}
          trustBadges={[
            { text: "14-Day Refund Guarantee" },
            { text: "WCAG 2.2 AA Accessibility" },
            { text: "100% Source Code Transfer" },
            { text: "99.9% Uptime Guarantee" },
          ]}
          jumpLinks={[
            { id: "overview", label: "Overview" },
            { id: "comparison", label: "The Difference" },
            { id: "capabilities", label: "Capabilities" },
            { id: "technologies", label: "Tech Spec" },
            { id: "process", label: "Process" },
            { id: "social-proof", label: "Results" },
            { id: "pricing", label: "Pricing" },
            { id: "faqs", label: "FAQs" },
          ]}
        />

        {/* 2. Before / After Comparison Cards */}
        <PatternComparison
          id="comparison"
          badge="THE DIFFERENCE"
          title="Why Traditional Agency Websites Bleed Pipeline"
          description="Most B2B websites look fine on the surface but leak revenue through sluggish performance, lookalike templates, and broken conversion funnels."
          leftCard={{
            title: "The Typical Agency Build",
            subtitle: "Bloated CMS templates & generic page builders",
            items: [
              {
                title: "4+ second mobile load times",
                desc: "Heavy CMS plugins and monolithic assets cause high bounce rates.",
              },
              {
                title: "Generic lookalike builder designs",
                desc: "Fails to communicate commercial authority to enterprise buyers.",
              },
              {
                title: "Cluttered forms & missing tracking",
                desc: "Lacks conversion tracking, losing qualified inbound sales leads.",
              },
            ],
          }}
          rightCard={{
            title: "The RHEK GLOBAL Standard",
            subtitle: "High-velocity Next.js 15 digital infrastructure",
            items: [
              {
                title: "Sub-second global edge delivery",
                desc: "Static Next.js pages loading in under 1 second, scoring 95-100 on Lighthouse.",
              },
              {
                title: "Bespoke 12-column Swiss UI",
                desc: "Architectural grid layout, authoritative typography, and purposeful whitespace.",
              },
              {
                title: "Conversion-engineered pipelines",
                desc: "Frictionless interactive forms, clear CTAs, and rigorous lead capture.",
              },
            ],
          }}
        />

        {/* 3. Bento Outcome Grid */}
        <PatternBentoGrid
          id="capabilities"
          badge="CAPABILITIES"
          title="Built on Clean Code, Not Templates"
          description="Six core engineering capabilities designed to outperform template websites across speed, authority, and pipeline conversion."
          columns={3}
          items={[
            {
              icon: Code2,
              title: "Next.js Web Applications",
              description:
                "Custom full-stack platforms engineered with strict type safety, sub-second latency, and scalable APIs.",
              caption: "Next.js 15 · RSC · Node.js",
              href: "/contact?service=web-development",
            },
            {
              icon: Layout,
              title: "Corporate B2B Headquarters",
              description:
                "Executive digital presences designed to establish category leadership and earn buyer trust.",
              caption: "Swiss Minimal UI · Figma Tokens",
              href: "/contact?service=web-development",
            },
            {
              icon: ShieldCheck,
              title: "High-Converting Design Systems",
              description:
                "Scalable component libraries with guaranteed WCAG 2.2 AA accessibility and smooth motion.",
              caption: "Tailwind CSS · Framer Motion",
              href: "/contact?service=web-development",
            },
            {
              icon: ShoppingBag,
              title: "Headless Checkout & Commerce",
              description:
                "Instantaneous product catalogs, quote calculators, and zero-friction Stripe checkout funnels.",
              caption: "Stripe API · Headless Shopify",
              href: "/contact?service=web-development",
            },
            {
              icon: Gauge,
              title: "Core Web Vitals & Technical SEO",
              description:
                "Sub-second LCP, zero layout shifts, and semantic JSON-LD architecture for commanding search ranks.",
              caption: "Lighthouse 100 · LCP < 0.9s",
              href: "/contact?service=web-development",
            },
            {
              icon: Cpu,
              title: "Enterprise Maintenance & SLAs",
              description:
                "Continuous zero-slop dependency patching, automated uptime telemetry, and senior engineer support.",
              caption: "99.9% Uptime · 4-Hour SLA",
              href: "/contact?service=web-development",
            },
          ]}
        />

        {/* 4. Tech Stack & Engineering Spec (Progressive Disclosure) */}
        <PatternSpecAccordion
          id="technologies"
          badge="TECH SPEC"
          title="Engineering Stack & Verified Standards"
          description="We avoid fragile templates, slow page builders, and technical shortcuts. Every system is hand-crafted with modern web architecture."
          techStrip={[
            { name: "Next.js 15", badge: "App Router" },
            { name: "TypeScript 5", badge: "Strict" },
            { name: "Tailwind CSS", badge: "8pt Grid" },
            { name: "React 19", badge: "RSC" },
            { name: "PostgreSQL", badge: "Edge DB" },
            { name: "Framer Motion", badge: "60 FPS" },
          ]}
          accordionTitle="See the engineering spec sheet & benchmarks"
          benchmarks={[
            {
              label: "Lighthouse Score",
              value: "100/100",
              desc: "Performance & Best Practices",
            },
            {
              label: "Largest Contentful Paint",
              value: "<0.9s",
              desc: "Measured on 4G throttle",
            },
            {
              label: "Accessibility",
              value: "WCAG AA",
              desc: "Certified 2.2 Level AA",
            },
            {
              label: "Code Ownership",
              value: "100%",
              desc: "Full GitHub Repo Transfer",
            },
          ]}
          codeSnippet={{
            filename: "rhek-engine.config.ts",
            code: `export const rhekEngineConfig = {
  framework: "Next.js 15 (App Router & RSC)",
  typeSystem: "Strict TypeScript 5 (zero 'any')",
  styling: "Tailwind CSS 3.4 (8pt Swiss Grid)",
  benchmarks: {
    lighthouseTarget: 100,
    maxLCP: 900, // ms on real 4G
    maxCLS: 0.05,
    accessibility: "WCAG 2.2 Level AA",
  },
  guarantees: {
    ipTransfer: "100% Full Code Ownership",
    refundWindow: "14 Days Unconditional",
    warrantyDays: 30,
  },
};`,
          }}
          specDetails={[
            {
              title: "Performance Architecture",
              items: [
                "Server Components (RSC) streaming",
                "Static asset optimization & modern WebP",
                "Zero cumulative layout shift (CLS < 0.05)",
              ],
            },
            {
              title: "Security & Reliability",
              items: [
                "Automated CSRF & origin sanitization",
                "Edge CDN SSL & DDoS protection",
                "Double-click mutation button locks",
              ],
            },
            {
              title: "Ownership & Standards",
              items: [
                "100% intellectual property transfer",
                "30-day post-launch warranty included",
                "Zero proprietary agency lock-in",
              ],
            },
          ]}
        />

        {/* 5. 4-Step Process Timeline */}
        <PatternStepper
          id="process"
          badge="TIMELINE"
          title="From Strategy to Production in 4 Sprints"
          description="A transparent, milestone-driven delivery cycle with weekly staging demos and zero scope creep."
          steps={[
            {
              stepNumber: "01",
              stepLabel: "Sprint 01",
              title: "Technical Discovery & Blueprint",
              duration: "Week 1 · Days 1–5",
              deliverables: [
                "Technical specification & sitemap contract",
                "Sub-second LCP architecture blueprint",
                "Database schema & API endpoint contracts",
              ],
              artifact: "Architecture Blueprint & Spec",
            },
            {
              stepNumber: "02",
              stepLabel: "Sprint 02",
              title: "Swiss UI/UX & Design System",
              duration: "Week 2 · Days 6–10",
              deliverables: [
                "Full Figma token library & 12-col grid",
                "Interactive desktop & mobile prototypes",
                "WCAG 2.2 Level AA color validation",
              ],
              artifact: "Figma Component Design System",
            },
            {
              stepNumber: "03",
              stepLabel: "Sprint 03",
              title: "Next.js 15 App Router Build",
              duration: "Week 3 · Days 11–18",
              deliverables: [
                "Production Next.js 15 TypeScript codebase",
                "CRM webhook & contact form integrations",
                "Double-click mutation locks & CSRF safety",
              ],
              artifact: "Staging Environment & Git Repo",
            },
            {
              stepNumber: "04",
              stepLabel: "Sprint 04",
              title: "Lighthouse QA & Handoff",
              duration: "Week 4 · Days 19–24",
              deliverables: [
                "Verified 95-100 Google Lighthouse score",
                "Production DNS cutover with zero downtime",
                "100% code transfer & 30-day warranty",
              ],
              artifact: "100% Code Ownership & Live Cutover",
            },
          ]}
        />

        {/* 6. Social Proof & Metrics */}
        <PatternSocialProof
          id="social-proof"
          badge="MEASURED IMPACT"
          title="Real Pipeline Growth and Verified Speed"
          description="Measured outcomes from production deployments across high-growth B2B and technology companies."
          stats={[
            {
              value: "+38%",
              label: "Pipeline Growth",
              caption:
                "Average increase in qualified discovery call bookings within 60 days of launch.",
            },
            {
              value: "0.8s",
              label: "Global LCP",
              caption:
                "Sub-second Largest Contentful Paint recorded across live desktop and mobile visitors.",
            },
            {
              value: "100/100",
              label: "Lighthouse Score",
              caption:
                "Perfect score across Performance, Accessibility, and Best Practices benchmarks.",
            },
          ]}
          testimonials={[
            {
              quote:
                "RHEK cut our mobile bounce rate in half and delivered our entire corporate platform in 3 weeks flat.",
              author: "Marcus Vance",
              role: "VP of Marketing",
              company: "Logistics SaaS",
              metric: "-52% BOUNCE",
            },
            {
              quote:
                "The cleanest code handoff we have received from an agency. Zero dead CSS, strict TypeScript, and instantaneous loads.",
              author: "Elena Rostova",
              role: "Head of Engineering",
              company: "Fintech Series A",
              metric: "0.8s LCP",
            },
            {
              quote:
                "Our sales reps now actively send enterprise decision-makers to our website to win credibility before calls.",
              author: "David Sterling",
              role: "Managing Partner",
              company: "B2B Advisory",
              metric: "+41% CLOSE",
            },
          ]}
        />

        {/* 7. Pricing Cards */}
        <PatternTieredPricing
          id="pricing"
          badge="INVESTMENT"
          title="Transparent, Fixed-Bid Pricing"
          description="Every package includes complete source code ownership, milestone invoicing, and performance guarantees."
          tiers={[
            {
              name: "Starter Website",
              price: "$2,500",
              type: "Fixed Bid",
              timeline: "2 Weeks",
              desc: "Perfect for emerging businesses seeking an authoritative, high-speed digital presence to win credibility.",
              features: [
                "Up to 5 bespoke Next.js pages",
                "Swiss Minimal responsive design",
                "Lighthouse 95+ performance guarantee",
                "Mobile-first touch ergonomics",
                "Contact form & email notification setup",
                "14-day money-back guarantee",
              ],
              popular: false,
              ctaText: "Select Starter",
              href: "/contact?service=web-development&tier=starter",
            },
            {
              name: "Professional Business",
              price: "$4,800",
              type: "Fixed Bid",
              timeline: "3–4 Weeks",
              desc: "Comprehensive corporate presence engineered for established brands generating active inbound sales pipeline.",
              features: [
                "Up to 12 custom Next.js pages",
                "Full Figma design system & tokens",
                "Interactive lead capture & calculators",
                "100/100 Lighthouse benchmark target",
                "Custom animations via Framer Motion",
                "Technical SEO & OpenGraph metadata",
                "30-day post-launch warranty",
              ],
              popular: true,
              ctaText: "Select Professional",
              href: "/contact?service=web-development&tier=professional",
            },
            {
              name: "Enterprise Web App",
              price: "$9,500+",
              type: "Custom Scope",
              timeline: "4–6 Weeks",
              desc: "Complex full-stack web applications, customer portals, or headless e-commerce architectures with custom databases.",
              features: [
                "Full-stack Next.js 15 App Router",
                "PostgreSQL / Supabase database architecture",
                "Authentication & Role-Based Access Control",
                "Third-party API & CRM integrations",
                "Stripe / headless payment gateway",
                "Dedicated project engineer & SLA guarantee",
              ],
              popular: false,
              ctaText: "Request Enterprise Scope",
              href: "/contact?service=web-development&tier=enterprise",
            },
          ]}
          sharedInclusions="All packages include 100% intellectual property ownership, 14-day refund guarantee, and WCAG 2.2 Level AA compliance."
        />

        {/* 8. FAQs */}
        <WebDevFaq />

        {/* 9. Final High-Contrast Closing CTA Band */}
        <PatternCtaBand
          id="cta"
          badge="DIRECT CONSULTATION"
          title={
            <>
              Ready to Upgrade Your Web Infrastructure?{" "}
              <span className="text-brand-red inline-block">Book a Strategy Call.</span>
            </>
          }
          subhead="Schedule a 30-minute technical discovery call with our lead web architects. We will audit your current site, map your requirements, and provide a fixed-bid quotation."
          primaryCta={{
            label: "Book Strategy Call",
            href: "/contact?service=web-development",
          }}
          secondaryCta={{
            label: "Schedule via Calendar",
            href: "/book-a-meeting",
          }}
          riskReversal="14-day refund guarantee · 100% source code ownership · Fixed quotation within 24 hours"
          bullets={[
            "Direct senior engineer consultation",
            "Fixed milestone pricing (no hourly overruns)",
            "Guaranteed on-time delivery",
          ]}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer />
    </div>
  );
}
