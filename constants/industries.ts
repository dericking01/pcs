import {
  HardHat,
  Mountain,
  Factory,
  Radio,
  HeartPulse,
  Wheat,
  Landmark,
  Building2,
  Globe2,
  Users2,
  Ship,
  Beer,
} from "lucide-react";
import type { Industry } from "@/types";

export const INDUSTRIES: Industry[] = [
  {
    name: "Construction & Infrastructure",
    slug: "construction",
    description:
      "Workforce safeguarding, HIV/AIDS prevention, and community engagement across infrastructure projects.",
    icon: HardHat,
  },
  {
    name: "Mining",
    slug: "mining",
    description:
      "Health promotion, safeguarding, and capacity building for high-risk industrial workplaces.",
    icon: Mountain,
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description:
      "Operational efficiency, HR, and process optimization for manufacturing operations.",
    icon: Factory,
  },
  {
    name: "Telecommunications",
    slug: "telecommunications",
    description:
      "Digital platforms, business process, and growth strategy for telecom operators.",
    icon: Radio,
  },
  {
    name: "Healthcare & Medical Services",
    slug: "healthcare",
    description:
      "Public health programming, screening, and digital health solutions for medical institutions.",
    icon: HeartPulse,
  },
  {
    name: "Agriculture & Agribusiness",
    slug: "agriculture",
    description:
      "Business development and market support for agribusiness and agricultural markets.",
    icon: Wheat,
  },
  {
    name: "Banking & Financial Services",
    slug: "banking-financial-services",
    description:
      "Accounting, finance, valuation, and M&A advisory for banking and financial institutions.",
    icon: Landmark,
  },
  {
    name: "Government",
    slug: "government",
    description:
      "Policy-aligned advisory and public program support for government institutions.",
    icon: Building2,
  },
  {
    name: "Development Partners & NGOs",
    slug: "development-partners-ngos",
    description:
      "Program design and delivery support for development partners and non-profit organizations.",
    icon: Globe2,
  },
  {
    name: "Community Development",
    slug: "community-development",
    description:
      "Community engagement, wellness, and social safeguarding programs.",
    icon: Users2,
  },
  {
    name: "Shipping & Logistics",
    slug: "shipping-logistics",
    description:
      "Supply chain management and operational support for shipping and terminal operators.",
    icon: Ship,
  },
  {
    name: "Brewing & Manufacturing FMCG",
    slug: "brewing-fmcg",
    description:
      "Leadership drawn from senior operating experience in brewing and consumer goods.",
    icon: Beer,
  },
];
