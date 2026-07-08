"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SOLUTIONS } from "@/constants/solutions";

export function SolutionsGrid() {
  return (
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <div className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent}`}>
                  <Icon className="size-7" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
                    {solution.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#93a3c4]">{solution.description}</p>

                {solution.keyFeatures && (
                  <ul className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-5">
                    {solution.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-[#38bdf8]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
