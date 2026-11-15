"use client";

import { Bell, HelpCircle, Mail, Menu, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { DashboardRole } from "@/lib/roles";
import type { SessionUser } from "@/lib/session";

type TopbarProps = {
  /** Current page name, taken from the active sidebar item. */
  title: string;
  user: SessionUser;
  role?: DashboardRole;
  /** Opens the mobile navigation sheet. */
  onOpenMenu: () => void;
};

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

export function DashboardTopbar({
  title,
  user,
  role = "seeker",
  onOpenMenu,
}: TopbarProps) {
  const searchPlaceholder =
    role === "admin"
      ? "Global search..."
      : role === "recruiter"
      ? "Search applications, jobs, or talent..."
      : "Search for opportunities...";

  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center gap-3 border-b border-border bg-[#0a0a0c]/85 px-4 backdrop-blur sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onOpenMenu}
        aria-label="Open navigation"
      >
        <Menu className="size-5" />
      </Button>

      <h1 className="text-base font-semibold text-white sm:text-lg">{title}</h1>

      <div className="ml-auto flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={searchPlaceholder}
            aria-label="Search"
            className="w-64 border-white/10 bg-white/[0.03] pl-9 text-xs text-white placeholder:text-white/40 focus-visible:ring-1 focus-visible:ring-brand/50"
          />
        </div>

        {role === "seeker" ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-white"
              aria-label="Messages"
            >
              <Mail className="size-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/60 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-emerald-500 ring-2 ring-background" />
            </Button>

            <div className="relative">
              <Avatar size="sm" className="size-8 ring-1 ring-white/10">
                {user.image ? (
                  <AvatarImage src={user.image} alt={user.name} />
                ) : null}
                <AvatarFallback className="bg-brand/20 text-xs font-semibold text-[#8b91ff]">
                  SP
                </AvatarFallback>
              </Avatar>
              <span className="absolute -bottom-0.5 -right-0.5 size-2 rounded-full bg-emerald-500 ring-2 ring-[#0a0a0c]" />
            </div>
          </>
        ) : role === "recruiter" ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-white/60 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-background" />
            </Button>

            <div className="flex items-center gap-2.5 pl-1">
              <div className="hidden flex-col text-right sm:flex">
                <span className="text-xs font-semibold text-white">
                  {user.name || "Alex Sterling"}
                </span>
                <span className="text-[10px] text-white/50">TechFlow Inc.</span>
              </div>
              <Avatar size="sm" className="size-8 ring-1 ring-white/10">
                {user.image ? (
                  <AvatarImage src={user.image} alt={user.name} />
                ) : null}
                <AvatarFallback className="bg-brand/20 text-xs font-semibold text-[#8b91ff]">
                  {initialsOf(user.name || "Alex Sterling")}
                </AvatarFallback>
              </Avatar>
            </div>
          </>
        ) : (
          /* Admin */
          <>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="size-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/60 hover:text-white"
              aria-label="Help"
            >
              <HelpCircle className="size-4" />
            </Button>
          </>
        )}
      </div>
    </header>
  );
}
