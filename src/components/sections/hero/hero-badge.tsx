import { BriefcaseBusinessIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export function HeroBadge() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        aria-hidden="true"
        className="h-px w-10 bg-gradient-to-r from-transparent to-white/25"
      />

      <Badge
        variant="outline"
        className="h-7 gap-2 rounded-full border-white/10 bg-white/[0.03] px-3 text-[10px] font-semibold tracking-[0.14em] whitespace-nowrap text-white uppercase backdrop-blur-sm"
      >
        <BriefcaseBusinessIcon
          className="size-3.5 text-[#ff7a1a]"
          aria-hidden="true"
        />
        <span>56,000+</span>
        <span className="tracking-[0.08em] text-white/50">
          New jobs this month
        </span>
      </Badge>

      <span
        aria-hidden="true"
        className="h-px w-10 bg-gradient-to-l from-transparent to-white/25"
      />
    </div>
  );
}
