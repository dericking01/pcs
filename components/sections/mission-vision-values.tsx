"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { MISSION, MISSION_EXTENDED, VISION, WHY_PCS, CORE_VALUES } from "@/constants/values";

export function MissionVisionValues() {
  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <GlassCard strong className="p-8 md:p-10">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#38bdf8]">
              Mission
            </span>
            <p className="text-xl leading-relaxed text-white md:text-2xl">{MISSION}</p>
            <p className="mt-4 text-base leading-relaxed text-[#93a3c4]">{MISSION_EXTENDED}</p>
          </GlassCard>
          <GlassCard strong className="p-8 md:p-10">
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[#38bdf8]">
              Vision
            </span>
            <p className="text-xl leading-relaxed text-white md:text-2xl">{VISION}</p>
          </GlassCard>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Why PCS" title="We care. We take your challenges to heart." className="mb-14" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WHY_PCS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#93a3c4]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Our core values" title="Values that show up in the work." className="mb-14" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="gradient-border flex flex-col items-start gap-4 rounded-3xl p-7"
                >
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-base font-semibold text-white">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-[#93a3c4]">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
