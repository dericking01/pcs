"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { ARTICLES, ARTICLE_CATEGORIES } from "@/constants/articles";
import { cn } from "@/lib/utils";

export function InsightsGrid() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = category === "All" || article.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {ARTICLE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  category === cat
                    ? "border-[#38bdf8]/50 bg-[#38bdf8]/10 text-white"
                    : "border-white/10 text-[#93a3c4] hover:border-white/25 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-[#6b7ca0]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-[#6b7ca0] focus:border-[#38bdf8]/50 focus:outline-none"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-[#93a3c4]">No insights match your search.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, i) => (
              <motion.div
                key={article.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
              >
                <Link
                  href={`/insights/${article.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-[#38bdf8]/40"
                >
                  <div className="flex items-center justify-between text-xs text-[#6b7ca0]">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[#38bdf8]">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">{article.title}</h3>
                  <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-[#93a3c4]">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-[#6b7ca0]">
                    <span>
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#38bdf8]">
                      Read
                      <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
