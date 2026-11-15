import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Construction } from "lucide-react";

import { dashboardNav } from "@/data/dashboard";
import { DASHBOARD_ROLES, type DashboardRole } from "@/lib/roles";

export const metadata: Metadata = {
  title: "Coming soon — HireLoop",
};

// The whole page is derived from the URL, so it blocks instead of streaming a
// placeholder — see https://nextjs.org/docs/messages/instant-shell-url-data
export const instant = false;

type RouteParams = { role: string; slug: string[] };

/**
 * Placeholder for the sidebar sections that don't have a screen yet
 * (Jobs, Saved, Billing, Settings, …). It keeps every nav link functional
 * while the real pages — and their APIs — are built later.
 */
export default async function DashboardSectionPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { role, slug } = await params;

  if (!DASHBOARD_ROLES.includes(role as DashboardRole)) notFound();

  const label = dashboardNav[role as DashboardRole].find(
    (item) => item.href === `/dashboard/${role}/${slug.join("/")}`
  )?.label;

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-card/40 px-6 py-16 text-center">
      <span className="flex size-12 items-center justify-center rounded-full bg-white/[0.06] text-[#8b91ff]">
        <Construction className="size-6" />
      </span>
      <h2 className="text-lg font-semibold">{label ?? "This section"}</h2>
      <p className="max-w-sm text-sm text-muted-foreground">
        This screen is coming soon. The dashboard data and API endpoints will
        be wired up here later.
      </p>
    </div>
  );
}
