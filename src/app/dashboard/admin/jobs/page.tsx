"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Briefcase,
  CheckCircle,
  Eye,
  Filter,
  MoreHorizontal,
  Plus,
  Search,
  Sparkles,
  TrendingUp,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AdminJob = {
  id: string;
  ref: string;
  title: string;
  company: string;
  category: "Design" | "Engineering" | "Marketing";
  type: string;
  postedDate: string;
  status: "Active" | "Closed";
  applicants: number;
};

const initialAdminJobs: AdminJob[] = [
  {
    id: "j-1",
    ref: "HL-90210",
    title: "Senior Product Designer",
    company: "Nexus Lab",
    category: "Design",
    type: "Full-time",
    postedDate: "Oct 24, 2023",
    status: "Active",
    applicants: 38,
  },
  {
    id: "j-2",
    ref: "HL-88231",
    title: "Full-stack Engineer",
    company: "Quantum",
    category: "Engineering",
    type: "Contract",
    postedDate: "Oct 22, 2023",
    status: "Active",
    applicants: 82,
  },
  {
    id: "j-3",
    ref: "HL-11022",
    title: "Marketing Director",
    company: "Vanguard",
    category: "Marketing",
    type: "Full-time",
    postedDate: "Oct 15, 2023",
    status: "Closed",
    applicants: 45,
  },
  {
    id: "j-4",
    ref: "HL-99032",
    title: "Backend Architect",
    company: "CloudScale",
    category: "Engineering",
    type: "Remote",
    postedDate: "Oct 20, 2023",
    status: "Active",
    applicants: 64,
  },
  {
    id: "j-5",
    ref: "HL-44112",
    title: "UX Research Lead",
    company: "Humanize",
    category: "Design",
    type: "Hybrid",
    postedDate: "Oct 19, 2023",
    status: "Active",
    applicants: 29,
  },
];

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<AdminJob[]>(initialAdminJobs);
  const [statusTab, setStatusTab] = useState<"All" | "Active" | "Closed">("Active");
  const [search, setSearch] = useState("");

  const toggleJobStatus = (id: string) => {
    setJobs((prev) =>
      prev.map((j) =>
        j.id === id ? { ...j, status: j.status === "Active" ? "Closed" : "Active" } : j
      )
    );
  };

  const filteredJobs = jobs.filter((j) => {
    const matchesTab = statusTab === "All" || j.status === statusTab;
    const matchesSearch =
      j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.ref.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Manage Jobs
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Oversee all active listings and historical job posts across the platform.
          </p>
        </div>

        <Button
          variant="brand"
          size="sm"
          nativeButton={false}
          render={<Link href="/dashboard/recruiter/jobs/new" />}
          className="px-4 text-xs font-semibold"
        >
          <Plus className="mr-1.5 size-3.5" />
          Create Job
        </Button>
      </div>

      {/* Analytical Bento Grid */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Engagement Rate
          </span>
          <p className="mt-1 text-2xl font-bold text-white">68.4%</p>
          <span className="text-[11px] text-emerald-400">↑ 5.2% from last month</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Avg. Time to Fill
          </span>
          <p className="mt-1 text-2xl font-bold text-[#8b91ff]">18 Days</p>
          <span className="text-[11px] text-white/50">Stable performance metric</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Applications
          </span>
          <p className="mt-1 text-2xl font-bold text-amber-400">14,892</p>
          <span className="text-[11px] text-amber-400/70">Across all open categories</span>
        </div>
      </div>

      {/* Filters and Tabs */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search listings, companies, or ref IDs..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-0.5">
          <button
            type="button"
            onClick={() => setStatusTab("Active")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              statusTab === "Active"
                ? "bg-[#5b63f6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Active ({jobs.filter((j) => j.status === "Active").length})
          </button>
          <button
            type="button"
            onClick={() => setStatusTab("Closed")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              statusTab === "Closed"
                ? "bg-[#5b63f6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Closed ({jobs.filter((j) => j.status === "Closed").length})
          </button>
          <button
            type="button"
            onClick={() => setStatusTab("All")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              statusTab === "All"
                ? "bg-[#5b63f6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            All
          </button>
        </div>
      </div>

      {/* Jobs Table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Title & Ref</th>
                <th className="px-6 py-3.5 font-semibold">Company</th>
                <th className="px-6 py-3.5 font-semibold">Category</th>
                <th className="px-6 py-3.5 font-semibold">Type</th>
                <th className="px-6 py-3.5 font-semibold">Date Posted</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filteredJobs.map((job) => (
                <tr key={job.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <p className="font-semibold text-white">{job.title}</p>
                    <span className="font-mono text-[10px] text-white/40">Ref: {job.ref}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-white/80">{job.company}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70">
                      {job.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/60">{job.type}</td>
                  <td className="px-6 py-4 text-white/60">{job.postedDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                        job.status === "Active"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-white/10 bg-white/5 text-white/40"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        nativeButton={false}
                        render={<Link href={`/jobs/${job.id}`} />}
                        className="border-white/10 text-[11px] font-medium text-white/70 hover:bg-white/5"
                      >
                        View
                      </Button>
                      <button
                        type="button"
                        onClick={() => toggleJobStatus(job.id)}
                        className={`rounded-md border px-2 py-1 text-[11px] font-medium transition ${
                          job.status === "Active"
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                        }`}
                      >
                        {job.status === "Active" ? "Close" : "Reopen"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

