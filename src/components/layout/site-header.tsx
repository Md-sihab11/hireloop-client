"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BellIcon, LogOutIcon, UserIcon, LayoutDashboardIcon } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/data/landing-page";

function initialsOf(name: string) {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]!.toUpperCase())
      .join("") || "HL"
  );
}

/** Reads the role cookie on the client side. */
function getStoredRole(): string {
  if (typeof document === "undefined") return "seeker";
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith("hireloop_role="))
    ?.split("=")[1];
  return cookie || localStorage.getItem("hireloop_role") || "seeker";
}

export function SiteHeader() {
  const { data, isPending } = useSession();
  const router = useRouter();
  const [role, setRole] = useState<string>("seeker");
  const [localUser, setLocalUser] = useState<{ name?: string; email?: string } | null>(null);
  const [hasRoleCookie, setHasRoleCookie] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedRole = getStoredRole();
    setRole(savedRole);
    setHasRoleCookie(
      document.cookie.includes("hireloop_role=") ||
      document.cookie.includes("hireloop_session=") ||
      !!localStorage.getItem("hireloop_role")
    );
    try {
      const saved = localStorage.getItem("hireloop_user");
      if (saved) setLocalUser(JSON.parse(saved));
    } catch {
      // ignored
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownOpen]);

  const roleNames: Record<string, string> = {
    admin: "Alex Rivera",
    recruiter: "Alex Sterling",
    seeker: "Seeker Portal",
  };

  const isLoggedIn = !!data?.user || hasRoleCookie;
  const user = data?.user || (hasRoleCookie ? {
    name: localUser?.name || roleNames[role] || "Account",
    email: localUser?.email || `${role}@hireloop.com`,
    image: null,
  } : undefined);
  const dashboardHref = `/dashboard/${role}`;

  const roleLabel =
    role === "admin" ? "Super Admin" : role === "recruiter" ? "Recruiter" : "Job Seeker";

  async function handleSignOut() {
    setDropdownOpen(false);
    try {
      await signOut();
    } catch {
      // ignored
    }
    document.cookie = "hireloop_role=; path=/; max-age=0";
    document.cookie = "hireloop_session=; path=/; max-age=0";
    document.cookie = "hireloop_user=; path=/; max-age=0";
    localStorage.removeItem("hireloop_role");
    localStorage.removeItem("hireloop_user");
    setHasRoleCookie(false);
    router.push("/login");
    router.refresh();
  }

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

        <div className="ml-auto hidden items-center gap-2 md:flex">
          {/* While session is loading, show a placeholder skeleton to avoid layout shift */}
          {isPending ? (
            <div className="h-8 w-24 animate-pulse rounded-full bg-white/[0.06]" />
          ) : isLoggedIn ? (
            <>
              {/* Notification bell */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Notifications"
                className="relative text-white/55 hover:text-white"
              >
                <BellIcon className="h-4 w-4" />
                <span
                  className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 ring-2 ring-[#131316]"
                  aria-hidden="true"
                />
              </Button>

              <Separator orientation="vertical" className="h-5 bg-white/20" aria-hidden="true" />

              {/* Profile pill — clicks open dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setDropdownOpen((v) => !v)}
                  aria-label="Open account menu"
                  aria-expanded={dropdownOpen}
                  className="group flex items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.04] py-1 pl-1.5 pr-3 transition-colors hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  <div className="relative">
                    <Avatar size="sm" className="size-7 ring-1 ring-white/10">
                      {user?.image ? (
                        <AvatarImage src={user.image} alt={user?.name ?? "User"} />
                      ) : null}
                      <AvatarFallback className="bg-indigo-500/20 text-[11px] font-semibold text-indigo-300">
                        {initialsOf(user?.name ?? "HL")}
                      </AvatarFallback>
                    </Avatar>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-emerald-500 ring-2 ring-[#131316]"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-medium text-white/90 group-hover:text-white">
                      {user?.name?.split(" ")[0] ?? "Account"}
                    </span>
                    <span className="text-[10px] text-white/45">{roleLabel}</span>
                  </div>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 top-full z-50 mt-2 w-52 origin-top-right rounded-xl border border-white/[0.08] bg-[#1a1a1f] py-1.5 shadow-2xl ring-1 ring-black/20">
                    <div className="flex items-center gap-2.5 px-3 py-2.5">
                      <Avatar size="sm" className="size-8 ring-1 ring-white/10">
                        {user?.image ? (
                          <AvatarImage src={user.image} alt={user?.name ?? "User"} />
                        ) : null}
                        <AvatarFallback className="bg-indigo-500/20 text-xs font-semibold text-indigo-300">
                          {initialsOf(user?.name ?? "HL")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-medium text-white">
                          {user?.name ?? "Account"}
                        </p>
                        <p className="truncate text-[11px] text-white/40">{user?.email}</p>
                      </div>
                    </div>
                    <div className="my-1 h-px bg-white/[0.07]" />
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                      onClick={() => { setDropdownOpen(false); router.push(dashboardHref); }}
                    >
                      <LayoutDashboardIcon className="h-3.5 w-3.5 shrink-0" />
                      Dashboard
                    </button>
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] text-white/70 transition-colors hover:bg-white/[0.05] hover:text-white"
                      onClick={() => { setDropdownOpen(false); router.push(`${dashboardHref}/settings`); }}
                    >
                      <UserIcon className="h-3.5 w-3.5 shrink-0" />
                      Profile & Settings
                    </button>
                    <div className="my-1 h-px bg-white/[0.07]" />
                    <button
                      type="button"
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-[13px] text-red-400/80 transition-colors hover:bg-white/[0.05] hover:text-red-400"
                      onClick={handleSignOut}
                    >
                      <LogOutIcon className="h-3.5 w-3.5 shrink-0" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Separator orientation="vertical" className="h-5 bg-white/20" aria-hidden="true" />
              <Button
                variant="ghost"
                size="lg"
                nativeButton={false}
                render={<Link href="/login" />}
                className="px-3 text-[13px] font-medium text-white/55 hover:text-white"
              >
                Sign In
              </Button>
              <Button
                variant="brand"
                size="lg"
                nativeButton={false}
                render={<Link href="/signup" />}
                className="px-4 text-[13px]"
              >
                Get Started
              </Button>
            </>
          )}
        </div>

        <div className="ml-auto md:hidden">
          <MobileNav
            isLoggedIn={isLoggedIn}
            user={user}
            role={role}
            onSignOut={handleSignOut}
          />
        </div>
      </div>
    </header>
  );
}
