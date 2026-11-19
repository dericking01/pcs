"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CalendarDays, ChevronRight, ListOrdered } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { AccountDeletionForm } from "@/components/sections/account-deletion-form";
import { SOLUTIONS } from "@/constants/solutions";
import { cn } from "@/lib/utils";

interface LegalDocumentProps {
  solutionSlug: string;
  docSlug: string;
  lastUpdated: string;
  intro?: React.ReactNode;
  sections: { id: string; title: string; body: React.ReactNode }[];
  deletionForm?: boolean;
}

export function LegalDocument({
  solutionSlug,
  docSlug,
  lastUpdated,
  intro,
  sections,
  deletionForm,
}: LegalDocumentProps) {
  const solution = SOLUTIONS.find((s) => s.slug === solutionSlug);
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  if (!solution) return null;
  const pages = solution.legalPages ?? [];
  const page = pages.find((p) => p.slug === docSlug);
  if (!page) return null;
  const Icon = solution.icon;
  const solutionHref = `/solutions/${solution.slug}`;
  const related = pages.filter((p) => p.slug !== docSlug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] pb-16 pt-44">
        <AuroraBackground />
        <div className="container-px relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#93a3c4]"
          >
            <Link href="/solutions" className="transition-colors hover:text-white">
              Solutions
            </Link>
            <ChevronRight className="size-3.5 text-[#6b7ca0]" />
            <Link href={solutionHref} className="transition-colors hover:text-white">
              {solution.title}
            </Link>
            <ChevronRight className="size-3.5 text-[#6b7ca0]" />
            <span className="text-white">{page.label}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
          >
            {solution.logoImage ? (
              <Image
                src={solution.logoImage}
                alt={`${solution.title} logo`}
                width={64}
                height={64}
                className="size-full object-cover"
              />
            ) : (
              <div className={`flex size-full items-center justify-center bg-gradient-to-br ${solution.accent}`}>
                <Icon className="size-8" />
              </div>
            )}
          </motion.div>
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
            {solution.title} &middot; Legal
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {page.label}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[#93a3c4]"
          >
            {page.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-[#93a3c4]">
              <CalendarDays className="size-3.5 text-[#38bdf8]" />
              Last updated {lastUpdated}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-[#93a3c4]">
              <ListOrdered className="size-3.5 text-[#38bdf8]" />
              {sections.length} sections
            </span>
          </motion.div>

          {pages.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="no-scrollbar mt-10 flex w-full gap-2 overflow-x-auto"
            >
              {pages.map((p) => (
                <Link
                  key={p.slug}
                  href={`${solutionHref}/${p.slug}`}
                  aria-current={p.slug === docSlug ? "page" : undefined}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors",
                    p.slug === docSlug
                      ? "border-[#38bdf8]/40 bg-[#38bdf8]/10 text-white"
                      : "border-white/10 text-[#93a3c4] hover:border-white/25 hover:text-white"
                  )}
                >
                  <p.icon className="size-4" />
                  {p.label}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="relative bg-[#020617] pb-20">
        <div className="container-px mx-auto grid max-w-7xl grid-cols-1 gap-12 border-t border-white/10 pt-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <div className="mb-4 text-xs font-medium uppercase tracking-widest text-[#6b7ca0]">
                On this page
              </div>
              <ul className="flex flex-col border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={cn(
                        "-ml-px flex gap-3 border-l py-2 pl-4 text-sm leading-snug transition-colors",
                        activeId === s.id
                          ? "border-[#38bdf8] text-white"
                          : "border-transparent text-[#93a3c4] hover:text-white"
                      )}
                    >
                      <span className="tabular-nums text-[#6b7ca0]">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
              <Link
                href={solutionHref}
                className="mt-8 inline-flex items-center gap-2 text-sm text-[#93a3c4] transition-colors hover:text-white"
              >
                <ArrowLeft className="size-4" />
                Back to {solution.title}
              </Link>
            </div>
          </aside>

          <article className="max-w-3xl">
            {intro && <div className="mb-10 flex flex-col gap-5">{intro}</div>}
            <div className="flex flex-col gap-14">
              {sections.map((s, i) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5 }}
                  className="scroll-mt-32"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sm font-semibold tabular-nums text-[#38bdf8]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {s.title}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5">{s.body}</div>
                </motion.section>
              ))}
            </div>
          </article>
        </div>
      </section>

      {deletionForm && (
        <div id="request-form" className="scroll-mt-28">
          <AccountDeletionForm appName={solution.title} accent={solution.accent} />
        </div>
      )}

      {related.length > 0 && (
        <section className="relative bg-[#020617] pb-24">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="Keep reading" title="Related documents" className="mb-10" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {related.map((doc, i) => (
                <motion.div
                  key={doc.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px 0px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <LegalPageCard
                    href={`${solutionHref}/${doc.slug}`}
                    label={doc.label}
                    description={doc.description}
                    icon={doc.icon}
                    accent={solution.accent}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export function LegalPageCard({
  href,
  label,
  description,
  icon: DocIcon,
  accent,
}: {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}) {
  return (
    <Link
      href={href}
      data-cursor-hover
      className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-[#38bdf8]/30 hover:bg-white/[0.05]"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`}
      />
      <div className="relative flex items-start gap-4">
        <div
          className={`flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent}`}
        >
          <DocIcon className="size-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{label}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#93a3c4]">{description}</p>
        </div>
      </div>
      <span className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#020617] transition-colors group-hover:bg-white/90">
        Read document
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
