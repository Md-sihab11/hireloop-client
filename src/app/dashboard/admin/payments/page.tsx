"use client";

import { useState } from "react";
import {
  Banknote,
  CheckCircle,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  Filter,
  Search,
  Sparkles,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminTransactions, type TransactionRow } from "@/data/dashboard";

const statusStyles = {
  Success: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Pending: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Failed: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function AdminPaymentsPage() {
  const [transactions] = useState<TransactionRow[]>(adminTransactions);
  const [filter, setFilter] = useState<string>("All");
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((t) => {
    const matchesFilter = filter === "All" || t.status === filter;
    const matchesSearch =
      t.email.toLowerCase().includes(search.toLowerCase()) ||
      t.company.toLowerCase().includes(search.toLowerCase()) ||
      t.txnId.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Payments & Subscriptions
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Comprehensive overview of platform revenue and active subscriptions.
          </p>
        </div>

        <Button
          variant="outline"
          size="sm"
          className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
          onClick={() => alert("Exporting all transactions to CSV...")}
        >
          <Download className="mr-1.5 size-3.5" />
          Export CSV
        </Button>
      </div>

      {/* Key Metrics Bento Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Total Revenue
          </span>
          <p className="mt-1 text-2xl font-bold text-white">$1,284,500</p>
          <span className="text-[11px] text-emerald-400">↑ 12.4% vs last period</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Monthly Revenue
          </span>
          <p className="mt-1 text-2xl font-bold text-white">$94,210</p>
          <span className="text-[11px] text-emerald-400">↑ 8.1% this month</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Active Pro Users
          </span>
          <p className="mt-1 text-2xl font-bold text-[#8b91ff]">12,408</p>
          <span className="text-[11px] text-white/50">↑ 2.3% active subscribers</span>
        </div>
        <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
            Active Enterprise
          </span>
          <p className="mt-1 text-2xl font-bold text-purple-400">482</p>
          <span className="text-[11px] text-purple-400/70">↑ 15.7% enterprise seats</span>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 p-3.5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/40" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by customer, company, or transaction ID..."
            className="border-white/10 bg-white/[0.02] pl-9 text-xs text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
          />
        </div>

        <div className="flex items-center gap-2">
          {["All", "Success", "Pending", "Failed"].map((st) => (
            <button
              key={st}
              type="button"
              onClick={() => setFilter(st)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                filter === st
                  ? "bg-[#5b63f6] text-white"
                  : "bg-white/[0.03] text-white/60 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* High Density Transactions Table */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Customer</th>
                <th className="px-6 py-3.5 font-semibold">Company</th>
                <th className="px-6 py-3.5 font-semibold">Plan</th>
                <th className="px-6 py-3.5 font-semibold">Amount</th>
                <th className="px-6 py-3.5 font-semibold">Transaction ID</th>
                <th className="px-6 py-3.5 font-semibold">Date</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {filteredTransactions.map((tx) => (
                <tr key={tx.txnId} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">{tx.email}</td>
                  <td className="px-6 py-4 text-white/70">{tx.company}</td>
                  <td className="px-6 py-4 text-white/80">{tx.plan}</td>
                  <td className="px-6 py-4 font-semibold text-white">{tx.amount}</td>
                  <td className="px-6 py-4 font-mono text-[11px] text-[#8b91ff]">{tx.txnId}</td>
                  <td className="px-6 py-4 text-white/60">{tx.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-semibold ${
                        statusStyles[tx.status]
                      }`}
                    >
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => alert(`Downloading invoice receipt for ${tx.txnId}`)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#8b91ff] hover:underline"
                    >
                      <Download className="size-3" />
                      PDF
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

