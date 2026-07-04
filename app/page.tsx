import { Hero } from "@/components/sections/hero";
import { ScrollStory } from "@/components/sections/scroll-story";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { IndustriesShowcase } from "@/components/sections/industries-showcase";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ImpactStats } from "@/components/sections/impact-stats";
import { TechnologyShowcase } from "@/components/sections/technology-showcase";
import { FeaturedSolutions } from "@/components/sections/featured-solutions";
import { ClientsCarousel } from "@/components/sections/clients-carousel";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollStory />
      <AboutPreview />
      <ServicesShowcase />
      <IndustriesShowcase />
      <WhyChooseUs />
      <ImpactStats />
      <TechnologyShowcase />
      <FeaturedSolutions />
      <ClientsCarousel />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
