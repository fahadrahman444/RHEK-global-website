export interface ServiceSubNavItem {
  id: string;
  label: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
  timeline?: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProblemSolution {
  problemTitle: string;
  problemPoints: string[];
  solutionTitle: string;
  solutionPoints: string[];
}

export interface ServiceExtensionData {
  subNavItems: ServiceSubNavItem[];
  processTitle: string;
  processSubtitle: string;
  offeringsTitle: string;
  problemSolution: ServiceProblemSolution;
  processSteps: ServiceProcessStep[];
  faqs: ServiceFaq[];
}

export const SERVICE_SLUG_ALIASES: Record<string, string> = {
  // New canonical slug -> Internal dataset slug
  "janitorial-lead-generation": "janitorial-leads",
  "social-media-advertising": "social-media-ads",
  "web-design-development": "web-development",
  // Standard slugs
  "sales-development": "sales-development",
  "graphic-design": "graphic-design",
  "video-production": "video-production",
  "email-marketing": "email-marketing",
  "virtual-assistant": "virtual-assistant",
  // Backward compatibility
  "janitorial-leads": "janitorial-leads",
  "social-media-ads": "social-media-ads",
  "web-development": "web-development",
};

export const SERVICE_EXTENSIONS: Record<string, ServiceExtensionData> = {
  "janitorial-leads": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Process" },
      { id: "benefits", label: "Benefits" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Janitorial Appointment Process",
    processSubtitle: "How we deliver confirmed facility walkthroughs directly into your calendar",
    offeringsTitle: "Commercial Facilities & Lead Types",
    problemSolution: {
      problemTitle: "The Problem With Shared Leads & Aggregators",
      problemPoints: [
        "Shared with 4–6 rival cleaning contractors fighting in a race-to-the-bottom price war.",
        "Outdated directory lists where office managers never pick up or have no cleaning budget.",
        "Contractors waste 20+ hours a week cold calling instead of inspecting facilities.",
      ],
      solutionTitle: "The Rate Global Exclusive Walkthrough System",
      solutionPoints: [
        "100% exclusive appointments with confirmed facility managers — never shared with rivals.",
        "Every appointment includes verified square footage, cleaning frequency, and current pain point.",
        "Pay for visited appointments with our hassle-free replacement and refund protection guarantee.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Territory & Metro Radius Locking",
        description:
          "We lock down your exclusive operating territory and zip codes. We never sell leads to another commercial cleaner in your locked radius.",
        timeline: "Day 1",
      },
      {
        step: "02",
        title: "Dedicated B2B Outbound Sprints",
        description:
          "Our trained SDRs conduct multi-touch outreach to Property Managers, Operations Directors, and Business Owners.",
        timeline: "Days 2–4",
      },
      {
        step: "03",
        title: "Walkthrough Vetting & Verification",
        description:
          "We confirm square footage, scope requirements (trash, restrooms, floors), and verify that the decision-maker will be on-site.",
        timeline: "Ongoing",
      },
      {
        step: "04",
        title: "Calendar Confirmation & Quote Delivery",
        description:
          "The appointment is booked directly on your calendar with phone verification, facility address, and decision-maker contact details.",
        timeline: "Weekly Cadence",
      },
    ],
    faqs: [
      {
        question: "Are these commercial cleaning leads shared with any other companies?",
        answer:
          "No. Every single appointment we schedule is 100% exclusive to your company in your territory. We never double-sell or broadcast leads to multiple contractors.",
      },
      {
        question: "What happens if a facility manager cancels or no-shows?",
        answer:
          "You are protected by our hassle-free replacement guarantee. If a prospect no-shows or cancels and cannot be rescheduled, we provide a replacement lead at zero additional cost.",
      },
      {
        question: "What types of facilities do you typically book?",
        answer:
          "We focus on commercial spaces ranging from 5,000 to 100,000+ sq ft, including medical clinics, corporate office buildings, industrial warehouses, daycare centers, and auto dealerships.",
      },
      {
        question: "How does the 'Pay For Visited Appointments' option work?",
        answer:
          "For qualified commercial cleaners on our performance tier, you only pay for appointments that you successfully attend and submit a written quote for.",
      },
    ],
  },

  "sales-development": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Process" },
      { id: "benefits", label: "Benefits" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Sales Development & SDR Process",
    processSubtitle: "Predictable outbound sales pipeline engineered for B2B tech and service companies",
    offeringsTitle: "SDR Capabilities & Target Verticals",
    problemSolution: {
      problemTitle: "Why In-House Outbound Often Fails",
      problemPoints: [
        "Hiring internal SDRs takes 3+ months with high turnover, expensive salaries, and recruiter fees.",
        "Burned email domains and poor deliverability lead to emails landing straight in spam folders.",
        "Reps spend 70% of their workday scraping bad contact lists instead of holding sales conversations.",
      ],
      solutionTitle: "The Plug-and-Play SDR Sales Pipeline",
      solutionPoints: [
        "Fully managed dedicated SDRs trained on your exact value proposition and tech stack.",
        "Enterprise-grade outbound tech stack (warm-up domains, validated cell phones, multichannel outreach).",
        "Predictable monthly cadence of qualified sales meetings placed directly on your AEs' calendars.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "ICP Architecture & List Building",
        description:
          "We build a high-precision account list targeting verified decision-makers using proprietary enrichment data.",
        timeline: "Week 1",
      },
      {
        step: "02",
        title: "Messaging Matrix & Pitch Engineering",
        description:
          "We author high-conversion cold email cadences, phone battlecards, and LinkedIn touchpoints tailored to your ICP.",
        timeline: "Week 1–2",
      },
      {
        step: "03",
        title: "Multichannel Outbound Execution",
        description:
          "Our dedicated SDRs execute daily calls, personalized emails, and social touches with automated deliverability monitoring.",
        timeline: "Weeks 2–4",
      },
      {
        step: "04",
        title: "Qualified Meetings & Pipeline Reviews",
        description:
          "Meetings are qualified against your criteria and booked with brief notes directly into your CRM and Google Calendar.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "What qualifies as an outbound sales meeting?",
        answer:
          "A meeting is counted as qualified only when the prospect meets your exact ICP criteria (title, revenue, industry) and confirms attendance for the scheduled video discovery call.",
      },
      {
        question: "Do we need to buy our own contact database?",
        answer:
          "No. All B2B contact lists, verified emails, and direct dial phone numbers are included within our monthly outbound retainer.",
      },
      {
        question: "How long does onboarding take before the first meetings happen?",
        answer:
          "Onboarding, technical setup, and copywriting take 7 to 10 days. Most clients see their first scheduled discovery calls during Week 2 or Week 3.",
      },
      {
        question: "Can our internal team approve scripts and emails first?",
        answer:
          "Yes. Nothing is sent or dialed until your team reviews and approves all messaging cadences and objection battlecards.",
      },
    ],
  },

  "social-media-ads": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "strategy", label: "Strategy" },
      { id: "platforms", label: "Platforms" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Paid Acquisition Strategy",
    processSubtitle: "High-ROI paid social funnels engineered for qualified inbound pipeline",
    offeringsTitle: "Supported Ad Platforms & Campaign Types",
    problemSolution: {
      problemTitle: "The Common Paid Social Trap",
      problemPoints: [
        "Burning thousands of dollars on broad targeting that generates junk leads and unqualified bot forms.",
        "Generic ad creatives that blend in with social feeds and fail to generate thumb-stopping curiosity.",
        "Lack of server-side conversion tracking leading to blind ad spend and zero ROI visibility.",
      ],
      solutionTitle: "Our Precision Paid Social Engine",
      solutionPoints: [
        "Hyper-targeted audience architecture focused on commercial buyers and high-intent decision-makers.",
        "Direct-response visual creative production with weekly split-testing across hooks, angles, and formats.",
        "Server-side Conversions API (CAPI) tracking linked directly to CRM revenue and closed pipeline.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Tracking & Conversion API Setup",
        description:
          "We implement Meta CAPI, LinkedIn Insight Tag, and GA4 tracking to ensure 100% data fidelity and attribution.",
        timeline: "Week 1",
      },
      {
        step: "02",
        title: "Creative Production & Copywriting",
        description:
          "Design and copywriting of high-converting video reels, motion ads, and static image cards tailored to your buyers.",
        timeline: "Week 1–2",
      },
      {
        step: "03",
        title: "Campaign Launch & Algorithmic Optimization",
        description:
          "Deploy campaigns with rigorous A/B testing of hooks, headlines, and landing page conversion funnels.",
        timeline: "Week 2",
      },
      {
        step: "04",
        title: "Bid Scaling & ROAS Maximization",
        description:
          "Scale winning creative angles while continuously pruning underperforming ad sets to lower cost per acquisition.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "Is ad spend included in the monthly management fee?",
        answer:
          "No. Ad spend is billed directly by Meta or LinkedIn to your credit card. This ensures you maintain 100% ownership and full transparency of your ad accounts.",
      },
      {
        question: "Which platforms work best for our business model?",
        answer:
          "For commercial cleaning and local services, Meta (Facebook & Instagram) delivers the lowest cost per qualified lead. For enterprise B2B SaaS, LinkedIn ads provide unmatched precision targeting.",
      },
      {
        question: "How quickly do we start seeing lead flow?",
        answer:
          "Once campaigns are launched and pass platform review, qualified inquiries typically begin arriving within 48 to 72 hours.",
      },
      {
        question: "Do you design the ad graphics and videos?",
        answer:
          "Yes. All ad creative production, copy variations, and landing page recommendations are included in our service.",
      },
    ],
  },

  "graphic-design": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Design Process" },
      { id: "portfolio", label: "Portfolio" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Creative Design Process",
    processSubtitle: "High-impact visual branding and marketing assets delivered on-demand",
    offeringsTitle: "Design Capabilities & Deliverables",
    problemSolution: {
      problemTitle: "The Trouble With Freelance Marketplaces",
      problemPoints: [
        "Endless delays, missed deadlines, and inconsistent visual quality across different freelancers.",
        "Amateur templates that dilute brand authority and fail to convert prospective commercial clients.",
        "Hidden fees for source files, vector assets, and commercial intellectual property licenses.",
      ],
      solutionTitle: "Your Dedicated Senior Design Partner",
      solutionPoints: [
        "Dedicated senior graphic designers delivering agency-grade craftsmanship within 24 to 48 hours.",
        "Bespoke visual identity tailored to enterprise standards with full vector and Figma source files included.",
        "Unlimited revisions until you are 100% satisfied with full commercial copyright ownership.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Creative Brief & Brand Discovery",
        description:
          "We analyze your brand values, target audience psychology, and existing visual identity guidelines.",
        timeline: "Day 1",
      },
      {
        step: "02",
        title: "Concept Wireframing & Exploration",
        description:
          "Our designers develop 2–3 distinct visual directions, layout wireframes, and typography hierarchies.",
        timeline: "Days 1–2",
      },
      {
        step: "03",
        title: "Precision Execution & Refining",
        description:
          "Pixel-perfect craftsmanship across sales decks, branding assets, social graphics, and marketing collateral.",
        timeline: "Days 2–3",
      },
      {
        step: "04",
        title: "Final Export & Source Handoff",
        description:
          "Delivery of fully organized Figma files, vector SVGs, high-res PNGs, and print-ready CMYK PDF assets.",
        timeline: "Handoff",
      },
    ],
    faqs: [
      {
        question: "What source files do we receive with completed designs?",
        answer:
          "You receive full access to Figma files, vector SVGs, editable Adobe Illustrator files (if applicable), and web-optimized PNG/WebP exports.",
      },
      {
        question: "Do we own full commercial copyright over the assets?",
        answer:
          "Yes. 100% intellectual property and commercial copyright transfer to your company upon final delivery.",
      },
      {
        question: "What is your typical turnaround time?",
        answer:
          "Standard design requests (social graphics, brochures, banner ads) are delivered within 24 to 48 hours. Comprehensive brand identity kits take 5 to 7 days.",
      },
      {
        question: "Can we request unlimited revisions?",
        answer:
          "Yes. All our design packages include iterative revision rounds until you are completely thrilled with the final result.",
      },
    ],
  },

  "video-production": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "process", label: "Production Process" },
      { id: "portfolio", label: "Portfolio" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Video Production Workflow",
    processSubtitle: "High-retention commercial video editing and motion graphics engineered for social feeds",
    offeringsTitle: "Video Formats & Production Styles",
    problemSolution: {
      problemTitle: "Why Most B2B Videos Fall Flat",
      problemPoints: [
        "Boring, static talking-head clips with poor pacing that lose 70% of viewers in the first 3 seconds.",
        "Muffled audio, amateur text captions, and uninspiring stock footage that looks low-budget.",
        "Long turnaround cycles that make consistent social video publishing impossible to maintain.",
      ],
      solutionTitle: "The High-Retention Video Factory",
      solutionPoints: [
        "Dynamic pacing, kinetic subtitles, sound effects, and licensed background music that hold attention.",
        "Multi-format delivery: 16:9 widescreen for websites and 9:16 vertical for TikTok, Shorts, and Reels.",
        "Rapid 48-hour turnarounds allowing you to scale your organic and paid video pipeline effortlessly.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Scripting, Hooks & Storyboard",
        description:
          "We structure the first 3-second hook, retention arc, and clear call-to-action for maximum engagement.",
        timeline: "Day 1",
      },
      {
        step: "02",
        title: "Pacing Cut & Audio Mastering",
        description:
          "Raw footage assembly, vocal noise cancellation, professional color grading, and custom sound design.",
        timeline: "Days 1–2",
      },
      {
        step: "03",
        title: "Motion Graphics & Kinetic Typography",
        description:
          "Adding animated captions, lower thirds, zoom transitions, and brand-aligned visual callouts.",
        timeline: "Days 2–3",
      },
      {
        step: "04",
        title: "Multi-Format Final Delivery",
        description:
          "Rendered in 4K ProRes and optimized MP4 across horizontal (16:9) and vertical (9:16) aspect ratios.",
        timeline: "Handoff",
      },
    ],
    faqs: [
      {
        question: "Can you edit raw smartphone footage?",
        answer:
          "Yes. Most of our clients record on iPhones or modern smartphones. Our post-production pipeline masters audio, grades color, and adds graphics to make mobile footage look cinematic.",
      },
      {
        question: "Are music tracks and sound effects commercially licensed?",
        answer:
          "Yes. Every track and sound effect is 100% commercially licensed for use across paid advertising, YouTube monetization, and social media without copyright strikes.",
      },
      {
        question: "What is your standard turnaround time per video?",
        answer:
          "Short-form reels and shorts are delivered within 24 to 48 hours. Long-form YouTube videos and corporate overviews take 3 to 5 business days.",
      },
      {
        question: "Do you provide voiceovers if needed?",
        answer:
          "Yes. We offer both studio-grade professional voiceover talent and ultra-realistic AI voiceovers in various accents and styles.",
      },
    ],
  },

  "email-marketing": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "strategy", label: "Strategy" },
      { id: "campaigns", label: "Campaigns" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Outbound Email Strategy",
    processSubtitle: "High-deliverability cold email infrastructure and high-converting newsletter funnels",
    offeringsTitle: "Email Capabilities & Campaign Formats",
    problemSolution: {
      problemTitle: "The Reality of Email Deliverability",
      problemPoints: [
        "Sending outbound emails from your primary business domain risks getting your main email blacklisted.",
        "Spam filter algorithms instantly flag emails containing heavy HTML, trackable click links, or generic copy.",
        "Unpersonalized mass blasts result in low open rates (under 15%) and zero meaningful sales conversations.",
      ],
      solutionTitle: "Our Zero-Spam Inbound Email Engine",
      solutionPoints: [
        "Dedicated secondary domains with full SPF, DKIM, DMARC, and automated warmup protection.",
        "Plain-text conversational copy crafted to look like a personal 1-to-1 note from an executive.",
        "Consistently achieving 45%+ open rates and 8%–15% response rates with positive reply routing.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Domain Setup & Warm-Up Sprints",
        description:
          "We configure secondary sending domains with DNS records (SPF, DKIM, DMARC) and initiate gradual warm-up.",
        timeline: "Weeks 1–2",
      },
      {
        step: "02",
        title: "ICP List Scraping & Verification",
        description:
          "Triple-verifying email addresses with MX verification and catch-all filtering to ensure a bounce rate under 1%.",
        timeline: "Week 2",
      },
      {
        step: "03",
        title: "Conversational Copy & Cadence Launch",
        description:
          "Authoring 3–4 step automated follow-up cadences with pain-point positioning and clear calls-to-action.",
        timeline: "Week 3",
      },
      {
        step: "04",
        title: "Inbox Triage & Lead Hand-off",
        description:
          "Monitoring inboxes daily and immediately routing positive inquiries directly to your calendar for booking.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "Will cold emailing affect my main website domain?",
        answer:
          "No. We set up isolated secondary domains that redirect to your main site. Your primary domain is 100% protected and never exposed to cold email volume.",
      },
      {
        question: "What open rates can we realistically expect?",
        answer:
          "Our average open rates across B2B campaigns range from 45% to 65%, with positive reply rates between 8% and 15%.",
      },
      {
        question: "Do you write all the email copywriting?",
        answer:
          "Yes. Our professional B2B copywriters author all subject lines, body copies, and follow-up sequences. Everything is approved by you prior to sending.",
      },
      {
        question: "Can you connect with our CRM?",
        answer:
          "Yes. We support direct webhooks and API integrations with HubSpot, Salesforce, Close, Pipedrive, and Slack for instant lead notification.",
      },
    ],
  },

  "virtual-assistant": {
    subNavItems: [
      { id: "overview", label: "Overview" },
      { id: "tasks", label: "Tasks" },
      { id: "workflow", label: "Workflow" },
      { id: "pricing", label: "Pricing" },
      { id: "faqs", label: "FAQs" },
    ],
    processTitle: "Our Virtual Assistant Workflow",
    processSubtitle: "Dedicated administrative talent and operational support for growing commercial businesses",
    offeringsTitle: "Core Delegated Tasks & Responsibilities",
    problemSolution: {
      problemTitle: "The Operational Overhead Bottleneck",
      problemPoints: [
        "Executives and sales leaders lose 15+ hours weekly on data entry, CRM updates, and scheduling.",
        "Hiring local administrative staff is expensive ($4,000+/mo) and requires extensive management oversight.",
        "Inconsistent client follow-ups lead to dropped leads and lost commercial contract renewals.",
      ],
      solutionTitle: "Dedicated Trained Remote Operations",
      solutionPoints: [
        "Vetted, fluent English-speaking administrative specialists trained on commercial B2B workflows.",
        "Seamless delegation of CRM data hygiene, appointment reminders, invoice follow-ups, and inbox triage.",
        "Save 60%+ in operational overhead with full account management supervision and zero lock-in contracts.",
      ],
    },
    processSteps: [
      {
        step: "01",
        title: "Workflow & Delegation Audit",
        description:
          "We document your routine administrative tasks, tool stack (ClickUp, HubSpot, Slack), and operating procedures.",
        timeline: "Day 1",
      },
      {
        step: "02",
        title: "Candidate Matching & Skill Alignment",
        description:
          "We match you with a pre-vetted assistant who already has experience with your specific industry software.",
        timeline: "Days 1–3",
      },
      {
        step: "03",
        title: "Onboarding & Daily SOP Kickoff",
        description:
          "Short 30-minute orientation call followed by immediate delegation of daily tasks with structured tracking.",
        timeline: "Day 4",
      },
      {
        step: "04",
        title: "Daily Standups & Performance Reviews",
        description:
          "Daily task summary logs and weekly quality reviews led by our management team to ensure 99%+ accuracy.",
        timeline: "Ongoing",
      },
    ],
    faqs: [
      {
        question: "What working hours do the virtual assistants support?",
        answer:
          "Our virtual assistants operate during standard US business hours across Eastern, Central, and Pacific time zones.",
      },
      {
        question: "What tasks can our virtual assistant handle?",
        answer:
          "Common tasks include CRM pipeline updates, calendar scheduling, customer support emails, invoice preparation, data cleaning, and social media scheduling.",
      },
      {
        question: "What if our assistant is sick or takes time off?",
        answer:
          "We provide trained backup coverage so your daily business operations and customer responses are never interrupted.",
      },
      {
        question: "Is there a long-term contract requirement?",
        answer:
          "No. All virtual assistant packages are month-to-month. You can scale hours up or down based on your seasonal business needs.",
      },
    ],
  },
};
