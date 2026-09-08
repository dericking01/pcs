"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Download, Eye, FileText, X } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { SectionHeading } from "@/components/ui/section-heading";
import { GooglePlayBadge } from "@/components/ui/google-play-badge";
import { ScreenshotGallery } from "@/components/sections/screenshot-gallery";
import { AccountDeletionForm } from "@/components/sections/account-deletion-form";
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
                className="mb-6 flex size-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10"
              >
                {solution.logoImage ? (
                  <Image
                    src={solution.logoImage}
                    alt={`${solution.title} logo`}
                    width={64}
                    height={64}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className={`flex size-full items-center justify-center bg-gradient-to-br ${solution.accent}`}>
                    <Icon className="size-8" />
                  </div>
                )}
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

      {solution.documents && solution.documents.length > 0 && (
        <section className="relative bg-[#020617] pb-20">
          <div className="container-px mx-auto max-w-7xl">
            <SectionHeading eyebrow="Documentation" title="Policies & agreements" className="mb-10" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {solution.documents.map((doc, i) => (
                <motion.div
                  key={doc.url}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px 0px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8"
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gradient-to-br ${solution.accent} opacity-20 blur-3xl`}
                  />
                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${solution.accent}`}
                      >
                        <FileText className="size-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{doc.label}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#93a3c4]">
                          Read or download the official {doc.label.toLowerCase()} for {solution.title}.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={encodeURI(doc.url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                      >
                        <Eye className="size-4" />
                        View
                      </a>
                      <a
                        href={encodeURI(doc.url)}
                        download
                        data-cursor-hover
                        className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#020617] transition-colors hover:bg-white/90"
                      >
                        <Download className="size-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {solution.accountDeletion && <AccountDeletionForm appName={solution.title} />}

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
