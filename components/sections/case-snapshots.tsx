"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CASE_SNAPSHOTS } from "@/constants/case-studies";

export function CaseSnapshots() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-24">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Engagement snapshots"
          title="A sample of the work behind the logos."
          description="Illustrative of the sectors and problems we're brought in to solve."
          className="mb-16"
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {CASE_SNAPSHOTS.map((item, i) => (
            <motion.div
              key={item.sector}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-7"
            >
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
                {item.sector}
              </span>
              <h3 className="text-lg font-semibold text-white">{item.focus}</h3>
              <p className="text-sm leading-relaxed text-[#93a3c4]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
