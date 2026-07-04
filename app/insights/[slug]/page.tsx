import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/constants/articles";
import { ArticleDetail } from "@/components/sections/article-detail";
import { CtaSection } from "@/components/sections/cta-section";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <ArticleDetail article={article} />
      <CtaSection />
    </>
  );
}
