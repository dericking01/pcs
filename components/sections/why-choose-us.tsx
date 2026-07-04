"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CORE_VALUES } from "@/constants/values";

export function WhyChooseUs() {
  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why choose PCS"
          title="Values that show up in the work, not just the walls."
          align="center"
          className="mx-auto mb-20 items-center"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="gradient-border group relative flex flex-col items-center gap-5 rounded-3xl p-8 text-center"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle at 50% 0%, rgba(56,189,248,0.25), transparent 70%)" }}
                />
                <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]">
                  <Icon className="size-8" />
                </div>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                <p className="text-sm leading-relaxed text-[#93a3c4]">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
