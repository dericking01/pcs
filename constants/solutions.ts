import type { LucideIcon } from "lucide-react";
import {
  Award,
  Brain,
  Smartphone,
  HeartHandshake,
  Target,
  BarChart3,
  Trophy,
  ShieldAlert,
  Route,
  Megaphone,
  HeartPulse,
  GraduationCap,
} from "lucide-react";

export interface Solution {
  slug: string;
  title: string;
  tag: string;
  description: string;
  icon: LucideIcon;
  accent: string;
  keyFeatures?: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "shukurani-points",
    title: "Shukurani Points",
    tag: "Loyalty Platform",
    description:
      "A point-based loyalty platform for business growth — customers earn, redeem, and share reward points across a merchant network from a single mobile wallet.",
    icon: Award,
    accent: "from-fuchsia-500/20 to-purple-500/10 text-fuchsia-300",
  },
  {
    slug: "lumina-development-suite",
    title: "Lumina Development Suite",
    tag: "Employee Development",
    description:
      "Lumina Leader, Spark, Emotion, Select, Sales, and Team give executives and teams a deep, evidence-based understanding of leadership style, personality, and communication preference.",
    icon: Brain,
    accent: "from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]",
  },
  {
    slug: "digital-health-platforms",
    title: "Digital Health Platforms",
    tag: "Public Health",
    description:
      "SMS, IVR, and tele-consultation infrastructure that extends behaviour change communication and care access to low-connectivity communities.",
    icon: Smartphone,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-300",
  },
  {
    slug: "performance-management-system",
    title: "Performance Management System",
    tag: "Software Product",
    description:
      "A comprehensive digital platform for employee performance management, goal setting, appraisal processes, and continuous feedback — aligning individual and team objectives with business goals.",
    icon: Target,
    accent: "from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]",
    keyFeatures: [
      "Goals & objective management with KPIs and OKRs",
      "Configurable performance appraisal cycles",
      "Continuous check-ins and feedback tracking",
      "Competency management and succession planning",
      "Role-based dashboards, reports, and analytics",
    ],
  },
  {
    slug: "project-monitoring-evaluation-system",
    title: "Project Monitoring & Evaluation System",
    tag: "Software Product",
    description:
      "An intelligent monitoring and evaluation platform that helps organizations plan, track, measure, and report project performance in real time — with dashboards, indicator monitoring, and automated reporting.",
    icon: BarChart3,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300",
  },
  {
    slug: "nominate",
    title: "Nominate",
    tag: "Software Product",
    description:
      "A digital nomination and recognition platform that simplifies candidate nominations, approvals, evaluations, and selection — supporting awards, scholarships, leadership programs, and recognition initiatives.",
    icon: Trophy,
    accent: "from-yellow-500/20 to-amber-500/10 text-yellow-300",
  },
  {
    slug: "infoma",
    title: "Infoma",
    tag: "Cybersecurity",
    description:
      "A cybersecurity monitoring and threat intelligence platform that continuously monitors servers, websites, and social media accounts — with phishing and scam detection to flag malicious content before it causes harm.",
    icon: ShieldAlert,
    accent: "from-red-500/20 to-rose-500/10 text-red-300",
    keyFeatures: [
      "Server, website, and social media monitoring",
      "Real-time threat alerts and risk analytics",
      "Phishing email and malicious URL scanning",
      "Centralized digital asset management",
      "Security incident reporting dashboard",
    ],
  },
  {
    slug: "sales-agent-field-marketing-platform",
    title: "Sales Agent & Field Marketing Management Platform",
    tag: "Software Product",
    description:
      "An all-in-one platform to manage field operations, sales teams, marketing campaigns, and data collection — with real-time visibility into field performance, productivity, and accountability.",
    icon: Route,
    accent: "from-cyan-500/20 to-sky-500/10 text-cyan-300",
    keyFeatures: [
      "Campaign, team, and activity management",
      "Real-time field insights and attendance tracking",
      "Dynamic data collection tools",
      "Targets, incentives, and commissions management",
      "Built-in learning management system (LMS)",
    ],
  },
  {
    slug: "kako-brands",
    title: "Kako Brands",
    tag: "Brand Management",
    description:
      "A brand management and customer engagement platform that helps businesses strengthen brand visibility, manage promotional activities, monitor market presence, and track brand performance.",
    icon: Megaphone,
    accent: "from-pink-500/20 to-fuchsia-500/10 text-pink-300",
  },
  {
    slug: "health-management-system",
    title: "Health Management System",
    tag: "Public Health",
    description:
      "A digital healthcare solution covering patient management, appointment scheduling, medical records, reporting, and workflow automation — supporting providers in delivering efficient, quality care.",
    icon: HeartPulse,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-300",
  },
  {
    slug: "coaching-platform",
    title: "Coaching Platform",
    tag: "Learning & Development",
    description:
      "A mobile-first coaching and learning solution giving registered users secure access to coaching episodes, training materials, and progress tracking — accessible on smartphones and feature phones alike.",
    icon: GraduationCap,
    accent: "from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]",
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Software",
    tag: "Software Product",
    description:
      "Purpose-built applications engineered around a specific operational bottleneck — not adapted from a generic template.",
    icon: HeartHandshake,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300",
  },
];
