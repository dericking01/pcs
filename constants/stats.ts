import { Briefcase, Building2, Globe2, Users, Network, HeartPulse } from "lucide-react";
import type { StatItem } from "@/types";

export const IMPACT_STATS: StatItem[] = [
  { label: "Client Organizations", value: 13, suffix: "+", icon: Building2 },
  { label: "Industries Served", value: 10, suffix: "+", icon: Briefcase },
  { label: "Countries of Operation", value: 4, icon: Globe2 },
  { label: "Years Connecting the Dots", value: new Date().getFullYear() - 2020, suffix: "+", icon: Users },
  { label: "Consulting Network", value: 50, suffix: "+", icon: Network },
  { label: "Community Health Programs", value: 20, suffix: "+", icon: HeartPulse },
];
