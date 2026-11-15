import { StatusBadge } from "@/components/dashboard/status-badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { ApplicationRow } from "@/data/dashboard";

const thClass =
  "px-3 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase";

/** "Recent applications" table on the recruiter dashboard. */
export function ApplicationsTable({ rows }: { rows: ApplicationRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-white/[0.06] hover:bg-transparent">
          <TableHead className={thClass}>CANDIDATE NAME</TableHead>
          <TableHead className={cnTh("hidden md:table-cell")}>
            ROLE
          </TableHead>
          <TableHead className={cnTh("hidden lg:table-cell")}>
            DATE APPLIED
          </TableHead>
          <TableHead className={cnTh("hidden lg:table-cell")}>
            EXPERIENCE
          </TableHead>
          <TableHead className={cnTh("text-right")}>STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={`${row.candidate}-${row.role}`}>
            <TableCell className="px-3 py-3.5">
              <div className="flex items-center gap-3">
                <Avatar size="sm">
                  {row.avatar ? (
                    <AvatarImage src={row.avatar} alt={row.candidate} />
                  ) : null}
                  <AvatarFallback>{row.initials}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{row.candidate}</span>
              </div>
            </TableCell>
            <TableCell className="hidden px-3 py-3.5 text-muted-foreground md:table-cell">
              {row.role}
            </TableCell>
            <TableCell className="hidden px-3 py-3.5 text-muted-foreground lg:table-cell">
              {row.applied}
            </TableCell>
            <TableCell className="hidden px-3 py-3.5 text-muted-foreground lg:table-cell">
              {row.experience}
            </TableCell>
            <TableCell className="px-3 py-3.5 text-right">
              <StatusBadge label={row.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function cnTh(extra: string) {
  return `${thClass} ${extra}`;
}

