"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/section-heading";
import { PcsButton } from "@/components/ui/pcs-button";
import { INDUSTRIES } from "@/constants/industries";
import { COMPANY, COUNTRY_FLAGS } from "@/constants/nav";

export function IndustriesShowcase({ showAllLink = true }: { showAllLink?: boolean }) {
  const [hovered, setHovered] = useState<string | null>(null);

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
            const isHovered = hovered === industry.slug;
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
                animate={{ y: isHovered ? -4 : 0 }}
                onMouseEnter={() => setHovered(industry.slug)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "relative flex flex-col gap-4 rounded-2xl border p-6 transition-colors duration-300",
                  isHovered ? "border-[#38bdf8]/40 bg-white/[0.05]" : "border-white/10 bg-white/[0.02]"
                )}
              >
                <div
                  className={cn(
                    "flex size-11 items-center justify-center rounded-xl text-[#38bdf8] transition-transform duration-300",
                    isHovered ? "scale-110 bg-[#38bdf8]/15" : "bg-white/5"
                  )}
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{industry.name}</h3>
                  <p
                    className={cn(
                      "mt-1.5 text-xs leading-relaxed text-white/80 transition-opacity duration-300",
                      isHovered ? "opacity-100" : "opacity-0"
                    )}
                  >
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
              <motion.div
                key={country}
                whileHover={{ y: -3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                title={country}
                className="overflow-hidden rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.25)] ring-1 ring-white/15"
              >
                <Image
                  src={`/flags/${COUNTRY_FLAGS[country]}.svg`}
                  alt={country}
                  width={48}
                  height={36}
                  className="block h-9 w-12 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
