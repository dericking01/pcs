import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "@/constants/solutions";
import { SolutionDetail } from "@/components/sections/solution-detail";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return SOLUTIONS.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  if (!solution) notFound();

  return (
    <>
      <SolutionDetail slug={solution.slug} />
      <CtaSection />
    </>
  );
}
