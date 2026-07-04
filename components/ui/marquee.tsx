"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  durationSeconds?: number;
}

export function Marquee({
  children,
  className,
  reverse,
  pauseOnHover = true,
  durationSeconds,
}: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden", className)}>
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          style={durationSeconds ? { animationDuration: `${durationSeconds}s` } : undefined}
          className={cn(
            "flex min-w-full shrink-0 items-center justify-around gap-16",
            reverse ? "animate-marquee-reverse" : "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
