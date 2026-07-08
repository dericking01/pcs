"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
