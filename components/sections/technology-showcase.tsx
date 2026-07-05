"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Cpu,
  MessageSquareText,
  PhoneCall,
  Radar,
  Sparkles,
  Video,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const CAPABILITIES = [
  { label: "SMS Engagement", icon: MessageSquareText },
  { label: "IVR Health Lines", icon: PhoneCall },
  { label: "Tele-consultation", icon: Video },
  { label: "Cloud Infrastructure", icon: Cloud },
  { label: "Data Analytics", icon: Radar },
  { label: "Business Intelligence", icon: Cpu },
  { label: "Process Automation", icon: Workflow },
  { label: "AI-Assisted Insight", icon: Sparkles },
];

export function TechnologyShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      <div className="container-px relative mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Technology"
            title="Digital infrastructure behind every engagement."
            description="From SMS and IVR reaching low-connectivity communities to cloud analytics powering executive decisions — technology is woven into how we deliver, not bolted on after."
            className="mb-10"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
                >
                  <Icon className="size-4 shrink-0 text-[#38bdf8]" />
                  <span className="text-sm text-white/85">{cap.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <GlassCard strong className="relative overflow-hidden p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-yellow-400/70" />
                <span className="size-2.5 rounded-full bg-green-400/70" />
              </div>
              <span className="font-mono text-xs text-[#6b7ca0]">pcs-platform.live</span>
            </div>

            <div className="mt-6 space-y-3 font-mono text-xs text-[#93a3c4] md:text-sm">
              <TypingLine text="$ initiating engagement_pipeline.run()" delay={0} />
              <TypingLine text="> awareness campaign deployed via SMS + IVR" delay={0.6} accent />
              <TypingLine text="> data_analytics: behaviour shift trend detected" delay={1.2} />
              <TypingLine text="> tele-consultation queue: connected" delay={1.8} accent />
              <TypingLine text="$ status: systems nominal" delay={2.4} />
            </div>

            <div className="mt-8 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
                  className="w-full rounded-t-md bg-gradient-to-t from-[#0f6fff]/40 to-[#38bdf8]"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-4 flex h-24 items-end">
              <svg viewBox="0 0 300 80" className="h-full w-full overflow-visible">
                <motion.path
                  d="M0,60 C40,10 80,70 120,40 C160,10 200,55 240,25 C260,10 280,30 300,15"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </GlassCard>

          <motion.div
            className="glass absolute -right-6 -top-6 hidden rounded-2xl p-3 md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cloud className="size-6 text-[#38bdf8]" />
          </motion.div>
          <motion.div
            className="glass absolute -bottom-6 -left-6 hidden rounded-2xl p-3 md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <Sparkles className="size-6 text-[#0f6fff]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TypingLine({ text, delay, accent }: { text: string; delay: number; accent?: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      className={accent ? "text-[#38bdf8]" : undefined}
    >
      {text}
    </motion.p>
  );
}
