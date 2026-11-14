import type { ReactNode } from "react";

import { BrandLogo } from "@/components/shared/brand-logo";

type AuthCardProps = {
  /** Heading, e.g. "Welcome back". */
  title: string;
  /** One-line explanation under the heading. */
  description: string;
  /** The form itself. */
  children: ReactNode;
  /** Bottom row, usually the "switch to the other page" link. */
  footer: ReactNode;
};

/**
 * The shared dark card that wraps both the login and the signup form so the
 * two pages look and feel identical (same surfaces as the landing page).
 */
export function AuthCard({ title, description, children, footer }: AuthCardProps) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/[0.07] bg-[#141416]/85 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <BrandLogo className="h-7 w-auto" />
        <div className="space-y-1.5">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          <p className="text-sm leading-6 text-white/50">{description}</p>
        </div>
      </div>

      <div className="mt-8 space-y-6">{children}</div>

      <div className="mt-6 border-t border-white/[0.07] pt-5 text-center text-sm text-white/50">
        {footer}
      </div>
    </div>
  );
}
