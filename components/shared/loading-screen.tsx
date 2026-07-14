"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { COUNTRY_FLAGS, LOADING_SCREEN_COUNTRIES } from "@/constants/nav";

export function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Full 4s intro on the very first visit; a shorter 2s replay on every
    // reload after that — never fully skipped, unlike before.
    const hasShownBefore = sessionStorage.getItem("pcs-loaded");
    const duration = reducedMotion ? 200 : hasShownBefore ? 3000 : 6000;

    setLoading(true);
    document.documentElement.style.overflow = "hidden";
    const timeout = setTimeout(() => {
      setLoading(false);
      document.documentElement.style.overflow = "";
      sessionStorage.setItem("pcs-loaded", "1");
    }, duration);
    return () => clearTimeout(timeout);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <Image
              src="/brand/pcs-logo-white.png"
              alt="PCS — Pannecia Consulting Services"
              width={2375}
              height={2323}
              priority
              className="h-16 w-auto md:h-20"
            />
            <p className="text-xs uppercase tracking-[0.4em] text-[#93a3c4]">
              Connecting the Dots
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-4 flex items-center gap-2.5"
            >
              {LOADING_SCREEN_COUNTRIES.map((country, i) => (
                <motion.div
                  key={country}
                  initial={{ opacity: 0, y: 8, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 1 + i * 0.09,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  title={country}
                  className="relative"
                >
                  {i > 0 && (
                    <span className="absolute -left-[7px] top-1/2 size-[3px] -translate-y-1/2 rounded-full bg-[#38bdf8]/50" />
                  )}
                  <div className="overflow-hidden rounded-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.4)] ring-1 ring-white/20">
                    <Image
                      src={`/flags/${COUNTRY_FLAGS[country]}.svg`}
                      alt={country}
                      width={28}
                      height={21}
                      className="block h-[18px] w-[24px] object-cover md:h-[21px] md:w-7"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
