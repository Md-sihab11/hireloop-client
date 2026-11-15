import Link from "next/link";
import { Plus } from "lucide-react";

import { ApplicationsTable } from "@/features/recruiter/components/applications-table";
import { StatCard } from "@/components/dashboard/stat-card";
import { recruiterApplications, recruiterStats } from "@/data/dashboard";

/** Recruiter home screen matching the Figma reference design. */
export function RecruiterDashboard() {
  return (
    <div className="relative space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Welcome back, Alex Sterling
        </h2>
      </header>

      {/* 4 Stat Cards */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {recruiterStats.map((stat) => (
          <StatCard key={stat.label} stat={stat} variant="recruiter" />
        ))}
      </div>

      {/* Recent Applications Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white">
            Recent Applications
          </h2>
          <Link
            href="/dashboard/recruiter/applications"
            className="text-xs font-medium text-white/50 transition hover:text-white"
          >
            View all
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121216]/80 shadow-sm backdrop-blur">
          <ApplicationsTable rows={recruiterApplications} />
        </div>
      </div>

      {/* Floating Action Button matching reference design */}
      <button
        type="button"
        aria-label="Post a new job"
        className="fixed right-8 bottom-8 z-50 flex size-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105 hover:bg-white/90 active:scale-95 focus:outline-none"
      >
        <Plus className="size-6 stroke-[2.5]" />
      </button>
    </div>
  );
}

