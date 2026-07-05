"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PcsButton } from "@/components/ui/pcs-button";
import { SERVICES } from "@/constants/services";

const FEATURED_SLUGS = [
  "business-management-consulting",
  "digital-transformation-technology-consulting",
  "public-health-hiv-aids-safeguarding",
  "human-resources",
  "accounting-finance",
  "operations-supply-chain-project-management",
];

export function ServicesShowcase() {
  const [hovered, setHovered] = useState<string | null>(null);
  const featured = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));

  return (
    <section className="relative bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Services engineered for real operating problems."
            description="From boardroom strategy to community health screening — one lean, senior team."
          />
          <PcsButton href="/services" variant="outline" className="shrink-0">
            All services
          </PcsButton>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hovered === service.slug;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                onMouseEnter={() => setHovered(service.slug)}
                onMouseLeave={() => setHovered(null)}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition-colors duration-500 hover:border-[#38bdf8]/40"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "radial-gradient(circle, #0f6fff, transparent 70%)" }}
                />

                <motion.div
                  animate={{ rotate: isHovered ? 8 : 0, scale: isHovered ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]"
                >
                  <Icon className="size-7" />
                </motion.div>

                <h3 className="relative text-xl font-semibold text-white">{service.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-[#93a3c4]">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#38bdf8]"
                  data-cursor-hover
                >
                  Read more
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
