"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { STORY_TIMELINE } from "@/constants/timeline";
import { SectionHeading } from "@/components/ui/section-heading";

export function ScrollStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!steps.length || !progressRef.current) return;

      gsap.set(steps.slice(1), { opacity: 0.25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${steps.length * 100}%`,
          scrub: 1,
          pin: true,
        },
      });

      tl.to(progressRef.current, {
        scaleY: 1,
        ease: "none",
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
        tl.to(
          steps[i - 1],
          { opacity: 0.25, duration: 0.3 },
          i - 0.15
        ).to(
          step,
          { opacity: 1, duration: 0.3 },
          i - 0.15
        );
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
            {STORY_TIMELINE.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className="max-w-2xl"
              >
                <span className="mb-4 block font-mono text-sm text-[#38bdf8]">{step.label}</span>
                <h3 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  {step.title}
                </h3>
                <p className="text-lg leading-relaxed text-[#93a3c4]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
