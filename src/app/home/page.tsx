import { cookies } from "next/headers";
import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { CtaSection } from "@/components/sections/cta/cta-section";
import { JobDiscoverySection } from "@/features/jobs";
import { PricingSection } from "@/features/billing";
import { StarField } from "@/components/shared/star-field";
import { Button } from "@/components/ui/button";
import { getDashboardRole } from "@/lib/roles";

export default async function HomePage() {
  const cookieStore = await cookies();
  const role = getDashboardRole(cookieStore.get("hireloop_role")?.value);

  const roleLabels: Record<string, string> = {
    seeker: "Job Seeker",
    admin: "Admin Console",
    recruiter: "Recruiter Portal",
  };

  return (
    <main className="relative min-h-svh overflow-hidden bg-[#08080a]">
      {/* Subtle brand-coloured haze behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-[radial-gradient(ellipse_at_top,rgba(91,99,246,0.1),transparent_65%)]"
      />

      <StarField />

      {/* Global header with user profile avatar and navigation */}
      <SiteHeader />

      <section className="relative z-10 mx-auto max-w-[1180px] px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 text-center backdrop-blur-md sm:p-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-medium text-[#8b91ff]">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            Signed in as {roleLabels[role] ?? "Job Seeker"}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome to HireLoop
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-white/60 sm:text-lg">
            Explore curated job listings, monitor your matching scores, and manage
            your applications from your personalized dashboard.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="brand"
              size="lg"
              nativeButton={false}
              render={<Link href={`/dashboard/${role}`} />}
              className="px-6"
            >
              Go to Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="#discovery" />}
              className="border-white/[0.15] text-white/80 hover:text-white"
            >
              Browse Open Jobs
            </Button>
          </div>
        </div>
      </section>

      <div id="discovery">
        <JobDiscoverySection />
      </div>

      <PricingSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
