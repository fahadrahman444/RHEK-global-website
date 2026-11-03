export interface ServiceMetric {
  value: string;
  label: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  headline: string;
  subheadline: string;
  badge?: string;
  ctaLabel: string;
  metrics: ServiceMetric[];
  features: string[];
  category: "leads" | "sales" | "marketing" | "engineering" | "creative" | "operations";
}

export interface LeadSample {
  id: string;
  companyType: string;
  facility: string;
  location: string;
  sqft: string;
  schedule: string;
  decisionMaker: string;
  verified: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface WorkingPrinciple {
  title: string;
  description: string;
}

export interface IndustryItem {
  name: string;
  description: string;
  iconName: string;
}

export interface GuaranteeCommitment {
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export const RHEK_CONFIG = {
  company: {
    name: "RHEK GLOBAL",
    legalName: "RHEK GLOBAL Ltd.",
    headline: "Empowering businesses through intelligent digital, operational and outsourcing solutions.",
    subheadline:
      "From high-conversion janitorial lead generation and sales appointment setting to premium 3D web development and global back-office outsourcing.",
    meetingUrl: "/contact", // Directs all consultation and booking CTAs to RHEK internal inquiry
    contactEmail: "contact@rhekglobal.com",
    tagline: "Your Trust, Our Commitment, Your Satisfaction.",
  },

  navigation: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/team", label: "Team" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],

  stats: [
    { value: "100%", label: "Exclusive B2B Leads", sublabel: "Zero shared prospects" },
    { value: "10+", label: "Industries Served", sublabel: "Tailored market strategies" },
    { value: "7-Step", label: "Verified QA Delivery", sublabel: "Structured execution process" },
    { value: "100%", label: "Money-Back Guarantee", sublabel: "Zero-risk client protection" },
  ] as StatItem[],

  services: [
    {
      id: "janitorial-leads",
      number: "01",
      title: "Janitorial Lead Generation",
      badge: "Performance Driven",
      shortDesc: "High-value commercial cleaning appointments with verified facility decision-makers. Pay nothing upfront options available.",
      headline: "Exclusive Commercial Janitorial Leads with Confirmed Facility Appointments.",
      subheadline: "Connect directly with confirmed property and facility managers in your local territory. 100% verified walkthroughs with zero upfront risk options.",
      ctaLabel: "Claim Your Territory & Leads",
      metrics: [
        { value: "100%", label: "Exclusive Leads" },
        { value: "0 Upfront", label: "Risk-Free Option" },
        { value: "Confirmed", label: "Facility Walkthroughs" },
      ],
      features: [
        "100% Exclusive & Qualified Leads",
        "Professional B2B Cold Calling",
        "Verified Business Contact Information",
        "Appointments with Real Decision-Makers",
        "Confirmed Appointment Date & Time",
        "Specific Cleaning Needs & Facility Requirements",
      ],
      category: "leads",
    },
    {
      id: "sales-development",
      number: "02",
      title: "Sales Development & Appointment Setting",
      shortDesc: "Turn cold prospects into booked calendar meetings with dedicated SDR outreach and multi-touch cadences.",
      headline: "Scale Your Outbound Sales Pipeline with Dedicated B2B SDR Cadences.",
      subheadline: "Convert cold enterprise prospects into qualified, decision-maker sales meetings through multi-touch calling, cold email, and LinkedIn cadences.",
      ctaLabel: "Book Qualified Sales Meetings",
      metrics: [
        { value: "Dedicated", label: "Full-Time SDRs" },
        { value: "Multi-Touch", label: "Omnichannel Cadence" },
        { value: "Calendar Ready", label: "Pre-Qualified Handover" },
      ],
      features: [
        "B2B & B2C Cold Calling",
        "Outbound Sales Development (SDRs)",
        "Inbound Call Handling & Triage",
        "Qualified Appointment Setting",
        "Lead Qualification & Multi-Channel Follow-ups",
        "Telemarketing Campaign Management",
      ],
      category: "sales",
    },
    {
      id: "social-media-ads",
      number: "03",
      title: "Social Media Advertising",
      shortDesc: "Targeted, data-backed paid acquisition campaigns across Meta and LinkedIn designed for ROAS and brand scale.",
      headline: "High-ROAS Paid Acquisition Campaigns Built for Predictable Revenue Scale.",
      subheadline: "Data-backed paid social campaigns across Meta and LinkedIn with continuous creative testing, custom audience segmentation, and CAC optimization.",
      ctaLabel: "Launch Paid Ad Campaign",
      metrics: [
        { value: "Data-Driven", label: "Paid Creative Testing" },
        { value: "Meta + B2B", label: "Multi-Platform Scale" },
        { value: "ROAS Focused", label: "Continuous Optimization" },
      ],
      features: [
        "Facebook & Instagram Ads",
        "LinkedIn B2B Advertising",
        "Social Media Campaign Management",
        "Custom Audience Targeting & Retargeting",
        "Paid Performance Creative Testing",
        "Ad Performance & CAC Optimization",
      ],
      category: "marketing",
    },
    {
      id: "web-development",
      number: "04",
      title: "Web Design & Development",
      badge: "Core Engineering",
      shortDesc: "Premium 3D web designs, modern responsive UI/UX, and robust full-stack web applications engineered for speed.",
      headline: "Custom 3D Web Design, Modern UI/UX & High-Performance Next.js Engineering.",
      subheadline: "From bespoke 3D interactive experiences and high-conversion corporate websites to robust full-stack web applications engineered for speed, SEO, and scale.",
      ctaLabel: "Build Your Custom 3D Website",
      metrics: [
        { value: "< 1s", label: "Core Web Vitals" },
        { value: "100%", label: "Source Code Ownership" },
        { value: "Modern Stack", label: "Next.js, 3D & Tailwind" },
      ],
      features: [
        "Premium 3D Website Design & Development",
        "Custom Corporate & Business Web Design",
        "Modern UI/UX Design & Interactive Experiences",
        "E-commerce & Shopify Store Development",
        "WordPress & Custom Next.js Web Applications",
        "Responsive Architecture, SEO & Performance",
      ],
      category: "engineering",
    },
    {
      id: "graphic-design",
      number: "05",
      title: "Graphic Design & Brand Identity",
      shortDesc: "Distinct visual systems, marketing collateral, pitch decks, and digital assets that command market authority.",
      headline: "Distinct Brand Identity Systems, Marketing Collateral & Pitch Decks.",
      subheadline: "Craft an authoritative visual identity with bespoke logos, comprehensive brand design systems, digital advertising assets, and high-stakes pitch presentations.",
      ctaLabel: "Elevate Your Brand Identity",
      metrics: [
        { value: "Vector Ready", label: "Comprehensive Formats" },
        { value: "Full System", label: "Logo & Brand Guidelines" },
        { value: "Rapid Delivery", label: "Iterative Design Sprints" },
      ],
      features: [
        "Logo & Brand Identity Systems",
        "Social Media Post & Carousel Design",
        "Marketing & Advertising Creatives",
        "Brochure, Flyer & Whitepaper Design",
        "Investor Presentation & Pitch Deck Design",
        "Digital Banner & Promotional Design",
      ],
      category: "creative",
    },
    {
      id: "video-production",
      number: "06",
      title: "Video Editing & Production",
      shortDesc: "High-retention video assets for social campaigns, commercial reels, corporate stories, and YouTube production.",
      headline: "High-Retention Video Production, Commercial Reels & YouTube Editing.",
      subheadline: "Engaging short-form Reels, TikToks, long-form YouTube content, and high-converting commercial video ads that captivate attention and drive action.",
      ctaLabel: "Produce High-Impact Videos",
      metrics: [
        { value: "4K / HD", label: "Mastered Audio & Color" },
        { value: "Retention First", label: "Motion & Dynamic Pacing" },
        { value: "Omni-Format", label: "Shorts, Reels & YouTube" },
      ],
      features: [
        "Corporate & Promotional Video Editing",
        "Social Media Video Editing (Reels & Shorts)",
        "Long-Form YouTube Video Production",
        "Motion Graphics & Title Animations",
        "High-Converting Video Ads & Commercials",
        "Color Grading & Audio Mastering",
      ],
      category: "creative",
    },
    {
      id: "email-marketing",
      number: "07",
      title: "Email Marketing & Outreach",
      shortDesc: "Automated nurture sequences, newsletter funnels, and high-deliverability cold email infrastructure.",
      headline: "Automated Lifecycle Flows, Deliverability Infrastructure & B2B Cold Outreach.",
      subheadline: "Turn cold prospects into buyers and existing customers into repeat revenue with optimized cold infrastructure, custom newsletter designs, and automated sequences.",
      ctaLabel: "Automate Email Sequences",
      metrics: [
        { value: "99%+", label: "Deliverability Standards" },
        { value: "Automated", label: "Lifecycle & Nurture Flows" },
        { value: "B2B Outreach", label: "Scrubbed Target Lists" },
      ],
      features: [
        "Email Campaign Management & Optimization",
        "B2B Cold Email Outreach & Deliverability",
        "Automated Lifecycle & Nurture Sequences",
        "Email List Building, Scrubbing & Segmentation",
        "Custom HTML Newsletter Design",
        "A/B Testing & Revenue Tracking",
      ],
      category: "marketing",
    },
    {
      id: "virtual-assistant",
      number: "08",
      title: "Virtual Assistant & Admin Support",
      shortDesc: "Dedicated operational support to handle calendar scheduling, CRM maintenance, data research, and back-office ops.",
      headline: "Dedicated Executive Administrative Support & Back-Office Operations.",
      subheadline: "Free your leadership team from operational bottlenecks with dedicated virtual assistants handling calendar scheduling, CRM maintenance, research, and data auditing.",
      ctaLabel: "Hire Dedicated Admin Support",
      metrics: [
        { value: "Pre-Vetted", label: "Dedicated Talent" },
        { value: "Full Coverage", label: "US & European Timezones" },
        { value: "Turnkey", label: "Immediate Onboarding" },
      ],
      features: [
        "Executive & C-Suite Administrative Support",
        "Email Inbox & Calendar Scheduling",
        "CRM Data Entry & Pipeline Hygiene",
        "Market Research & Competitor Analysis",
        "Data Entry, Auditing & Documentation",
        "E-commerce Order & Store Administration",
      ],
      category: "operations",
    },
  ] as ServiceItem[],

  // Sample verified leads strictly following: "Verification score 94/100 nh diye just Verified likhley hobe"
  leadSamples: [
    {
      id: "lead-01",
      companyType: "Medical & Healthcare Center",
      facility: "Multi-Specialty Surgical Center (3 Floors)",
      location: "Dallas, TX",
      sqft: "32,500 sq ft",
      schedule: "7 Days / Week (Night Shift)",
      decisionMaker: "Director of Facilities & Operations",
      verified: true,
    },
    {
      id: "lead-02",
      companyType: "Corporate Tech Campus",
      facility: "Regional Software Headquarters",
      location: "Atlanta, GA",
      sqft: "48,000 sq ft",
      schedule: "5 Days / Week (Evening)",
      decisionMaker: "VP of Real Estate & Workplace",
      verified: true,
    },
    {
      id: "lead-03",
      companyType: "Commercial Real Estate Plaza",
      facility: "Class-A Office Complex & Atrium",
      location: "Phoenix, AZ",
      sqft: "65,000 sq ft",
      schedule: "Daily Day Porter + Night Janitorial",
      decisionMaker: "Senior Property Manager",
      verified: true,
    },
    {
      id: "lead-04",
      companyType: "Private Academy & Education Campus",
      facility: "Prep School Classrooms & Gymnasium",
      location: "Charlotte, NC",
      sqft: "28,000 sq ft",
      schedule: "5 Days / Week",
      decisionMaker: "Campus Operations Administrator",
      verified: true,
    },
  ] as LeadSample[],

  workProcess: {
    headline: "A Smarter Process. A Stronger Partnership. Better Business Outcomes.",
    subheadline:
      "At RHEK GLOBAL, we follow a structured and transparent work process to understand your business needs, develop effective strategies, and deliver professional solutions. From initial consultation to final delivery, every step is designed to ensure quality, efficiency, and a smooth client experience.",
    steps: [
      {
        step: "01",
        title: "Initial Consultation & Discovery",
        description:
          "We start by understanding your business, objectives, challenges, expectations, and specific service requirements.",
      },
      {
        step: "02",
        title: "Business Analysis & Requirement Planning",
        description:
          "Our team evaluates your requirements, identifies opportunities, and determines the most suitable approach for your project.",
      },
      {
        step: "03",
        title: "Strategy Development & Proposal",
        description:
          "We develop a customized strategy, define project scope, establish deliverables, and provide a clear proposal with agreed timelines.",
      },
      {
        step: "04",
        title: "Project Execution & Implementation",
        description:
          "Our professionals begin working on your project using appropriate tools, technologies, and strategies while maintaining quality standards.",
      },
      {
        step: "05",
        title: "Quality Assurance & Review",
        description:
          "We carefully review the work, check deliverables, and make sure everything aligns with agreed project requirements.",
      },
      {
        step: "06",
        title: "Delivery & Client Feedback",
        description:
          "We present the completed work, gather your feedback, and address agreed revisions or adjustments smoothly.",
      },
      {
        step: "07",
        title: "Ongoing Support & Business Growth",
        description:
          "Where included in the service agreement, we provide continued assistance, performance monitoring, and opportunities for improvement.",
      },
    ] as ProcessStep[],

    principles: [
      {
        title: "Clear Objectives",
        description: "Understanding your exact business goals before starting every project.",
      },
      {
        title: "Transparent Communication",
        description: "Keeping you proactively informed throughout every milestone.",
      },
      {
        title: "Quality Assurance",
        description: "Maintaining strict professional standards at every execution stage.",
      },
      {
        title: "Continuous Improvement",
        description: "Constantly discovering better ways to scale and support your operations.",
      },
    ] as WorkingPrinciple[],
  },

  industries: [
    {
      name: "Cleaning & Janitorial",
      description: "Exclusive B2B facility leads, appointment setting, and contract growth for commercial cleaners.",
      iconName: "Sparkles",
    },
    {
      name: "Real Estate & Property",
      description: "Listing acquisition, investor lead funnels, and corporate property marketing.",
      iconName: "Building2",
    },
    {
      name: "Healthcare & Medical",
      description: "HIPAA-conscious outreach, clinic patient acquisition, and medical facility solutions.",
      iconName: "Activity",
    },
    {
      name: "E-commerce & Retail",
      description: "Shopify design, paid performance Meta/Google ads, and store administration.",
      iconName: "ShoppingBag",
    },
    {
      name: "Technology & IT",
      description: "SaaS outbound SDR campaigns, 3D web applications, and developer marketing.",
      iconName: "Laptop",
    },
    {
      name: "Hospitality & Tourism",
      description: "Guest booking funnels, luxury brand creatives, and customer support operations.",
      iconName: "Compass",
    },
    {
      name: "Education & Training",
      description: "Student enrollment lead generation, institutional LMS portals, and course video production.",
      iconName: "GraduationCap",
    },
    {
      name: "Finance & Insurance",
      description: "Qualified financial decision-maker appointments and high-trust digital branding.",
      iconName: "ShieldCheck",
    },
    {
      name: "Logistics & Transportation",
      description: "Freight brokerage outreach, fleet operational support, and dispatch back-office assistance.",
      iconName: "Truck",
    },
    {
      name: "Startups & Small Businesses",
      description: "Full end-to-end digital launchpacks: branding, website, lead generation, and virtual admin.",
      iconName: "Rocket",
    },
  ] as IndustryItem[],

  moneyBackGuarantee: {
    headline: "100% Money-Back Guarantee",
    subtitle: "Your Investment Protected. Your Satisfaction Guaranteed.",
    description:
      "At RHEK GLOBAL, we believe in delivering value that meets your expectations. Our 100% Money-Back Guarantee reflects our commitment to service quality, transparency, and client satisfaction. We stand behind our work and take responsibility for delivering services according to mutually agreed project requirements and deliverables. If our services fail to meet the agreed expectations, we are committed to reviewing your concerns and finding a fair resolution, including a full refund where eligible under our Money-Back Guarantee policy.",
    commitments: [
      {
        title: "100% Money-Back Protection",
        description: "Eligible clients can request a full refund under our applicable guarantee terms.",
      },
      {
        title: "Quality Assurance",
        description: "Professional service delivery with a focus on excellence and agreed standards.",
      },
      {
        title: "Complete Transparency",
        description: "Clear agreements, expectations, and transparent deliverables from day one.",
      },
      {
        title: "Client-First Commitment",
        description: "Your operational growth and satisfaction always remain our highest priority.",
      },
      {
        title: "Reliable Dedicated Support",
        description: "Direct assistance to quickly resolve queries and optimize performance.",
      },
    ] as GuaranteeCommitment[],
  },

  whyChooseUs: [
    {
      title: "One Partner, Multiple Business Solutions",
      description: "Eliminate vendor fragmentation by uniting digital marketing, sales development, and outsourcing under one roof.",
    },
    {
      title: "Customized Business Strategies",
      description: "We don't do one-size-fits-all scripts. Every lead pipeline and web project is built around your market reality.",
    },
    {
      title: "Experienced Professional Team",
      description: "Skilled B2B SDRs, senior engineers, and creative producers dedicated to delivering tangible business value.",
    },
    {
      title: "Quality-Focused Service Delivery",
      description: "Rigorous QA protocols and verified decision-maker checks before any appointment or deliverable reaches your desk.",
    },
    {
      title: "Flexible & Scalable Solutions",
      description: "Easily ramp up appointment volume or scale administrative teams as your commercial contracts grow.",
    },
    {
      title: "Long-Term Business Partnerships",
      description: "Our client relationships are measured in years, built on transparent communication, accountability, and real ROI.",
    },
  ],

  companyProfile: {
    mission: {
      headline: "Empowering Businesses. Enabling Growth.",
      text: "Our mission is to provide innovative, reliable, and result-oriented business solutions that help organizations improve efficiency, expand their reach, and achieve their goals.",
    },
    vision: {
      headline: "Building a Smarter Future for Businesses Worldwide.",
      text: "Our vision is to become a globally recognized business solutions partner through innovation, professional excellence, and long-term client relationships.",
    },
    coreValues: [
      { name: "Integrity & Transparency", desc: "Building relationships through honesty, trust, and accountability." },
      { name: "Innovation & Creativity", desc: "Embracing modern ideas and technologies to deliver smarter solutions." },
      { name: "Quality & Excellence", desc: "Maintaining professional standards and consistent service quality." },
      { name: "Client-Centric Approach", desc: "Putting client requirements and business objectives first." },
      { name: "Continuous Growth", desc: "Improving our capabilities and creating long-term business value." },
    ],
  },
};
