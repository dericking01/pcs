"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { STORY_TIMELINE } from "@/constants/timeline";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!progressRef.current || !sectionRef.current) return;

      gsap.set(progressRef.current, { scaleY: 0 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
        onUpdate: (self) => {
          gsap.set(progressRef.current, { scaleY: self.progress });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we work"
          title="From tangled problem to sustained growth."
          description="As we partner with an organization, the path follows a consistent arc — however complex the starting point."
          className="mb-20"
        />

        <div className="flex gap-10 md:gap-16">
          <div className="relative hidden w-1 shrink-0 rounded-full bg-white/10 md:block">
            <div
              ref={progressRef}
              className="absolute left-0 top-0 w-full origin-top scale-y-0 rounded-full bg-gradient-to-b from-[#0f6fff] to-[#38bdf8]"
              style={{ height: "100%" }}
            />
          </div>

          <div className="flex flex-1 flex-col gap-16 md:gap-24">
            {STORY_TIMELINE.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0.25, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-35% 0px -35% 0px" }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                className="max-w-2xl"
              >
                <span className="mb-4 block font-mono text-sm text-[#38bdf8]">{step.label}</span>
                <h3 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#93a3c4]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
