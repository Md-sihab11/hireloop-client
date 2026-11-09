import Link from "next/link";

import { trendingSearches } from "@/data/landing-page";

export function TrendingSearches() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      <span className="mr-1 text-[11px] text-white/35">Trending Position</span>

      {trendingSearches.map((term) => (
        <Link
          key={term}
          href={`/jobs?q=${encodeURIComponent(term)}`}
          className="rounded-full border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-white/55 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
        >
          {term}
        </Link>
      ))}
    </div>
  );
}
