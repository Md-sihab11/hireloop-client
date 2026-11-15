"use client";

import { useState } from "react";
import {
  Building2,
  Check,
  Globe,
  Key,
  Mail,
  Plus,
  Save,
  Shield,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function RecruiterSettingsPage() {
  const [companyName, setCompanyName] = useState("TechFlow Inc.");
  const [website, setWebsite] = useState("https://techflow.io");
  const [industry, setIndustry] = useState("Enterprise Cloud Infrastructure");
  const [companySize, setCompanySize] = useState("250 - 500");
  const [about, setAbout] = useState(
    "TechFlow accelerates infrastructure automation and distributed database observability for high-growth tech enterprises."
  );
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
            Company & Recruiter Settings
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Configure your employer branding, hiring pipeline defaults, and team seat access.
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            <Check className="size-4" />
            Company settings saved
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Employer Profile */}
        <div className="space-y-6 lg:col-span-8">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-base font-semibold text-white">Employer Branding</h2>
            <p className="mt-1 text-xs text-white/50">
              This information is displayed publicly on your job posts and company overview card.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#161622] text-xl font-bold text-[#8b91ff]">
                TF
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/10 text-xs text-white hover:bg-white/5"
                    onClick={() => alert("Logo file picker opened.")}
                  >
                    Change Company Logo
                  </Button>
                </div>
                <p className="text-[11px] text-white/40">
                  Recommended size: 400x400px. PNG or SVG.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Company Name</Label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Company Website</Label>
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Industry Domain</Label>
                <Input
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Team Size</Label>
                <Input
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <Label className="text-xs font-semibold text-white/70">About Company</Label>
              <Textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                rows={4}
                className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
              />
            </div>

            <div className="mt-6 flex justify-end border-t border-white/[0.06] pt-6">
              <Button
                variant="brand"
                size="sm"
                onClick={handleSave}
                className="px-5 text-xs font-semibold"
              >
                Save Branding
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Hiring Defaults & Team Seats */}
        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl">
            <h2 className="text-base font-semibold text-white">Team Members (3/5 Seats)</h2>
            <p className="mt-1 text-xs text-white/50">
              Collaborate with your hiring managers and interviewers.
            </p>

            <div className="mt-4 space-y-3">
              {[
                { name: "Alex Sterling", role: "Primary Recruiter (Owner)", email: "alex@techflow.io" },
                { name: "Sarah Jenkins", role: "Hiring Manager", email: "sarah@techflow.io" },
                { name: "Marcus Reid", role: "Lead Interviewer", email: "marcus@techflow.io" },
              ].map((m) => (
                <div key={m.email} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-xs">
                  <p className="font-semibold text-white">{m.name}</p>
                  <p className="text-[11px] text-white/50">{m.role}</p>
                  <p className="mt-1 text-[10px] text-[#8b91ff]">{m.email}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-white/10 text-xs text-white hover:bg-white/5"
                onClick={() => alert("Invite team member modal...")}
              >
                <Plus className="mr-1.5 size-3.5" />
                Invite Team Member
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

