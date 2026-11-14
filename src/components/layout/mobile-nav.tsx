"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/landing-page";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon-lg"
            aria-label="Open navigation menu"
            className="text-white/70 hover:text-white md:hidden"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-white/10 bg-[#101013] sm:max-w-xs"
      >
        <SheetHeader className="border-b border-white/[0.07]">
          <BrandLogo />
          <SheetTitle className="sr-only">Navigation menu</SheetTitle>
          <SheetDescription className="sr-only">
            Browse HireLoop pages and account links.
          </SheetDescription>
        </SheetHeader>

        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2 border-t border-white/[0.07] p-4">
          <Button
            variant="ghost"
            size="lg"
            nativeButton={false}
            render={<Link href="/login" />}
            className="justify-start text-white/70 hover:text-white"
          >
            Sign In
          </Button>
          <Button
            variant="brand"
            size="lg"
            nativeButton={false}
            render={<Link href="/signup" />}
          >
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
