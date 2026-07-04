"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const STEPS = [
  {
    step: "Engage",
    description:
      "We start by understanding your unique situation — not applying a pre-built framework.",
  },
  {
    step: "Embed",
    description:
      "Senior consultants work alongside your team through delivery, not just advisory from a distance.",
  },
  {
    step: "Sustain",
    description:
      "We stay agile in resource mobilization and execution so results outlast the engagement.",
  },
];

export function ClientApproach() {
  return (
    <section className="relative bg-[#020617] py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we partner"
          title="Every client relationship follows the same discipline."
          className="mb-16"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col gap-4 p-8">
                <span className="font-mono text-sm text-[#38bdf8]">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-white">{item.step}</h3>
                <p className="text-sm leading-relaxed text-[#93a3c4]">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
