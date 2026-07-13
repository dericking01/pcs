"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { SOLUTIONS } from "@/constants/solutions";

const orderedSolutions = [
  ...SOLUTIONS.filter((s) => s.slug === "nominate"),
  ...SOLUTIONS.filter((s) => s.slug !== "nominate"),
];

export function SolutionsGrid() {
  return (
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
          {orderedSolutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <Link
                  href={`/solutions/${solution.slug}`}
                  data-cursor-hover
                  className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-300 hover:border-[#38bdf8]/40"
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

                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-1">
                    View details
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
