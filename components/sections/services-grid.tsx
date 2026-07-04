"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/constants/services";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-14 flex flex-wrap gap-2">
          <button
            onClick={() => setActive("all")}
            className={cn(
              "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
              active === "all"
                ? "border-[#38bdf8]/50 bg-[#38bdf8]/10 text-white"
                : "border-white/10 text-[#93a3c4] hover:border-white/25 hover:text-white"
            )}
          >
            All services
          </button>
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                active === cat.key
                  ? "border-[#38bdf8]/50 bg-[#38bdf8]/10 text-white"
                  : "border-white/10 text-[#93a3c4] hover:border-white/25 hover:text-white"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-[#38bdf8]/40"
              >
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "radial-gradient(circle, #0f6fff, transparent 70%)" }}
                />
                <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="size-7" />
                </div>
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
