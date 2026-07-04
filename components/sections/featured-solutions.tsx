"use client";

import { motion } from "framer-motion";
import { Award, Brain, HeartHandshake, Smartphone } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const SOLUTIONS = [
  {
    title: "Shukurani Points",
    tag: "Loyalty Platform",
    description:
      "A point-based loyalty platform for business growth — customers earn, redeem, and share reward points across a merchant network from a single mobile wallet.",
    icon: Award,
    accent: "from-fuchsia-500/20 to-purple-500/10 text-fuchsia-300",
  },
  {
    title: "Lumina Development Suite",
    tag: "Employee Development",
    description:
      "Lumina Leader, Spark, Emotion, Select, Sales, and Team give executives and teams a deep, evidence-based understanding of leadership style, personality, and communication preference.",
    icon: Brain,
    accent: "from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]",
  },
  {
    title: "Digital Health Platforms",
    tag: "Public Health",
    description:
      "SMS, IVR, and tele-consultation infrastructure that extends behaviour change communication and care access to low-connectivity communities.",
    icon: Smartphone,
    accent: "from-emerald-500/20 to-teal-500/10 text-emerald-300",
  },
  {
    title: "Custom Business Software",
    tag: "Software Products",
    description:
      "Purpose-built applications engineered around a specific operational bottleneck — not adapted from a generic template.",
    icon: HeartHandshake,
    accent: "from-amber-500/20 to-orange-500/10 text-amber-300",
  },
];

export function FeaturedSolutions() {
  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured solutions"
          title="Products born from real engagements."
          description="Some of our client work has evolved into standalone platforms and tools."
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="flex h-full flex-col gap-5 p-8">
                  <div className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent}`}>
                    <Icon className="size-7" />
                  </div>
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
                      {solution.tag}
                    </span>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{solution.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#93a3c4]">{solution.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
