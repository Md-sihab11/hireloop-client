import Link from "next/link";
import { Calendar } from "lucide-react";

import { SectionCard } from "@/components/dashboard/section-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { TransactionsTable } from "@/features/admin/components/transactions-table";
import { Button } from "@/components/ui/button";
import { adminStats, adminTransactions } from "@/data/dashboard";

/** Admin home screen: platform-wide totals and recent payments. */
export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Dashboard Overview
          </h2>
          <p className="text-sm text-muted-foreground">
            Real-time platform performance and growth metrics.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 bg-white/[0.04] text-xs font-medium text-white hover:bg-white/[0.08]"
          >
            <Calendar className="mr-1.5 size-3.5 text-white/60" />
            Last 30 Days
          </Button>
          <Button
            size="sm"
            className="rounded-lg bg-white px-3.5 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Export Report
          </Button>
        </div>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {adminStats.map((stat) => (
          <StatCard key={stat.label} stat={stat} variant="admin" />
        ))}
      </div>

      <SectionCard
        title="Recent Subscription Transactions"
        description="Latest subscription payments on the platform."
        action={
          <Link
            href="/dashboard/admin/payments"
            className="text-xs font-medium text-white/50 hover:text-white"
          >
            View All Activity
          </Link>
        }
      >
        <TransactionsTable rows={adminTransactions} />
      </SectionCard>
    </div>
  );
}

