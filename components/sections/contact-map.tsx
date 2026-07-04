"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { COMPANY } from "@/constants/nav";

export function ContactMap() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    COMPANY.mapEmbedQuery
  )}&output=embed`;

  return (
    <div className="relative flex flex-col overflow-hidden bg-[#020617] lg:min-h-[calc(100vh-0px)]">
      <AuroraBackground />
      <div className="container-px relative flex flex-1 flex-col justify-between py-32 lg:pr-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#38bdf8]"
          >
            Get in touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-lg text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl"
          >
            Let&rsquo;s connect the dots on your next challenge.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-md text-balance text-base leading-relaxed text-[#93a3c4]"
          >
            Reach out and a member of our senior team will respond within one
            business day.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass mt-12 overflow-hidden rounded-3xl"
        >
          <iframe
            title="PCS office location"
            src={mapSrc}
            className="h-64 w-full grayscale invert-[0.92] contrast-[1.1] md:h-72"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <div className="mt-8 flex flex-col gap-4">
          <div className="flex items-start gap-3 text-sm text-[#93a3c4]">
            <MapPin className="mt-0.5 size-5 shrink-0 text-[#38bdf8]" />
            <span>
              {COMPANY.address.line1}, {COMPANY.address.line2}
              <br />
              {COMPANY.address.line3}
            </span>
          </div>
          <div className="flex items-center gap-3 text-sm text-[#93a3c4]">
            <Mail className="size-5 shrink-0 text-[#38bdf8]" />
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
              {COMPANY.email}
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#93a3c4]">
            {COMPANY.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 hover:text-white"
              >
                <Phone className="size-5 shrink-0 text-[#38bdf8]" />
                {phone}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
