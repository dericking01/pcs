"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import type { Article } from "@/types";

export function ArticleDetail({ article }: { article: Article }) {
  return (
    <>
      <section className="relative overflow-hidden bg-[#020617] pb-16 pt-44">
        <AuroraBackground />
        <div className="container-px relative mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[#93a3c4] transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            All insights
          </Link>

          <span className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-widest text-[#38bdf8]">
            {article.category}
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            {article.title}
          </motion.h1>

          <div className="mt-6 flex items-center gap-4 text-sm text-[#6b7ca0]">
            <span>
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      <section className="relative bg-[#020617] pb-32">
        <div className="container-px mx-auto max-w-3xl">
          <div className="flex flex-col gap-6">
            {article.content.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-lg leading-relaxed text-[#c3cfe6]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
