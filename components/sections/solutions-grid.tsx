"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { SOLUTIONS, type Solution } from "@/constants/solutions";

const nominate = SOLUTIONS.find((s) => s.slug === "nominate");
const rest = SOLUTIONS.filter((s) => s.slug !== "nominate");

// Group by shape (keyFeatures present or not) so cards sharing a row are
// the same height — Nominate leads the "detailed" group since it's the
// featured product, then the rest of that group, then the lighter cards.
const detailed = [...(nominate ? [nominate] : []), ...rest.filter((s) => s.keyFeatures)];
const compact = rest.filter((s) => !s.keyFeatures);

function SolutionCard({ solution, delay }: { solution: Solution; delay: number }) {
  const Icon = solution.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        href={`/solutions/${solution.slug}`}
        data-cursor-hover
        className="group flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#38bdf8]/40"
      >
        <div className="flex items-start justify-between">
          <div className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent}`}>
            <Icon className="size-7" />
          </div>
          {solution.playStoreUrl && (
            <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Play className="size-3 fill-current" />
              Google Play
            </span>
          )}
        </div>
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
            {solution.tag}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-white">{solution.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-[#93a3c4]">{solution.description}</p>

        {solution.keyFeatures && (
          <ul className="flex flex-col gap-2 border-t border-white/10 pt-5">
            {solution.keyFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                <Check className="mt-0.5 size-4 shrink-0 text-[#38bdf8]" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-1">
          View details
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </motion.div>
  );
}

export function SolutionsGrid() {
  return (
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {detailed.map((solution, i) => (
            <SolutionCard key={solution.slug} solution={solution} delay={(i % 2) * 0.1} />
          ))}
        </div>

        {compact.length > 0 && (
          <>
            <div className="my-12 flex items-center gap-4">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#6b7ca0]">
                More solutions
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
              {compact.map((solution, i) => (
                <SolutionCard key={solution.slug} solution={solution} delay={(i % 2) * 0.1} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
