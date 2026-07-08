"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { PcsButton } from "@/components/ui/pcs-button";
import { SOLUTIONS } from "@/constants/solutions";

const FEATURED_SLUGS = [
  "shukurani-points",
  "lumina-development-suite",
  "performance-management-system",
  "infoma",
  "sales-agent-field-marketing-platform",
  "digital-health-platforms",
];

export function FeaturedSolutions() {
  const featured = SOLUTIONS.filter((s) => FEATURED_SLUGS.includes(s.slug));

  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Featured solutions"
            title="Products born from real engagements."
            description="Some of our client work has evolved into standalone platforms and tools."
          />
          <PcsButton href="/solutions" variant="outline" className="shrink-0">
            View all solutions
          </PcsButton>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              >
                <GlassCard className="flex h-full flex-col gap-5 p-8">
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
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
