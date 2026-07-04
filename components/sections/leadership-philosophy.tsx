"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ORG_STRUCTURE, LEADERSHIP_PHILOSOPHY } from "@/constants/team";

export function LeadershipPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="container-px relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Leadership philosophy"
          title="Lean at the top, deep across the network."
          description="A senior, hands-on leadership structure built to stay close to every engagement."
          className="mb-20"
        />

        <div className="mb-24 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {LEADERSHIP_PHILOSOPHY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="mb-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-[#93a3c4]">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#38bdf8]/40 bg-[#38bdf8]/10 px-8 py-4 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-white">
              {ORG_STRUCTURE.root}
            </p>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
            {ORG_STRUCTURE.branches.map((branch, i) => (
              <motion.div
                key={branch.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="h-6 w-px bg-white/20" />
                <div className="w-full rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center">
                  <p className="text-sm font-semibold text-white">{branch.title}</p>
                </div>
                <div className="flex w-full flex-col gap-3">
                  {branch.reports.map((report) => (
                    <div key={report} className="flex flex-col items-center gap-3">
                      <div className="h-4 w-px bg-white/10" />
                      <div className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-center">
                        <p className="text-xs text-[#93a3c4]">{report}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
