import { Suspense } from "react";

import { DashboardShell } from "@/components/dashboard/shell";
import { requireUser } from "@/lib/session";

/**
 * Every route under `/dashboard/*` sits behind this layout, so a signed-out
 * visitor is redirected to `/login` before any dashboard markup is produced.
 *
 * The session read lives inside a `<Suspense>` boundary because the app runs
 * with `cacheComponents` — a request-time read can't be part of the static
 * shell, so it streams in behind the fallback instead.
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-background text-sm text-muted-foreground">
          Loading your dashboard…
        </div>
      }
    >
      <DashboardGuard>{children}</DashboardGuard>
    </Suspense>
  );
}

async function DashboardGuard({ children }: { children: React.ReactNode }) {
  // Throws a redirect to /login when there is no session.
  const user = await requireUser();

  return <DashboardShell user={user}>{children}</DashboardShell>;
}
