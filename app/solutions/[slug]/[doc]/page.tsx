import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SOLUTIONS } from "@/constants/solutions";
import { LEGAL_CONTENT } from "@/constants/legal";
import { LegalDocument } from "@/components/legal/legal-document";

export const dynamicParams = false;

export function generateStaticParams() {
  return SOLUTIONS.flatMap((solution) =>
    (solution.legalPages ?? [])
      .filter((page) => LEGAL_CONTENT[solution.slug]?.[page.slug])
      .map((page) => ({ slug: solution.slug, doc: page.slug }))
  );
}

function findDoc(slug: string, doc: string) {
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  const page = solution?.legalPages?.find((p) => p.slug === doc);
  const content = LEGAL_CONTENT[slug]?.[doc];
  if (!solution || !page || !content) return null;
  return { solution, page, content };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; doc: string }>;
}): Promise<Metadata> {
  const { slug, doc } = await params;
  const found = findDoc(slug, doc);
  if (!found) return {};
  return {
    title: `${found.page.label} — ${found.solution.title}`,
    description: found.page.description,
  };
}

export default async function LegalDocPage({
  params,
}: {
  params: Promise<{ slug: string; doc: string }>;
}) {
  const { slug, doc } = await params;
  const found = findDoc(slug, doc);
  if (!found) notFound();

  const { content } = found;
  return (
    <LegalDocument
      solutionSlug={slug}
      docSlug={doc}
      lastUpdated={content.lastUpdated}
      intro={content.intro}
      sections={content.sections}
      deletionForm={content.deletionForm}
    />
  );
}
