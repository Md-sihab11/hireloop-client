"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bookmark,
  Briefcase,
  Building2,
  Clock,
  ExternalLink,
  Filter,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const opportunities = [
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    company: "CloudScale AI",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    match: "98% Match",
    posted: "2 hours ago",
    category: "Design",
    desc: "Lead our core design systems and design next-generation collaborative workflows for cloud architectures.",
  },
  {
    id: "lead-frontend-engineer",
    title: "Lead Frontend Engineer",
    company: "FinGrid Solutions",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    salary: "$165,000 - $210,000",
    match: "94% Match",
    posted: "5 hours ago",
    category: "Engineering",
    desc: "Architect high-throughput real-time financial dashboards using Next.js, WebGL, and TypeScript.",
  },
  {
    id: "staff-ux-researcher",
    title: "Staff UX Researcher",
    company: "Linear Systems",
    location: "Remote",
    type: "Full-time",
    salary: "$150,000 - $190,000",
    match: "91% Match",
    posted: "1 day ago",
    category: "Design",
    desc: "Lead qualitative inquiry and evaluate product ergonomics across our fast-growing issue tracking platform.",
  },
  {
    id: "full-stack-developer",
    title: "Full Stack Developer",
    company: "Meta",
    location: "Menlo Park, CA (Hybrid)",
    type: "Full-time",
    salary: "$150,000 - $210,000",
    match: "89% Match",
    posted: "2 days ago",
    category: "Engineering",
    desc: "Scale user-facing infrastructure and developer APIs across billions of daily active sessions.",
  },
];

export default function SeekerJobsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filtered = opportunities.filter((job) => {
    const matchesCat = category === "All" || job.category === category;
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Explore Opportunities
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Curated roles matched with your profile headline and verified skills.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
          nativeButton={false}
          render={<Link href="/jobs" />}
        >
          View Public Job Board
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search roles, companies, or keywords..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex items-center gap-2">
          {["All", "Design", "Engineering"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                category === cat
                  ? "bg-[#5b63f6] text-white"
                  : "bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filtered.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-4 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-5 backdrop-blur-md transition hover:border-white/20 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#161622] text-sm font-bold text-[#8b91ff]">
                {job.company.slice(0, 2).toUpperCase()}
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-white">{job.title}</h3>
                  <span className="inline-flex items-center gap-1 rounded-md border border-[#5b63f6]/30 bg-[#5b63f6]/10 px-2 py-0.5 text-[10px] font-semibold text-[#8b91ff]">
                    <Sparkles className="size-3" />
                    {job.match}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-white/60">
                  <span className="font-medium text-white/80">{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">{job.salary}</span>
                  <span>•</span>
                  <span className="text-white/40">{job.posted}</span>
                </div>
                <p className="mt-1 text-xs text-white/60 line-clamp-1">{job.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:self-center">
              <button
                type="button"
                onClick={() => toggleSave(job.id)}
                aria-label="Save Job"
                className={`flex size-9 items-center justify-center rounded-lg border transition ${
                  savedIds.includes(job.id)
                    ? "border-[#5b63f6] bg-[#5b63f6]/20 text-[#8b91ff]"
                    : "border-white/10 bg-white/[0.02] text-white/50 hover:text-white"
                }`}
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
        ))}
      </div>
    </div>
  );
}

