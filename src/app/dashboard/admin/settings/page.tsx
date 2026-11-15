"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Check,
  Database,
  Globe,
  Key,
  Lock,
  Save,
  Server,
  Shield,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AdminSettingsPage() {
  const [siteName, setSiteName] = useState("HireLoop Platform");
  const [supportEmail, setSupportEmail] = useState("admin@hireloop.io");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [autoVerifyRecruiters, setAutoVerifyRecruiters] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            System & Platform Settings
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Configure global platform parameters, security policies, and integrations.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            <Check className="size-4" />
            System settings saved
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: General Configuration */}
        <div className="space-y-6 lg:col-span-8">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-base font-semibold text-white">General Platform Settings</h2>
            <p className="mt-1 text-xs text-white/50">
              Core platform identification and global administration parameters.
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Platform Brand Name</Label>
                <Input
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">System Support Email</Label>
                <Input
                  value={supportEmail}
                  onChange={(e) => setSupportEmail(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
            </div>

            {/* Toggle Switches */}
            <div className="mt-6 space-y-4 border-t border-white/[0.06] pt-6">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-xs font-medium text-white">Require Manual Recruiter Verification</p>
                  <p className="text-[11px] text-white/40">Hold new employer accounts in pending state until business EIN is verified</p>
                </div>
                <input
                  type="checkbox"
                  checked={!autoVerifyRecruiters}
                  onChange={(e) => setAutoVerifyRecruiters(!e.target.checked)}
                  className="size-4 rounded accent-[#5b63f6]"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-xs font-medium text-white">Maintenance Mode</p>
                  <p className="text-[11px] text-white/40">Display maintenance banner and restrict non-admin logins</p>
                </div>
                <input
                  type="checkbox"
                  checked={maintenanceMode}
                  onChange={(e) => setMaintenanceMode(e.target.checked)}
                  className="size-4 rounded accent-[#5b63f6]"
                />
              </label>
            </div>

            <div className="mt-6 flex justify-end border-t border-white/[0.06] pt-6">
              <Button
                variant="brand"
                size="sm"
                onClick={handleSave}
                className="px-5 text-xs font-semibold"
              >
                Save System Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Infrastructure & Health */}
        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl">
            <h2 className="text-base font-semibold text-white">Service Health</h2>
            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <span className="text-white/70">Database Cluster</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" /> Operational
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <span className="text-white/70">Stripe Billing Webhooks</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" /> Connected
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                <span className="text-white/70">AI Match Engine</span>
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-400" /> 99.98% Uptime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

