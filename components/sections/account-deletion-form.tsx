"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, UserX } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { PcsButton } from "@/components/ui/pcs-button";
import { SectionHeading } from "@/components/ui/section-heading";

type Status = "idle" | "loading" | "success" | "error";

export function AccountDeletionForm({ appName }: { appName: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/account-deletion", {
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
    <section className="relative bg-[#020617] pb-32">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Account deletion"
          title="Request account deletion"
          description={`Submit this form to request permanent deletion of your ${appName} account and associated data.`}
          className="mb-10"
        />

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
                <h3 className="text-2xl font-semibold text-white">Request received.</h3>
                <p className="max-w-sm text-sm leading-relaxed text-[#93a3c4]">
                  We&rsquo;ve received your account deletion request and will process it,
                  along with confirmation, within a few business days.
                </p>
                <PcsButton
                  variant="outline"
                  icon={false}
                  onClick={() => setStatus("idle")}
                >
                  Submit another request
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
                <div className="flex items-center gap-3">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/10 text-yellow-300">
                    <UserX className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Deletion request form</h3>
                    <p className="mt-1 text-sm text-[#93a3c4]">
                      Only email address is required.
                    </p>
                  </div>
                </div>

                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Username" name="username" placeholder="Your Nominate username" />
                  <Field label="Phone number" name="phone" type="tel" placeholder="+255 7XX XXX XXX" />
                </div>

                <label className="flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-[#93a3c4]">
                    Additional info <span className="normal-case text-[#6b7ca0]">(optional)</span>
                  </span>
                  <textarea
                    name="info"
                    rows={4}
                    placeholder="Anything else we should know about your request..."
                    className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[#6b7ca0] focus:border-[#38bdf8]/50 focus:outline-none"
                  />
                </label>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <PcsButton type="submit" size="lg" className="mt-2 w-full justify-center" icon={false}>
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    "Submit request"
                  )}
                </PcsButton>
              </motion.form>
            )}
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
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
