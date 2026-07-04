import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { IndustriesShowcase } from "@/components/sections/industries-showcase";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "PCS brings deep sector fluency across construction, mining, telecommunications, healthcare, banking, government, and development sectors.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Sector fluency built from real operating experience."
        description="Our leadership has worked inside these industries — not consulted from the outside. That changes how fast we can diagnose the real problem."
      />
      <IndustriesShowcase showAllLink={false} />
      <CtaSection />
    </>
  );
}
