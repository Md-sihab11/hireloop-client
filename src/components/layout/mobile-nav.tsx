"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { LogOutIcon, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

type MobileNavProps = {
  isLoggedIn?: boolean;
  user?: { name?: string | null; email?: string | null; image?: string | null };
  role?: string;
  onSignOut?: () => void;
};

export function MobileNav({
  isLoggedIn = false,
  user,
  role = "seeker",
  onSignOut,
}: MobileNavProps = {}) {
  const router = useRouter();

  async function handleSignOut() {
    if (onSignOut) {
      onSignOut();
      return;
    }
    router.push("/login");
    router.refresh();
  }

  const dashboardHref = `/dashboard/${role}`;

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
          {isLoggedIn ? (
            <>
              <Link
                href={dashboardHref}
                className="flex items-center gap-3 rounded-lg border border-white/[0.1] bg-white/[0.04] p-2.5 transition-colors hover:bg-white/[0.08]"
              >
                <div className="relative">
                  <Avatar size="sm" className="size-8">
                    {user?.image ? (
                      <AvatarImage src={user.image} alt={user?.name ?? "User"} />
                    ) : null}
                    <AvatarFallback className="bg-brand/20 text-xs text-[#8b91ff]">
                      {user?.name?.slice(0, 2).toUpperCase() ?? "HL"}
                    </AvatarFallback>
                  </Avatar>
                  <span
                    className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-emerald-500 ring-2 ring-[#101013]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-medium text-white">
                    {user?.name ?? "Dashboard"}
                  </span>
                  <span className="text-xs text-white/50 capitalize">
                    {role === "admin"
                      ? "Super Admin"
                      : role === "recruiter"
                      ? "Recruiter"
                      : "Job Seeker"}
                  </span>
                </div>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                onClick={handleSignOut}
                aria-label="Sign out"
                className="justify-start text-white/70 hover:text-white/90"
              >
                <LogOutIcon className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
