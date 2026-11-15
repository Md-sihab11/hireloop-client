import { cn } from "cn";

import { iconTone } from "@/data/dashboard";
import type { ActivityItem } from "@/data/dashboard";

const rowTone: Record<ActivityItem["tone"], string> = {
  brand: iconTone.brand,
  green: iconTone.green,
  muted: iconTone.muted,
};

/** Vertical "Recent activity" feed for the seeker screen. */
export function ActivityList({ items }: { items: ActivityItem[] }) {
  return (
    <div className="space-y-2.5">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 rounded-xl border border-white/[0.08] bg-[#121216]/80 px-5 py-3.5 transition hover:border-white/15 hover:bg-[#16161b]"
        >
          <div className="flex items-center gap-3.5 min-w-0">
            <span
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full",
                rowTone[item.tone]
              )}
            >
              <item.icon className="size-4" />
            </span>

            <p className="truncate text-sm text-white/85">
              {item.text}{" "}
              {item.highlight ? (
                <span className="font-medium text-amber-400">
                  {item.highlight}
                </span>
              ) : null}
            </p>
          </div>

          <span className="shrink-0 text-xs text-white/45">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}

