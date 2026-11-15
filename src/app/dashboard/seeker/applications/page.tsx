"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileText,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ApplicationItem = {
  id: string;
  title: string;
  company: string;
  type: string;
  workplace: string;
  appliedDate: string;
  status: "Shortlisted" | "Interviewing" | "Reviewing" | "Rejected" | "Offered";
  nextStep?: string;
};

const initialApplications: ApplicationItem[] = [
  {
    id: "app-1",
    title: "Senior Frontend Engineer",
    company: "Stark Industries",
    type: "Full-time",
    workplace: "Remote",
    appliedDate: "Oct 24, 2023",
    status: "Shortlisted",
    nextStep: "Technical Take-home Assessment",
  },
  {
    id: "app-2",
    title: "Product Designer",
    company: "Cyberdyne Systems",
    type: "Contract",
    workplace: "Hybrid",
    appliedDate: "Oct 20, 2023",
    status: "Interviewing",
    nextStep: "Portfolio Presentation with VP",
  },
  {
    id: "app-3",
    title: "Lead Data Scientist",
    company: "Wayne Enterprises",
    type: "Full-time",
    workplace: "On-site",
    appliedDate: "Oct 18, 2023",
    status: "Interviewing",
    nextStep: "Panel Interview - Friday 10:00 AM",
  },
  {
    id: "app-4",
    title: "Cloud Architect",
    company: "Oscorp Tech",
    type: "Full-time",
    workplace: "Remote",
    appliedDate: "Oct 12, 2023",
    status: "Rejected",
    nextStep: "Position filled internally",
  },
  {
    id: "app-5",
    title: "AI Research Engineer",
    company: "Hooli Corp",
    type: "Full-time",
    workplace: "Hybrid",
    appliedDate: "Oct 05, 2023",
    status: "Offered",
    nextStep: "Offer Letter under final review",
  },
];

const statusStyles = {
  Shortlisted: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Interviewing: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  Reviewing: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Rejected: "border-red-500/30 bg-red-500/10 text-red-400",
  Offered: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
};

export default function SeekerApplicationsPage() {
  const [tab, setTab] = useState<"Active" | "Archived">("Active");
  const [search, setSearch] = useState("");
  const [applications] = useState<ApplicationItem[]>(initialApplications);

  const filtered = applications.filter((app) => {
    if (tab === "Active" && app.status === "Rejected") return false;
    if (tab === "Archived" && app.status !== "Rejected") return false;
    return (
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app.company.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            My Applications
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Track your job applications and interview progress in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
            onClick={() => alert("Downloading application history summary PDF...")}
          >
            <Download className="mr-1.5 size-3.5" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Stats Bento Overview */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Applied
          </span>
          <p className="mt-1 text-2xl font-bold text-white">24</p>
          <span className="text-[11px] text-white/50">Lifetime applications</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Shortlisted
          </span>
          <p className="mt-1 text-2xl font-bold text-blue-400">8</p>
          <span className="text-[11px] text-blue-400/70">Past resume screening</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Interviews
          </span>
          <p className="mt-1 text-2xl font-bold text-purple-400">3</p>
          <span className="text-[11px] text-purple-400/70">Scheduled this month</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Success Rate
          </span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">12.5%</p>
          <span className="text-[11px] text-emerald-400/70">Above platform average</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search applications..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex rounded-lg border border-white/10 bg-white/[0.03] p-0.5">
          <button
            type="button"
            onClick={() => setTab("Active")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              tab === "Active"
                ? "bg-[#5b63f6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Active (4)
          </button>
          <button
            type="button"
            onClick={() => setTab("Archived")}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
              tab === "Archived"
                ? "bg-[#5b63f6] text-white"
                : "text-white/60 hover:text-white"
            }`}
          >
            Archived (1)
          </button>
        </div>
      </div>

      {/* High Density Table Section */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Job Title</th>
                <th className="px-5 py-3.5 font-semibold">Company</th>
                <th className="px-5 py-3.5 font-semibold">Applied</th>
                <th className="px-5 py-3.5 font-semibold">Status</th>
                <th className="px-5 py-3.5 font-semibold">Next Step</th>
                <th className="px-5 py-3.5 text-right font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filtered.map((row) => (
                <tr key={row.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-white">{row.title}</p>
                    <div className="mt-0.5 flex items-center gap-2 text-[11px] text-white/40">
                      <span>{row.type}</span>
                      <span>•</span>
                      <span>{row.workplace}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-medium text-white/80">{row.company}</span>
                  </td>
                  <td className="px-5 py-4 text-white/60">{row.appliedDate}</td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-semibold ${
                        statusStyles[row.status]
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-white/60">{row.nextStep}</td>
                  <td className="px-5 py-4 text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white/10 text-[11px] font-semibold text-white/80 hover:bg-white/5"
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] px-5 py-3 text-xs text-white/40">
          <span>Showing 1-5 of 24 applications</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-white/60 hover:bg-white/5"
            >
              Prev
            </button>
            <button
              type="button"
              className="rounded-md border border-white/10 px-2 py-1 text-[11px] text-white/60 hover:bg-white/5"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

