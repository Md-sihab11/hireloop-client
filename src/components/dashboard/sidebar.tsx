"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LogoutButton } from "@/components/dashboard/logout-button";
import { BrandLogo } from "@/components/shared/brand-logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { dashboardNav } from "@/data/dashboard";
import { cn } from "cn";

import type { SessionUser } from "@/lib/session";
import type { DashboardRole } from "@/lib/roles";

type SidebarProps = {
  role: DashboardRole;
  user: SessionUser;
  /** Close the mobile sheet after a link is clicked. */
  onNavigate?: () => void;
  /**
   * Set when the sidebar is rendered inside the mobile sheet, which floats a
   * close button over the top-right corner — the header then keeps clear of it.
   */
  inSheet?: boolean;
};

/** First letters of the user's name, e.g. "Md Sihab" -> "MS". */
function initialsOf(name: string) {
  return (
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0]!.toUpperCase())
      .join("") || "?"
  );
}

export function DashboardSidebar({
  role,
  user,
  onNavigate,
  inSheet = false,
}: SidebarProps) {
  const pathname = usePathname();
  const rootHref = `/dashboard/${role}`;

  return (
    <div className="flex h-full flex-col border-r border-border bg-[#0d0d10]/95">
      {/* Brand header */}
      <div
        className={cn(
          "flex h-16 shrink-0 items-center justify-between border-b border-border px-4",
          inSheet && "pr-12"
        )}
      >
        <div>
          <BrandLogo />
          {role === "admin" ? (
            <span className="block text-[11px] font-medium text-white/50">
              Admin Console
            </span>
          ) : null}
        </div>
        {role !== "admin" ? (
          <Badge
            variant="outline"
            className="capitalize border-[#5b63f6]/40 bg-[#5b63f6]/10 text-[#8b91ff]"
          >
            {role}
          </Badge>
        ) : null}
      </div>

      {/* Top User Card for Seeker & Recruiter (matches Reference Design) */}
      {role === "seeker" ? (
        <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
          <div className="relative">
            <Avatar size="sm" className="size-9 ring-1 ring-white/10">
              {user.image ? (
                <AvatarImage src={user.image} alt="Seeker Portal" />
              ) : null}
              <AvatarFallback className="bg-brand/20 text-xs font-semibold text-[#8b91ff]">
                SP
              </AvatarFallback>
            </Avatar>
            <span
              className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d0d10]"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              Seeker Portal
            </p>
            <p className="truncate text-xs text-white/50">Professional Tier</p>
          </div>
        </div>
      ) : role === "recruiter" ? (
        <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
          <div className="relative">
            <Avatar size="sm" className="size-9 ring-1 ring-white/10">
              {user.image ? (
                <AvatarImage src={user.image} alt={user.name} />
              ) : null}
              <AvatarFallback className="bg-brand/20 text-xs font-semibold text-[#8b91ff]">
                {initialsOf(user.name || "Alex Sterling")}
              </AvatarFallback>
            </Avatar>
            <span
              className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d0d10]"
              aria-hidden="true"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-white">
              {user.name || "Alex Sterling"}
            </p>
            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="text-xs text-white/50">Recruiter</span>
              <span className="rounded-full bg-[#5b63f6]/20 px-2 py-0.5 text-[10px] font-medium text-[#8b91ff]">
                Premium account
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {dashboardNav[role].map((item) => {
          const isRoot = item.href === rootHref;
          const isActive = isRoot
            ? pathname === rootHref
            : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#5b63f6]/15 text-[#8b91ff]"
                  : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
              )}
            >
              <item.icon className="size-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section: Seeker has Post Resume button; Admin has user profile card */}
      <div className="space-y-2 border-t border-border p-3">
        {role === "seeker" ? (
          <button
            type="button"
            className="w-full rounded-xl bg-white py-2.5 text-center text-sm font-semibold text-black shadow transition hover:bg-white/90"
          >
            Post Resume
          </button>
        ) : role === "admin" ? (
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] p-3">
            <div className="relative">
              <Avatar size="sm" className="size-9 ring-1 ring-white/10">
                {user.image ? (
                  <AvatarImage src={user.image} alt={user.name} />
                ) : null}
                <AvatarFallback className="bg-brand/20 text-xs font-semibold text-[#8b91ff]">
                  {initialsOf(user.name || "Alex Rivera")}
                </AvatarFallback>
              </Avatar>
              <span
                className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0d0d10]"
                aria-hidden="true"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-white">
                {user.name || "Alex Rivera"}
              </p>
              <p className="truncate text-xs text-white/50">Super Admin</p>
            </div>
          </div>
        ) : null}

        <LogoutButton />
      </div>
    </div>
  );
}
