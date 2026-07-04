"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("pcs-loaded");
    if (alreadyShown) return;
    setLoading(true);
    document.documentElement.style.overflow = "hidden";
    const timeout = setTimeout(
      () => {
        setLoading(false);
        document.documentElement.style.overflow = "";
        sessionStorage.setItem("pcs-loaded", "1");
      },
      reducedMotion ? 200 : 1500
    );
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
            <div className="flex items-center gap-1 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              <span>PCS</span>
              <span className="h-2 w-2 animate-pulse-glow rounded-full bg-[#38bdf8]" />
            </div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#93a3c4]">
              Connecting the Dots
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
