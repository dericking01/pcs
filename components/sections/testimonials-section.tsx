"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { TESTIMONIALS } from "@/constants/testimonials";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function TiltCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 200 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="perspective-1000 mx-4 w-[380px] shrink-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass-strong flex h-full flex-col gap-6 rounded-3xl p-8"
      >
        <Quote className="size-8 text-[#38bdf8]/60" />
        <p className="text-lg leading-relaxed text-white">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="mt-auto">
          <p className="text-sm font-semibold text-white">{testimonial.name}</p>
          <p className="text-xs text-[#93a3c4]">
            {testimonial.role} &middot; {testimonial.sector}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client experience"
          title="What it's like to work with us."
          align="center"
          className="mx-auto mb-16 items-center"
        />
      </div>

      <Marquee durationSeconds={50}>
        {TESTIMONIALS.map((testimonial) => (
          <TiltCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </Marquee>
    </section>
  );
}
