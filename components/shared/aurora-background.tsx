import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  className?: string;
  showGrid?: boolean;
}

export function AuroraBackground({ className, showGrid = true }: AuroraBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div
        className="absolute left-1/2 top-[-20%] h-[70vh] w-[70vh] -translate-x-1/2 animate-aurora rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(15,111,255,0.55) 0%, rgba(15,111,255,0) 70%)",
        }}
      />
      <div
        className="absolute right-[5%] top-[10%] h-[50vh] w-[50vh] animate-aurora rounded-full opacity-50 blur-[85px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.5) 0%, rgba(56,189,248,0) 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute left-[0%] bottom-[-10%] h-[55vh] w-[55vh] animate-aurora rounded-full opacity-40 blur-[85px]"
        style={{
          background:
            "radial-gradient(circle, rgba(4,26,74,0.7) 0%, rgba(4,26,74,0) 70%)",
          animationDelay: "-12s",
        }}
      />
      {showGrid && <div className="absolute inset-0 grid-bg" />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]" />
    </div>
  );
}
