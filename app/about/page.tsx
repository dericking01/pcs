import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutTimeline } from "@/components/sections/about-timeline";
import { MissionVisionValues } from "@/components/sections/mission-vision-values";
import { LeadershipPhilosophy } from "@/components/sections/leadership-philosophy";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2020 in Tanzania, PCS partners with organizations across East and West Africa to solve business, technology, and public health challenges.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <MissionVisionValues />
      <LeadershipPhilosophy />
      <CtaSection />
    </>
  );
}
