import type { Metadata } from "next";
import Link from "next/link";
import {
  Bookmark,
  Briefcase,
  Check,
  ChevronDown,
  DollarSign,
  Filter,
  Globe,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StarField } from "@/components/shared/star-field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Browse Jobs — HireLoop",
  description: "Explore 50,000+ curated jobs matched by AI.",
};

const allJobs = [
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    company: "TechFlow Systems",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    experience: "Senior",
    salary: "$140k - $180k",
    posted: "2 hours ago",
    badge: "Hot Job",
    category: "Design",
    description:
      "Lead our core design systems and design next-generation collaborative workflows for cloud architectures.",
  },
  {
    id: "lead-frontend-engineer",
    title: "Lead Frontend Engineer",
    company: "FinGrid Solutions",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    experience: "Lead",
    salary: "$165k - $210k",
    posted: "5 hours ago",
    badge: "Featured",
    category: "Engineering",
    description:
      "Architect high-throughput real-time financial dashboards using Next.js, WebGL, and TypeScript.",
  },
  {
    id: "ux-researcher",
    title: "UX Researcher",
    company: "CreativeStudio",
    location: "Austin, TX (On-site)",
    type: "Full-time",
    experience: "Mid-level",
    salary: "$110k - $145k",
    posted: "1 day ago",
    badge: "New",
    category: "Research",
    description:
      "Drive generative and evaluative qualitative user studies across creator economy mobile apps.",
  },
  {
    id: "machine-learning-engineer",
    title: "Machine Learning Engineer",
    company: "HealthAI Corp",
    location: "Boston, MA (Remote)",
    type: "Full-time",
    experience: "Senior",
    salary: "$180k - $250k",
    posted: "1 day ago",
    badge: "Hot Job",
    category: "AI & ML",
    description:
      "Train multi-modal foundation models for diagnostic healthcare telemetry and clinical assistants.",
  },
  {
    id: "backend-architect",
    title: "Backend Architect",
    company: "CloudScale AI",
    location: "Remote (US)",
    type: "Contract",
    experience: "Lead",
    salary: "$150k - $190k",
    posted: "2 days ago",
    badge: "Verified",
    category: "Engineering",
    description:
      "Scale our distributed vector search engine and low-latency inference pipelines globally.",
  },
  {
    id: "product-manager",
    title: "Product Manager",
    company: "Nexus Labs",
    location: "Seattle, WA (Hybrid)",
    type: "Full-time",
    experience: "Mid-level",
    salary: "$135k - $175k",
    posted: "3 days ago",
    badge: "Growing",
    category: "Product",
    description:
      "Drive go-to-market strategies and feature velocity for our enterprise security compliance platform.",
  },
];

export default function BrowseJobsPage() {
  return (
    <main className="relative min-h-svh bg-[#08080a] text-white">
      <StarField />
      <SiteHeader />

      {/* Hero Header & Search Bar */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-xs font-semibold tracking-wider text-indigo-400">
            <Sparkles className="size-3.5" />
            50,000+ VERIFIED OPPORTUNITIES
          </div>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Find your next high-impact role
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/60 sm:text-base">
            Curated vacancies matched directly to your skill graph and salary expectations.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="mt-8 flex flex-col gap-2 rounded-2xl border border-white/[0.1] bg-[#121217]/90 p-2 shadow-2xl backdrop-blur-xl sm:flex-row sm:items-center">
          <div className="relative flex flex-1 items-center">
            <Search className="pointer-events-none absolute left-3.5 size-4 text-white/40" />
            <Input
              placeholder="Search by job title, skill, or keywords..."
              className="h-11 border-0 bg-transparent pl-10 text-sm text-white placeholder:text-white/40 focus-visible:ring-0"
            />
          </div>
          <div className="hidden h-6 w-px bg-white/10 sm:block" />
          <div className="relative flex items-center sm:w-60">
            <MapPin className="pointer-events-none absolute left-3.5 size-4 text-white/40" />
            <Input
              placeholder="City, state, or Remote"
              className="h-11 border-0 bg-transparent pl-10 text-sm text-white placeholder:text-white/40 focus-visible:ring-0"
            />
          </div>
          <Button variant="brand" size="lg" className="h-11 px-6 font-semibold">
            Search Jobs
          </Button>
        </div>
      </section>

      {/* Main Grid: Sidebar Filters + Job Cards */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Filters */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#101014]/80 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Filter className="size-4 text-indigo-400" />
                  Filters
                </span>
                <button
                  type="button"
                  className="text-xs text-white/45 hover:text-white transition"
                >
                  Clear all
                </button>
              </div>

              {/* Job Type Filter */}
              <div className="pt-4">
                <p className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                  Job Type
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    { label: "Full-time", count: "1.2k" },
                    { label: "Contract", count: "480" },
                    { label: "Remote", count: "940" },
                    { label: "Hybrid", count: "320" },
                    { label: "Part-time", count: "115" },
                  ].map(({ label, count }) => (
                    <label
                      key={label}
                      className="flex cursor-pointer items-center justify-between text-xs text-white/70 hover:text-white"
                    >
                      <div className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          defaultChecked={label === "Full-time"}
                          className="size-3.5 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-0"
                        />
                        <span>{label}</span>
                      </div>
                      <span className="text-[11px] text-white/40">{count}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                  Experience Level
                </p>
                <div className="mt-3 space-y-2">
                  {["Entry-level", "Mid-level", "Senior", "Lead / Principal"].map(
                    (level) => (
                      <label
                        key={level}
                        className="flex cursor-pointer items-center gap-2.5 text-xs text-white/70 hover:text-white"
                      >
                        <input
                          type="checkbox"
                          defaultChecked={level === "Senior"}
                          className="size-3.5 rounded border-white/20 bg-white/5 text-indigo-600 focus:ring-0"
                        />
                        <span>{level}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* Salary Range */}
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="text-xs font-semibold tracking-wider text-white/50 uppercase">
                  Minimum Salary
                </p>
                <div className="mt-3 space-y-2">
                  {["$50k+", "$100k+", "$140k+", "$180k+"].map((range) => (
                    <label
                      key={range}
                      className="flex cursor-pointer items-center gap-2.5 text-xs text-white/70 hover:text-white"
                    >
                      <input
                        type="radio"
                        name="salary"
                        defaultChecked={range === "$100k+"}
                        className="size-3.5 text-indigo-600 focus:ring-0"
                      />
                      <span>{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Job Listings Column */}
          <div className="lg:col-span-3 space-y-4">
            {/* Header: Found count + Sort Dropdown */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  Found 1,248 Professional Jobs
                </h2>
                <p className="text-xs text-white/50">
                  Showing top matching verified opportunities
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-white/50">Sort by:</span>
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/[0.06]"
                >
                  Most Recent
                  <ChevronDown className="size-3 text-white/50" />
                </button>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-3.5">
              {allJobs.map((job) => (
                <div
                  key={job.id}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#121217]/80 p-5 transition-all hover:border-white/20 hover:bg-[#15151c] backdrop-blur-sm"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3.5">
                      {/* Company logo placeholder */}
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-indigo-500/10 text-base font-bold text-indigo-400">
                        {job.company.charAt(0)}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/jobs/${job.id}`}
                            className="font-semibold text-white transition hover:text-indigo-300"
                          >
                            {job.title}
                          </Link>
                          {job.badge ? (
                            <span className="rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-semibold text-indigo-400">
                              {job.badge}
                            </span>
                          ) : null}
                        </div>

                        <p className="text-xs text-white/60 mt-0.5">
                          {job.company} · {job.location}
                        </p>

                        <p className="mt-2 text-xs leading-relaxed text-white/50 line-clamp-2 max-w-xl">
                          {job.description}
                        </p>

                        {/* Pills */}
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
                          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-white/70">
                            {job.type}
                          </span>
                          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-white/70">
                            {job.experience}
                          </span>
                          <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-emerald-400">
                            {job.salary}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                      <span className="text-[11px] text-white/40">{job.posted}</span>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label="Save job"
                          className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:border-white/20 hover:text-white"
                        >
                          <Bookmark className="size-4" />
                        </button>
                        <Button
                          variant="brand"
                          size="sm"
                          nativeButton={false}
                          render={<Link href={`/jobs/${job.id}`} />}
                          className="px-4 text-xs font-semibold"
                        >
                          Easy Apply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 pt-6">
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 text-xs text-white/70"
              >
                Previous
              </Button>
              <button
                type="button"
                className="size-8 rounded-lg bg-indigo-600 text-xs font-semibold text-white"
              >
                1
              </button>
              <button
                type="button"
                className="size-8 rounded-lg border border-white/10 text-xs text-white/70 hover:bg-white/5"
              >
                2
              </button>
              <button
                type="button"
                className="size-8 rounded-lg border border-white/10 text-xs text-white/70 hover:bg-white/5"
              >
                3
              </button>
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 text-xs text-white/70"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

