import Link from "next/link";

import { MobileNav } from "@/components/layout/mobile-nav";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/data/landing-page";

export function SiteHeader() {
  return (
    <header className="relative z-50 w-full px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-14 w-full max-w-[1180px] items-center gap-6 rounded-2xl border border-white/[0.07] bg-[#131316]/85 px-4 shadow-[0_24px_60px_-32px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-5">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden flex-1 items-center justify-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-[13px] font-medium text-white/55 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <Separator
            orientation="vertical"
            className="h-5 bg-white/20"
            aria-hidden="true"
          />
          <Button
            variant="ghost"
            size="lg"
            nativeButton={false}
            render={<Link href="/sign-in" />}
            className="px-3 text-[13px] font-medium text-white/55 hover:text-white"
          >
            Sign In
          </Button>
          <Button
            variant="brand"
            size="lg"
            nativeButton={false}
            render={<Link href="/get-started" />}
            className="px-4 text-[13px]"
          >
            Get Started
          </Button>
        </div>

        <div className="ml-auto md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
