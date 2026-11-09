import Link from "next/link";

import { JobCard } from "@/components/sections/discovery/job-card";
import { Button } from "@/components/ui/button";
import { featuredJobs } from "@/data/landing-page";

export function JobDiscoverySection() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-24 pb-20 sm:px-6 sm:pt-28">
      <div className="flex items-center justify-center gap-3">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-[#5b63f6] shadow-[0_0_10px_rgba(91,99,246,0.8)]"
        />

        <span className="text-[11px] font-semibold tracking-[0.22em] text-white/70 uppercase">
          Smart Job Discovery
        </span>

        <span
          aria-hidden="true"
          className="size-1.5 rounded-full bg-[#5b63f6] shadow-[0_0_10px_rgba(91,99,246,0.8)]"
        />
      </div>

      <h2 className="mx-auto mt-5 max-w-md text-center text-3xl leading-[1.15] font-semibold tracking-[-0.04em] text-balance text-white sm:text-[40px]">
        The roles you&apos;d never find by searching
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          variant="secondary"
          size="lg"
          nativeButton={false}
          render={<Link href="/jobs" />}
          className="rounded-lg bg-white px-5 text-[13px] font-medium text-[#08080a] shadow-[0_10px_30px_-15px_rgba(255,255,255,0.4)] hover:bg-white/90 hover:text-[#08080a]"
        >
          View all job open
        </Button>
      </div>
    </section>
  );
}
