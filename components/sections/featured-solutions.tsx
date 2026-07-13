"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { PcsButton } from "@/components/ui/pcs-button";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";
import { SOLUTIONS } from "@/constants/solutions";

const FEATURED_SLUGS = [
  "shukurani-points",
  "lumina-development-suite",
  "performance-management-system",
  "infoma",
  "digital-health-platforms",
];

export function FeaturedSolutions() {
  const nominate = SOLUTIONS.find((s) => s.slug === "nominate");
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

        {nominate && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group relative mb-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-yellow-500/[0.07] via-white/[0.03] to-transparent"
          >
            <div className="grid grid-cols-1 items-center gap-10 p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12">
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-yellow-300">
                    Featured App
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
                    {nominate.tag}
                  </span>
                </div>

                <Link href={`/solutions/${nominate.slug}`} data-cursor-hover className="group/link block w-fit">
                  <h3 className="text-3xl font-semibold text-white transition-colors md:text-4xl">
                    {nominate.title}
                  </h3>
                </Link>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-[#93a3c4]">
                  {nominate.description}
                </p>

                {nominate.keyFeatures && (
                  <ul className="mt-6 flex flex-col gap-2">
                    {nominate.keyFeatures.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-white/75">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-[#38bdf8]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {nominate.playStoreUrl && <GooglePlayBadge href={nominate.playStoreUrl} />}
                  <Link
                    href={`/solutions/${nominate.slug}`}
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#38bdf8] transition-transform duration-300 hover:translate-x-1"
                  >
                    View details
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

              {nominate.screenshots && (
                <Link
                  href={`/solutions/${nominate.slug}`}
                  data-cursor-hover
                  className="relative mx-auto flex w-full max-w-sm items-end justify-center gap-4"
                >
                  <div className="relative -rotate-6 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-rotate-3">
                    <Image
                      src={nominate.screenshots[1]}
                      alt=""
                      width={225}
                      height={400}
                      className="h-[260px] w-auto object-cover md:h-[320px]"
                    />
                  </div>
                  <div className="relative z-10 rotate-3 overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:rotate-1">
                    <Image
                      src={nominate.screenshots[0]}
                      alt=""
                      width={225}
                      height={400}
                      className="h-[300px] w-auto object-cover md:h-[380px]"
                    />
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        )}

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
                <Link href={`/solutions/${solution.slug}`} className="block h-full" data-cursor-hover>
                  <GlassCard className="group flex h-full flex-col gap-5 p-8">
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
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-1">
                      View details
                      <ArrowUpRight className="size-4" />
                    </span>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
