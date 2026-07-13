import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface GooglePlayBadgeProps {
  href: string;
  className?: string;
}

export function GooglePlayBadge({ href, className }: GooglePlayBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      onClick={(e) => e.stopPropagation()}
      className={cn(
        "group/play inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-4 py-2.5 transition-all duration-300 hover:border-white/30 hover:bg-neutral-900",
        className
      )}
    >
      <Play className="size-6 shrink-0 fill-white text-white transition-transform duration-300 group-hover/play:scale-110" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase tracking-wider text-white/70">Get it on</span>
        <span className="font-semibold text-white">Google Play</span>
      </span>
    </a>
  );
}
