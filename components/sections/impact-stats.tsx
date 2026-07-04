"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { IMPACT_STATS } from "@/constants/stats";

export function ImpactStats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#020617] via-[#04102b] to-[#020617] py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 size-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #0f6fff, transparent 70%)" }}
      />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Impact"
          title="Measured in outcomes, not just engagements."
          align="center"
          className="mx-auto mb-20 items-center"
        />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
          {IMPACT_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="flex flex-col items-center gap-3 bg-[#020617] px-6 py-12 text-center"
              >
                <Icon className="size-6 text-[#38bdf8]" />
                <div className="text-4xl font-semibold text-white md:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-sm text-[#93a3c4]">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
