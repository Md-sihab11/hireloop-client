import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/dashboard/status-badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import type { TransactionRow } from "@/data/dashboard";

const thClass =
  "px-3 py-3.5 text-xs font-semibold tracking-wider text-white/40 uppercase";
const tdClass = "px-3 py-3.5 text-xs";

function initialsOf(email: string) {
  const name = email.split("@")[0] || "U";
  return name.slice(0, 2).toUpperCase();
}

/** Recent subscription payments on the admin dashboard. */
export function TransactionsTable({ rows }: { rows: TransactionRow[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-white/[0.06] hover:bg-transparent">
          <TableHead className={thClass}>USER/RECRUITER</TableHead>
          <TableHead className={`${thClass} hidden md:table-cell`}>
            PLAN TYPE
          </TableHead>
          <TableHead className={`${thClass} hidden lg:table-cell`}>
            TRANSACTION ID
          </TableHead>
          <TableHead className={thClass}>AMOUNT</TableHead>
          <TableHead className={`${thClass} hidden xl:table-cell`}>
            DATE
          </TableHead>
          <TableHead className={`${thClass} text-right`}>STATUS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.txnId}
            className="border-white/[0.04] transition-colors hover:bg-white/[0.02]"
          >
            <TableCell className={tdClass}>
              <div className="flex items-center gap-3">
                <Avatar size="sm" className="size-8 ring-1 ring-white/10">
                  <AvatarFallback className="bg-brand/20 text-[10px] font-semibold text-[#8b91ff]">
                    {initialsOf(row.email)}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate font-medium text-white/90">
                    {row.email}
                  </p>
                  <p className="truncate text-[11px] text-white/45">
                    {row.company}
                  </p>
                </div>
              </div>
            </TableCell>
            <TableCell className={`${tdClass} hidden md:table-cell`}>
              <span className="inline-block rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70">
                {row.plan}
              </span>
            </TableCell>
            <TableCell className={`${tdClass} hidden text-white/50 lg:table-cell`}>
              {row.txnId}
            </TableCell>
            <TableCell className={`${tdClass} font-semibold text-white`}>
              {row.amount}
            </TableCell>
            <TableCell className={`${tdClass} hidden text-white/50 xl:table-cell`}>
              {row.date}
            </TableCell>
            <TableCell className={`${tdClass} text-right`}>
              <StatusBadge label={row.status} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

