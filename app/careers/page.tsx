import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SubpageHeader } from "@/components/layout/SubpageHeader";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Mail,
  Zap,
  Award,
  Globe2,
  DollarSign,
} from "@/components/common/icons";
import { RHEK_CONFIG } from "@/data/rhek-config";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Careers & Opportunities — RHEK GLOBAL",
  description:
    "Explore career opportunities at RHEK GLOBAL in commercial sales development, Next.js web engineering, creative video production, and virtual administrative support.",
};

const BENEFITS = [
  {
    icon: Globe2,
    title: "Remote-First Work Environment",
    description: "Collaborate globally with autonomy structured around concrete deliverables rather than micromanagement.",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation & Performance",
    description: "Market-leading base packages with uncapped performance incentives for verified client outcomes.",
  },
  {
    icon: Zap,
    title: "Modern Stacks & High-Velocity Pipelines",
    description: "Ship with modern infrastructure (Next.js App Router, TypeScript, Tailwind, Close, HubSpot) with zero bureaucracy.",
  },
  {
    icon: Award,
    title: "Direct Leadership Mentorship",
    description: "Work directly alongside senior partners and lead strategic accounts from day one.",
  },
];

const OPEN_ROLES = [
  {
    id: "sdr-specialist",
    title: "Commercial B2B SDR & Lead Generation Specialist",
    department: "Sales & Outbound",
    location: "Remote (US / CA Timezones preferred)",
    type: "Full-Time",
    experience: "1–3 Years B2B Outbound Experience",
    description:
      "Drive cold outreach, qualify facility and property managers for commercial janitorial accounts, and schedule confirmed executive meetings for clients.",
    responsibilities: [
      "Execute multi-touch phone, email, and LinkedIn cadences to B2B decision-makers.",
      "Qualify facility cleaning square footage, current vendor contracts, and walkthrough readiness.",
      "Maintain flawless CRM data hygiene in Close and HubSpot.",
      "Achieve weekly qualified appointment quotas with territory exclusivity.",
    ],
  },
  {
    id: "fullstack-engineer",
    title: "Senior Full-Stack Next.js / TypeScript Engineer",
    department: "Engineering",
    location: "Remote (Global)",
    type: "Full-Time / Contract",
    experience: "3+ Years Modern React & Next.js",
    description:
      "Architect and ship production-grade Next.js App Router websites, modern UI components with Framer Motion, and secure CRM/form integration pipelines.",
    responsibilities: [
      "Develop accessible, pixel-perfect UI components adhering to WCAG 2.2 AA standards.",
      "Optimize Core Web Vitals to guarantee LCP ≤ 2.5s and CLS ≤ 0.1 across all devices.",
      "Maintain strict TypeScript types, zero-dead-code principles, and clean repository diffs.",
      "Implement server actions, API routes, and third-party webhook integrations.",
    ],
  },
  {
    id: "video-producer",
    title: "Commercial Motion Graphics & Video Editor",
    department: "Creative & Media",
    location: "Remote (Global)",
    type: "Contract / Project-Based",
    experience: "2+ Years Commercial Ad Editing",
    description:
      "Craft high-converting short-form video reels, B2B Video Sales Letters (VSLs), and social ads that elevate client brand authority and drive ad performance.",
    responsibilities: [
      "Edit raw footage into engaging, pacing-optimized social ads (9:16, 16:9, 1:1).",
      "Add polished typography animations, captions, sound effects, and color grading.",
      "Iterate rapidly based on creative performance metrics and client feedback.",
      "Manage project timelines and deliverables using structured cloud assets.",
    ],
  },
  {
    id: "virtual-assistant",
    title: "Executive Virtual Assistant & CRM Coordinator",
    department: "Operations",
    location: "Remote (Global)",
    type: "Full-Time",
    experience: "2+ Years Virtual Assistance / Admin",
    description:
      "Provide high-touch administrative support to executive leadership and enterprise clients, managing calendars, email correspondences, and CRM records.",
    responsibilities: [
      "Manage executive calendars across multiple timezones and schedule client calls.",
      "Perform data auditing, lead enrichment, and CRM pipeline cleanups.",
      "Draft professional email correspondence and follow-ups with high accuracy.",
      "Coordinate administrative tasks with extreme discretion and accountability.",
    ],
  },
];

export default function CareersPage() {
  const { company } = RHEK_CONFIG;

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Global Navigation */}
      <header>
        <Navbar />
      </header>

      <main>
        {/* 2. Subpage Header */}
        <div className="site-container pt-4 sm:pt-6">
        <SubpageHeader
          currentLabel="Careers"
          badge="Talent Network"
          icon={Briefcase}
          title="Build High-Performance Systems and Accelerate Your Career."
          description="Join a disciplined agency team delivering commercial growth engines, modern web engineering, and operational excellence."
        />
      </div>

      {/* 3. Perks & Culture */}
      <section className="py-8 sm:py-12 border-b border-brand-border">
        <div className="site-container">
          <div className="max-w-2xl mb-6">
            <span className="inline-block text-[10.5px] font-bold uppercase tracking-wider text-brand-caption mb-1">
              Why Work With Us
            </span>
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-brand-black tracking-[-0.03em] leading-snug">
              High Standards, Meaningful Freedom, Real Impact
            </h2>
            <p className="text-[13.5px] text-brand-body leading-relaxed mt-1.5">
              We believe in autonomous high-performers, transparent compensation, and eliminating unnecessary meetings so you can do your best work.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {BENEFITS.map((b) => {
              const Icon = b.icon;
              return (
                <SpotlightCard
                  key={b.title}
                  mode="light"
                  className="rounded-xl border border-brand-border bg-brand-surface p-3.5 sm:p-4 hover:border-brand-black"
                  contentClassName="relative z-10"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-brand-border text-brand-black mb-2.5">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <h3 className="text-[13px] sm:text-[13.5px] font-bold text-brand-black mb-1">
                    {b.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-brand-body leading-relaxed">
                    {b.description}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Open Positions */}
      <section className="py-8 sm:py-12">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-wider text-brand-caption">
                Open Opportunities
              </span>
              <h3 className="text-lg sm:text-2xl font-bold font-heading text-brand-black mt-0.5">
                Current Openings at RHEK GLOBAL
              </h3>
            </div>
            <p className="text-[12px] text-brand-caption">
              {OPEN_ROLES.length} active positions available
            </p>
          </div>

          <div className="space-y-3.5">
            {OPEN_ROLES.map((role) => (
              <SpotlightCard
                key={role.id}
                mode="light"
                className="rounded-xl border border-brand-border bg-brand-surface p-4 sm:p-5 hover:border-brand-black"
                contentClassName="relative z-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-brand-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                      <span className="text-[10px] font-semibold text-brand-black bg-white border border-brand-border px-2 py-0.5 rounded">
                        {role.department}
                      </span>
                      <span className="text-[10.5px] font-semibold text-brand-caption bg-white border border-brand-border px-2 py-0.5 rounded">
                        {role.type}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-brand-black">
                      {role.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-4 text-[12px] sm:text-[12.5px] text-brand-body">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-black" />
                      <span>{role.location}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-brand-black" />
                      <span>{role.experience}</span>
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4">
                  <p className="text-[13px] sm:text-[13.5px] text-brand-body leading-relaxed mb-4">
                    {role.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-caption mb-1.5">
                      Key Deliverables:
                    </p>
                    {role.responsibilities.map((resp) => (
                      <div
                        key={resp}
                        className="flex items-start gap-2 text-[12px] sm:text-[12.5px] text-brand-body"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3.5 border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-[11.5px] sm:text-[12px] text-brand-slate">
                      Direct application via email with portfolio or track record.
                    </p>
                    <Button
                      href={`mailto:${company.contactEmail}?subject=Application:%20${encodeURIComponent(
                        role.title
                      )}`}
                      variant="dark"
                      size="sm"
                      icon={<Mail className="h-3.5 w-3.5" />}
                      rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                    >
                      Apply For Role
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* General Inquiries */}
          <SpotlightCard
            mode="dark"
            className="mt-8 rounded-xl bg-brand-black border border-white/10 p-5 sm:p-6 text-white shadow-sm"
            contentClassName="relative z-10 flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <div className="max-w-[620px]">
              <span className="inline-block text-[10.5px] font-semibold uppercase tracking-wider text-brand-red mb-1">
                General Inquiries
              </span>
              <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                Don&apos;t see an exact match for your skillset?
              </h3>
              <p className="text-[12px] sm:text-[12.5px] text-brand-dim mt-0.5 leading-relaxed">
                We are always open to connecting with top-tier SDRs, designers, full-stack engineers, and ops specialists.
              </p>
            </div>
            <Button
              href={`mailto:${company.contactEmail}?subject=General%20Application%20-%20RHEK%20GLOBAL`}
              variant="primary"
              size="sm"
              icon={<Mail className="h-3.5 w-3.5" />}
              rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              className="shrink-0"
            >
              Send Open Application
            </Button>
          </SpotlightCard>
        </div>
      </section>
      </main>

      {/* 5. Edge-to-edge Footer */}
      <Footer />
    </div>
  );
}
