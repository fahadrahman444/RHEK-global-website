import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";
import { InteractiveLeadShowcase } from "@/components/services/InteractiveLeadShowcase";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/common/Button";
import { PatternComparison } from "@/components/layout/patterns/PatternComparison";
import { PatternCtaBand } from "@/components/layout/patterns/PatternCtaBand";
import { SERVICES_DETAILED_DATA } from "@/data/services-data";
import { SERVICE_SLUG_ALIASES, SERVICE_EXTENSIONS } from "@/data/service-extensions";
import { RHEK_CONFIG } from "@/data/rhek-config";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Calendar,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Home,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Building2,
} from "@/components/common/icons";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const primarySlugs = Object.keys(SERVICES_DETAILED_DATA).filter(
    (slug) => slug !== "web-development"
  );
  const aliasSlugs = Object.keys(SERVICE_SLUG_ALIASES).filter(
    (slug) => slug !== "web-design-development" && slug !== "web-development"
  );
  const uniqueSlugs = Array.from(new Set([...primarySlugs, ...aliasSlugs]));

  return uniqueSlugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resolvedSlug = SERVICE_SLUG_ALIASES[slug] || slug;
  const service = SERVICES_DETAILED_DATA[resolvedSlug];

  if (!service) {
    return {
      title: "Service Not Found — RHEK GLOBAL",
      description: "The requested service detail page could not be located.",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `https://rhekglobal.com/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://rhekglobal.com/services/${slug}`,
      siteName: "RHEK GLOBAL",
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const resolvedSlug = SERVICE_SLUG_ALIASES[slug] || slug;

  if (resolvedSlug === "web-development" || slug === "web-design-development") {
    redirect("/services/web-development");
  }

  const service = SERVICES_DETAILED_DATA[resolvedSlug];
  if (!service) {
    notFound();
  }

  const extension = SERVICE_EXTENSIONS[resolvedSlug] || {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Process" },
      { id: "benefits", label: "Benefits" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Systematic Process",
    processSubtitle: "How we deliver measurable commercial outcomes from day one",
    offeringsTitle: "Core Capabilities & Deliverables",
    problemSolution: {
      problemTitle: "The Common Commercial Challenge",
      problemPoints: [
        "Unpredictable operational execution that wastes internal team bandwidth.",
        "Low response rates and inconsistent lead volume from generic approaches.",
        "Lack of accountability and transparency in commercial contracts.",
      ],
      solutionTitle: "The RHEK GLOBAL Performance Standard",
      solutionPoints: [
        "Dedicated domain specialists operating under rigorous performance SLAs.",
        "Transparent weekly reporting, verified metrics, and fixed deliverables.",
        "100% money-back and replacement guarantees protecting your budget.",
      ],
    },
    processSteps: [
      { step: "01", title: "Discovery & Alignment", description: "Auditing requirements, goals, and technical scopes.", timeline: "Day 1" },
      { step: "02", title: "Execution Architecture", description: "Deploying infrastructure, copy, and targeting parameters.", timeline: "Week 1" },
      { step: "03", title: "Quality Verification", description: "Rigorous quality checks and verified delivery.", timeline: "Ongoing" },
      { step: "04", title: "Scale & Reporting", description: "Iterative optimization and weekly performance updates.", timeline: "Ongoing" },
    ],
    faqs: [
      { question: "How quickly can we launch?", answer: "Most services kick off within 5 to 7 business days following our discovery call." },
      { question: "What guarantees are provided?", answer: "All engagements include our replacement and satisfaction protection guarantee." },
      { question: "Are contracts long-term?", answer: "We offer month-to-month flexibility without restrictive multi-year lock-ins." },
    ],
  };

  // Determine section IDs to ensure 100% anchor link harmony with secondary subnav
  const isSocialAds = resolvedSlug === "social-media-ads";
  const isCreative = resolvedSlug === "graphic-design" || resolvedSlug === "video-production";
  const isEmail = resolvedSlug === "email-marketing";
  const isVA = resolvedSlug === "virtual-assistant";

  const processAnchorId = isSocialAds || isEmail ? "strategy" : isVA ? "workflow" : "process";
  const offeringsAnchorId = isSocialAds ? "platforms" : isCreative ? "portfolio" : isEmail ? "campaigns" : isVA ? "tasks" : "offerings";
  const benefitsAnchorId = "benefits";

  return (
    <div className="relative min-h-screen bg-white text-brand-body selection:bg-brand-red selection:text-white">
      {/* 1. Global Master Navigation (Sticky on every page) */}
      <Navbar variant="light" />

      <main className="space-y-16 sm:space-y-24 py-8 sm:py-12">
        {/* =========================================================================
            SECTION 1: HERO SECTION (#overview)
        ========================================================================= */}
        <section id="overview" className="scroll-mt-36">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Pitch & Conversion (7 cols) */}
              <div className="lg:col-span-7">
                {/* Breadcrumb Navigation Trail */}
                <nav aria-label="Breadcrumb" className="mb-3.5">
                  <ol className="flex items-center gap-1.5 text-[12px] text-brand-caption font-medium font-sans">
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-1 hover:text-brand-black transition-colors"
                      >
                        <Home className="h-3 w-3" />
                        <span>Home</span>
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3 w-3 text-neutral-300" />
                    </li>
                    <li>
                      <Link
                        href="/services"
                        className="hover:text-brand-black transition-colors"
                      >
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3 w-3 text-neutral-300" />
                    </li>
                    <li className="text-brand-black font-semibold" aria-current="page">
                      {service.title}
                    </li>
                  </ol>
                </nav>

                {/* Eyebrow Micro-Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Service {service.number} • {service.badge}</span>
                </div>

                {/* Display Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.035em] text-brand-black leading-tight sm:leading-tight lg:leading-[1.18]">
                  {service.headline}
                </h1>

                {/* Value Proposition */}
                <p className="mt-3.5 text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl">
                  {service.subheadline}
                </p>

                {/* Dual Action Conversion Group — Responsive & Unified Hover */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Button
                    href="/book-a-meeting"
                    variant="primary"
                    size="md"
                    icon={<Calendar className="h-4 w-4" />}
                    rightIcon={<ArrowUpRight className="h-4 w-4" />}
                  >
                    Book a Meeting
                  </Button>
                  <Button
                    href="#pricing"
                    variant="secondary"
                    size="md"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Explore Packages
                  </Button>
                </div>

                {/* Micro Trust Indicators — Brand Palette Coherent */}
                <div className="mt-6 pt-5 border-t border-brand-border-subtle flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] text-brand-body">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-brand-red shrink-0" />
                    <span className="font-medium text-brand-black">100% Replacement Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    <span className="font-medium text-brand-black">Zero Long-Term Lock-in</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-brand-red shrink-0" />
                    <span className="font-medium text-brand-black">24-Hour Response SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Anchor / Feature Showcase (5 cols) */}
              <div className="lg:col-span-5">
                {service.leadSamples && service.leadSamples.length > 0 ? (
                  <SpotlightCard mode="light" className="p-5 sm:p-6 shadow-sm" contentClassName="relative z-10">
                    <div className="flex items-center justify-between pb-3 border-b border-brand-border mb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 shrink-0" />
                        <span className="text-[12px] font-bold text-brand-black uppercase tracking-wider">
                          Live Verified Sample
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-600/10 text-emerald-600">
                        {service.leadSamples[0].badge}
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-brand-border p-4.5 space-y-3">
                      <div>
                        <div className="text-[11px] text-brand-caption uppercase tracking-wider">Facility Type</div>
                        <div className="text-[15px] font-bold text-brand-black">
                          {service.leadSamples[0].facility}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-[12px] pt-2 border-t border-brand-border-subtle">
                        <div>
                          <div className="text-brand-caption">Location</div>
                          <div className="font-semibold text-brand-black">{service.leadSamples[0].location}</div>
                        </div>
                        <div>
                          <div className="text-brand-caption">Square Footage</div>
                          <div className="font-semibold text-brand-black">{service.leadSamples[0].sqft}</div>
                        </div>
                        <div>
                          <div className="text-brand-caption">Monthly Budget</div>
                          <div className="font-semibold text-emerald-600">{service.leadSamples[0].budget}</div>
                        </div>
                        <div>
                          <div className="text-brand-caption">Decision Maker</div>
                          <div className="font-semibold text-brand-black">{service.leadSamples[0].contact}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[12px] text-brand-body">
                      <span>Want appointments like this in your metro?</span>
                      <Link
                        href="/book-a-meeting"
                        className="font-bold text-brand-red hover:underline"
                      >
                        Claim Territory →
                      </Link>
                    </div>
                  </SpotlightCard>
                ) : (
                  <SpotlightCard mode="light" className="p-6 sm:p-7 shadow-sm space-y-5" contentClassName="relative z-10 space-y-5">
                    <div className="flex items-center gap-2 pb-3 border-b border-brand-border">
                      <TrendingUp className="h-5 w-5 text-brand-red" />
                      <h3 className="font-heading text-lg font-bold text-brand-black">
                        Performance Benchmark
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {service.statistics.slice(0, 4).map((stat, sIdx) => (
                        <div key={sIdx} className="bg-white rounded-xl border border-brand-border p-4">
                          <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-black">
                            {stat.value}
                          </div>
                          <div className="text-[12px] font-bold text-brand-black mt-1">
                            {stat.label}
                          </div>
                          <div className="text-[11px] text-brand-caption mt-0.5">
                            {stat.sublabel}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-brand-border text-[12.5px] text-brand-body flex items-center justify-between">
                      <span>Direct executive consultation with zero commitment.</span>
                      <Link href="/book-a-meeting" className="font-bold text-brand-red hover:underline">
                        Schedule Call →
                      </Link>
                    </div>
                  </SpotlightCard>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROBLEM AND SOLUTION (PatternComparison)
        ========================================================================= */}
        <PatternComparison
          id={processAnchorId === "strategy" ? "strategy-problem" : "problem-solution"}
          badge="THE INDUSTRY REALITY"
          title="Why Traditional Solutions Break Down"
          description="Most agencies rely on shared volume, lookalike templates, and opaque retainers. Here is how our model differs."
          leftCard={{
            title: extension.problemSolution.problemTitle,
            subtitle: "Generic, low-accountability agency models",
            items: extension.problemSolution.problemPoints.map((pt) => ({
              title: pt,
              desc: "Unpredictable operational execution that wastes internal team bandwidth.",
            })),
          }}
          rightCard={{
            title: extension.problemSolution.solutionTitle,
            subtitle: "Rigorous performance SLAs and verified deliverables",
            items: extension.problemSolution.solutionPoints.map((pt) => ({
              title: pt,
              desc: "100% money-back and replacement guarantees protecting your budget.",
            })),
          }}
        />

        {/* =========================================================================
            SECTION 3: WHAT WE OFFER (#platforms / #portfolio / #campaigns / #tasks / #offerings)
        ========================================================================= */}
        <section id={offeringsAnchorId} className="scroll-mt-36">
          <div className="site-container">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black mb-2.5">
                  <Building2 className="h-3.5 w-3.5 text-brand-red" />
                  <span>Scope &amp; Coverage</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">
                  {extension.offeringsTitle}
                </h2>
              </div>
              <p className="text-[13.5px] text-brand-caption max-w-md">
                Engineered specifically for commercial B2B operations and high-value contract acquisition.
              </p>
            </div>

            {/* Target Industries / Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.targetIndustries.map((ind, iIdx) => (
                <SpotlightCard
                  key={iIdx}
                  mode="light"
                  className="rounded-xl border border-brand-border bg-white p-5 hover:border-brand-black shadow-2xs group transition-colors"
                  contentClassName="relative z-10"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-caption group-hover:text-brand-red transition-colors">
                      Vertical {String(iIdx + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  </div>
                  <h3 className="font-heading text-[16px] font-bold text-brand-black mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-[13px] text-brand-body leading-relaxed">
                    {ind.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>

            {/* Interactive Lead Showcase for Janitorial Leads */}
            {service.leadSamples && service.leadSamples.length > 0 && (
              <div className="mt-12">
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-brand-red">
                    Live Verification Feed
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-black">
                    Recent Facility Walkthrough Opportunities
                  </h3>
                </div>
                <InteractiveLeadShowcase
                  leadSamples={service.leadSamples}
                  serviceTitle={service.title}
                />
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: OUR PROCESS (#process / #strategy / #workflow)
        ========================================================================= */}
        <section id={processAnchorId} className="scroll-mt-36">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black mb-3">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                <span>Predictable Delivery</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">
                {extension.processTitle}
              </h2>
              <p className="mt-2 text-[14.5px] text-brand-body leading-relaxed">
                {extension.processSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extension.processSteps.map((stepItem, sIdx) => (
                <SpotlightCard
                  key={sIdx}
                  mode="light"
                  className="rounded-2xl border border-brand-border bg-white p-6 shadow-xs hover:border-brand-black transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-brand-border-subtle mb-4">
                      <span className="font-heading text-2xl font-bold text-brand-red">
                        {stepItem.step}
                      </span>
                      {stepItem.timeline && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-brand-surface border border-brand-border text-brand-caption">
                          {stepItem.timeline}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-[16px] font-bold text-brand-black mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-[13px] text-brand-body leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: WHY CHOOSE US / BENEFITS (#benefits)
        ========================================================================= */}
        <section id={benefitsAnchorId} className="scroll-mt-36">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Competitive Advantages</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">
                {service.whyChooseHeadline}
              </h2>
              <p className="mt-2 text-[14.5px] text-brand-body leading-relaxed">
                {service.whyChooseSubtitle}
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whyChooseItems.map((item, wIdx) => (
                <SpotlightCard
                  key={wIdx}
                  mode="light"
                  className="rounded-2xl border border-brand-border bg-brand-surface p-6 sm:p-7 shadow-xs hover:border-brand-black transition-colors"
                >
                  <div>
                    {item.highlight && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-0.5 rounded-full mb-3">
                        {item.highlight}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold text-brand-black mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-brand-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Guarantee Box */}
            <SpotlightCard
              mode="light"
              spotlightColor="rgba(22, 163, 74, 0.12)"
              className="mt-8 rounded-2xl border border-emerald-600/30 bg-emerald-600/5 p-6 sm:p-8 hover:border-emerald-600/60"
              contentClassName="relative z-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-emerald-600/20">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  <h3 className="font-heading text-xl font-bold text-brand-black">
                    {service.guarantee.headline}
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 bg-white px-3 py-1 rounded-full border border-emerald-600/30 self-start sm:self-auto">
                  100% Risk Free
                </span>
              </div>
              <p className="mt-3 text-[14px] text-brand-body leading-relaxed">
                {service.guarantee.description}
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.guarantee.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[12.5px] font-semibold text-brand-black">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: PRICING / PACKAGES (#pricing)
        ========================================================================= */}
        <section id="pricing" className="scroll-mt-36">
          <div className="site-container">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-surface px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black mb-3">
                <Sparkles className="h-3.5 w-3.5 text-brand-red" />
                <span>Transparent Commercial Terms</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">
                Simple, Predictable Packages
              </h2>
              <p className="mt-2 text-[14.5px] text-brand-body leading-relaxed">
                Zero hidden setup fees. Flexible month-to-month plans with verified performance milestones.
              </p>
            </div>

            {/* Special Offer Banner if present */}
            {service.specialOfferBanner && (
              <SpotlightCard
                mode="dark"
                className="mb-8 rounded-2xl bg-brand-black text-white p-6 sm:p-8 shadow-md border-white/10"
                contentClassName="relative z-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-0.5 rounded-full">
                      {service.specialOfferBanner.badge}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2">
                      {service.specialOfferBanner.headline}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-neutral-300 max-w-2xl">
                      {service.specialOfferBanner.subheadline}
                    </p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12.5px] text-neutral-200">
                      {service.specialOfferBanner.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 text-center lg:text-right space-y-2">
                    <div className="text-3xl font-bold text-white">
                      {service.specialOfferBanner.priceCallout}
                    </div>
                    <Button
                      href="/book-a-meeting"
                      variant="primary"
                      size="md"
                      icon={<Calendar className="h-4 w-4" />}
                    >
                      Claim Special Offer
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            )}

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {service.pricingTiers.map((tier, tIdx) => {
                const isFeatured = tier.highlighted;
                return (
                  <SpotlightCard
                    key={tIdx}
                    mode={isFeatured ? "dark" : "light"}
                    className={
                      isFeatured
                        ? "border-brand-black bg-brand-black text-white shadow-xl ring-2 ring-brand-red p-6 sm:p-8 hover:-translate-y-0.5 active:translate-y-0"
                        : "border-brand-border bg-white text-brand-black shadow-xs p-6 sm:p-8 hover:-translate-y-0.5 active:translate-y-0"
                    }
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-200/20 mb-4">
                        <h3 className="font-heading text-xl font-bold">
                          {tier.name}
                        </h3>
                        {tier.badge && (
                          <span
                            className={`text-[10.5px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                              isFeatured
                                ? "bg-brand-red text-white"
                                : "bg-brand-surface border border-brand-border text-brand-caption"
                            }`}
                          >
                            {tier.badge}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <span className="font-heading text-3xl sm:text-4xl font-bold">
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span
                            className={`text-[13px] ml-1.5 ${
                              isFeatured ? "text-neutral-400" : "text-brand-caption"
                            }`}
                          >
                            {tier.period}
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-[13px] leading-relaxed mb-6 ${
                          isFeatured ? "text-neutral-300" : "text-brand-body"
                        }`}
                      >
                        {tier.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <div
                          className={`text-[11px] font-bold uppercase tracking-wider ${
                            isFeatured ? "text-neutral-400" : "text-brand-caption"
                          }`}
                        >
                          Included Deliverables
                        </div>
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-[13px]">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
                                isFeatured ? "text-emerald-400" : "text-emerald-600"
                              }`}
                            />
                            <span className={isFeatured ? "text-neutral-200" : "text-brand-black"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      href="/book-a-meeting"
                      variant={isFeatured ? "primary" : "dark"}
                      size="md"
                      rightIcon={<ArrowRight className="h-4 w-4" />}
                      className="w-full"
                    >
                      {tier.ctaText || "Select Package"}
                    </Button>
                  </SpotlightCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS (#faqs)
        ========================================================================= */}
        <section id="faqs" className="scroll-mt-36">
          <div className="site-container">
            <ServiceFaqAccordion
              faqs={extension.faqs}
              title={`Frequently Asked Questions`}
              subtitle={`Common inquiries about our ${service.title.toLowerCase()} scope, delivery, and replacement guarantees.`}
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: FINAL CTA — BOOK A MEETING (#cta) (PatternCtaBand)
        ========================================================================= */}
        <PatternCtaBand
          id="cta"
          badge="READY TO SCALE?"
          title={
            <>
              Book a Strategy Call with Our{" "}
              <span className="text-brand-red inline-block">{service.title}</span> Team
            </>
          }
          subhead="Schedule a 25-minute strategy session. We will audit your current pipeline, confirm territory exclusivity, and deliver a tailored fixed-scope proposal with zero obligation."
          primaryCta={{
            label: "Book a Meeting Now",
            href: "/book-a-meeting",
          }}
          secondaryCta={{
            label: `Call ${RHEK_CONFIG.company.displayPhone}`,
            href: `tel:${RHEK_CONFIG.company.contactPhone}`,
          }}
          riskReversal="Hassle-free replacement guarantee · Direct 1-on-1 consultation · 24-hour response SLA"
          bullets={[
            "Dedicated senior domain specialist",
            "Territory exclusivity & NDA protection",
            "Transparent milestone deliverables",
          ]}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer />
    </div>
  );
}
