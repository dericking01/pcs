import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Solutions & Products",
  description:
    "Digital platforms and software products from PCS — including Shukurani Points, the Lumina Development Suite, Infoma, Nominate, and more, born from real client engagements.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & products"
        title="Platforms born from real engagements."
        description="Some of our client work has evolved into standalone digital products — spanning HR, public health, cybersecurity, field operations, and brand management."
      />
      <SolutionsGrid />
      <CtaSection />
    </>
  );
}
