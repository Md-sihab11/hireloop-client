import { Badge } from "@/components/ui/badge";
import { cn } from "cn";

/** Status pill colours used across the recruiter and admin tables. */
const tones: Record<string, string> = {
  // applications
  Interviewing: "border-[#5b63f6]/40 bg-[#5b63f6]/15 text-[#8b91ff]",
  New: "border-sky-400/30 bg-sky-400/15 text-sky-300",
  Reviewing: "border-amber-400/30 bg-amber-400/15 text-amber-300",
  Rejected: "border-rose-400/30 bg-rose-400/15 text-rose-300",
  // transactions
  Success: "border-emerald-400/30 bg-emerald-400/15 text-emerald-300",
  Pending: "border-amber-400/30 bg-amber-400/15 text-amber-300",
  Failed: "border-rose-400/30 bg-rose-400/15 text-rose-300",
};

/**
 * Coloured status pill. `label` must be one of the keys above — anything else
 * falls back to a neutral outline so new statuses never render unstyled.
 */
export function StatusBadge({ label }: { label: string }) {
  const isTxn =
    label === "Success" || label === "Pending" || label === "Failed";

  if (isTxn) {
    const dotColor =
      label === "Success"
        ? "text-emerald-400"
        : label === "Pending"
        ? "text-amber-400"
        : "text-rose-400";
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-xs font-medium",
          dotColor
        )}
      >
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <Badge
      variant="outline"
      className={cn(
        "capitalize rounded-full px-2.5 py-0.5 text-[11px] font-medium",
        tones[label] ?? "border-border text-muted-foreground"
      )}
    >
      {label}
    </Badge>
  );
}
