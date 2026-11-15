"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  CreditCard,
  Download,
  HelpCircle,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const invoices = [
  {
    date: "Sep 24, 2023",
    plan: "Professional Tier (Monthly)",
    amount: "$17.00",
    id: "TRX-948102-HL",
    status: "Paid",
  },
  {
    date: "Aug 24, 2023",
    plan: "Professional Tier (Monthly)",
    amount: "$17.00",
    id: "TRX-771920-HL",
    status: "Paid",
  },
  {
    date: "Jul 24, 2023",
    plan: "Professional Tier (Monthly)",
    amount: "$17.00",
    id: "TRX-331005-HL",
    status: "Paid",
  },
  {
    date: "Jun 24, 2023",
    plan: "Standard Tier (Free Trial)",
    amount: "$0.00",
    id: "TRX-220199-HL",
    status: "Paid",
  },
];

export default function SeekerBillingPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Subscription & Billing
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Manage your professional tier features, recurring payments, and billing history.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
            onClick={() => alert("Downloading all invoices summary...")}
          >
            <Download className="mr-1.5 size-3.5" />
            Export Invoices
          </Button>
        </div>
      </div>

      {/* Bento Layout: Plan & Card */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Current Plan Card (Bento Large) */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8 lg:col-span-7">
          <div className="absolute right-0 top-0 -mr-16 -mt-16 size-48 rounded-full bg-[#5b63f6]/15 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between">
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-0.5 text-[11px] font-semibold text-[#8b91ff]">
              CURRENT PLAN
            </span>
            <span className="text-xs text-white/50">Next billing: Oct 24, 2023</span>
          </div>

          <div className="mt-4 flex items-baseline justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Professional Tier</h2>
              <p className="mt-0.5 text-xs text-white/60">
                Unlock global job insights and unlimited applications.
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-extrabold text-white">$17</span>
              <span className="text-xs text-white/40"> / month</span>
            </div>
          </div>

          {/* Features */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 border-t border-white/[0.06] pt-6">
            {[
              "Unlimited Applications",
              "Premium Job Insights",
              "Priority Candidate Badge",
              "Direct Recruiter Messaging",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                <span className="flex size-4 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="size-3" />
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              variant="brand"
              size="sm"
              nativeButton={false}
              render={<Link href="/checkout" />}
              className="px-5 text-xs font-semibold"
            >
              Upgrade Plan
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
              onClick={() => alert("Redirecting to billing customer portal...")}
            >
              Manage Plan
            </Button>
          </div>
        </div>

        {/* Payment Method (Bento Small) */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8 lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Payment Method
              </span>
              <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                SECURE BY STRIPE
              </span>
            </div>

            {/* Visual Credit Card */}
            <div className="mt-5 rounded-xl border border-white/15 bg-gradient-to-br from-[#1c1c28] via-[#14141e] to-[#0d0d14] p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white/80">Visa Debit</span>
                <span className="text-xs font-black tracking-widest text-[#8b91ff]">•••• 4242</span>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-white/40">CARD HOLDER</span>
                  <p className="text-xs font-bold tracking-wide text-white">ALEXANDER SEEKER</p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-white/40">EXPIRES</span>
                  <p className="text-xs font-bold text-white">12/26</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
              onClick={() => alert("Open payment method update modal")}
            >
              <Plus className="mr-1.5 size-3.5" />
              Add New Payment Method
            </Button>
          </div>
        </div>
      </div>

      {/* Billing History Section */}
      <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-white/[0.08] px-6 py-4">
          <h3 className="text-base font-semibold text-white">Billing History</h3>
          <span className="text-xs text-white/40">Auto-billed monthly</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-white/[0.08] bg-white/[0.02] text-white/40 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-6 py-3.5 font-semibold">Date</th>
                <th className="px-6 py-3.5 font-semibold">Description</th>
                <th className="px-6 py-3.5 font-semibold">Amount</th>
                <th className="px-6 py-3.5 font-semibold">Transaction ID</th>
                <th className="px-6 py-3.5 font-semibold">Status</th>
                <th className="px-6 py-3.5 text-right font-semibold">Invoice</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {invoices.map((inv) => (
                <tr key={inv.id} className="transition hover:bg-white/[0.02]">
                  <td className="px-6 py-4 font-medium text-white">{inv.date}</td>
                  <td className="px-6 py-4 text-white/80">{inv.plan}</td>
                  <td className="px-6 py-4 font-semibold text-white">{inv.amount}</td>
                  <td className="px-6 py-4 font-mono text-[11px] text-[#8b91ff]">{inv.id}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => alert(`Downloading invoice ${inv.id}`)}
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

      {/* Support & Help Card */}
      <div className="rounded-xl border border-white/[0.08] bg-[#0d0d12]/60 p-6 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-white">Need help with your invoice?</h4>
          <p className="mt-1 text-xs text-white/60">
            Our support team is available 24/7 to help you resolve any payment issues or clarify billing details.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Button
            variant="outline"
            size="sm"
            className="border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
            onClick={() => alert("Support ticket opened.")}
          >
            Contact Support
          </Button>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Refund policy: 14 days unconditional refund window.");
            }}
            className="text-xs text-white/50 hover:text-white"
          >
            Read Refund Policy
          </a>
        </div>
      </div>
    </div>
  );
}

