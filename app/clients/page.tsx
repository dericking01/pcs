import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ClientsWall } from "@/components/sections/clients-wall";
import { CaseSnapshots } from "@/components/sections/case-snapshots";
import { ClientApproach } from "@/components/sections/client-approach";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "PCS partners with organizations including Vodacom, World Bank Group / IFC, CRDB Bank, MultiChoice, APM Terminals, and Y-Labs.",
};

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="From multinational operators to global development institutions."
        description="Every client relationship is a partnership — we understand your unique situation before we propose a single solution."
      />
      <ClientsWall />
      <CaseSnapshots />
      <ClientApproach />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
