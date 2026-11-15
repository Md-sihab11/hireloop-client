import { cn } from "cn";

import { iconTone } from "@/data/dashboard";

import type { Stat } from "@/data/dashboard";

type StatCardProps = {
  stat: Stat;
  /**
   * Layout per reference screen:
   * - "seeker": icon tile top-right, label top-left, value underneath
   * - "recruiter": icon tile on the left, label + value stacked right of it
   * - "admin": label + value, delta percentage top-right
   */
  variant: "seeker" | "recruiter" | "admin";
};

export function StatCard({ stat, variant }: StatCardProps) {
  const tone = iconTone[stat.tone ?? "muted"];

  if (variant === "recruiter") {
    return (
      <div className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#121216]/80 p-5 shadow-sm backdrop-blur">
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]",
            tone
          )}
        >
          <stat.icon className="size-5" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-white/50">
            {stat.label}
          </p>
          <p className="text-2xl font-bold tracking-tight text-white mt-0.5">{stat.value}</p>
        </div>
      </div>
    );
  }

  if (variant === "admin") {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-[#121216]/80 p-4 shadow-sm backdrop-blur">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]",
              tone
            )}
          >
            <stat.icon className="size-4.5 text-white/70" />
          </span>
          {stat.trend ? (
            <span
              className={cn(
                "text-xs font-semibold",
                stat.trend.startsWith("+") || stat.trend.startsWith("↑")
                  ? "text-emerald-400"
                  : "text-white/40"
              )}
            >
              {stat.trend}
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-xs font-medium text-white/50">{stat.label}</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-white">{stat.value}</p>
      </div>
    );
  }

  // Seeker variant matching reference design
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#121216]/80 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-2">
        <p className="text-xs font-medium text-white/50">{stat.label}</p>
        <span
          className={cn(
            "flex size-7 shrink-0 items-center justify-center",
            tone
          )}
        >
          <stat.icon className="size-4.5" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight text-white">{stat.value}</p>
    </div>
  );
}
