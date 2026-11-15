"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  ExternalLink,
  Filter,
  MapPin,
  Search,
  Sparkles,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type SavedJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  category: "Design" | "Engineering" | "Product";
  savedAt: string;
  deadline?: string;
  status: "active" | "draft" | "closed";
};

const initialSavedJobs: SavedJob[] = [
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    company: "TECHFLOW",
    location: "San Francisco, CA (Hybrid)",
    salary: "$160k - $200k + Equity",
    category: "Design",
    savedAt: "Saved 2 hours ago",
    deadline: "Closes in 3 days",
    status: "active",
  },
  {
    id: "frontend-engineer",
    title: "Frontend Engineer",
    company: "VERCEL",
    location: "Remote, Global",
    salary: "$140k - $180k",
    category: "Engineering",
    savedAt: "Saved yesterday",
    deadline: "Closes in 1 week",
    status: "active",
  },
  {
    id: "staff-ux-researcher",
    title: "Staff UX Researcher",
    company: "LINEAR",
    location: "New York, NY (On-site)",
    salary: "$180k - $220k",
    category: "Design",
    savedAt: "Saved 3 days ago",
    status: "draft",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    company: "META",
    location: "Menlo Park, CA (Hybrid)",
    salary: "$150k - $210k + Bonus",
    category: "Engineering",
    savedAt: "Saved 5 days ago",
    status: "active",
  },
  {
    id: "design-systems-lead",
    title: "Design Systems Lead",
    company: "SPOTIFY",
    location: "Remote, USA",
    salary: "$170k - $215k",
    category: "Design",
    savedAt: "Closed yesterday",
    status: "closed",
  },
];

export default function SeekerSavedJobsPage() {
  const [jobs, setJobs] = useState<SavedJob[]>(initialSavedJobs);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Recently Saved");

  const removeJob = (id: string) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesCategory =
      selectedCategory === "All" || job.category === selectedCategory;
    const matchesQuery =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Saved Jobs
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Manage and track your bookmarked opportunities.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
            nativeButton={false}
            render={<Link href="/jobs" />}
          >
            Explore More Jobs
          </Button>
        </div>
      </div>

      {/* Bento Context & Filter Bar */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Saved
          </span>
          <p className="mt-1 text-2xl font-bold text-white">{jobs.length}</p>
          <span className="text-[11px] text-white/50">Across all categories</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Closing Soon
          </span>
          <p className="mt-1 text-2xl font-bold text-amber-400">
            {jobs.filter((j) => j.deadline).length}
          </p>
          <span className="text-[11px] text-amber-400/70">Action recommended</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Drafts Started
          </span>
          <p className="mt-1 text-2xl font-bold text-[#8b91ff]">
            {jobs.filter((j) => j.status === "draft").length}
          </p>
          <span className="text-[11px] text-[#8b91ff]/70">Ready to submit</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Active Openings
          </span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">
            {jobs.filter((j) => j.status === "active").length}
          </p>
          <span className="text-[11px] text-emerald-400/70">Currently hiring</span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search jobs, companies, or skills..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {["All", "Design", "Engineering", "Product"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                selectedCategory === cat
                  ? "bg-[#5b63f6] text-white"
                  : "bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-white/10 bg-[#121218] px-2.5 py-1.5 text-xs text-white/80 focus:outline-none"
          >
            <option>Recently Saved</option>
            <option>Oldest Saved</option>
            <option>Highest Salary</option>
          </select>
        </div>
      </div>

      {/* Saved Jobs List */}
      <div className="space-y-3.5">
        {filteredJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.01] py-16 text-center">
            <Bookmark className="size-8 text-white/30" />
            <p className="mt-2 text-sm font-semibold text-white/80">No saved jobs found</p>
            <p className="mt-1 text-xs text-white/40">Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className={`relative flex flex-col gap-4 rounded-xl border p-5 transition sm:flex-row sm:items-center sm:justify-between ${
                job.status === "closed"
                  ? "border-red-500/20 bg-red-950/5 opacity-75"
                  : "border-white/[0.08] bg-[#0d0d12]/70 hover:border-white/20"
              }`}
            >
              <div className="flex items-start gap-3.5">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#181822] text-xs font-bold text-[#8b91ff]">
                  {job.company.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-base font-semibold text-white">{job.title}</h3>
                    {job.deadline && (
                      <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-400">
                        {job.deadline}
                      </span>
                    )}
                    {job.status === "draft" && (
                      <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-medium text-[#8b91ff]">
                        Draft Started
                      </span>
                    )}
                    {job.status === "closed" && (
                      <span className="rounded-md border border-red-500/30 bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-400">
                        Job closed by employer
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-white/50">
                    <span className="font-medium text-white/80">{job.company}</span>
                    <span>•</span>
                    <span>{job.location}</span>
                    <span>•</span>
                    <span className="text-emerald-400">{job.salary}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-white/40">{job.savedAt}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2.5 sm:self-center">
                <button
                  type="button"
                  onClick={() => removeJob(job.id)}
                  aria-label="Remove from saved"
                  title="Remove from saved"
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-white/50 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-400"
                >
                  <Trash2 className="size-4" />
                </button>

                {job.status === "closed" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="border-white/10 text-xs text-white/30"
                  >
                    Closed
                  </Button>
                ) : (
                  <Button
                    variant="brand"
                    size="sm"
                    nativeButton={false}
                    render={<Link href={`/jobs/${job.id}`} />}
                    className="px-4 text-xs font-semibold"
                  >
                    {job.status === "draft" ? "Continue Draft" : "Apply Now"}
                  </Button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

