"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { PcsButton } from "@/components/ui/pcs-button";
import { CLIENT_LOGOS } from "@/constants/clients";

const rowA = CLIENT_LOGOS.slice(0, Math.ceil(CLIENT_LOGOS.length / 2));
const rowB = CLIENT_LOGOS.slice(Math.ceil(CLIENT_LOGOS.length / 2));

function LogoTile({ logo }: { logo: (typeof CLIENT_LOGOS)[number] }) {
  return (
    <div className="mx-4 flex h-24 w-40 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#38bdf8]/40 hover:bg-white/[0.06]">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        className="max-h-10 w-auto object-contain opacity-90 transition-opacity duration-300 hover:opacity-100"
      />
    </div>
  );
}

export function ClientsCarousel() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our clients"
            title="Trusted across banking, telecoms, and global development."
            description="From multinational operators to global development institutions."
          />
          <PcsButton href="/clients" variant="outline" className="shrink-0">
            View all clients
          </PcsButton>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <Marquee>
          {rowA.map((logo) => (
            <LogoTile key={logo.name} logo={logo} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowB.map((logo) => (
            <LogoTile key={logo.name} logo={logo} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
