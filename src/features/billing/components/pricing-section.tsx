"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart2, Crown, Plus, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type BillingCycle = "monthly" | "yearly";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: Crown,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: "/month",
      featuresHeading: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      popular: false,
      buttonText: "Choose This Plan",
      buttonVariant: "outline",
    },
    {
      id: "growth",
      name: "Growth",
      icon: BarChart2,
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      monthlyPrice: "$17",
      yearlyPrice: "$13",
      period: "/month",
      featuresHeading: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      popular: true,
      buttonText: "Choose This Plan",
      buttonVariant: "solid",
    },
    {
      id: "premium",
      name: "Premium",
      icon: Zap,
      iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      monthlyPrice: "$99",
      yearlyPrice: "$74",
      period: "/month",
      featuresHeading: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      popular: false,
      buttonText: "Choose This Plan",
      buttonVariant: "outline",
    },
  ];

  return (
    <section id="pricing" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Tag */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-indigo-400">
            <span className="size-1.5 rounded-full bg-indigo-400" />
            PRICING
            <span className="size-1.5 rounded-full bg-indigo-400" />
          </div>

          <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Pay for the leverage,
            <br />
            not the listings
          </h2>

          {/* Billing Switcher */}
          <div className="mt-8 flex items-center justify-center">
            <div className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={cn(
                  "rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer",
                  billingCycle === "monthly"
                    ? "bg-white text-black shadow-sm font-semibold"
                    : "text-white/60 hover:text-white"
                )}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2 text-xs font-medium transition-all cursor-pointer",
                  billingCycle === "yearly"
                    ? "bg-white text-black shadow-sm font-semibold"
                    : "text-white/60 hover:text-white"
                )}
              >
                <span>Yearly</span>
                <span className="rounded-full bg-fuchsia-600 px-2 py-0.5 text-[10px] font-bold text-white leading-none">
                  25%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {plans.map((plan) => {
            const price =
              billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={cn(
                  "relative flex flex-col justify-between rounded-3xl p-7 transition-all backdrop-blur-xl sm:p-8",
                  plan.popular
                    ? "border border-[#5b63f6]/40 bg-[#101016]/95 shadow-[0_0_60px_-15px_rgba(91,99,246,0.35)] ring-1 ring-[#5b63f6]/30"
                    : "border border-white/[0.08] bg-[#0e0e12]/85 hover:border-white/15"
                )}
              >
                <div>
                  {/* Card Header: Icon + Name on Left, Price on Right */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "flex size-9 items-center justify-center rounded-xl border",
                          plan.iconColor
                        )}
                      >
                        <plan.icon className="size-4.5" />
                      </span>
                      <span className="text-base font-semibold text-white">
                        {plan.name}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {price}
                      </span>
                      <span className="text-xs text-white/45">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="pt-6">
                    <p className="text-xs font-medium text-white/50">
                      {plan.featuresHeading}
                    </p>
                    <ul className="mt-4 space-y-3.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-xs text-white/80"
                        >
                          <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-white/[0.08] text-white/70">
                            <Plus className="size-2.5 stroke-[3]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-4">
                  <Link
                    href="/signup"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-5 py-3 text-xs font-medium transition-all group",
                      plan.popular
                        ? "bg-white text-black font-semibold shadow-lg hover:bg-white/90"
                        : "border border-white/[0.1] bg-white/[0.04] text-white hover:bg-white/[0.08]"
                    )}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

