import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  workflow: { title: string; description: string }[];
  category: "business" | "technology" | "health" | "coaching";
}

export interface Industry {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
}

export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  sector: string;
}

export interface TimelineStep {
  label: string;
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
}
