import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function P({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-base leading-relaxed text-[#93a3c4]", className)}>{children}</p>;
}

export function B({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-white">{children}</strong>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 text-lg font-semibold text-white">{children}</h3>;
}

export function A({ href, children }: { href: string; children: React.ReactNode }) {
  const className =
    "font-medium text-[#38bdf8] underline decoration-[#38bdf8]/30 underline-offset-4 transition-colors hover:decoration-[#38bdf8]";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

export function UL({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-base leading-relaxed text-[#93a3c4]">
          <span className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-[#38bdf8]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function OL({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 text-base leading-relaxed text-[#93a3c4]">
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 text-xs font-semibold text-[#38bdf8]">
            {i + 1}
          </span>
          <span className="pt-0.5">{item}</span>
        </li>
      ))}
    </ol>
  );
}

const CALLOUT_TONES = {
  info: "border-[#38bdf8]/25 bg-[#38bdf8]/[0.06] [--tone:#38bdf8]",
  warning: "border-amber-400/25 bg-amber-400/[0.06] [--tone:#fbbf24]",
  success: "border-emerald-400/25 bg-emerald-400/[0.06] [--tone:#34d399]",
};

export function Callout({
  tone = "info",
  icon: Icon,
  title,
  children,
}: {
  tone?: keyof typeof CALLOUT_TONES;
  icon?: LucideIcon;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border p-5 md:p-6", CALLOUT_TONES[tone])}>
      {(Icon || title) && (
        <div className="mb-3 flex items-center gap-3">
          {Icon && <Icon className="size-5 shrink-0 text-[var(--tone)]" />}
          {title && <span className="font-semibold text-white">{title}</span>}
        </div>
      )}
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

export function ContactList({
  items,
}: {
  items: { icon: LucideIcon; label: string; value: React.ReactNode }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {items.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#38bdf8]/10 text-[#38bdf8]">
            <Icon className="size-4" />
          </div>
          <div className="min-w-0">
            <div className="text-xs font-medium uppercase tracking-widest text-[#6b7ca0]">{label}</div>
            <div className="mt-1 break-words text-sm text-white">{value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
