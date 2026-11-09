import { Card, CardContent } from "@/components/ui/card";
import { heroStats } from "@/data/landing-page";
import { cn } from "cn";

type StatsGridProps = {
  className?: string;
};

export function StatsGrid({ className }: StatsGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4",
        className
      )}
    >
      {heroStats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.label}
            className="gap-0 border border-white/[0.07] bg-[#131316]/95 py-0 ring-0 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-[#17171a]/95"
          >
            <CardContent className="flex min-h-36 flex-col p-5 lg:min-h-40">
              <Icon className="size-4 text-white/55" aria-hidden="true" />

              <p className="mt-auto pt-8 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[38px]">
                {stat.value}
              </p>
              <p className="mt-2 text-[11px] text-white/45">{stat.label}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
