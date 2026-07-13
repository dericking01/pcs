"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScreenshotGalleryProps {
  screenshots: string[];
  alt: string;
  onSelect: (index: number) => void;
}

export function ScreenshotGallery({ screenshots, alt, onSelect }: ScreenshotGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateEdges() {
    const el = scrollRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);

    const items = [...el.children] as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let closestDist = Infinity;
    items.forEach((item, i) => {
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const dist = Math.abs(itemCenter - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }

  useEffect(() => {
    updateEdges();
  }, []);

  function scrollToIndex(index: number) {
    const el = scrollRef.current;
    if (!el) return;
    const item = el.children[index] as HTMLElement | undefined;
    if (!item) return;
    el.scrollTo({
      left: item.offsetLeft - (el.clientWidth - item.offsetWidth) / 2,
      behavior: "smooth",
    });
  }

  function scrollByDir(dir: 1 | -1) {
    scrollToIndex(Math.min(Math.max(active + dir, 0), screenshots.length - 1));
  }

  return (
    <div className="container-px relative mx-auto max-w-7xl">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-25 blur-[100px]"
        style={{ background: "radial-gradient(circle, #0f6fff, transparent 70%)" }}
      />

      <div
        ref={scrollRef}
        onScroll={updateEdges}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 py-6 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      >
        {screenshots.map((src, i) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => onSelect(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            animate={{
              scale: active === i ? 1 : 0.92,
              opacity: active === i ? 1 : 0.55,
            }}
            whileHover={{ y: -8, opacity: 1 }}
            data-cursor-hover
            className="group relative shrink-0 snap-center overflow-hidden rounded-[28px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-[opacity] duration-300"
          >
            <div className="pointer-events-none absolute inset-0 z-10 rounded-[28px] ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-[#38bdf8]/40" />
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              width={225}
              height={400}
              className="h-[360px] w-auto object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-[460px]"
            />
          </motion.button>
        ))}
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            disabled={atStart}
            aria-label="Scroll left"
            className="glass absolute left-0 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity duration-300 hover:border-[#38bdf8]/40 disabled:pointer-events-none disabled:opacity-0 md:flex"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            disabled={atEnd}
            aria-label="Scroll right"
            className="glass absolute right-0 top-1/2 z-20 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full text-white transition-opacity duration-300 hover:border-[#38bdf8]/40 disabled:pointer-events-none disabled:opacity-0 md:flex"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      <div className="mt-2 flex items-center justify-center gap-2">
        {screenshots.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              active === i ? "w-6 bg-[#38bdf8]" : "w-1.5 bg-white/20 hover:bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
