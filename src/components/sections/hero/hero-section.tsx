import { GlobeBackdrop } from "@/components/sections/hero/globe-backdrop";
import { HeroBadge } from "@/components/sections/hero/hero-badge";
import { JobSearchForm } from "@/components/sections/hero/job-search-form";
import { StatsGrid } from "@/components/sections/hero/stats-grid";
import { TrendingSearches } from "@/components/sections/hero/trending-searches";

export function HeroSection() {
  return (
    <section className="relative z-10">
      <div className="mx-auto w-full max-w-4xl px-4 pt-14 text-center sm:pt-20">
        <HeroBadge />

        <h1 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.05] font-semibold tracking-[-0.05em] text-balance text-white sm:text-5xl lg:text-6xl">
          Find Your Dream Job Today
        </h1>

        <p className="mx-auto mt-5 max-w-[540px] text-sm leading-6 text-pretty text-white/55 sm:text-[15px] sm:leading-7">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <JobSearchForm />
        <TrendingSearches />
      </div>

      <div className="relative mt-10 overflow-hidden pb-10 sm:mt-12">
        {/* The globe artwork sits behind both the statement and the stat cards. */}
        <GlobeBackdrop />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
          <p className="mx-auto max-w-2xl px-4 pt-28 text-center text-[26px] leading-[1.25] font-medium tracking-[-0.035em] text-balance text-white/90 drop-shadow-[0_2px_20px_rgba(0,0,0,0.55)] sm:pt-36 sm:text-[34px]">
            Assisting over 15,000 job seekers find their dream positions.
          </p>

          <StatsGrid className="mt-20 sm:mt-24" />
        </div>
      </div>
    </section>
  );
}
