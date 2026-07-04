import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/constants/services";
import { ServiceDetail } from "@/components/sections/service-detail";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetail slug={service.slug} />
      <CtaSection />
    </>
  );
}
