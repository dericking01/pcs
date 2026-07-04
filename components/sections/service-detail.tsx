"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { PcsButton } from "@/components/ui/pcs-button";
import { SERVICES } from "@/constants/services";

export function ServiceDetail({ slug }: { slug: string }) {
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return null;
  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] pb-20 pt-44">
        <AuroraBackground />
        <div className="container-px relative mx-auto max-w-7xl">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#93a3c4] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            All services
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0f6fff]/20 to-[#38bdf8]/10 text-[#38bdf8]"
              >
                <Icon className="size-8" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[#93a3c4]"
              >
                {service.description}
              </motion.p>
            </div>
            <PcsButton href="/contact" size="lg" className="shrink-0">
              Discuss this service
            </PcsButton>
          </div>
        </div>
      </section>

      <section className="relative bg-[#020617] py-24">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Benefits" title="What you get" className="mb-10" />
              <ul className="flex flex-col gap-4">
                {service.benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <Check className="mt-0.5 size-5 shrink-0 text-[#38bdf8]" />
                    <span className="text-sm leading-relaxed text-white/85">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading eyebrow="How it works" title="Our workflow" className="mb-10" />
              <div className="flex flex-col gap-3">
                {service.workflow.map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#0f6fff] to-[#38bdf8] text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#93a3c4]">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
