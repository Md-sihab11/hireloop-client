import Link from "next/link";
import { Plus } from "lucide-react";
import { ActivityList } from "@/features/seeker/components/activity-list";
import { StatCard } from "@/components/dashboard/stat-card";
import {
  seekerActivityFeed,
  seekerStats,
} from "@/data/dashboard";

/** Job-seeker home screen matching the Figma reference design. */
export function SeekerDashboard() {
  return (
    <div className="relative space-y-6">
      {/* 4 Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {seekerStats.map((stat) => (
          <StatCard key={stat.label} stat={stat} variant="seeker" />
        ))}
      </div>

      {/* Full-width Recent Activity Feed */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Recent Activity
          </h2>
          <Link
            href="/dashboard/seeker/activity"
            className="text-xs font-medium text-white/50 transition hover:text-white"
          >
            View All Activity
          </Link>
        </div>

        <ActivityList items={seekerActivityFeed} />
      </div>

      {/* Floating Action Button matching reference design */}
      <button
        type="button"
        aria-label="Create application"
        className="fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105 hover:bg-white/90 active:scale-95 focus:outline-none"
      >
        <Plus className="size-6 stroke-[2.5]" />
      </button>
    </div>
  );
}

