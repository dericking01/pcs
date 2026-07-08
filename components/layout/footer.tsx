import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, COMPANY } from "@/constants/nav";
import { SERVICES } from "@/constants/services";

const COUNTRY_FLAGS: Record<string, string> = {
  Tanzania: "tz",
  Kenya: "ke",
  Ghana: "gh",
  Nigeria: "ng",
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#020617]">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container-px relative mx-auto max-w-7xl py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="relative flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#0f6fff] to-[#38bdf8]">
                <span className="size-2.5 rounded-full bg-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-white">PCS</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#93a3c4]">
              {COMPANY.name} — {COMPANY.tagline}. Connecting business, technology,
              and community impact across East and West Africa.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {COMPANY.countries.map((country) => (
                <span
                  key={country}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 py-1 pl-1.5 pr-3 text-xs text-[#93a3c4]"
                >
                  <Image
                    src={`/flags/${COUNTRY_FLAGS[country]}.svg`}
                    alt=""
                    width={20}
                    height={15}
                    className="h-3.5 w-5 rounded-[3px] object-cover"
                  />
                  {country}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Explore</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#93a3c4] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Services</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[#93a3c4] transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white">Contact</h3>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-[#93a3c4]">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#38bdf8]" />
                <span>
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#93a3c4]">
                <Mail className="size-4 shrink-0 text-[#38bdf8]" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex flex-col gap-1 text-sm text-[#93a3c4]">
                {COMPANY.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-white">
                    <Phone className="size-4 shrink-0 text-[#38bdf8]" />
                    {phone}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#6b7cA0] md:flex-row">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Established {COMPANY.founded} · {COMPANY.founderLocation}</p>
        </div>
      </div>
    </footer>
  );
}
