"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { PcsButton } from "@/components/ui/pcs-button";
import { SERVICES } from "@/constants/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="flex items-center justify-center py-32">
      <GlassCard strong className="w-full max-w-xl p-8 md:p-10">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-4 py-12 text-center"
            >
              <CheckCircle2 className="size-14 text-[#38bdf8]" />
              <h3 className="text-2xl font-semibold text-white">Message received.</h3>
              <p className="max-w-sm text-sm leading-relaxed text-[#93a3c4]">
                Thank you for reaching out. A member of our team will respond
                within one business day.
              </p>
              <PcsButton
                variant="outline"
                icon={false}
                onClick={() => setStatus("idle")}
              >
                Send another message
              </PcsButton>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div>
                <h3 className="text-2xl font-semibold text-white">Tell us about your project</h3>
                <p className="mt-2 text-sm text-[#93a3c4]">
                  Fill in the details and we&rsquo;ll get back to you shortly.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" required placeholder="Your Name" />
                <Field label="Company" name="company" placeholder="Your organization" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required placeholder="business@company.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+255 7XX XXX XXX" />
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-widest text-[#93a3c4]">
                  Service needed
                </span>
                <select
                  name="service"
                  defaultValue=""
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-[#38bdf8]/50 focus:outline-none"
                >
                  <option value="" disabled className="bg-[#0a1230]">
                    Select a service
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service.slug} value={service.title} className="bg-[#0a1230]">
                      {service.title}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-2">
                <span className="text-xs font-medium uppercase tracking-widest text-[#93a3c4]">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us what you're working on..."
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#6b7ca0] focus:border-[#38bdf8]/50 focus:outline-none"
                />
              </label>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <PcsButton type="submit" size="lg" className="mt-2 w-full justify-center" icon={false}>
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="size-4 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send message"
                )}
              </PcsButton>
            </motion.form>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-widest text-[#93a3c4]">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#6b7ca0] focus:border-[#38bdf8]/50 focus:outline-none"
      />
    </label>
  );
}
