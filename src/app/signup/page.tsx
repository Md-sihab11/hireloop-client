import type { Metadata } from "next";

import { SignupForm } from "@/components/auth/signup-form";
import { SiteHeader } from "@/components/layout/site-header";
import { StarField } from "@/components/shared/star-field";

export const metadata: Metadata = {
  title: "Sign up — HireLoop",
  description: "Create your HireLoop account and start applying.",
};

export default function SignupPage() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-[#08080a]">
      {/* Same brand-coloured haze as the landing hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,rgba(91,99,246,0.12),transparent_65%)]"
      />
      <StarField />

      <SiteHeader />

      <div className="relative flex flex-1 items-center justify-center px-4 py-12 sm:py-16">
        <SignupForm />
      </div>
    </main>
  );
}
