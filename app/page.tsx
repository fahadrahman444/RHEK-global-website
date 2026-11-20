import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PartnerLogos } from "@/components/sections/PartnerLogos";
import { PatternSplitHero } from "@/components/layout/patterns/PatternSplitHero";
import { PatternBentoGrid } from "@/components/layout/patterns/PatternBentoGrid";
import { PatternComparison } from "@/components/layout/patterns/PatternComparison";
import { PatternStepper } from "@/components/layout/patterns/PatternStepper";
import { PatternSocialProof } from "@/components/layout/patterns/PatternSocialProof";
import { PatternCtaBand } from "@/components/layout/patterns/PatternCtaBand";
import {
  Building2,
  PhoneCall,
  Code2,
  TrendingUp,
  Palette,
  Video,
  Mail,
  UserCheck,
} from "@/components/common/icons";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-red selection:text-white">
      {/* 1. Global Navigation Header */}
      <header>
        <Navbar />
      </header>

      {/* 2. Primary Page Content */}
      <main>
        {/* Section 1: Master Agency Split Hero & Integrated Trust Bar */}
        <PatternSplitHero
          id="overview"
          badge="COMMERCIAL GROWTH & DIGITAL INFRASTRUCTURE"
          title={
            <>
              Commercial Growth, Digital Infrastructure, and{" "}
              <span className="text-brand-red inline-block">Qualified Pipeline.</span>
            </>
          }
          subhead="We engineer high-converting B2B sales pipelines, modern digital platforms, and dedicated operational teams for growing enterprises."
          primaryCta={{
            label: "Explore 8 Services",
            href: "#services",
          }}
          secondaryCta={{
            label: "Book a Discovery Call",
            href: "/book-a-meeting",
          }}
          proofCard={{
            title: "rhek-infrastructure.log",
            liveStatus: "SYSTEM OPERATIONAL",
            stats: [
              { value: "8", label: "Core Services", sublabel: "Growth & Digital" },
              { value: "100%", label: "IP Ownership", sublabel: "Zero Lock-In" },
              { value: "50 States", label: "National Reach", sublabel: "US & Global Scale" },
            ],
            techChips: [
              "Pipeline Generation",
              "Next.js Engineering",
              "Paid Acquisition",
              "Operational Teams",
            ],
            footnote: {
              text: "Looking for a custom multi-service scope?",
              linkText: "Consult Our Team",
              linkHref: "/book-a-meeting",
            },
          }}
          trustBadges={[
            { text: "100% Client Code & IP Ownership" },
            { text: "Dedicated Senior Specialists" },
            { text: "14-Day Money-Back Guarantee" },
            { text: "Guaranteed Response SLAs" },
          ]}
          jumpLinks={[
            { id: "overview", label: "Overview" },
            { id: "services", label: "8 Core Services" },
            { id: "difference", label: "The Advantage" },
            { id: "framework", label: "Delivery Framework" },
            { id: "results", label: "Client Results" },
            { id: "contact", label: "Get In Touch" },
          ]}
        />

        {/* Section 2: Institutional Partners */}
        <div className="site-container py-4">
          <PartnerLogos />
        </div>

        {/* Section 3: The 8-Service Catalog Bento Grid */}
        <PatternBentoGrid
          id="services"
          badge="CORE CAPABILITIES"
          title="8 Specialized Services. One Integrated Growth Partner."
          description="Whether you need exclusive sales pipeline, sub-second web architecture, high-ROAS ads, or dedicated back-office talent, we deliver with senior precision."
          columns={4}
          items={[
            {
              icon: Building2,
              title: "Janitorial Lead Generation",
              description:
                "Exclusive commercial cleaning appointments and verified walkthroughs with facility decision-makers.",
              caption: "Exclusive Leads · $0 Upfront Option",
              href: "/services/janitorial-leads",
            },
            {
              icon: PhoneCall,
              title: "Outbound Sales Development",
              description:
                "Dedicated full-time SDRs converting cold enterprise prospects into calendar-ready sales meetings.",
              caption: "Multi-Touch Cadences · Dedicated SDRs",
              href: "/services/sales-development",
            },
            {
              icon: Code2,
              title: "Web Design & Development",
              description:
                "Sub-second Next.js 15 web applications, Swiss Minimal UI, and conversion engineering with 100% code ownership.",
              caption: "Next.js 15 · Swiss Minimal · <0.9s LCP",
              href: "/services/web-development",
            },
            {
              icon: TrendingUp,
              title: "Social Media Advertising",
              description:
                "Data-backed paid acquisition across Meta and LinkedIn engineered for high ROAS and scalable CAC.",
              caption: "Meta & LinkedIn · Paid Scale",
              href: "/services/social-media-ads",
            },
            {
              icon: Palette,
              title: "Graphic Design & Brand Identity",
              description:
                "Authoritative brand identities, design token systems, investor pitch decks, and digital collateral.",
              caption: "Brand Systems · Vector Ready",
              href: "/services/graphic-design",
            },
            {
              icon: Video,
              title: "Video Editing & Production",
              description:
                "High-retention commercial reels, 4K YouTube editing, dynamic pacing, and motion graphics.",
              caption: "Commercial Reels · 4K Mastered",
              href: "/services/video-production",
            },
            {
              icon: Mail,
              title: "Email Marketing & Outreach",
              description:
                "Automated lifecycle flows, high-deliverability infrastructure, and scrubbed B2B cold email lists.",
              caption: "99%+ Deliverability · Cold Outreach",
              href: "/services/email-marketing",
            },
            {
              icon: UserCheck,
              title: "Virtual Assistant & Operations",
              description:
                "Dedicated administrative support handling calendar triage, CRM pipeline hygiene, and back-office ops.",
              caption: "Dedicated Talent · Full Timezone Coverage",
              href: "/services/virtual-assistant",
            },
          ]}
        />

        {/* Section 4: The Strategic Advantage (Fragmented Agency vs Unified Partner) */}
        <PatternComparison
          id="difference"
          badge="THE DIFFERENCE"
          title="Why Fragmented Agencies Fail Growing Businesses"
          description="Managing 4 separate vendors for leads, web dev, creative, and ops creates friction and bloated retainers. RHEK Global unifies execution."
          leftCard={{
            title: "The Fragmented Agency Model",
            subtitle: "Multiple disconnected vendors with zero accountability",
            items: [
              {
                title: "Siloed communication & finger-pointing",
                desc: "Your web developer blames your ad agency when conversion rates drop.",
              },
              {
                title: "Overlapping markups & hourly retainers",
                desc: "You pay separate monthly fees and retainer overages to 4 different niche shops.",
              },
              {
                title: "Generic templates & junior handoffs",
                desc: "Senior pitch teams hand your account over to untested junior contractors.",
              },
            ],
          }}
          rightCard={{
            title: "The RHEK Global Standard",
            subtitle: "One unified partner for commercial execution",
            items: [
              {
                title: "Integrated cross-functional delivery",
                desc: "Lead generation, web infrastructure, paid media, and creative operate in total sync.",
              },
              {
                title: "Fixed milestone pricing & 100% IP",
                desc: "Predictable budgets, zero hidden hourly fees, and complete client asset ownership.",
              },
              {
                title: "Direct senior specialist access",
                desc: "Dedicated domain experts operating under strict contractual performance SLAs.",
              },
            ],
          }}
        />

        {/* Section 5: Universal Delivery Framework */}
        <PatternStepper
          id="framework"
          badge="DELIVERY FRAMEWORK"
          title="How We Partner: From Strategy to Scale"
          description="A transparent, 4-stage operational framework applied across all our service divisions."
          steps={[
            {
              stepNumber: "01",
              stepLabel: "Stage 01",
              title: "Discovery & Architecture Blueprint",
              duration: "Week 1 · Scoping",
              deliverables: [
                "Commercial requirements & KPI mapping",
                "Technical specification & data contracts",
                "Territory exclusivity & NDA governance",
              ],
              artifact: "Scope & Architecture Contract",
            },
            {
              stepNumber: "02",
              stepLabel: "Stage 02",
              title: "Infrastructure & Campaign Setup",
              duration: "Week 2 · Deployment",
              deliverables: [
                "Target account dossiers & outreach cadences",
                "Figma design tokens & code scaffolding",
                "Verified tracking & CRM webhook pipelines",
              ],
              artifact: "Production Staging & Setup",
            },
            {
              stepNumber: "03",
              stepLabel: "Stage 03",
              title: "Execution & Verified Delivery",
              duration: "Weeks 3–4 · Activation",
              deliverables: [
                "Live walkthrough bookings or sprint deployments",
                "Lighthouse 100 QA & cross-browser stress testing",
                "Multi-touch SDR outreach & creative optimization",
              ],
              artifact: "Verified Milestone Delivery",
            },
            {
              stepNumber: "04",
              stepLabel: "Stage 04",
              title: "Scale, SLA & Ongoing Support",
              duration: "Ongoing · Growth",
              deliverables: [
                "Continuous performance telemetry & reporting",
                "Dedicated senior developer / account manager support",
                "100% source code and asset transfer",
              ],
              artifact: "Ongoing SLA & Growth Support",
            },
          ]}
        />

        {/* Section 6: Cross-Disciplinary Results & Testimonials */}
        <PatternSocialProof
          id="results"
          badge="MEASURED IMPACT"
          title="Measurable Results Across Growth Disciplines"
          description="Verified outcomes delivered for commercial contractors, technology firms, and B2B enterprises nationwide."
          stats={[
            {
              value: "+38%",
              label: "Pipeline Growth",
              caption:
                "Average increase in qualified discovery meetings within 60 days of outreach activation.",
            },
            {
              value: "<0.9s",
              label: "Core Web Vitals",
              caption:
                "Sub-second Largest Contentful Paint delivered on Next.js digital headquarters.",
            },
            {
              value: "99.2%",
              label: "SLA Compliance",
              caption:
                "On-time deliverable rate backed by our 100% money-back satisfaction guarantee.",
            },
          ]}
          testimonials={[
            {
              quote:
                "RHEK completely revamped our corporate web platform and built our outbound SDR pipeline simultaneously. We grew revenue by 40% in our first quarter.",
              author: "Marcus Vance",
              role: "VP of Commercial Growth",
              company: "Logistics SaaS",
              metric: "+40% REVENUE",
            },
            {
              quote:
                "The cleanest code and most reliable SDR team we have worked with. They operate like an internal senior team rather than an external vendor.",
              author: "Elena Rostova",
              role: "Head of Engineering",
              company: "Fintech Series A",
              metric: "0.8s LCP",
            },
            {
              quote:
                "Having one dedicated partner handle our commercial lead walkthroughs, website, and ad creative saved us months of vendor management headaches.",
              author: "David Sterling",
              role: "Managing Partner",
              company: "Commercial Group",
              metric: "8 SERVICES",
            },
          ]}
        />

        {/* Section 7: Master Agency Closing CTA Band */}
        <PatternCtaBand
          id="contact"
          badge="START A CONVERSATION"
          title={
            <>
              Ready to Accelerate Your Commercial Growth?{" "}
              <span className="text-brand-red inline-block">Let&apos;s Talk.</span>
            </>
          }
          subhead="Schedule a 30-minute discovery session with our senior leadership. We will evaluate your current challenges, recommend an actionable scope, and deliver a fixed quotation."
          primaryCta={{
            label: "Schedule a Discovery Meeting",
            href: "/book-a-meeting",
          }}
          secondaryCta={{
            label: "Explore All 8 Services",
            href: "/services",
          }}
          riskReversal="14-day refund guarantee · 100% code & asset ownership · Guaranteed 24-hour response"
          bullets={[
            "Direct consultation with senior domain specialists",
            "Fixed-bid milestone pricing with zero hidden fees",
            "Comprehensive cross-service scoping",
          ]}
        />
      </main>

      {/* Global Agency Footer */}
      <Footer />
    </div>
  );
}
