import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Clients", href: "/clients" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY = {
  name: "Pannecia Consulting Services Limited",
  shortName: "PCS",
  tagline: "Connecting the Dots",
  founded: "18 April 2020",
  foundedYear: 2020,
  founderLocation: "United Republic of Tanzania",
  email: "info@pcs.co.tz",
  phones: ["+255 713 444 449", "+255 713 444 448", "+255 742 075 214"],
  address: {
    line1: "14111 Kimweri Rd, Masaki",
    line2: "P.O. Box 38556, Msasani",
    line3: "Kinondoni, Dar es Salaam",
    line4: "Tanzania",
  },
  countries: ["Tanzania", "Kenya", "Ghana", "Nigeria"],
  mapEmbedQuery: "14111 Kimweri Rd, Masaki, Dar es Salaam, Tanzania",
};
