"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_TIMELINE } from "@/constants/timeline";

export function AboutTimeline() {
  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading eyebrow="Our journey" title="Six years of connecting the dots." className="mb-20" />

        <div className="relative border-l border-white/10 pl-8 md:pl-12">
          {ABOUT_TIMELINE.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative mb-16 last:mb-0"
            >
              <span className="absolute -left-[41px] top-1.5 flex size-5 items-center justify-center rounded-full border-2 border-[#020617] bg-gradient-to-br from-[#0f6fff] to-[#38bdf8] md:-left-[57px]" />
              <span className="mb-2 block font-mono text-sm text-[#38bdf8]">{item.year}</span>
              <h3 className="mb-3 text-2xl font-semibold text-white md:text-3xl">{item.title}</h3>
              <p className="max-w-2xl text-base leading-relaxed text-[#93a3c4]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
