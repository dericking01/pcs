import Image from "next/image";
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
        "inline-flex items-center transition-transform duration-300 hover:scale-[1.03]",
        className
      )}
    >
      <Image
        src="/badges/google-play-badge.png"
        alt="Get it on Google Play"
        width={646}
        height={250}
        className="h-[52px] w-auto"
      />
    </a>
  );
}
