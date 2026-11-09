import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero/hero-section";
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
    </main>
  );
}
