import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServiceFaqAccordion } from "@/components/services/ServiceFaqAccordion";
import { InteractiveLeadShowcase } from "@/components/services/InteractiveLeadShowcase";
import { SERVICES_DETAILED_DATA } from "@/data/services-data";
import { SERVICE_SLUG_ALIASES, SERVICE_EXTENSIONS } from "@/data/service-extensions";
import { RHEK_CONFIG } from "@/data/rhek-config";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Calendar,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Home,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Building2,
} from "lucide-react";

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
      title: "Service Not Found — Rate Global",
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
      siteName: "Rate Global",
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
      solutionTitle: "The Rate Global Performance Standard",
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
    <div className="relative min-h-screen bg-white text-[#525252] selection:bg-[#E9204F] selection:text-white">
      {/* 1. Global Master Navigation (Sticky on every page) */}
      <Navbar variant="light" />

      <main className="space-y-16 sm:space-y-24 py-8 sm:py-12">
        {/* =========================================================================
            SECTION 1: HERO SECTION (#overview)
        ========================================================================= */}
        <section id="overview" className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Pitch & Conversion (7 cols) */}
              <div className="lg:col-span-7">
                {/* Breadcrumb Navigation Trail */}
                <nav aria-label="Breadcrumb" className="mb-3.5">
                  <ol className="flex items-center gap-1.5 text-[12px] text-[#737373] font-medium font-sans">
                    <li>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-1 hover:text-[#101010] transition-colors"
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
                        className="hover:text-[#101010] transition-colors"
                      >
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true">
                      <ChevronRight className="h-3 w-3 text-neutral-300" />
                    </li>
                    <li className="text-[#101010] font-semibold" aria-current="page">
                      {service.title}
                    </li>
                  </ol>
                </nav>

                {/* Eyebrow Micro-Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E9204F]/20 bg-[#E9204F]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E9204F] mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Service {service.number} • {service.badge}</span>
                </div>

                {/* Display Headline */}
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-[-0.035em] text-[#101010] leading-[1.12]">
                  {service.headline}
                </h1>

                {/* Value Proposition */}
                <p className="mt-3.5 text-base sm:text-lg text-[#525252] leading-relaxed max-w-2xl">
                  {service.subheadline}
                </p>

                {/* Dual Action Conversion Group — Responsive & Unified Hover */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                  <Link
                    href="/book-a-meeting"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-[#101010] px-6 py-3 text-[14px] font-bold text-white shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[44px] group"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book a Meeting</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <a
                    href="#pricing"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#101010] hover:bg-[#FAFAFA] px-5 py-3 text-[13.5px] font-semibold text-[#101010] hover:shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 min-h-[44px] group"
                  >
                    <span>Explore Packages</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Micro Trust Indicators — Brand Palette Coherent */}
                <div className="mt-6 pt-5 border-t border-[#F0F0F0] flex flex-wrap items-center gap-y-2 gap-x-5 text-[12px] text-[#525252]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span className="font-medium text-[#101010]">100% Replacement Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span className="font-medium text-[#101010]">Zero Long-Term Lock-in</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#E9204F] shrink-0" />
                    <span className="font-medium text-[#101010]">24-Hour Response SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Anchor / Feature Showcase (5 cols) */}
              <div className="lg:col-span-5">
                {service.leadSamples && service.leadSamples.length > 0 ? (
                  <div className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-5 sm:p-6 shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-[#EBEBEB] mb-4">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#16A34A] animate-pulse" />
                        <span className="text-[12px] font-bold text-[#101010] uppercase tracking-wider">
                          Live Verified Sample
                        </span>
                      </div>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-[#16A34A]/10 text-[#16A34A]">
                        {service.leadSamples[0].badge}
                      </span>
                    </div>

                    <div className="bg-white rounded-xl border border-[#EBEBEB] p-4.5 space-y-3">
                      <div>
                        <div className="text-[11px] text-[#737373] uppercase tracking-wider">Facility Type</div>
                        <div className="text-[15px] font-bold text-[#101010]">
                          {service.leadSamples[0].facility}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-[12px] pt-2 border-t border-[#F0F0F0]">
                        <div>
                          <div className="text-[#737373]">Location</div>
                          <div className="font-semibold text-[#101010]">{service.leadSamples[0].location}</div>
                        </div>
                        <div>
                          <div className="text-[#737373]">Square Footage</div>
                          <div className="font-semibold text-[#101010]">{service.leadSamples[0].sqft}</div>
                        </div>
                        <div>
                          <div className="text-[#737373]">Monthly Budget</div>
                          <div className="font-semibold text-[#16A34A]">{service.leadSamples[0].budget}</div>
                        </div>
                        <div>
                          <div className="text-[#737373]">Decision Maker</div>
                          <div className="font-semibold text-[#101010]">{service.leadSamples[0].contact}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[12px] text-[#525252]">
                      <span>Want appointments like this in your metro?</span>
                      <Link
                        href="/book-a-meeting"
                        className="font-bold text-[#E9204F] hover:underline"
                      >
                        Claim Territory →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 sm:p-7 shadow-sm space-y-5">
                    <div className="flex items-center gap-2 pb-3 border-b border-[#EBEBEB]">
                      <TrendingUp className="h-5 w-5 text-[#E9204F]" />
                      <h3 className="font-heading text-lg font-bold text-[#101010]">
                        Performance Benchmark
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {service.statistics.slice(0, 4).map((stat, sIdx) => (
                        <div key={sIdx} className="bg-white rounded-xl border border-[#EBEBEB] p-4">
                          <div className="font-heading text-2xl sm:text-3xl font-bold text-[#101010]">
                            {stat.value}
                          </div>
                          <div className="text-[12px] font-bold text-[#101010] mt-1">
                            {stat.label}
                          </div>
                          <div className="text-[11px] text-[#737373] mt-0.5">
                            {stat.sublabel}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-[#EBEBEB] text-[12.5px] text-[#525252] flex items-center justify-between">
                      <span>Direct executive consultation with zero commitment.</span>
                      <Link href="/book-a-meeting" className="font-bold text-[#E9204F] hover:underline">
                        Schedule Call →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: PROBLEM AND SOLUTION
        ========================================================================= */}
        <section id={processAnchorId === "strategy" ? "strategy-problem" : "problem-solution"} className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-3">
                <Lightbulb className="h-3.5 w-3.5 text-[#E9204F]" />
                <span>The Industry Reality</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
                Why Traditional Solutions Break Down
              </h2>
              <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
                Most agencies rely on shared volume and opaque retainers. Here is how our model differs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* The Broken Way */}
              <div className="rounded-2xl border border-red-200/80 bg-red-50/40 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 pb-4 border-b border-red-200/60 text-red-900 mb-5">
                  <AlertTriangle className="h-5 w-5 text-red-600 shrink-0" />
                  <h3 className="font-heading text-lg font-bold">
                    {extension.problemSolution.problemTitle}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {extension.problemSolution.problemPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-[13.5px] sm:text-[14px] text-red-950/80 leading-relaxed">
                      <span className="text-red-500 font-bold mt-0.5 shrink-0">✕</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* The Rate Global Way */}
              <div className="rounded-2xl border border-[#16A34A]/30 bg-[#16A34A]/5 p-6 sm:p-8">
                <div className="flex items-center gap-2.5 pb-4 border-b border-[#16A34A]/20 text-[#101010] mb-5">
                  <CheckCircle2 className="h-5 w-5 text-[#16A34A] shrink-0" />
                  <h3 className="font-heading text-lg font-bold">
                    {extension.problemSolution.solutionTitle}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {extension.problemSolution.solutionPoints.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-[13.5px] sm:text-[14px] text-[#101010] leading-relaxed font-medium">
                      <span className="text-[#16A34A] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: WHAT WE OFFER (#platforms / #portfolio / #campaigns / #tasks / #offerings)
        ========================================================================= */}
        <section id={offeringsAnchorId} className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-2.5">
                  <Building2 className="h-3.5 w-3.5 text-[#E9204F]" />
                  <span>Scope &amp; Coverage</span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
                  {extension.offeringsTitle}
                </h2>
              </div>
              <p className="text-[13.5px] text-[#737373] max-w-md">
                Engineered specifically for commercial B2B operations and high-value contract acquisition.
              </p>
            </div>

            {/* Target Industries / Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.targetIndustries.map((ind, iIdx) => (
                <div
                  key={iIdx}
                  className="rounded-xl border border-[#EBEBEB] bg-white p-5 hover:border-[#101010] transition-all duration-200 shadow-2xs group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#737373] group-hover:text-[#E9204F] transition-colors">
                      Vertical {String(iIdx + 1).padStart(2, "0")}
                    </span>
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                  </div>
                  <h3 className="font-heading text-[16px] font-bold text-[#101010] mb-1.5">
                    {ind.name}
                  </h3>
                  <p className="text-[13px] text-[#525252] leading-relaxed">
                    {ind.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Lead Showcase for Janitorial Leads */}
            {service.leadSamples && service.leadSamples.length > 0 && (
              <div className="mt-12">
                <div className="mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F]">
                    Live Verification Feed
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#101010]">
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
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-3">
                <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
                <span>Predictable Delivery</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
                {extension.processTitle}
              </h2>
              <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
                {extension.processSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extension.processSteps.map((stepItem, sIdx) => (
                <div
                  key={sIdx}
                  className="relative rounded-2xl border border-[#EBEBEB] bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F0F0] mb-4">
                      <span className="font-heading text-2xl font-bold text-[#E9204F]">
                        {stepItem.step}
                      </span>
                      {stepItem.timeline && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#FAFAFA] border border-[#EBEBEB] text-[#737373]">
                          {stepItem.timeline}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading text-[16px] font-bold text-[#101010] mb-2">
                      {stepItem.title}
                    </h3>
                    <p className="text-[13px] text-[#525252] leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: WHY CHOOSE US / BENEFITS (#benefits)
        ========================================================================= */}
        <section id={benefitsAnchorId} className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-3">
                <ShieldCheck className="h-3.5 w-3.5 text-[#16A34A]" />
                <span>Competitive Advantages</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
                {service.whyChooseHeadline}
              </h2>
              <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
                {service.whyChooseSubtitle}
              </p>
            </div>

            {/* Why Choose Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.whyChooseItems.map((item, wIdx) => (
                <div
                  key={wIdx}
                  className="rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-6 sm:p-7 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    {item.highlight && (
                      <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-0.5 rounded-full mb-3">
                        {item.highlight}
                      </span>
                    )}
                    <h3 className="font-heading text-lg font-bold text-[#101010] mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-[#525252] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Guarantee Box */}
            <div className="mt-8 rounded-2xl border border-[#16A34A]/30 bg-[#16A34A]/5 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#16A34A]/20">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="h-6 w-6 text-[#16A34A]" />
                  <h3 className="font-heading text-xl font-bold text-[#101010]">
                    {service.guarantee.headline}
                  </h3>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#16A34A] bg-white px-3 py-1 rounded-full border border-[#16A34A]/30 self-start sm:self-auto">
                  100% Risk Free
                </span>
              </div>
              <p className="mt-3 text-[14px] text-[#525252] leading-relaxed">
                {service.guarantee.description}
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.guarantee.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[12.5px] font-semibold text-[#101010]">
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 6: PRICING / PACKAGES (#pricing)
        ========================================================================= */}
        <section id="pricing" className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#EBEBEB] bg-[#FAFAFA] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#101010] mb-3">
                <Sparkles className="h-3.5 w-3.5 text-[#E9204F]" />
                <span>Transparent Commercial Terms</span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#101010]">
                Simple, Predictable Packages
              </h2>
              <p className="mt-2 text-[14.5px] text-[#525252] leading-relaxed">
                Zero hidden setup fees. Flexible month-to-month plans with verified performance milestones.
              </p>
            </div>

            {/* Special Offer Banner if present */}
            {service.specialOfferBanner && (
              <div className="mb-8 rounded-2xl bg-[#101010] text-white p-6 sm:p-8 shadow-md">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9204F] bg-[#E9204F]/10 px-2.5 py-0.5 rounded-full">
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
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#27C93F] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 text-center lg:text-right">
                    <div className="text-3xl font-bold text-white mb-2">
                      {service.specialOfferBanner.priceCallout}
                    </div>
                    <Link
                      href="/book-a-meeting"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white px-6 py-3 font-bold text-[13.5px] transition-all min-h-[44px]"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Claim Special Offer</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Tiers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {service.pricingTiers.map((tier, tIdx) => {
                const isFeatured = tier.highlighted;
                return (
                  <div
                    key={tIdx}
                    className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                      isFeatured
                        ? "border-[#101010] bg-[#101010] text-white shadow-xl ring-2 ring-[#E9204F]"
                        : "border-[#EBEBEB] bg-white text-[#101010] shadow-xs"
                    }`}
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
                                ? "bg-[#E9204F] text-white"
                                : "bg-[#FAFAFA] border border-[#EBEBEB] text-[#737373]"
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
                              isFeatured ? "text-neutral-400" : "text-[#737373]"
                            }`}
                          >
                            {tier.period}
                          </span>
                        )}
                      </div>

                      <p
                        className={`text-[13px] leading-relaxed mb-6 ${
                          isFeatured ? "text-neutral-300" : "text-[#525252]"
                        }`}
                      >
                        {tier.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <div
                          className={`text-[11px] font-bold uppercase tracking-wider ${
                            isFeatured ? "text-neutral-400" : "text-[#737373]"
                          }`}
                        >
                          Included Deliverables
                        </div>
                        {tier.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-[13px]">
                            <CheckCircle2
                              className={`h-4 w-4 shrink-0 mt-0.5 ${
                                isFeatured ? "text-[#27C93F]" : "text-[#16A34A]"
                              }`}
                            />
                            <span className={isFeatured ? "text-neutral-200" : "text-[#101010]"}>
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/book-a-meeting"
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3 px-5 text-[13.5px] font-bold transition-all min-h-[44px] ${
                        isFeatured
                          ? "bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white shadow-md"
                          : "bg-[#101010] hover:bg-[#E9204F] text-white"
                      }`}
                    >
                      <span>{tier.ctaText || "Select Package"}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS (#faqs)
        ========================================================================= */}
        <section id="faqs" className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <ServiceFaqAccordion
              faqs={extension.faqs}
              title={`Frequently Asked Questions`}
              subtitle={`Common inquiries about our ${service.title.toLowerCase()} scope, delivery, and replacement guarantees.`}
            />
          </div>
        </section>

        {/* =========================================================================
            SECTION 8: FINAL CTA — BOOK A MEETING (#cta)
        ========================================================================= */}
        <section id="cta" className="scroll-mt-36">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <div className="rounded-3xl bg-[#101010] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#E9204F] mb-4">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Ready To Scale?</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.12]">
                  Book a Strategy Call with Our {service.title} Team
                </h2>

                <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Schedule a 25-minute strategy session. We will audit your current pipeline, confirm territory exclusivity, and deliver a tailored fixed-scope proposal with zero obligation.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/book-a-meeting"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#E9204F] hover:bg-white hover:text-[#101010] text-white px-7 py-3.5 text-[14px] font-bold shadow-md hover:shadow-lg transition-all min-h-[48px]"
                  >
                    <Calendar className="h-4 w-4" />
                    <span>Book a Meeting Now</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`tel:${RHEK_CONFIG.company.contactPhone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:border-white bg-white/5 px-6 py-3.5 text-[13.5px] font-semibold text-white transition-colors min-h-[48px]"
                  >
                    <PhoneCall className="h-4 w-4 text-[#E9204F]" />
                    <span>Call {RHEK_CONFIG.company.displayPhone}</span>
                  </a>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-[12px] text-neutral-400">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-[#27C93F]" />
                    <span>Hassle-Free Replacement Guarantee</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-[#27C93F]" />
                    <span>Direct 1-on-1 Consultation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#E9204F]" />
                    <span>24-Hour Confirmation SLA</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Accent */}
              <div
                className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#E9204F]/10 blur-3xl pointer-events-none"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Global Agency Footer */}
      <Footer />
    </div>
  );
}
