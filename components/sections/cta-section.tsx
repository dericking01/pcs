"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { PcsButton } from "@/components/ui/pcs-button";
import { COMPANY } from "@/constants/nav";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-40">
      <AuroraBackground showGrid={false} />
      <div className="container-px relative mx-auto max-w-5xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]"
        >
          Let&rsquo;s talk
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Let&rsquo;s Build{" "}
          <span className="text-gradient">What&rsquo;s Next.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-8 max-w-xl text-balance text-lg text-[#93a3c4]"
        >
          Tell us the problem. We&rsquo;ll bring the strategy, the team, and the
          technology to solve it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <PcsButton href="/contact" size="lg">
            Start a conversation
          </PcsButton>
          <PcsButton href={`mailto:${COMPANY.email}`} variant="outline" size="lg" icon={false}>
            {COMPANY.email}
          </PcsButton>
        </motion.div>
      </div>
    </section>
  );
}
