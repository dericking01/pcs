import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/shared/magnetic";

const pcsButtonVariants = cva(
  "group/cta relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38bdf8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020617] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#0f6fff] to-[#38bdf8] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_40px_-10px_rgba(15,111,255,0.6)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.14)_inset,0_16px_50px_-10px_rgba(56,189,248,0.7)]",
        outline:
          "border border-white/20 text-white hover:border-white/40 hover:bg-white/5",
        ghost: "text-white/80 hover:text-white",
      },
      size: {
        default: "h-14 px-8 text-base",
        lg: "h-16 px-10 text-base md:text-lg",
        sm: "h-11 px-6 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

interface PcsButtonProps extends VariantProps<typeof pcsButtonVariants> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function PcsButton({
  href,
  children,
  variant,
  size,
  className,
  icon = true,
  onClick,
  type = "button",
}: PcsButtonProps) {
  const content = (
    <span className={cn(pcsButtonVariants({ variant, size }), className)}>
      <span className="relative z-10">{children}</span>
      {icon && (
        <ArrowUpRight className="relative z-10 size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
      )}
    </span>
  );

  return (
    <Magnetic className="inline-block">
      {href ? (
        <Link href={href} onClick={onClick}>
          {content}
        </Link>
      ) : (
        <button type={type} onClick={onClick}>
          {content}
        </button>
      )}
    </Magnetic>
  );
}
