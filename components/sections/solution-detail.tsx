"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";
import { ScreenshotGallery } from "@/components/sections/screenshot-gallery";
import { SOLUTIONS } from "@/constants/solutions";

export function SolutionDetail({ slug }: { slug: string }) {
  const solution = SOLUTIONS.find((s) => s.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!solution) return null;
  const Icon = solution.icon;
  const screenshots = solution.screenshots ?? [];

  function showPrev() {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length));
  }
  function showNext() {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % screenshots.length));
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] pb-20 pt-44">
        <AuroraBackground />
        <div className="container-px relative mx-auto max-w-7xl">
          <Link
            href="/solutions"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#93a3c4] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            All solutions
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent}`}
              >
                <Icon className="size-8" />
              </motion.div>
              <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]">
                {solution.tag}
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
              >
                {solution.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-[#93a3c4]"
              >
                {solution.description}
              </motion.p>

              {solution.playStoreUrl && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8"
                >
                  <GooglePlayBadge href={solution.playStoreUrl} />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {screenshots.length > 0 && (
        <section className="relative overflow-hidden bg-[#020617] pb-8">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="See it in action" title="App screenshots" className="mb-10" />
          </div>
          <ScreenshotGallery
            screenshots={screenshots}
            alt={solution.title}
            onSelect={(i) => setLightboxIndex(i)}
          />
        </section>
      )}

      {solution.keyFeatures && (
        <section className="relative bg-[#020617] py-16">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="Key features" title="What it does" className="mb-10" />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {solution.keyFeatures.map((feature, i) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-[#38bdf8]" />
                  <span className="text-sm leading-relaxed text-white/85">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="size-6" />
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] overflow-hidden rounded-2xl"
            >
              <Image
                src={screenshots[lightboxIndex]}
                alt={`${solution.title} screenshot ${lightboxIndex + 1}`}
                width={900}
                height={1600}
                className="h-[85vh] w-auto object-contain"
              />
            </motion.div>

            {screenshots.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
                aria-label="Next screenshot"
              >
                <ChevronRight className="size-6" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
