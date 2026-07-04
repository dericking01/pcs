"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  strong?: boolean;
  glow?: boolean;
  as?: "div" | "article";
}

export function GlassCard({ children, className, strong, glow, as = "div" }: GlassCardProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={cn(
        "relative overflow-hidden rounded-3xl",
        strong ? "glass-strong" : "glass",
        glow && "glow-secondary",
        className
      )}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
    </Comp>
  );
}
