import Link from "next/link";
import {
  ArrowRightIcon,
  Building2Icon,
  MapPinIcon,
  WalletIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { JobListing } from "@/data/landing-page";

type JobCardProps = {
  job: JobListing;
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="gap-0 border border-white/[0.07] bg-[#141416]/95 py-0 ring-0 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.95)] backdrop-blur-sm transition-colors hover:border-white/15 hover:bg-[#17171a]/95">
      <CardContent className="flex h-full flex-col p-5">
        <h3 className="text-base font-medium tracking-[-0.02em] text-white">
          {job.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-white/45">
          {job.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-white/[0.08] bg-white/[0.03] px-2.5 text-[11px] font-normal text-white/60"
          >
            <MapPinIcon
              className="size-3 text-rose-400"
              aria-hidden="true"
            />
            {job.location}
          </Badge>

          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-white/[0.08] bg-white/[0.03] px-2.5 text-[11px] font-normal text-white/60"
          >
            <Building2Icon
              className="size-3 text-indigo-400"
              aria-hidden="true"
            />
            {job.workMode}
          </Badge>
        </div>

        <div className="mt-2 flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="gap-1.5 rounded-full border-white/[0.08] bg-white/[0.03] px-2.5 text-[11px] font-normal text-white/60"
          >
            <WalletIcon
              className="size-3 text-purple-400"
              aria-hidden="true"
            />
            {job.payRate}
          </Badge>
        </div>

        <Link
          href={`/jobs/${job.id}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-6 text-xs font-medium text-white/80 transition-colors hover:text-white"
        >
          Apply Now
          <ArrowRightIcon className="size-3" aria-hidden="true" />
        </Link>
      </CardContent>
    </Card>
  );
}
