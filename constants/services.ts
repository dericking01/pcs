import {
  Briefcase,
  Calculator,
  Users,
  Code2,
  Workflow,
  Scale,
  Globe2,
  TrendingUp,
  HeartPulse,
  MessagesSquare,
  GraduationCap,
  Stethoscope,
  Compass,
} from "lucide-react";
import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "business-management-consulting",
    title: "Business Management Consulting",
    shortDescription:
      "End-to-end business solutions tailored to each client's unique situation.",
    description:
      "We partner with organizations to understand their unique situation and design tailored solutions across strategy, structure, and execution. Backed by directors with senior experience across banking, brewing, shipping, telecommunications, and manufacturing, we support and manage end-to-end business processes for any industry.",
    icon: Briefcase,
    benefits: [
      "Senior leadership with cross-industry operating experience",
      "Tailored solutions, not one-size-fits-all templates",
      "Access to a lean, active network of specialist consultants",
      "End-to-end process ownership from diagnosis to delivery",
    ],
    workflow: [
      { title: "Discover", description: "We immerse in your organization to understand context, constraints, and ambition." },
      { title: "Design", description: "We co-create a roadmap aligned to your strategy and resources." },
      { title: "Deliver", description: "We execute alongside your team, transferring capability as we go." },
      { title: "Sustain", description: "We embed governance so improvements outlast the engagement." },
    ],
    category: "business",
  },
  {
    slug: "accounting-finance",
    title: "Accounting & Finance",
    shortDescription:
      "Mergers, due diligence, valuations, and financing support for growing businesses.",
    description:
      "We support mergers and acquisitions, due diligence, viability studies, company valuation, financing operations, investments, and business plan development — giving management and investors the financial clarity to move with confidence.",
    icon: Calculator,
    benefits: [
      "Rigorous due diligence and viability studies",
      "Independent company valuation",
      "Investment and financing structuring support",
      "Bankable business plans",
    ],
    workflow: [
      { title: "Assess", description: "Review financial position, records, and reporting integrity." },
      { title: "Model", description: "Build valuation and viability models for the transaction or plan." },
      { title: "Structure", description: "Advise on financing, investment, and deal structuring." },
      { title: "Close", description: "Support execution through to completion." },
    ],
    category: "business",
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    shortDescription:
      "Employee outsourcing, recruitment, payroll, and leadership development.",
    description:
      "We manage the full employee life cycle — outsourcing, recruitment, payroll and performance management, psychometric assessments, employee development, leadership development, and policy development — so your people function is both compliant and strategic.",
    icon: Users,
    benefits: [
      "Employee outsourcing and payroll management",
      "Psychometric assessments for hiring and development",
      "Leadership development programs",
      "Employee life cycle and HR policy design",
    ],
    workflow: [
      { title: "Diagnose", description: "Assess current HR structure, policy, and talent gaps." },
      { title: "Design", description: "Build recruitment, performance, and development frameworks." },
      { title: "Deploy", description: "Implement payroll, outsourcing, and assessment tools." },
      { title: "Develop", description: "Run leadership and employee development programs." },
    ],
    category: "business",
  },
  {
    slug: "software-application-development",
    title: "Software & Application Development",
    shortDescription:
      "Custom software that streamlines operations and drives sustainable growth.",
    description:
      "We design and develop customized software solutions that streamline operations, enhance productivity, solve complex business challenges, and drive sustainable growth through innovation and technology.",
    icon: Code2,
    benefits: [
      "Custom-built, not off-the-shelf, software",
      "Solutions engineered around real operational bottlenecks",
      "Scalable architecture for growing organizations",
      "Ongoing systems infrastructure support",
    ],
    workflow: [
      { title: "Scope", description: "Define the operational problem the software must solve." },
      { title: "Architect", description: "Design a scalable, secure system architecture." },
      { title: "Build", description: "Develop and iterate with continuous client feedback." },
      { title: "Support", description: "Maintain, monitor, and evolve the platform post-launch." },
    ],
    category: "technology",
  },
  {
    slug: "digital-transformation-technology-consulting",
    title: "Digital Transformation & Technology Consulting",
    shortDescription:
      "Cloud, data analytics, automation, and digital platforms for modern institutions.",
    description:
      "Our capabilities extend to digital platforms and digital health solutions — including SMS, IVR, tele-consultation models, data analytics, and digital engagement tools — supporting awareness campaigns, stakeholder engagement, and access to information and services across diverse sectors.",
    icon: Workflow,
    benefits: [
      "SMS, IVR, and tele-consultation infrastructure",
      "Data analytics and business intelligence",
      "Digital engagement and awareness platforms",
      "Cloud-enabled systems infrastructure",
    ],
    workflow: [
      { title: "Audit", description: "Map current systems, data flows, and digital maturity." },
      { title: "Blueprint", description: "Define the target digital architecture and roadmap." },
      { title: "Implement", description: "Deploy platforms in phased, low-risk releases." },
      { title: "Optimize", description: "Use analytics to continuously improve outcomes." },
    ],
    category: "technology",
  },
  {
    slug: "operations-supply-chain-project-management",
    title: "Operations, Supply Chain & Project Management",
    shortDescription:
      "Supply chain, productivity, business process optimization, and relocations.",
    description:
      "We empower organizations to innovate, grow, and operate more efficiently through customized business and technology solutions — spanning supply chain management, productivity enhancement, operational efficiency, business process optimization, project management, and relocations.",
    icon: TrendingUp,
    benefits: [
      "Supply chain management and optimization",
      "Business process re-engineering",
      "End-to-end project management",
      "Relocation and information technology support",
    ],
    workflow: [
      { title: "Map", description: "Document current processes and supply chain flows." },
      { title: "Redesign", description: "Re-engineer for efficiency, resilience, and cost." },
      { title: "Mobilize", description: "Manage delivery, relocation, or rollout as a project." },
      { title: "Measure", description: "Track productivity and efficiency gains." },
    ],
    category: "business",
  },
  {
    slug: "sales-marketing",
    title: "Sales & Marketing",
    shortDescription:
      "Defined strategy, opportunity identification, and an actionable growth roadmap.",
    description:
      "We support organizations' sales and growth goals by designing a clearly defined strategy, identifying areas of opportunity, and providing an actionable roadmap for optimization.",
    icon: MessagesSquare,
    benefits: [
      "Clearly defined go-to-market strategy",
      "Opportunity and market gap identification",
      "Actionable, measurable growth roadmaps",
      "Sales process optimization",
    ],
    workflow: [
      { title: "Analyze", description: "Assess market position and growth opportunity." },
      { title: "Strategize", description: "Define target strategy and positioning." },
      { title: "Activate", description: "Roll out sales and marketing initiatives." },
      { title: "Optimize", description: "Refine based on performance data." },
    ],
    category: "business",
  },
  {
    slug: "legal-tax-advisory",
    title: "Legal & Tax Advisory",
    shortDescription:
      "Commercial arbitration, permits, estate administration, and employment law.",
    description:
      "We provide support in commercial arbitration, residence and work permits, wills and estate administration, foreign investments, joint ventures and other business combinations, and employment law.",
    icon: Scale,
    benefits: [
      "Commercial arbitration support",
      "Residence and work permit processing",
      "Joint venture and business combination structuring",
      "Employment law advisory",
    ],
    workflow: [
      { title: "Review", description: "Assess legal and regulatory exposure." },
      { title: "Advise", description: "Provide practical, compliant recommendations." },
      { title: "Process", description: "Handle permits, filings, and documentation." },
      { title: "Represent", description: "Support arbitration and dispute resolution." },
    ],
    category: "business",
  },
  {
    slug: "foreign-investor-support",
    title: "Foreign Investor Support",
    shortDescription:
      "Market research, vendor recommendations, and business location search.",
    description:
      "We guide foreign investors on areas of investment, reliable vendor recommendations, market research, business location search, and information and linkage services — de-risking market entry into East and West Africa.",
    icon: Globe2,
    benefits: [
      "Investment area identification",
      "Vetted, reliable vendor recommendations",
      "Location search and market research",
      "Information and linkage services",
    ],
    workflow: [
      { title: "Orient", description: "Brief investors on market context and opportunity." },
      { title: "Research", description: "Conduct market and location research." },
      { title: "Connect", description: "Introduce vetted vendors and partners." },
      { title: "Establish", description: "Support market entry and setup." },
    ],
    category: "business",
  },
  {
    slug: "public-health-hiv-aids-safeguarding",
    title: "Public Health, HIV/AIDS, Safeguarding & Community Development",
    shortDescription:
      "Specialized technical support across construction, mining, and industrial workplaces.",
    description:
      "We provide specialized technical support in workplace health promotion, HIV/AIDS and STI prevention programming, social safeguarding, and community engagement across infrastructure, construction, mining, industrial, and development projects — protecting and empowering both workers and surrounding communities.",
    icon: HeartPulse,
    benefits: [
      "HIV/AIDS and STI prevention programming",
      "Social safeguarding frameworks",
      "Community engagement for infrastructure projects",
      "Regulatory compliance support",
    ],
    workflow: [
      { title: "Assess", description: "Evaluate workforce and community risk profile." },
      { title: "Design", description: "Build a tailored safeguarding and health program." },
      { title: "Implement", description: "Deliver interventions with workers and communities." },
      { title: "Safeguard", description: "Monitor outcomes and maintain protection frameworks." },
    ],
    category: "health",
  },
  {
    slug: "health-education-behaviour-change-communication",
    title: "Health Education & Behaviour Change Communication",
    shortDescription:
      "Physical and digital communication strategies that shift health-seeking behavior.",
    description:
      "We develop targeted health communication strategies using both physical and digital channels — including SMS, IVR, and tele-consultation — to influence positive health-seeking behaviors across the communities and workforces we serve.",
    icon: MessagesSquare,
    benefits: [
      "Targeted behaviour change communication strategy",
      "Digital and physical channel campaigns",
      "SMS and IVR health messaging",
      "Measurable shifts in health-seeking behavior",
    ],
    workflow: [
      { title: "Research", description: "Understand audience beliefs and barriers." },
      { title: "Craft", description: "Design culturally relevant messaging and channels." },
      { title: "Deploy", description: "Run multi-channel awareness campaigns." },
      { title: "Evaluate", description: "Measure behavior change outcomes." },
    ],
    category: "health",
  },
  {
    slug: "capacity-building-training",
    title: "Capacity Building & Training",
    shortDescription:
      "Practical training for workers, management, contractors, and communities.",
    description:
      "We deliver practical training programs for workers, management teams, contractors, and community stakeholders on health, safety, and safeguarding issues — building lasting internal capability rather than one-off compliance exercises.",
    icon: GraduationCap,
    benefits: [
      "Workforce and management training",
      "Contractor and stakeholder capacity building",
      "Health, safety, and safeguarding curricula",
      "Sustainable internal capability transfer",
    ],
    workflow: [
      { title: "Assess", description: "Identify capability and compliance gaps." },
      { title: "Curriculum", description: "Design role-specific training content." },
      { title: "Train", description: "Deliver hands-on sessions across all levels." },
      { title: "Certify", description: "Assess and certify competency outcomes." },
    ],
    category: "health",
  },
  {
    slug: "community-health-screening-wellness",
    title: "Community Health Screening & Wellness Programs",
    shortDescription:
      "Blood pressure, diabetes, nutrition, malaria, cholera, and mental wellness programs.",
    description:
      "We support workplace and community wellness through integrated health interventions: blood pressure screening, diabetes awareness and screening, nutrition education, malaria and cholera awareness, mental wellness awareness, and health referrals and follow-up support.",
    icon: Stethoscope,
    benefits: [
      "On-site blood pressure and diabetes screening",
      "Nutrition and disease awareness education",
      "Mental wellness programming",
      "Structured referral and follow-up pathways",
    ],
    workflow: [
      { title: "Plan", description: "Design a screening and wellness program calendar." },
      { title: "Screen", description: "Conduct on-site health screening and education." },
      { title: "Refer", description: "Connect flagged cases to appropriate care." },
      { title: "Follow up", description: "Track outcomes and sustain engagement." },
    ],
    category: "health",
  },
  {
    slug: "executive-leadership-coaching",
    title: "Executive & Leadership Coaching",
    shortDescription:
      "One-on-one and team coaching grounded in evidence-based leadership assessment.",
    description:
      "We coach executives and rising leaders using evidence-based tools — including the Lumina Leader, Spark, and Emotion assessments — to build self-awareness, adapt leadership style to the needs of their people, and strengthen decision-making under pressure. Coaching is paired with practical follow-through, not a one-off workshop.",
    icon: Compass,
    benefits: [
      "One-on-one executive coaching with structured follow-up",
      "Evidence-based leadership and personality assessment",
      "Team coaching to build communication and trust",
      "Coaching plans tied to real business objectives",
    ],
    workflow: [
      { title: "Assess", description: "Use validated tools to profile leadership style and strengths." },
      { title: "Plan", description: "Set a coaching plan tied to specific leadership goals." },
      { title: "Coach", description: "Run structured one-on-one or team coaching sessions." },
      { title: "Reinforce", description: "Track progress and reinforce habits after coaching ends." },
    ],
    category: "coaching",
  },
];

export const SERVICE_CATEGORIES = [
  { key: "business", label: "Business & Management" },
  { key: "technology", label: "Technology & Digital" },
  { key: "health", label: "Public Health & Community" },
  { key: "coaching", label: "Coaching" },
] as const;
