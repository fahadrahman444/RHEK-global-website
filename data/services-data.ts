export interface ServicePricingTier {
  name: string;
  badge?: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

export interface ServiceLeadSample {
  id: string;
  ticketId?: string;
  category?: string;
  badge: string;
  facility: string;
  location: string;
  sqft: string;
  serviceType: string;
  budget: string;
  startDate: string;
  contact: string;
  verified: boolean;
}

export interface ServiceWhyChooseItem {
  title: string;
  description: string;
  highlight?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  badge: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  phoneCta?: {
    label: string;
    phone: string;
    displayPhone: string;
  };
  specialOfferBanner?: {
    headline: string;
    subheadline: string;
    priceCallout: string;
    badge: string;
    bullets: string[];
    phone: string;
    displayPhone: string;
    note: string;
  };
  whyChooseHeadline: string;
  whyChooseSubtitle: string;
  whyChooseItems: ServiceWhyChooseItem[];
  leadSamples?: ServiceLeadSample[];
  pricingTiers: ServicePricingTier[];
  statistics: ServiceStat[];
  targetIndustries: {
    name: string;
    description: string;
  }[];
  guarantee: {
    headline: string;
    description: string;
    points: string[];
  };
  testimonials: {
    quote: string;
    author: string;
    role: string;
    company: string;
    metric?: string;
  }[];
}

export const SERVICES_DETAILED_DATA: Record<string, ServiceDetail> = {
  "janitorial-leads": {
    slug: "janitorial-leads",
    number: "01",
    title: "Janitorial Lead Generation",
    metaTitle: "Commercial Janitorial Leads — Pay Nothing Upfront | RHEK GLOBAL",
    metaDescription:
      "Get exclusive commercial cleaning appointments with verified facility decision-makers. Pay nothing upfront options available. Win 40-50% contracts with zero shared leads.",
    badge: "100% Exclusive • Pay Nothing Upfront Available",
    headline: "Get Exclusive Commercial Cleaning Leads – Pay Nothing Upfront!",
    subheadline:
      "We help commercial cleaning companies secure high-quality appointments with verified facility decision-makers, connecting them with businesses actively seeking trusted cleaning partners and long-term service solutions.",
    primaryCtaText: "Claim Your Territory & Leads",
    primaryCtaHref: "/contact?service=Janitorial%20Lead%20Generation",
    phoneCta: {
      label: "Call Now",
      phone: "+16466948464",
      displayPhone: "+1 (646) 694-8464",
    },
    specialOfferBanner: {
      badge: "Limited Time Offer",
      headline: "Exclusive Commercial Cleaning Leads at $110",
      subheadline:
        "Stop chasing unqualified prospects. Start walking through facilities and winning long-term commercial cleaning contracts.",
      priceCallout: "From Just $110",
      bullets: [
        "Connect with verified business decision-makers (Property & Facility Managers)",
        "100% exclusive leads — never shared with competing contractors in your territory",
        "High-quality commercial walkthroughs with verified square footage & frequency",
        "Hassle-free refund & replacement protection guarantee",
      ],
      phone: "+16466948464",
      displayPhone: "+1 (646) 694-8464",
      note: "Special promotional pricing available for qualified commercial cleaning contractors this month.",
    },
    whyChooseHeadline: "Why Choose Our Office Cleaning Leads?",
    whyChooseSubtitle: "Consistent and Quality Commercial Cleaning Contract Lead Provider",
    whyChooseItems: [
      {
        title: "Pay For Visited Appointments",
        description:
          "You pay for our Office Cleaning Leads if and only if you visit the prospect and provide a quote. We do not charge for any leads that are not successfully called and quoted.",
        highlight: "100% Risk Protected",
      },
      {
        title: "Win 40%–50% Contracts",
        description:
          "Our Commercial Cleaning Leads deliver an industry-leading 40%–50% conversion ratio. Our experienced appointment setters identify genuine, budget-backed facility needs.",
        highlight: "40%–50% Close Ratio",
      },
      {
        title: "Quality Is Priority",
        description:
          "Our Janitorial Contract Appointments are reliable and trustworthy. Contractors reliably attend and quote over 90% of the appointments scheduled by our dedicated team.",
        highlight: "90% Appointment Show Rate",
      },
    ],
    leadSamples: [
      {
        id: "sample-01",
        ticketId: "TKT-TX-7014",
        category: "Medical & Clinics",
        badge: "Replacement Guarantee",
        facility: "Medical Office Building (2 Floors)",
        location: "Plano, TX",
        sqft: "14,000 sq ft",
        serviceType: "Nightly Janitorial, 5x / Week",
        budget: "$3,200 – $4,000 / month",
        startDate: "Within 30 Days",
        contact: "Facilities Manager (Verified)",
        verified: true,
      },
      {
        id: "sample-02",
        ticketId: "TKT-TX-8820",
        category: "Corporate & Tech",
        badge: "Replacement Guarantee",
        facility: "Corporate Tech Headquarters",
        location: "Dallas, TX",
        sqft: "32,500 sq ft",
        serviceType: "Night Shift + Day Porter, 7x / Week",
        budget: "$6,800 – $8,500 / month",
        startDate: "Immediate",
        contact: "Director of Building Operations",
        verified: true,
      },
      {
        id: "sample-03",
        ticketId: "TKT-TX-9142",
        category: "Multi-Tenant Plazas",
        badge: "Replacement Guarantee",
        facility: "Multi-Tenant Business Center",
        location: "Fort Worth, TX",
        sqft: "24,000 sq ft",
        serviceType: "Evening Janitorial, 5x / Week",
        budget: "$4,500 – $5,800 / month",
        startDate: "Within 45 Days",
        contact: "Property General Manager",
        verified: true,
      },
      {
        id: "sample-04",
        ticketId: "TKT-TX-6531",
        category: "Educational & Academies",
        badge: "Replacement Guarantee",
        facility: "Private Charter Academy & Gymnasium",
        location: "Austin, TX",
        sqft: "42,000 sq ft",
        serviceType: "Daily Janitorial + Floor Buffing",
        budget: "$7,200 – $9,000 / month",
        startDate: "Start of Next Term",
        contact: "Head of Facilities & Maintenance",
        verified: true,
      },
    ],
    pricingTiers: [
      {
        name: "Starter Territory",
        price: "$1,100",
        period: "10 Exclusive Leads",
        description:
          "Perfect for growing cleaning companies looking to add 3–5 recurring commercial accounts immediately.",
        features: [
          "10 Verified Commercial Appointments",
          "100% Territory Exclusivity (No Reselling)",
          "Facility Walkthrough Date & Time Pre-Set",
          "Square Footage & Scope Pre-Screened",
          "Replacement Guarantee on Unquoted Leads",
          "Dedicated Account Manager",
        ],
        highlighted: false,
        ctaText: "Claim Starter Territory",
      },
      {
        name: "Growth Commercial",
        badge: "Most Popular",
        price: "$2,200",
        period: "22 Exclusive Leads ($100/lead)",
        description:
          "For commercial cleaning teams with 2+ crews seeking to aggressively dominate their metropolitan territory.",
        features: [
          "22 Verified Facility Walkthroughs",
          "Multi-City or Extended County Territory",
          "Direct Decision-Maker Contact Verification",
          "Specific Cleaning Specifications Documented",
          "100% Replacement Protection on No-Shows",
          "Priority Scheduling Pipeline & Live Calendar Sync",
          "Bi-Weekly Strategy & Pipeline Reviews",
        ],
        highlighted: true,
        ctaText: "Secure Growth Territory",
      },
      {
        name: "Scale & Enterprise",
        badge: "Pay Nothing Upfront Option",
        price: "Custom",
        period: "Tailored Monthly Volume",
        description:
          "High-volume guaranteed appointment pipeline with pay-for-performance and zero-upfront qualifying terms.",
        features: [
          "Custom Volume (30+ Leads / Month)",
          "Full Metro-Area Territory Lockdown",
          "Pay-Nothing-Upfront Terms Available",
          "Dedicated Cold Calling & SDR Team",
          "Custom CRM Integration (HubSpot / Jobber / CleanGuru)",
          "Executive Lead Verification Hotline",
          "Guaranteed 40%+ Walkthrough Close Support",
        ],
        highlighted: false,
        ctaText: "Inquire for Enterprise Terms",
      },
    ],
    statistics: [
      { value: "5,000+", label: "Qualified Leads", sublabel: "Verified facility decision-makers" },
      { value: "1,200+", label: "Appointments Scheduled", sublabel: "Confirmed walkthroughs completed" },
      { value: "250+", label: "Projects Completed", sublabel: "Across commercial sectors" },
      { value: "150+", label: "Happy Clients", sublabel: "Commercial cleaning contractors" },
      { value: "15+", label: "Industries Served", sublabel: "Specialized cleaning requirements" },
      { value: "40%–50%", label: "Average Close Ratio", sublabel: "Contract won per walkthrough" },
    ],
    targetIndustries: [
      { name: "Medical & Healthcare Clinics", description: "Terminal cleaning, sanitization protocols, high compliance" },
      { name: "Commercial Real Estate & Plazas", description: "Multi-tenant office buildings, lobbies, shared facilities" },
      { name: "Technology Campuses & Co-Working", description: "Modern open-plan offices, conference centers, kitchenettes" },
      { name: "Corporate Financial Centers", description: "Banks, insurance brokerages, high-security facilities" },
      { name: "Educational & Private Academies", description: "Classrooms, auditoriums, athletic gyms, administrative halls" },
      { name: "Industrial & Logistics Hubs", description: "Distribution warehouses, dispatch offices, employee locker rooms" },
      { name: "Hospitality & Boutique Hotels", description: "Front-of-house lobbies, dining facilities, event spaces" },
      { name: "Automotive Dealerships & Retail", description: "Showroom floor buffing, service waiting bays, customer lounges" },
    ],
    guarantee: {
      headline: "100% Money-Back & Replacement Guarantee",
      description:
        "Your Investment Protected. Your Satisfaction Guaranteed. We stand 100% behind the quality and validity of every single appointment we schedule.",
      points: [
        "100% Money-Back Protection: Full refund or replacement on any unquoted or invalid appointment.",
        "Quality Assurance: We only book real facility decision-makers who actively requested quotes.",
        "Complete Transparency: Full call notes, facility details, and confirmed calendar invites provided upfront.",
        "Zero Shared Leads: Your leads are 100% exclusive to your company in your territory.",
      ],
    },
    testimonials: [
      {
        quote:
          "In our first month with RHEK Global, we walked through 14 facilities and closed 6 recurring nightly cleaning contracts worth over $22,000/month. The pay-for-visited model is unbeatable.",
        author: "Marcus Vance",
        role: "Managing Owner",
        company: "Vance Commercial Cleaning Solutions, TX",
        metric: "$22,000/mo in New Contracts",
      },
      {
        quote:
          "Other lead brokers sell the same lead to 4 cleaning companies. RHEK is genuinely 100% exclusive. When we arrived at the medical center in Plano, the facilities director was waiting for us.",
        author: "Elena Rostova",
        role: "Director of Business Development",
        company: "Pinnacle Janitorial Group, GA",
        metric: "52% Walkthrough Win Rate",
      },
    ],
  },

  "sales-development": {
    slug: "sales-development",
    number: "02",
    title: "Sales Development & Appointment Setting",
    metaTitle: "B2B Sales Development & SDR Appointment Setting | RHEK GLOBAL",
    metaDescription:
      "Scale your outbound sales pipeline with dedicated B2B SDR cadences, cold calling, and executive calendar booking.",
    badge: "Dedicated SDR Teams • Multi-Touch Cadences",
    headline: "Scale Your Outbound Sales Pipeline with Dedicated B2B SDR Cadences.",
    subheadline:
      "Turn cold enterprise prospects into booked calendar meetings with dedicated SDR outreach across phone, email, and LinkedIn.",
    primaryCtaText: "Deploy Your Dedicated SDR",
    primaryCtaHref: "/contact?service=Sales%20Development",
    whyChooseHeadline: "Why Partner With Our Sales Development Reps?",
    whyChooseSubtitle: "Outbound Infrastructure That Fills Your AE Calendars",
    whyChooseItems: [
      {
        title: "Dedicated, Full-Time SDRs",
        description:
          "Trained specifically on your value proposition, customer personas, and objection handling scripts.",
        highlight: "100% Dedicated",
      },
      {
        title: "Multi-Touch Omni-Channel",
        description:
          "Synchronized phone calling, hyper-personalized cold emails, and social LinkedIn engagement touchpoints.",
        highlight: "Omni-Channel Outreach",
      },
      {
        title: "Strict BANT Qualification",
        description:
          "Every meeting is pre-screened for Budget, Authority, Need, and Timeline before landing on your calendar.",
        highlight: "Pre-Qualified Meetings",
      },
    ],
    pricingTiers: [
      {
        name: "Pilot SDR Pod",
        price: "$2,800",
        period: "per month",
        description: "Ideal for testing new verticals and customer profiles with dedicated cold calling.",
        features: [
          "1 Dedicated B2B SDR",
          "500 Verified Contacts Enriched / Mo",
          "Phone + Email Multi-Touch Cadences",
          "Guaranteed 12–18 Qualified Meetings",
          "Weekly Pipeline Review Call",
        ],
        highlighted: false,
        ctaText: "Launch Pilot Pod",
      },
      {
        name: "Growth Pipeline",
        badge: "Most Popular",
        price: "$4,900",
        period: "per month",
        description: "Full-scale outbound engine designed to sustain a team of Account Executives.",
        features: [
          "2 Dedicated Senior SDRs",
          "1,200 Verified Decision-Makers / Mo",
          "Multi-Channel: Phone, Email & LinkedIn",
          "Guaranteed 25–35 Qualified Meetings",
          "CRM Sync (HubSpot / Salesforce)",
          "Custom Objection Matrix & Scripting",
        ],
        highlighted: true,
        ctaText: "Scale Outbound Engine",
      },
      {
        name: "Enterprise Outbound",
        price: "Custom",
        period: "Quarterly Program",
        description: "Full outbound department replacement with dedicated SDR manager and technical enrichment.",
        features: [
          "3+ Dedicated SDRs + Pod Manager",
          "Account-Based Marketing (ABM) Playbooks",
          "Custom Data Enrichment & Intent Scoring",
          "50+ Executive Meetings / Mo",
          "Executive Lead Handoff Hotline",
        ],
        highlighted: false,
        ctaText: "Contact Sales Leadership",
      },
    ],
    statistics: [
      { value: "45,000+", label: "Cold Calls Executed", sublabel: "Professional B2B prospecting" },
      { value: "3,400+", label: "Meetings Booked", sublabel: "Direct with C-Suite & VPs" },
      { value: "92%", label: "Meeting Attendance", sublabel: "Low no-show confirmation protocol" },
      { value: "$18M+", label: "Pipeline Generated", sublabel: "Total qualified deal value" },
    ],
    targetIndustries: [
      { name: "B2B SaaS & Tech", description: "Founders, CTOs, and Product Directors" },
      { name: "Commercial Facilities & Construction", description: "Property owners, operations heads" },
      { name: "Financial & Advisory Services", description: "CFOs, treasury officers, wealth managers" },
      { name: "Supply Chain & Logistics", description: "Fleet managers, warehouse vice presidents" },
    ],
    guarantee: {
      headline: "Qualified Meeting Guarantee",
      description: "You only pay for prospects who meet your exact buyer qualification criteria.",
      points: [
        "Replacement meetings for any verified no-shows or unqualified contacts.",
        "Complete recording and transcript transparency on every qualified call.",
        "No long-term lock-in: month-to-month flexibility based on performance.",
      ],
    },
    testimonials: [
      {
        quote:
          "RHEK Global replaced our in-house prospecting efforts in two weeks. Our sales team went from 4 outbound demos a month to 22 steady executive calls.",
        author: "David Chen",
        role: "VP of Sales",
        company: "OmniData Analytics",
      },
    ],
  },

  "social-media-ads": {
    slug: "social-media-ads",
    number: "03",
    title: "Social Media Advertising",
    metaTitle: "Paid Social Media Advertising & Customer Acquisition | RHEK GLOBAL",
    metaDescription:
      "Data-driven paid social campaigns across Meta, TikTok, and LinkedIn built for maximum ROI and scalable customer acquisition.",
    badge: "Full-Funnel Paid Acquisition",
    headline: "Scale Revenue with High-ROI Paid Social Advertising Campaigns.",
    subheadline:
      "Stop wasting ad spend on low-intent clicks. We engineer full-funnel paid media campaigns that generate predictable customer acquisition.",
    primaryCtaText: "Audit Your Ad Accounts",
    primaryCtaHref: "/contact?service=Social%20Media%20Advertising",
    whyChooseHeadline: "Why Scale Paid Social With Us?",
    whyChooseSubtitle: "Creative Strategy Paired With Algorithmic Optimization",
    whyChooseItems: [
      {
        title: "Creative-First Testing Framework",
        description: "We deploy 15+ new creative hooks every month to beat ad fatigue and lower customer acquisition costs.",
        highlight: "15+ Creatives / Month",
      },
      {
        title: "First-Party Tracking & Conversion API",
        description: "Zero data blindness. We set up CAPI and server-side tracking so algorithms optimize for actual revenue.",
        highlight: "Server-Side Tracking",
      },
      {
        title: "Full Attribution Transparency",
        description: "Live dashboard tracking MER (Marketing Efficiency Ratio), ROAS, and blended cost per acquisition.",
        highlight: "Real-Time Attribution",
      },
    ],
    pricingTiers: [
      {
        name: "Starter Acquisition",
        price: "$1,800",
        period: "per month + ad spend",
        description: "For brands spending $3k–$10k/month looking to establish profitable ROAS.",
        features: [
          "Meta (Facebook & Instagram) Management",
          "8 Bespoke Static & Motion Creatives",
          "Conversion API & Pixel Audit",
          "Weekly Performance Reports",
        ],
        highlighted: false,
        ctaText: "Launch Starter Campaign",
      },
      {
        name: "Scale Omnichannel",
        badge: "Recommended",
        price: "$3,400",
        period: "per month + ad spend",
        description: "For scaling businesses ready to dominate across Meta, TikTok, and LinkedIn.",
        features: [
          "Meta + LinkedIn or TikTok Ads",
          "16 Custom Ad Creatives (Reels + Graphics)",
          "Full Funnel Retargeting & Lookalikes",
          "Landing Page CRO Recommendations",
          "Dedicated Media Buyer & Slack Channel",
        ],
        highlighted: true,
        ctaText: "Scale My Campaigns",
      },
      {
        name: "Enterprise Media",
        price: "Custom",
        period: "per month + ad spend",
        description: "For brands spending $50k+/month needing dedicated daily media buying and creative studios.",
        features: [
          "All Major Ad Platforms",
          "Unlimited Creative Iterations & UGC",
          "Custom Multi-Touch Attribution Modeling",
          "Daily Budget Pacing & Optimization",
        ],
        highlighted: false,
        ctaText: "Inquire for Enterprise",
      },
    ],
    statistics: [
      { value: "3.8x", label: "Average Blended ROAS", sublabel: "Across active e-commerce & B2B brands" },
      { value: "$4.2M+", label: "Ad Spend Managed", sublabel: "Across Meta, LinkedIn, and TikTok" },
      { value: "34%", label: "Average CAC Reduction", sublabel: "Achieved within first 60 days" },
      { value: "450+", label: "Ad Variations Tested", sublabel: "Static, UGC, motion graphics" },
    ],
    targetIndustries: [
      { name: "Direct-to-Consumer (D2C)", description: "High-volume apparel, wellness, cosmetics" },
      { name: "Local Service Contractors", description: "Roofing, cleaning, HVAC, plumbing" },
      { name: "B2B Professional Services", description: "Consulting, legal, specialized software" },
      { name: "Real Estate & Development", description: "Luxury developments, commercial brokerage" },
    ],
    guarantee: {
      headline: "Performance & ROAS Commitment",
      description: "If we do not meet agreed performance benchmarks in month 1, we manage month 2 management-free.",
      points: [
        "Complete transparency: you always own your ad accounts and creative assets.",
        "No hidden markups on media spend.",
      ],
    },
    testimonials: [
      {
        quote: "Our customer acquisition cost dropped by 41% within our first 45 days working with RHEK Global.",
        author: "Sarah Lindqvist",
        role: "Chief Marketing Officer",
        company: "Aura Home Goods",
      },
    ],
  },

  "web-development": {
    slug: "web-development",
    number: "04",
    title: "Web Design & Development",
    metaTitle: "Custom Next.js & TypeScript Web Development | RHEK GLOBAL",
    metaDescription:
      "Engineered for sub-second speed and maximum conversion. Production Next.js, TypeScript, and modern responsive web systems.",
    badge: "Next.js 15 • Sub-Second Performance",
    headline: "Engineered for Sub-Second Speed, Distinctive Aesthetics & High Conversion.",
    subheadline:
      "We build modern, accessible web applications and high-converting marketing sites utilizing Next.js App Router, Tailwind CSS, and strict TypeScript.",
    primaryCtaText: "Request Website Architecture Review",
    primaryCtaHref: "/contact?service=Web%20Design%20%26%20Development",
    whyChooseHeadline: "Why Build With Our Engineering Team?",
    whyChooseSubtitle: "Modern Software Standards Instead of Bloated Page Builders",
    whyChooseItems: [
      {
        title: "Sub-Second Core Web Vitals",
        description: "Zero slow WordPress plugins. Hand-crafted Next.js code guaranteeing 95+ Google Lighthouse scores.",
        highlight: "95+ Lighthouse Scores",
      },
      {
        title: "Conversion-Focused Architecture",
        description: "Every button, micro-interaction, and layout hierarchy is designed to guide visitors into paying leads.",
        highlight: "High-Converting UX",
      },
      {
        title: "Accessible & Responsive",
        description: "WCAG 2.2 AA compliant, smooth on mobile swipes, with zero layout shift (CLS ≤ 0.05).",
        highlight: "WCAG 2.2 AA Ready",
      },
    ],
    pricingTiers: [
      {
        name: "High-Impact Landing Page",
        price: "$2,200",
        period: "one-time",
        description: "Ideal for product launches, PPC campaign destinations, and focused service offerings.",
        features: [
          "Single-Page Next.js Architecture",
          "Custom Framer Motion Micro-Interactions",
          "Mobile-First Touch & Responsive Layout",
          "CRM & Form Webhook Integration",
          "Core Web Vitals Optimization",
        ],
        highlighted: false,
        ctaText: "Build Landing Page",
      },
      {
        name: "Full Corporate Platform",
        badge: "Most Popular",
        price: "$4,800",
        period: "one-time",
        description: "Complete modern agency or corporate website with CMS and dynamic service architecture.",
        features: [
          "Up to 8 Custom Responsive Pages",
          "Dynamic Service Hub & Spokes Architecture",
          "Full SEO Metadata, Sitemap & Schema Markup",
          "High-Velocity Contact & Inquiry Pipelines",
          "Sub-Second Page Load Guarantee",
          "30-Day Post-Launch Warranty & Support",
        ],
        highlighted: true,
        ctaText: "Build Corporate Site",
      },
      {
        name: "Custom Web Application",
        price: "Custom",
        period: "Project Milestone",
        description: "Complex SaaS dashboards, client portals, and bespoke API database backends.",
        features: [
          "Next.js App Router + PostgreSQL / Supabase",
          "Role-Based Authentication & Permissions",
          "Custom API Integrations & Webhooks",
          "End-to-End Automated Testing",
        ],
        highlighted: false,
        ctaText: "Discuss Custom Scope",
      },
    ],
    statistics: [
      { value: "100+", label: "Websites Shipped", sublabel: "Next.js & high-performance stacks" },
      { value: "0.8s", label: "Average LCP", sublabel: "Sub-second global load times" },
      { value: "98/100", label: "Average Performance Score", sublabel: "Google PageSpeed Insights" },
      { value: "100%", label: "Mobile Responsive", sublabel: "Zero horizontal overflow bugs" },
    ],
    targetIndustries: [
      { name: "B2B SaaS & Tech Startups", description: "Clean modern software marketing platforms" },
      { name: "Commercial & Field Services", description: "Lead-generating local contractor hubs" },
      { name: "Financial & Corporate Firms", description: "High-trust institutional credibility" },
      { name: "Creative Agencies & Studios", description: "Aesthetic, award-winning visual experiences" },
    ],
    guarantee: {
      headline: "100% Code Quality & Bug-Free Warranty",
      description: "We guarantee clean TypeScript builds, zero dead code, and 30 days of free bug-fixing post-deployment.",
      points: [
        "Google Lighthouse performance score guaranteed 90+ on desktop.",
        "Full source code ownership with zero vendor lock-in.",
      ],
    },
    testimonials: [
      {
        quote: "The site built by RHEK Global loads instantly and doubled our inbound inquiry rate from Google Ads.",
        author: "Julian Reynolds",
        role: "Founder",
        company: "Apex Commercial Partners",
      },
    ],
  },

  "graphic-design": {
    slug: "graphic-design",
    number: "05",
    title: "Graphic Design",
    metaTitle: "Commercial Graphic Design & Brand Identity Systems | RHEK GLOBAL",
    metaDescription:
      "Distinctive brand identity systems, corporate pitch decks, sales collateral, and digital marketing graphics that command authority.",
    badge: "Brand Identity & Visual Collateral",
    headline: "Distinctive Visual Identities & High-Converting Marketing Collateral.",
    subheadline:
      "Elevate your company's perceived value with corporate identity systems, investor decks, and ad creative crafted by senior designers.",
    primaryCtaText: "Start Design Project",
    primaryCtaHref: "/contact?service=Graphic%20Design",
    whyChooseHeadline: "Why Elevate Your Brand With Us?",
    whyChooseSubtitle: "Brand Polish That Commands Premium Pricing",
    whyChooseItems: [
      {
        title: "Commercial-Grade Brand Identity",
        description: "Complete design systems with color tokens, typography scales, logo suites, and style guides.",
        highlight: "Full Identity Systems",
      },
      {
        title: "High-Converting Pitch Decks",
        description: "Transform dry presentations into compelling investor and sales decks that close deals.",
        highlight: "Sales Decks That Close",
      },
      {
        title: "Rapid Turnaround Times",
        description: "Iterate fast with dedicated senior designers and clean source files delivered in Figma and Adobe Suite.",
        highlight: "48-Hour Iterations",
      },
    ],
    pricingTiers: [
      {
        name: "Brand Essentials",
        price: "$1,400",
        period: "one-time",
        description: "Complete brand identity refresh for ambitious companies.",
        features: [
          "Primary, Secondary & Monogram Logos",
          "Typography Scale & Color Palette System",
          "Comprehensive Brand Guidelines PDF",
          "Social Media Kit & Business Card Layouts",
        ],
        highlighted: false,
        ctaText: "Get Brand Essentials",
      },
      {
        name: "Full Commercial Suite",
        badge: "Recommended",
        price: "$2,800",
        period: "one-time",
        description: "Everything needed to market a professional business with authority.",
        features: [
          "Full Brand Identity System",
          "15-Slide Investor or Sales Pitch Deck",
          "10 Custom Social Media Ad Templates",
          "Print Collateral (Brochures, Folders, One-Pagers)",
          "All Figma & Vector Source Assets",
        ],
        highlighted: true,
        ctaText: "Build Full Suite",
      },
      {
        name: "Monthly Design Retainer",
        price: "$2,200",
        period: "per month",
        description: "On-demand senior graphic design extension for your ongoing marketing needs.",
        features: [
          "Dedicated Senior Graphic Designer",
          "Unlimited Design Requests & Revisions",
          "48-Hour Turnaround On Standard Requests",
          "Ad Creatives, Decks, Web Assets & Collateral",
        ],
        highlighted: false,
        ctaText: "Start Monthly Retainer",
      },
    ],
    statistics: [
      { value: "400+", label: "Brand Assets Designed", sublabel: "Logos, decks, guidelines, packaging" },
      { value: "98%", label: "First-Draft Approval", sublabel: "Precise requirement discovery" },
      { value: "48h", label: "Average Turnaround", sublabel: "Fast creative execution" },
      { value: "100%", label: "Vector Source Ownership", sublabel: "Figma, Illustrator, SVG files" },
    ],
    targetIndustries: [
      { name: "Corporate & Enterprise", description: "Institutional trust & executive presentations" },
      { name: "Real Estate & Architecture", description: "Luxury brochures, signage, pitch decks" },
      { name: "Consumer Brands & Retail", description: "Packaging, digital social ads, store collateral" },
      { name: "B2B Professional Services", description: "One-pagers, proposals, white papers" },
    ],
    guarantee: {
      headline: "100% Satisfaction & Revision Guarantee",
      description: "We work through unlimited revisions until your team is genuinely thrilled with the final creative direction.",
      points: [
        "Full vector source files and copyright transfer upon project completion.",
        "Zero hidden licensing or font royalty fees.",
      ],
    },
    testimonials: [
      {
        quote: "Our new sales deck and brand identity from RHEK Global directly contributed to closing a $140,000 enterprise contract.",
        author: "Anthony Miller",
        role: "Managing Partner",
        company: "Stratos Group",
      },
    ],
  },

  "video-production": {
    slug: "video-production",
    number: "06",
    title: "Video Editing & Production",
    metaTitle: "Commercial Video Production & High-Impact Ad Editing | RHEK GLOBAL",
    metaDescription:
      "Transform raw footage into high-converting social ads, B2B Video Sales Letters (VSLs), and engaging short-form reels.",
    badge: "Commercial Ads • Short-Form Reels • VSLs",
    headline: "Commercial Video Editing Built for High Retention & Conversions.",
    subheadline:
      "Transform raw footage into punchy social ads, high-converting Video Sales Letters (VSLs), and engaging brand media that hook attention in the first 3 seconds.",
    primaryCtaText: "Book Video Consultation",
    primaryCtaHref: "/contact?service=Video%20Editing%20%26%20Production",
    whyChooseHeadline: "Why Elevate Your Video Content With Us?",
    whyChooseSubtitle: "Pacing, Motion Graphics, and Storytelling That Retain Viewers",
    whyChooseItems: [
      {
        title: "3-Second Hook Architecture",
        description: "We study viewer drop-off analytics to craft hooks that capture attention before users scroll away.",
        highlight: "High Viewer Retention",
      },
      {
        title: "Dynamic Motion & Typography",
        description: "Engaging kinetic typography, sound design, sound effects, and color grading that look cinematic.",
        highlight: "Cinematic Polish",
      },
      {
        title: "Multi-Platform Formats",
        description: "Every asset delivered in 9:16 (Reels/TikTok), 16:9 (YouTube/Desktop), and 1:1 (Feed) aspect ratios.",
        highlight: "Multi-Platform Ready",
      },
    ],
    pricingTiers: [
      {
        name: "Short-Form Growth Pack",
        price: "$1,600",
        period: "8 Short-Form Videos",
        description: "High-paced reels and TikToks for founders and brands posting 2x/week.",
        features: [
          "8 Edited Short-Form Videos (Up to 60s)",
          "Dynamic Captions & Motion Graphics",
          "Sound Design & Color Grading",
          "Fast 72-Hour Turnaround Time",
        ],
        highlighted: false,
        ctaText: "Get Short-Form Pack",
      },
      {
        name: "Commercial Ad Suite",
        badge: "Most Popular",
        price: "$2,900",
        period: "15 Commercial Creatives",
        description: "Full suite of paid social ad creatives and Video Sales Letters (VSLs) tested for maximum ROAS.",
        features: [
          "15 High-Converting Video Ads & Hooks",
          "1 Full-Length B2B VSL (Up to 5 minutes)",
          "3 Hook Variations Per Video For Split-Testing",
          "Custom Sound Design & Kinetic Typography",
          "All Formats: 9:16, 16:9, and 1:1",
        ],
        highlighted: true,
        ctaText: "Order Ad Suite",
      },
      {
        name: "Monthly Media Partner",
        price: "$3,800",
        period: "per month",
        description: "Your dedicated video production and motion graphics department on monthly retainer.",
        features: [
          "Up to 24 Edited Videos / Month",
          "Dedicated Senior Motion Designer",
          "B2B Explainers, Commercials & Socials",
          "Dedicated Cloud Drive & Asset Library",
        ],
        highlighted: false,
        ctaText: "Partner on Retainer",
      },
    ],
    statistics: [
      { value: "1,800+", label: "Videos Produced", sublabel: "Short-form, VSLs, commercial ads" },
      { value: "85%", label: "Average 3s Retention", sublabel: "High hook capture rate" },
      { value: "72h", label: "Standard Turnaround", sublabel: "Fast delivery pipeline" },
      { value: "4K", label: "Export Quality", sublabel: "Master color-graded files" },
    ],
    targetIndustries: [
      { name: "Direct-to-Consumer (D2C)", description: "High-energy product demo ads and unboxings" },
      { name: "B2B SaaS & Tech", description: "Clear software explainers and executive VSLs" },
      { name: "Commercial Contractors", description: "Before-and-after walkthroughs and credibility videos" },
      { name: "Coaches & Personal Brands", description: "Authority reels and thought-leadership content" },
    ],
    guarantee: {
      headline: "Quality & Revision Commitment",
      description: "We include 2 full revision rounds per video to guarantee pacing, music sync, and styling align with your brand.",
      points: [
        "Delivered with commercial music licenses included.",
        "Zero watermarks or licensing restrictions.",
      ],
    },
    testimonials: [
      {
        quote: "The video ads RHEK Global produced for our campaign drove a 3.4x return on ad spend on Meta.",
        author: "Cole Harrison",
        role: "Growth Director",
        company: "Volt Performance",
      },
    ],
  },

  "email-marketing": {
    slug: "email-marketing",
    number: "07",
    title: "Email Marketing",
    metaTitle: "B2B Cold Email & Lifecycle Email Marketing | RHEK GLOBAL",
    metaDescription:
      "Targeted cold outbound email cadences and retention newsletter funnels that convert subscribers into recurring revenue.",
    badge: "Cold Outbound & Lifecycle Automation",
    headline: "Targeted Outbound Email Cadences & Lifecycle Funnels That Deliver Revenue.",
    subheadline:
      "From technical domain setup and deliverability warming to high-conversion copy and CRM automation, we make email your most predictable acquisition channel.",
    primaryCtaText: "Review Your Email Infrastructure",
    primaryCtaHref: "/contact?service=Email%20Marketing",
    whyChooseHeadline: "Why Build Email Infrastructure With Us?",
    whyChooseSubtitle: "Technical Deliverability Engineered To Hit The Primary Inbox",
    whyChooseItems: [
      {
        title: "Technical Deliverability Architecture",
        description: "Secondary domain purchasing, SPF, DKIM, DMARC configuration, and automated warm-up protocols to avoid spam folders.",
        highlight: "99% Inbox Delivery",
      },
      {
        title: "High-Converting Conversion Copy",
        description: "Bespoke short-form copy with psychological hooks, personalized variables, and zero generic buzzwords.",
        highlight: "Personalized Copy",
      },
      {
        title: "Automated Lifecycle Sequences",
        description: "Welcome flows, abandoned cart triggers, nurture cadences, and re-engagement campaigns that drive recurring revenue.",
        highlight: "Automated Workflows",
      },
    ],
    pricingTiers: [
      {
        name: "Outbound Setup & Launch",
        price: "$1,800",
        period: "one-time setup",
        description: "Complete technical infrastructure setup for safe, high-volume B2B cold email.",
        features: [
          "5 Secondary Domains Configured",
          "SPF, DKIM, DMARC & Custom Tracking Domains",
          "Automated 21-Day Mailbox Warming",
          "2 Complete 4-Step Email Sequence Playbooks",
          "Lead List Scrubbing & Verification (1,000 Leads)",
        ],
        highlighted: false,
        ctaText: "Deploy Outbound Setup",
      },
      {
        name: "Managed Outbound Engine",
        badge: "Recommended",
        price: "$2,800",
        period: "per month",
        description: "Fully managed cold email engine targeting verified B2B decision-makers.",
        features: [
          "10 Managed Sending Mailboxes",
          "2,500 Verified Decision-Maker Leads Enriched / Mo",
          "Continuous A/B Copy Testing (Subject lines & CTAs)",
          "Positive Reply Handling & Calendar Booking",
          "Guaranteed 20+ Sales Conversations / Mo",
        ],
        highlighted: true,
        ctaText: "Launch Managed Outbound",
      },
      {
        name: "E-Commerce Lifecycle Retention",
        price: "$2,400",
        period: "per month",
        description: "Klaviyo retention marketing driving 25%–35% of total store revenue through email & SMS.",
        features: [
          "Full Klaviyo / Mailchimp Automation Setup",
          "8 Custom Designed Email Campaigns / Month",
          "Dynamic Segmentation & VIP Flow Architecture",
          "Revenue & Attribution Reporting",
        ],
        highlighted: false,
        ctaText: "Scale Store Revenue",
      },
    ],
    statistics: [
      { value: "68%", label: "Average Open Rate", sublabel: "On technical cold email cadences" },
      { value: "14%", label: "Average Reply Rate", sublabel: "Targeted personalized outreach" },
      { value: "99.2%", label: "Inbox Deliverability", sublabel: "Zero spam domain burning" },
      { value: "3.2M+", label: "Emails Delivered", sublabel: "Clean verified recipient lists" },
    ],
    targetIndustries: [
      { name: "B2B Professional Services", description: "Accountants, lawyers, management consultants" },
      { name: "Commercial Facility Vendors", description: "Cleaning, HVAC, security, maintenance providers" },
      { name: "Software & Technology", description: "SaaS founders, VP of Engineering, procurement" },
      { name: "E-Commerce Brands", description: "Direct-to-consumer automated retention funnels" },
    ],
    guarantee: {
      headline: "Zero Domain Blacklisting Guarantee",
      description: "We strictly adhere to sending limits and bounce thresholds to keep your primary domain 100% protected.",
      points: [
        "All emails sent from dedicated secondary domains.",
        "Scrubbed email lists with < 2% bounce rate commitment.",
      ],
    },
    testimonials: [
      {
        quote: "Our outbound email response rate went from 1.5% to 16% after RHEK Global rebuilt our domain infrastructure and sequences.",
        author: "Nate Kowalski",
        role: "Co-Founder",
        company: "Ascend Logistics",
      },
    ],
  },

  "virtual-assistant": {
    slug: "virtual-assistant",
    number: "08",
    title: "Virtual Assistant & Administrative Support",
    metaTitle: "Dedicated Virtual Assistant & Back-Office Support | RHEK GLOBAL",
    metaDescription:
      "Scale operations and eliminate executive bottlenecks with dedicated virtual assistants handling CRM, calendar scheduling, data entry, and research.",
    badge: "Vetted Executive Talent • Seamless Support",
    headline: "Eliminate Operational Bottlenecks with Dedicated Virtual Assistants.",
    subheadline:
      "Free your leadership team from repetitive administrative tasks. We provide vetted, English-proficient virtual assistants trained in modern CRM, scheduling, and back-office tools.",
    primaryCtaText: "Hire A Dedicated Assistant",
    primaryCtaHref: "/contact?service=Virtual%20Assistant",
    whyChooseHeadline: "Why Choose Our Virtual Assistants?",
    whyChooseSubtitle: "Vetted, English-Fluent Professionals Ready From Day One",
    whyChooseItems: [
      {
        title: "Top 3% Vetted Talent",
        description: "Rigorous vetting for communication fluency, technical aptitude, attention to detail, and reliability.",
        highlight: "Top 3% Talent",
      },
      {
        title: "Zero Overhead Or Payroll Hassles",
        description: "We handle taxes, compliance, employee benefits, and hardware so you get seamless productivity.",
        highlight: "Zero HR Overhead",
      },
      {
        title: "Trained in Modern Tools",
        description: "Proficient in HubSpot, Close, Salesforce, Slack, Notion, Asana, Google Workspace, and Microsoft 365.",
        highlight: "Tool-Ready Specialists",
      },
    ],
    pricingTiers: [
      {
        name: "Part-Time Support",
        price: "$850",
        period: "per month (20 hrs / week)",
        description: "Perfect for busy solopreneurs and executives needing inbox and calendar freedom.",
        features: [
          "20 Hours / Week Dedicated Support",
          "Executive Calendar & Inbox Management",
          "Customer Support & Inquiries",
          "Data Entry & Spreadsheet Hygiene",
          "Daily Work Logs & Time Tracking",
        ],
        highlighted: false,
        ctaText: "Hire Part-Time Assistant",
      },
      {
        name: "Full-Time Dedicated Assistant",
        badge: "Most Popular",
        price: "$1,550",
        period: "per month (40 hrs / week)",
        description: "Your full-time right hand handling operations, customer coordination, and research.",
        features: [
          "40 Hours / Week 100% Dedicated Assistant",
          "Direct Slack & Zoom Collaboration",
          "CRM Pipeline Management & Lead Enrichment",
          "Vendor Coordination & Invoicing Support",
          "Free Replacement Guarantee If Not 100% Satisfied",
          "Dedicated Account Supervisor",
        ],
        highlighted: true,
        ctaText: "Hire Full-Time Assistant",
      },
      {
        name: "Operations Pod (2+ VAs)",
        price: "Custom",
        period: "per month",
        description: "Scalable back-office team managing customer support, dispatch, or data auditing.",
        features: [
          "Multiple Dedicated Virtual Assistants",
          "Shift Coverage Across US & European Timezones",
          "Custom Standard Operating Procedure (SOP) Development",
          "Weekly Performance Audits & KPI Reporting",
        ],
        highlighted: false,
        ctaText: "Request Operations Scope",
      },
    ],
    statistics: [
      { value: "100%", label: "English Fluent", sublabel: "C1/C2 certified business communication" },
      { value: "20+ hrs", label: "Time Saved Per Week", sublabel: "Direct executive hours freed up" },
      { value: "99.4%", label: "Task Accuracy", sublabel: "Strict standard operating procedures" },
      { value: "0", label: "HR Or Payroll Hassles", sublabel: "All management handled by RHEK" },
    ],
    targetIndustries: [
      { name: "Commercial Cleaning & Contractors", description: "Dispatch, quotation prep, calendar walkthrough booking" },
      { name: "Real Estate Brokers & Investors", description: "Lead tracking, MLS data entry, document compliance" },
      { name: "E-Commerce & Digital Stores", description: "Customer email support, order tracking, returns processing" },
      { name: "Executive Leaders & Founders", description: "Calendar management, flight booking, research briefings" },
    ],
    guarantee: {
      headline: "100% Talent Match Guarantee",
      description: "If your assistant is not an ideal fit within the first 14 days, we will replace them immediately at zero additional cost.",
      points: [
        "14-day trial period with replacement guarantee.",
        "Strict Non-Disclosure Agreements (NDAs) protecting your company data.",
      ],
    },
    testimonials: [
      {
        quote: "Hiring our full-time virtual assistant through RHEK Global gave me back 25 hours every week to focus on closing new commercial accounts.",
        author: "Brian O'Connor",
        role: "CEO",
        company: "Metro Commercial Group",
      },
    ],
  },
};
