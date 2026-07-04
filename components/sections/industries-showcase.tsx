"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PcsButton } from "@/components/ui/pcs-button";
import { INDUSTRIES } from "@/constants/industries";
import { COMPANY } from "@/constants/nav";

export function IndustriesShowcase({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-px relative mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Industry expertise"
            title="Deep sector fluency, from mine site to boardroom."
            description="Our directors' operating history spans these sectors directly — not from the outside looking in."
          />
          {showAllLink && (
            <PcsButton href="/industries" variant="outline" className="shrink-0">
              All industries
            </PcsButton>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors duration-300 hover:border-[#38bdf8]/40 hover:bg-white/[0.05]"
              >
                <div className="flex size-11 items-center justify-center rounded-xl bg-white/5 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#38bdf8]/15">
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#93a3c4] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 border-t border-white/10 pt-10 md:flex-row md:justify-between">
          <p className="text-sm uppercase tracking-[0.3em] text-[#6b7ca0]">Regional footprint</p>
          <div className="flex flex-wrap items-center gap-3">
            {COMPANY.countries.map((country) => (
              <span
                key={country}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white"
              >
                <span className="size-1.5 rounded-full bg-[#38bdf8]" />
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
