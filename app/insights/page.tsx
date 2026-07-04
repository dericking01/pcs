import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { InsightsGrid } from "@/components/sections/insights-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on public health, digital transformation, business strategy, HR, and foreign investment from PCS.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives from the field."
        description="Practical thinking from our public health, technology, and business advisory teams."
      />
      <InsightsGrid />
      <CtaSection />
    </>
  );
}
