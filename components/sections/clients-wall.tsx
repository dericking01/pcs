"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { CLIENT_LOGOS } from "@/constants/clients";

export function ClientsWall() {
  return (
    <section className="relative bg-[#020617] py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client roster"
          title="Organizations that trust us with their hardest problems."
          className="mb-16"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {CLIENT_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
              className="group flex h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#38bdf8]/40"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="max-h-12 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
