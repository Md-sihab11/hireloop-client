import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaSection } from "@/components/sections/cta/cta-section";
import { JobDiscoverySection } from "@/features/jobs";
import { HeroSection } from "@/components/sections/hero/hero-section";
import { PricingSection } from "@/features/billing";
import { StarField } from "@/components/shared/star-field";

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-[#08080a]">
      {/* Subtle brand-coloured haze behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(91,99,246,0.1),transparent_65%)]"
      />

      <StarField />

      <SiteHeader />
      <HeroSection />
      <JobDiscoverySection />
      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
