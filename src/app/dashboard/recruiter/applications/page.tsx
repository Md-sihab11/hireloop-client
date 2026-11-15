"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CheckCircle,
  Download,
  Eye,
  Mail,
  MoreHorizontal,
  Search,
  Sparkles,
  UserCheck,
  UserX,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { recruiterApplications, type ApplicationRow } from "@/data/dashboard";

const statusStyles = {
  New: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  Interviewing: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  Reviewing: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Rejected: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function RecruiterApplicationsPage() {
  const [candidates, setCandidates] = useState<ApplicationRow[]>(recruiterApplications);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  const updateCandidateStatus = (
    index: number,
    newStatus: "New" | "Interviewing" | "Reviewing" | "Rejected"
  ) => {
    setCandidates((prev) =>
      prev.map((c, i) => (i === index ? { ...c, status: newStatus } : c))
    );
  };

  const filtered = candidates.filter((c) => {
    const matchesFilter = statusFilter === "All" || c.status === statusFilter;
    const matchesSearch =
      c.candidate.toLowerCase().includes(search.toLowerCase()) ||
      c.role.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Candidate Applications
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Review inbound applicants, schedule technical screenings, and update hiring pipeline stages.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
          onClick={() => alert("Exporting applicant pool to ATS / CSV...")}
        >
          <Download className="mr-1.5 size-3.5" />
          Export Pool
        </Button>
      </div>

      {/* Bento Pipeline Metrics */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Inbound
          </span>
          <p className="mt-1 text-2xl font-bold text-white">1,284</p>
          <span className="text-[11px] text-white/50">Across 18 active postings</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Unreviewed
          </span>
          <p className="mt-1 text-2xl font-bold text-blue-400">42</p>
          <span className="text-[11px] text-blue-400/70">Needs initial screen</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            In Interview
          </span>
          <p className="mt-1 text-2xl font-bold text-purple-400">18</p>
          <span className="text-[11px] text-purple-400/70">Scheduled with team</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Offers Extended
          </span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">4</p>
          <span className="text-[11px] text-emerald-400/70">Pending candidate signature</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search candidates by name, target role, or skills..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex items-center gap-2">
          {["All", "New", "Reviewing", "Interviewing", "Rejected"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setStatusFilter(st)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                statusFilter === st
                  ? "bg-[#5b63f6] text-white"
                  : "bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Candidate</th>
                <th className="px-6 py-3.5 font-semibold">Applied Role</th>
                <th className="px-6 py-3.5 font-semibold">Date Applied</th>
                <th className="px-6 py-3.5 font-semibold">Experience</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filtered.map((candidate, idx) => (
                <tr key={idx} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {candidate.avatar ? (
                        <Image
                          src={candidate.avatar}
                          alt={candidate.candidate}
                          width={36}
                          height={36}
                          className="size-9 rounded-full object-cover border border-white/10"
                        />
                      ) : (
                        <div className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-[#161622] font-semibold text-[#8b91ff]">
                          {candidate.initials}
                        </div>
                      )}
                      <div>
                        <p className="font-semibold text-white">{candidate.candidate}</p>
                        <p className="text-[11px] text-white/40">{candidate.experience} experience</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-white/80">{candidate.role}</td>
                  <td className="px-6 py-4 text-white/60">{candidate.applied}</td>
                  <td className="px-6 py-4 text-white/60">{candidate.experience}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-semibold ${
                        statusStyles[candidate.status]
                      }`}
                    >
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-white/10 text-[11px] font-medium text-white/70 hover:bg-white/5"
                        onClick={() => alert(`Reviewing resume for ${candidate.candidate}`)}
                      >
                        Resume
                      </Button>
                      {candidate.status !== "Interviewing" && (
                        <button
                          type="button"
                          onClick={() => updateCandidateStatus(idx, "Interviewing")}
                          className="rounded-md border border-purple-500/30 bg-purple-500/10 px-2.5 py-1 text-[11px] font-medium text-purple-300 hover:bg-purple-500/20"
                        >
                          Interview
                        </button>
                      )}
                      {candidate.status !== "Rejected" && (
                        <button
                          type="button"
                          onClick={() => updateCandidateStatus(idx, "Rejected")}
                          className="rounded-md border border-red-500/30 bg-red-500/10 px-2.5 py-1 text-[11px] font-medium text-red-400 hover:bg-red-500/20"
                        >
                          Reject
                        </button>
                      )}
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

