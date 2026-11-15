"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  FileText,
  Key,
  Lock,
  Plus,
  Save,
  Shield,
  Trash2,
  Upload,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function SeekerSettingsPage() {
  const [fullName, setFullName] = useState("Alex Sterling");
  const [email, setEmail] = useState("alex.sterling@example.com");
  const [headline, setHeadline] = useState("Senior Product Designer & Systems Architect");
  const [bio, setBio] = useState(
    "Passionate designer with 6+ years of experience crafting enterprise B2B SaaS applications, design systems, and user-centric data dashboards."
  );
  const [skills, setSkills] = useState(["Figma", "UI Design", "Prototyping", "Design Systems", "Tailwind CSS"]);
  const [newSkill, setNewSkill] = useState("");
  const [savedSuccess, setSavedSuccess] = useState(false);

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Settings
          </h1>
          <p className="mt-1 text-sm text-white/60">
            Manage your account details, professional profile, and resume.
          </p>
        </div>

        {savedSuccess && (
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
            <Check className="size-4" />
            Profile updated successfully
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Profile & Details */}
        <div className="space-y-6 lg:col-span-8">
          {/* Profile Info */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-base font-semibold text-white">Profile Information</h2>
            <p className="mt-1 text-xs text-white/50">
              Update your photo and basic profile contact information.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative flex size-20 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#161622] text-xl font-bold text-[#8b91ff]">
                AS
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/10 text-xs text-white hover:bg-white/5"
                    onClick={() => alert("File picker opened.")}
                  >
                    Change Avatar
                  </Button>
                  <button
                    type="button"
                    className="text-xs text-red-400 hover:underline"
                    onClick={() => alert("Avatar removed.")}
                  >
                    Remove
                  </button>
                </div>
                <p className="text-[11px] text-white/40">
                  JPG, GIF or PNG. Maximum file size of 5MB.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Full Name</Label>
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Email Address</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-6">
              <button
                type="button"
                onClick={() => alert("Password reset instructions sent to your email.")}
                className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white"
              >
                <Key className="size-3.5" />
                Reset Password
              </button>
              <Button
                variant="brand"
                size="sm"
                onClick={handleSave}
                className="px-5 text-xs font-semibold"
              >
                Update Profile
              </Button>
            </div>
          </div>

          {/* Professional Details */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-base font-semibold text-white">Professional Details</h2>
            <p className="mt-1 text-xs text-white/50">
              These details are surfaced to recruiters when matching opportunities.
            </p>

            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Professional Headline</Label>
                <Input
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Bio / Summary</Label>
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="border-white/10 bg-white/[0.02] text-xs text-white focus-visible:border-[#5b63f6]"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-semibold text-white/70">Skills & Expertise</Label>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-white/40 hover:text-white"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>

                <form onSubmit={addSkill} className="mt-2 flex gap-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill (e.g. Next.js, GraphQL)..."
                    className="max-w-xs border-white/10 bg-white/[0.02] text-xs text-white placeholder:text-white/30"
                  />
                  <Button
                    type="submit"
                    variant="outline"
                    size="sm"
                    className="border-white/10 text-xs text-white hover:bg-white/5"
                  >
                    Add
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-6 flex justify-end border-t border-white/[0.06] pt-6">
              <Button
                variant="brand"
                size="sm"
                onClick={handleSave}
                className="px-5 text-xs font-semibold"
              >
                Save Details
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Resume & Preferences */}
        <div className="space-y-6 lg:col-span-4">
          {/* Resume Upload Box */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl">
            <h2 className="text-base font-semibold text-white">Resume Document</h2>
            <p className="mt-1 text-xs text-white/50">
              Upload your most recent resume to enable 1-click applications.
            </p>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-start gap-3">
                <FileText className="size-8 shrink-0 text-[#8b91ff]" />
                <div>
                  <p className="text-xs font-semibold text-white">Alex_Sterling_Resume_2024.pdf</p>
                  <p className="text-[11px] text-white/40">Last updated 2 days ago • 1.4 MB</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3 text-xs">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/10 text-xs text-white hover:bg-white/5"
                  onClick={() => alert("Upload replacement resume...")}
                >
                  Replace
                </Button>
                <button
                  type="button"
                  onClick={() => alert("Resume removed.")}
                  className="flex size-8 shrink-0 items-center justify-center rounded-md border border-white/10 text-white/40 hover:text-red-400"
                >
                  <Trash2 className="size-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Privacy & Notification Settings */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl">
            <h2 className="text-base font-semibold text-white">Preferences</h2>
            <div className="mt-4 space-y-4 text-xs text-white/70">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="font-medium text-white">Job Match Alerts</p>
                  <p className="text-[11px] text-white/40">Daily email of roles matching your profile</p>
                </div>
                <input type="checkbox" defaultChecked className="size-4 rounded accent-[#5b63f6]" />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="font-medium text-white">Recruiter Inquiries</p>
                  <p className="text-[11px] text-white/40">Allow verified recruiters to message you</p>
                </div>
                <input type="checkbox" defaultChecked className="size-4 rounded accent-[#5b63f6]" />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="font-medium text-white">Public Profile</p>
                  <p className="text-[11px] text-white/40">Show profile in talent marketplace directory</p>
                </div>
                <input type="checkbox" defaultChecked className="size-4 rounded accent-[#5b63f6]" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

