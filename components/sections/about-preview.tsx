"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { IMPACT_STATS } from "@/constants/stats";
import { MISSION, MISSION_EXTENDED, VISION } from "@/constants/values";
import { PcsButton } from "@/components/ui/pcs-button";

export function AboutPreview() {
  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About PCS"
          title="Founded in 2020. Built to solve what generic advice can't."
          description="Pannecia Consulting Services Limited was established on 18 April 2020 in the United Republic of Tanzania to provide integrated business, organizational, and social development solutions."
          className="mb-16"
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {IMPACT_STATS.slice(0, 4).map((stat, i) => {
            const Icon = stat.icon;
            return (
              <GlassCard key={stat.label} className="p-6 md:p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Icon className="mb-4 size-6 text-[#38bdf8]" />
                  <div className="text-3xl font-semibold text-white md:text-4xl">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  </div>
                  <p className="mt-2 text-sm text-[#93a3c4]">{stat.label}</p>
                </motion.div>
              </GlassCard>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
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
            <div className="mt-6">
              <PcsButton href="/about" variant="outline">
                Our full story
              </PcsButton>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
