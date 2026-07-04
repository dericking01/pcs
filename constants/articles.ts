import type { Article } from "@/types";

export const ARTICLE_CATEGORIES = [
  "All",
  "Public Health",
  "Digital Transformation",
  "Business Strategy",
  "HR & Talent",
  "Foreign Investment",
] as const;

export const ARTICLES: Article[] = [
  {
    slug: "hiv-aids-prevention-workplace-programs",
    title: "Why HIV/AIDS Prevention Belongs in Your Workplace Strategy",
    excerpt:
      "High-risk sectors like construction and mining carry a duty of care that extends beyond the job site. Here's how integrated prevention programming protects both workforce and community.",
    category: "Public Health",
    date: "2026-02-10",
    readTime: "6 min read",
    content: [
      "Construction, mining, and industrial projects concentrate large, often transient workforces in close proximity to surrounding communities. That proximity creates real public health exposure — and real responsibility.",
      "PCS designs HIV/AIDS, STI, and broader public health interventions that integrate awareness, prevention, behaviour change, training, and safeguarding frameworks, so that both workers and communities are protected and empowered with the right knowledge and services.",
      "The most effective programs are not one-off toolbox talks. They combine capacity building and training, community health screening, and sustained behaviour change communication — delivered through both physical and digital channels including SMS and IVR.",
      "For contractors and developers operating under international financing or regulatory frameworks, this is also a compliance question. Embedding safeguarding from mobilization onward is far cheaper than retrofitting it after an incident.",
    ],
  },
  {
    slug: "digital-health-sms-ivr-teleconsultation",
    title: "SMS, IVR, and Tele-consultation: Digital Health for Low-Connectivity Markets",
    excerpt:
      "You don't need a smartphone-first strategy to run an effective digital health program. Here's how SMS and IVR still move the needle across East and West Africa.",
    category: "Digital Transformation",
    date: "2026-01-22",
    readTime: "5 min read",
    content: [
      "Smartphone penetration gets the headlines, but SMS and IVR remain the most reliable channels for reaching workers and community members across much of the region PCS operates in.",
      "Our digital health approach layers SMS reminders, IVR health information lines, and tele-consultation models on top of in-person screening and education — extending reach well beyond what a field team can cover alone.",
      "Data analytics closes the loop: tracking engagement, referral follow-through, and behaviour change outcomes so programs can be tuned in near-real time rather than evaluated only after the fact.",
      "For organizations running awareness campaigns at scale, the channel mix matters more than the channel novelty.",
    ],
  },
  {
    slug: "one-size-does-not-fit-all-consulting",
    title: "One Size Definitely Does Not Fit All",
    excerpt:
      "Why PCS treats partnership, not templated frameworks, as the actual differentiator in business consulting.",
    category: "Business Strategy",
    date: "2025-11-05",
    readTime: "4 min read",
    content: [
      "It's easy for a consulting firm to say it customizes its approach. It's harder to build an operating model that actually requires it.",
      "PCS's directors carry senior operating experience across banking, brewing, shipping, telecommunications, manufacturing, and medical services. That range means an engagement can draw on genuinely different playbooks depending on the client's industry and constraints.",
      "Combined with a lean, active network of specialist consultants, this lets PCS bring the competencies of a large organization to an assignment while remaining fast enough to adapt when the diagnosis changes mid-engagement.",
      "Partnership, in this sense, is not a values-statement platitude — it's the mechanism that makes tailored delivery possible at all.",
    ],
  },
  {
    slug: "psychometric-assessments-hiring-development",
    title: "What Psychometric Assessments Actually Tell You About a Candidate",
    excerpt:
      "Used well, psychometric tools reduce costly mis-hires and sharpen leadership development. Used poorly, they're theatre. Here's the difference.",
    category: "HR & Talent",
    date: "2025-09-18",
    readTime: "5 min read",
    content: [
      "Psychometric assessment is only as useful as the decision it informs. PCS applies these tools across recruitment, employee development, and leadership development — not as a gate to pass, but as a lens to plan around.",
      "For recruitment, the goal is matching people to roles in a way that reduces costly mis-hires. For existing teams, the same tools — including leadership style and emotional intelligence instruments — surface how people actually prefer to communicate, decide, and lead.",
      "The payoff shows up in retention and in team performance: understanding each other's motivation and preferred communication style is what fosters the respect necessary for people to work effectively together.",
      "Organizations that treat assessment as a one-time hiring hurdle miss most of this value. The stronger return comes from using it continuously across the employee life cycle.",
    ],
  },
  {
    slug: "foreign-investor-market-entry-checklist",
    title: "A Foreign Investor's Market-Entry Checklist for East & West Africa",
    excerpt:
      "Reliable vendors, market research, and location search are the unglamorous work that determines whether a market entry succeeds.",
    category: "Foreign Investment",
    date: "2025-07-30",
    readTime: "6 min read",
    content: [
      "Investors entering Tanzania, Kenya, Ghana, or Nigeria for the first time rarely fail on strategy — they fail on execution details: which vendor to trust, which location fits the operating model, which permit takes longer than expected.",
      "PCS supports foreign investors across areas of investment identification, reliable vendor recommendations, market research, business location search, and information and linkage services.",
      "Because our directors and network span banking, manufacturing, shipping, and telecommunications, we can validate vendor claims against real operating experience rather than a directory listing.",
      "The result is a shorter, less expensive path from decision-to-invest to first revenue.",
    ],
  },
  {
    slug: "community-wellness-programs-that-work",
    title: "Designing Community Wellness Programs That Actually Get Used",
    excerpt:
      "Blood pressure screening, diabetes awareness, and mental wellness outreach only work if referral and follow-up are built in from day one.",
    category: "Public Health",
    date: "2025-05-14",
    readTime: "5 min read",
    content: [
      "A health screening event is easy to run and easy to forget. The programs that create lasting impact build referral and follow-up into the design from the start.",
      "PCS's community health and wellness programming spans blood pressure screening, diabetes awareness and screening, nutrition education, malaria and cholera awareness, and mental wellness awareness — paired with structured referral pathways.",
      "The follow-up step is where most programs quietly fail. Without it, screening becomes a data point instead of a health outcome.",
      "We design the referral and follow-up mechanism first, then build the screening calendar around it — not the other way around.",
    ],
  },
];
