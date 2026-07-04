import type { Metadata } from "next";
import { ContactMap } from "@/components/sections/contact-map";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Pannecia Consulting Services Limited in Masaki, Dar es Salaam — info@pcs.co.tz, +255 713 444 449.",
};

export default function ContactPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <ContactMap />
      <div className="container-px bg-[#04081a]">
        <ContactForm />
      </div>
    </div>
  );
}
