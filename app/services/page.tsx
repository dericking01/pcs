import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business management, technology, and public health consulting services from Pannecia Consulting Services Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Consulting built around your operating reality."
        description="Fourteen service lines spanning business strategy, technology, coaching, and public health — delivered by senior consultants who have run these functions themselves."
      />
      <ServicesGrid />
      <CtaSection />
    </>
  );
}
