"use client";

import * as React from "react";
import { usePathname } from "next/navigation";

import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { dashboardNav } from "@/data/dashboard";
import { roleFromPathname } from "@/lib/roles";

import type { SessionUser } from "@/lib/session";

type DashboardShellProps = {
  user: SessionUser;
  children: React.ReactNode;
};

/**
 * Frame shared by all three dashboards: fixed sidebar on desktop, a slide-in
 * sheet on mobile, and a sticky topbar above the page content.
 *
 * The role is read from the URL (`/dashboard/<role>/…`) so the layout can wrap
 * every dashboard route without knowing which one it is rendering.
 */
export function DashboardShell({ user, children }: DashboardShellProps) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const role = roleFromPathname(pathname);

  // Page title = the sidebar item matching the current route. Falls back to
  // the role's first entry, which is always "Dashboard".
  const activeItem =
    dashboardNav[role].find((item) =>
      item.href === `/dashboard/${role}`
        ? pathname === item.href
        : pathname.startsWith(item.href)
    ) ?? dashboardNav[role][0]!;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 lg:block">
        <DashboardSidebar role={role} user={user} />
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <DashboardSidebar
            role={role}
            user={user}
            onNavigate={() => setMenuOpen(false)}
            inSheet
          />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
        <DashboardTopbar
          title={activeItem.label}
          user={user}
          role={role}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
