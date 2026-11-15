"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutPage() {
  const router = useRouter();
  const [currency, setCurrency] = useState<"BDT" | "USD">("BDT");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const priceDisplay = currency === "BDT" ? "BDT 2,553.33" : "$20.00";
  const subtextDisplay = currency === "BDT" ? "Equivalent to $20.00/mo billed annually" : "Billed annually ($240/yr)";

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      router.push("/checkout/success");
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white">
      {/* Minimal Top Header */}
      <header className="border-b border-white/[0.08] bg-[#0d0d12]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              hire<span className="text-[#8b91ff]">loop</span>
            </span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-semibold text-white/70">
              Pro Checkout
            </span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Lock className="size-3.5 text-emerald-400" />
            <span>256-bit SSL Encrypted</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to browse
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left Column: Order Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-6 rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  CHOOSE CURRENCY
                </span>
                <div className="flex rounded-lg border border-white/10 bg-white/[0.04] p-0.5">
                  <button
                    type="button"
                    onClick={() => setCurrency("BDT")}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                      currency === "BDT"
                        ? "bg-[#5b63f6] text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    BDT
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrency("USD")}
                    className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${
                      currency === "USD"
                        ? "bg-[#5b63f6] text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    USD
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-white/[0.06] pt-6">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-white">Hireloop Pro Plan</h2>
                    <p className="text-xs text-white/50">Access to all premium features</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">{priceDisplay}</p>
                    <span className="text-[11px] text-white/40">/ month</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-[#8b91ff]">{subtextDisplay}</p>
              </div>

              {/* What's Included */}
              <div className="mt-8 space-y-3.5 border-t border-white/[0.06] pt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Included in your membership
                </p>
                {[
                  "Daily AI match brief (top 5 high-affinity roles)",
                  "Verified salary bands & market compensation data",
                  "Company insight dashboards & hiring velocity stats",
                  "1-click apply with automated tailored resume matching",
                  "Direct recruiter messaging & priority applicant badge",
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-white/80">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#5b63f6]/20 text-[#8b91ff]">
                      <Check className="size-3" />
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Guarantee */}
              <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs text-emerald-400">
                <p className="flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="size-4" />
                  14-Day Money-Back Guarantee
                </p>
                <p className="mt-1 text-[11px] text-white/60">
                  If you do not land relevant recruiter interview requests within 14 days, request a full refund with one click.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
              {/* Link Express Checkout */}
              <button
                type="button"
                onClick={() => {
                  setIsSubmitting(true);
                  setTimeout(() => router.push("/checkout/success"), 800);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00d66f] py-3 text-sm font-bold text-[#0a2540] transition hover:bg-[#00c566]"
              >
                <span>Pay faster with</span>
                <span className="font-black tracking-tight">link</span>
              </button>

              <div className="relative my-6 flex items-center justify-center">
                <div className="w-full border-t border-white/[0.08]" />
                <span className="absolute bg-[#0d0d12] px-3 text-[11px] uppercase tracking-wider text-white/40">
                  Or pay with card
                </span>
              </div>

              <form onSubmit={handlePay} className="space-y-5">
                {/* Contact Info */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-white/70">Contact information</Label>
                  <Input
                    type="email"
                    required
                    placeholder="you@company.com"
                    defaultValue="alex.sterling@example.com"
                    className="border-white/10 bg-white/[0.03] text-sm text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
                  />
                </div>

                {/* Card Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs font-semibold text-white/70">Card information</Label>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-bold text-white/60">
                        VISA
                      </span>
                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-bold text-white/60">
                        MC
                      </span>
                      <span className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 text-[9px] font-bold text-white/60">
                        AMEX
                      </span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-1">
                    <div className="flex items-center px-3 py-2">
                      <CreditCard className="mr-2.5 size-4 text-white/40" />
                      <input
                        type="text"
                        required
                        placeholder="1234 1234 1234 1234"
                        defaultValue="4242 •••• •••• 4242"
                        className="w-full bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 border-t border-white/[0.08]">
                      <input
                        type="text"
                        required
                        placeholder="MM / YY"
                        defaultValue="12/28"
                        className="border-r border-white/[0.08] bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                      />
                      <input
                        type="text"
                        required
                        placeholder="CVC"
                        defaultValue="888"
                        className="bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-white/70">Cardholder name</Label>
                  <Input
                    type="text"
                    required
                    placeholder="Full name on card"
                    defaultValue="Alex Sterling"
                    className="border-white/10 bg-white/[0.03] text-sm text-white placeholder:text-white/30 focus-visible:border-[#5b63f6]"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label className="text-xs font-semibold text-white/70">Country or region</Label>
                  <select
                    className="w-full rounded-md border border-white/10 bg-[#121218] px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#5b63f6]"
                    defaultValue="BD"
                  >
                    <option value="BD">Bangladesh</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                  </select>
                </div>

                {/* Save info checkbox */}
                <label className="flex items-start gap-2.5 cursor-pointer pt-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 size-4 rounded border-white/20 bg-white/5 text-[#5b63f6] focus:ring-0"
                  />
                  <span className="text-xs text-white/60">
                    Save my information for faster checkout. Pay securely on this site and everywhere Link is accepted.
                  </span>
                </label>

                {/* Submit Pay Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-gradient-to-r from-[#5b63f6] to-[#737af9] py-6 text-sm font-bold text-white shadow-lg shadow-[#5b63f6]/25 transition hover:brightness-110"
                  >
                    {isSubmitting ? "Processing payment..." : `Pay ${priceDisplay}`}
                  </Button>
                </div>

                <div className="pt-2 text-center">
                  <p className="text-[11px] text-white/40">
                    Powered by <span className="font-semibold text-white/70">stripe</span> • All payments are securely processed.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

