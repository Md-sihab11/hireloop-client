"use client";

import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Download,
  Filter,
  MoreHorizontal,
  Search,
  Shield,
  ShieldAlert,
  UserCheck,
  UserMinus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UserRecord = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "Seeker" | "Recruiter" | "Admin";
  joinDate: string;
  status: "Active" | "Suspended" | "Pending";
};

const initialUsers: UserRecord[] = [
  {
    id: "u-1",
    name: "Jordan Davis",
    email: "jordan.davis@example.com",
    role: "Seeker",
    joinDate: "Oct 12, 2023",
    status: "Active",
  },
  {
    id: "u-2",
    name: "Elena Rodriguez",
    email: "elena.r@innovatetech.com",
    role: "Recruiter",
    joinDate: "Sep 28, 2023",
    status: "Active",
  },
  {
    id: "u-3",
    name: "Marcus Webb",
    email: "m.webb@outlook.com",
    role: "Seeker",
    joinDate: "Aug 05, 2023",
    status: "Suspended",
  },
  {
    id: "u-4",
    name: "Tom Hiddleston",
    email: "t.hiddles@loki-tech.com",
    role: "Recruiter",
    joinDate: "Nov 01, 2023",
    status: "Active",
  },
  {
    id: "u-5",
    name: "Sarah Chen",
    email: "sarah.chen@cloudscale.ai",
    role: "Admin",
    joinDate: "Jun 14, 2023",
    status: "Active",
  },
  {
    id: "u-6",
    name: "David Kim",
    email: "david.k@nexustech.io",
    role: "Recruiter",
    joinDate: "Oct 19, 2023",
    status: "Active",
  },
];

const roleStyles = {
  Seeker: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Recruiter: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  Admin: "border-amber-500/30 bg-amber-500/10 text-amber-400",
};

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserRecord[]>(initialUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");

  const toggleStatus = (id: string) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          return {
            ...u,
            status: u.status === "Active" ? "Suspended" : "Active",
          };
        }
        return u;
      })
    );
  };

  const switchRole = (id: string, newRole: "Seeker" | "Recruiter" | "Admin") => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, role: newRole } : u))
    );
  };

  const filteredUsers = users.filter((u) => {
    const matchesRole = roleFilter === "All" || u.role === roleFilter;
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchesRole && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            User Management
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Review, filter, and manage platform access for all users.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
            onClick={() => alert("Exporting all user records to CSV...")}
          >
            <Download className="mr-1.5 size-3.5" />
            Export List
          </Button>
        </div>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Active Users
          </span>
          <p className="mt-1 text-2xl font-bold text-white">124,892</p>
          <span className="text-[11px] text-emerald-400">↑ 12% vs last month</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Recruiter Growth
          </span>
          <p className="mt-1 text-2xl font-bold text-purple-400">12,405</p>
          <span className="text-[11px] text-purple-400/70">High market demand</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Suspended Accounts
          </span>
          <p className="mt-1 text-2xl font-bold text-amber-400">14</p>
          <span className="text-[11px] text-amber-400/70">Requires manual review</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            New Signups (24h)
          </span>
          <p className="mt-1 text-2xl font-bold text-emerald-400">142</p>
          <span className="text-[11px] text-emerald-400/70">Steady growth activity</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by email, name, or ID..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex items-center gap-2">
          {["All", "Seeker", "Recruiter", "Admin"].map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setRoleFilter(role)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                roleFilter === role
                  ? "bg-[#5b63f6] text-white"
                  : "bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* High Density Users Table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">User</th>
                <th className="px-6 py-3.5 font-semibold">Role</th>
                <th className="px-6 py-3.5 font-semibold">Join Date</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 font-semibold text-white/80">
                        {user.name.slice(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{user.name}</p>
                        <p className="text-[11px] text-white/40">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-[11px] font-semibold ${
                        roleStyles[user.role]
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white/60">{user.joinDate}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                        user.status === "Active"
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                          : "border-red-500/30 bg-red-500/10 text-red-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {user.role === "Seeker" && (
                        <button
                          type="button"
                          onClick={() => switchRole(user.id, "Recruiter")}
                          className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-white/70 hover:border-white/20 hover:text-white"
                        >
                          Make Recruiter
                        </button>
                      )}
                      {user.role === "Recruiter" && (
                        <button
                          type="button"
                          onClick={() => switchRole(user.id, "Seeker")}
                          className="rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-1 text-[11px] font-medium text-white/70 hover:border-white/20 hover:text-white"
                        >
                          Make Seeker
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => toggleStatus(user.id)}
                        className={`rounded-md border px-2.5 py-1 text-[11px] font-medium transition ${
                          user.status === "Active"
                            ? "border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20"
                            : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
                        }`}
                      >
                        {user.status === "Active" ? "Suspend" : "Activate"}
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

