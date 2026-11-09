import { MapPinIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JobSearchForm() {
  return (
    <form
      action="/jobs"
      className="mx-auto mt-8 flex w-full max-w-xl flex-col gap-2 rounded-2xl border border-white/[0.08] bg-[#121214] p-2 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition-colors focus-within:border-white/20 focus-within:bg-[#141417] sm:flex-row sm:items-center sm:gap-0"
    >
      <div className="flex flex-1 items-center gap-2.5 px-3">
        <SearchIcon
          className="size-4 shrink-0 text-white/35"
          aria-hidden="true"
        />
        <label htmlFor="job-search" className="sr-only">
          Job title, skill or company
        </label>
        <Input
          id="job-search"
          name="q"
          autoComplete="off"
          placeholder="Job title, skill or company"
          className="h-10 rounded-none border-0 bg-transparent px-0 text-sm shadow-none placeholder:text-white/35 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>

      <span
        aria-hidden="true"
        className="h-px w-full shrink-0 bg-white/[0.08] sm:h-6 sm:w-px"
      />

      <div className="flex flex-1 items-center gap-2.5 px-3">
        <MapPinIcon
          className="size-4 shrink-0 text-white/35"
          aria-hidden="true"
        />
        <label htmlFor="job-location" className="sr-only">
          Location or Remote
        </label>
        <Input
          id="job-location"
          name="location"
          autoComplete="off"
          placeholder="Location or Remote"
          className="h-10 rounded-none border-0 bg-transparent px-0 text-sm shadow-none placeholder:text-white/35 focus-visible:ring-0 dark:bg-transparent"
        />
      </div>

      <Button
        type="submit"
        variant="brand"
        aria-label="Search jobs"
        className="h-10 w-full rounded-xl px-4 sm:w-10 sm:px-0"
      >
        <SearchIcon className="size-4" aria-hidden="true" />
      </Button>
    </form>
  );
}
