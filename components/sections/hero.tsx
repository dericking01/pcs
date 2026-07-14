"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { PcsButton } from "@/components/ui/pcs-button";
import { Marquee } from "@/components/ui/marquee";
import { CLIENT_LOGOS } from "@/constants/clients";
import { useMousePosition } from "@/hooks/use-mouse-position";

const HeroScene = dynamic(() => import("@/components/three/hero-scene").then((m) => m.HeroScene), {
  ssr: false,
});

const HEADLINE_LINES = [
  "Connecting Business.",
  "Empowering Growth.",
  "Shaping the Future.",
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.3 },
  },
};

const line = {
  hidden: { y: "110%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: [0.65, 0, 0.35, 1] as const },
  },
};

export function Hero() {
  const { springX, springY } = useMousePosition();

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#020617]">
      <AuroraBackground />
      <HeroScene />

      <MouseGlow springX={springX} springY={springY} />

      {/* Mobile-only scrim: the globe sits centered behind the full-width
          text stack there (no side-by-side room like desktop), so this
          keeps paragraph-text contrast solid without hiding the globe —
          it fades out toward the edges where the globe is more decorative. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] md:hidden"
        style={{
          background:
            "radial-gradient(120% 70% at 30% 45%, rgba(2,6,23,0.78) 0%, rgba(2,6,23,0.45) 45%, transparent 80%)",
        }}
      />

      <div className="container-px relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]"
          >
            <span className="size-1.5 animate-pulse-glow rounded-full bg-[#38bdf8]" />
            Business &middot; Technology &middot; Public Health
          </motion.div>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {HEADLINE_LINES.map((text, i) => (
              <span key={text} className="block overflow-hidden">
                <motion.span
                  className={i === HEADLINE_LINES.length - 1 ? "block text-gradient" : "block"}
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.span variants={line} className="inline-block">
                    {text}
                  </motion.span>
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-8 max-w-xl text-balance text-lg leading-relaxed text-[#93a3c4] md:text-xl"
          >
            PCS partners with organizations to solve complex business, technology,
            and organizational challenges through innovative consulting solutions
            — across East and West Africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PcsButton href="/services" size="lg">
              Explore Services
            </PcsButton>
            <PcsButton href="/contact" variant="outline" size="lg" icon={false}>
              Book Consultation
            </PcsButton>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="relative z-10 border-t border-white/10 py-8"
      >
        <div className="container-px mx-auto max-w-7xl">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.3em] text-[#6b7ca0] md:text-left">
            Trusted by leading organizations
          </p>
          <Marquee>
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="mx-4 flex h-16 w-32 shrink-0 items-center justify-center rounded-xl bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Pannecia Consulting Services</span>
        <ChevronDown className="size-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

function MouseGlow({
  springX,
  springY,
}: {
  springX: ReturnType<typeof useMousePosition>["springX"];
  springY: ReturnType<typeof useMousePosition>["springY"];
}) {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-[1] hidden size-[500px] rounded-full opacity-30 blur-[100px] md:block"
      style={{
        background: "radial-gradient(circle, rgba(15,111,255,0.5), transparent 70%)",
        left: springX,
        top: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    />
  );
}
