"use client";

import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  Download,
  ExternalLink,
  Filter,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type CompanyRecord = {
  id: string;
  name: string;
  domain: string;
  industry: string;
  plan: "Enterprise" | "Growth" | "Starter";
  activeJobs: number;
  status: "Verified" | "Pending" | "Suspended";
};

const initialCompanies: CompanyRecord[] = [
  {
    id: "c-1",
    name: "TechFlow Systems",
    domain: "techflow.io",
    industry: "Cloud & DevTools",
    plan: "Enterprise",
    activeJobs: 18,
    status: "Verified",
  },
  {
    id: "c-2",
    name: "CloudScale AI",
    domain: "cloudscale.ai",
    industry: "Artificial Intelligence",
    plan: "Enterprise",
    activeJobs: 12,
    status: "Verified",
  },
  {
    id: "c-3",
    name: "FinGrid Solutions",
    domain: "fingrid.net",
    industry: "Fintech",
    plan: "Growth",
    activeJobs: 7,
    status: "Verified",
  },
  {
    id: "c-4",
    name: "Nexus Lab",
    domain: "nexuslab.co",
    industry: "Data Infrastructure",
    plan: "Growth",
    activeJobs: 4,
    status: "Pending",
  },
  {
    id: "c-5",
    name: "Cyberdyne Systems",
    domain: "cyberdyne.org",
    industry: "Robotics",
    plan: "Starter",
    activeJobs: 2,
    status: "Suspended",
  },
];

export default function AdminCompaniesPage() {
  const [companies, setCompanies] = useState<CompanyRecord[]>(initialCompanies);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const toggleVerify = (id: string) => {
    setCompanies((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Verified" ? "Suspended" : "Verified" }
          : c
      )
    );
  };

  const filtered = companies.filter((c) => {
    const matchesFilter = statusFilter === "All" || c.status === statusFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.domain.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Company Directory
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Manage verified partner companies and employer organizations across HireLoop.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
          onClick={() => alert("Exporting employer directory to CSV...")}
        >
          <Download className="mr-1.5 size-3.5" />
          Export Directory
        </Button>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Verified Employers
          </span>
          <p className="mt-1 text-2xl font-bold text-white">4,281</p>
          <span className="text-[11px] text-emerald-400">Active hiring status</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Pending Verification
          </span>
          <p className="mt-1 text-2xl font-bold text-amber-400">19</p>
          <span className="text-[11px] text-amber-400/70">Awaiting EIN review</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Enterprise Tier
          </span>
          <p className="mt-1 text-2xl font-bold text-[#8b91ff]">482</p>
          <span className="text-[11px] text-white/50">High volume seats</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Live Jobs
          </span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">8,920</p>
          <span className="text-[11px] text-emerald-400/70">Platform-wide</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search companies by name, domain, or industry..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex items-center gap-2">
          {["All", "Verified", "Pending", "Suspended"].map((st) => (
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

      {/* High Density Table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Company</th>
                <th className="px-6 py-3.5 font-semibold">Industry</th>
                <th className="px-6 py-3.5 font-semibold">Plan</th>
                <th className="px-6 py-3.5 font-semibold">Live Jobs</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filtered.map((company) => (
                <tr key={company.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#161622] font-semibold text-[#8b91ff]">
                        {company.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{company.name}</p>
                        <p className="text-[11px] text-white/40">{company.domain}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-white/70">{company.industry}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/80">
                      {company.plan}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-emerald-400">{company.activeJobs}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                        company.status === "Verified"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : company.status === "Pending"
                          ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                          : "border-red-500/30 bg-red-500/10 text-red-400"
                      }`}
                    >
                      {company.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => toggleVerify(company.id)}
                      className={`rounded-md border px-2.5 py-1 text-[11px] font-medium transition ${
                        company.status === "Verified"
                          ? "border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                          : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                      }`}
                    >
                      {company.status === "Verified" ? "Suspend" : "Verify"}
                    </button>
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

