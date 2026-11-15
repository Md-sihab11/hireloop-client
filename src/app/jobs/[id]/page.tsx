import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Bookmark,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  DollarSign,
  ExternalLink,
  Globe,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { StarField } from "@/components/shared/star-field";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Job Details — HireLoop",
  description: "View comprehensive job details, team insights, and apply instantly.",
};

const defaultJob = {
  id: "senior-product-designer",
  title: "Senior Product Designer",
  company: "CloudScale AI",
  verified: true,
  category: "Design & Creative",
  location: "Remote (US)",
  type: "Full-time",
  experience: "5+ Years",
  salary: "$140,000 - $180,000",
  posted: "2 hours ago",
  description:
    "At CloudScale AI, we are building the next generation of infrastructure monitoring tools. We are looking for a Senior Product Designer who is passionate about translating complex technical workflows into elegant, intuitive interfaces. You will be a key member of our design team, working closely with engineering and product leadership to define the vision for our core platform experience.",
  responsibilities: [
    "Lead the end-to-end design process for major platform features, from discovery to high-fidelity implementation.",
    "Collaborate with cross-functional partners to understand user needs and translate them into functional design requirements.",
    "Maintain and evolve our design system, ensuring consistency and accessibility across the entire product suite.",
    "Conduct user research and usability testing to validate design decisions and iterate based on feedback.",
  ],
  requirements: [
    "5+ years of experience designing complex B2B SaaS products or data-heavy applications.",
    "A strong portfolio showcasing your design process, systems thinking, and problem-solving skills.",
    "High proficiency in modern design tools (Figma, tokens, auto-layout, interactive prototypes).",
    "Familiarity with modern web technologies (HTML, CSS/Tailwind, React) to collaborate closely with engineers.",
  ],
  skills: [
    "Figma Expertise",
    "Systems Thinking",
    "UI/UX Design",
    "Interactive Prototyping",
    "Design Systems",
    "User Research",
    "Basic Frontend",
  ],
  benefits: [
    { title: "Full Health & Dental", desc: "100% company-paid comprehensive health, dental, and vision insurance." },
    { title: "Competitive 401(k)", desc: "4% dollar-for-dollar employer 401(k) retirement matching program." },
    { title: "Latest Hardware Stipend", desc: "$3,500 budget every 2 years for your home workstation setup." },
    { title: "Unlimited Paid Time Off", desc: "Flexible vacation policy with a minimum recommended 4 weeks per year." },
  ],
  companyInfo: {
    name: "CloudScale AI",
    industry: "SaaS / Artificial Intelligence",
    size: "150 - 300 employees",
    hq: "San Francisco, CA",
    website: "https://cloudscale.ai",
    about:
      "CloudScale AI delivers automated observability and anomaly detection for modern distributed systems, empowering engineering organizations worldwide to troubleshoot infrastructure bottlenecks instantly.",
  },
  similarJobs: [
    {
      id: "lead-frontend-engineer",
      title: "Lead Frontend Engineer",
      company: "FinGrid Solutions",
      location: "New York, NY (Hybrid)",
      salary: "$165k - $210k",
      type: "Full-time",
    },
    {
      id: "ux-researcher",
      title: "Staff UX Researcher",
      company: "Linear Systems",
      location: "Remote",
      salary: "$150k - $190k",
      type: "Full-time",
    },
  ],
};

export default async function JobDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = defaultJob;

  return (
    <div className="relative min-h-screen bg-[#08080a] text-white selection:bg-[#5b63f6]/30">
      <StarField />
      <SiteHeader />

      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/50 transition hover:text-white"
          >
            <ArrowLeft className="size-3.5" />
            Back to all listings
          </Link>
        </div>

        {/* Header Section */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-6 backdrop-blur-xl sm:p-8">
          <div className="absolute right-0 top-0 -mr-20 -mt-20 size-72 rounded-full bg-[#5b63f6]/10 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-[#1a1a24] to-[#121218] text-xl font-bold text-[#8b91ff] shadow-inner">
                {job.company.slice(0, 2).toUpperCase()}
              </div>
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {job.title}
                  </h1>
                  {job.verified && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
                      <ShieldCheck className="size-3" />
                      Verified Employer
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
                  <span className="font-semibold text-white/90">{job.company}</span>
                  <span>•</span>
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>Posted {job.posted}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                aria-label="Save Job"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:text-white"
              >
                <Bookmark className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Share Job"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:text-white"
              >
                <Share2 className="size-4" />
              </button>
              <Button
                variant="brand"
                nativeButton={false}
                render={<Link href={`/checkout?job=${id}`} />}
                className="px-6 font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Bento Info Grid */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/[0.06] pt-6">
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                SALARY RANGE
              </span>
              <p className="mt-1 text-base font-bold text-white">{job.salary}</p>
              <span className="text-[11px] text-emerald-400">Verified competitive band</span>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                LOCATION
              </span>
              <p className="mt-1 text-base font-bold text-white">{job.location}</p>
              <span className="text-[11px] text-white/50">Anywhere in US</span>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                JOB TYPE
              </span>
              <p className="mt-1 text-base font-bold text-white">{job.type}</p>
              <span className="text-[11px] text-white/50">Full benefits package</span>
            </div>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                EXPERIENCE
              </span>
              <p className="mt-1 text-base font-bold text-white">{job.experience}</p>
              <span className="text-[11px] text-white/50">Mid-to-Senior level</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Description Column */}
          <div className="space-y-8 lg:col-span-2">
            {/* Overview */}
            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-white">Job Description</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                {job.description}
              </p>
            </section>

            {/* Responsibilities */}
            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-white">Responsibilities</h2>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-[#5b63f6]/20 text-[#8b91ff]">
                      <CheckCircle2 className="size-3" />
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Requirements & Skills */}
            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-white">
                Requirements & Qualifications
              </h2>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/80">
                      •
                    </span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-white/[0.06] pt-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Required Skills & Technologies
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits & Perks */}
            <section className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md sm:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-white">Benefits & Perks</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {job.benefits.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <h3 className="text-sm font-semibold text-white">{b.title}</h3>
                    <p className="mt-1 text-xs text-white/60">{b.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Aside Sidebar */}
          <div className="space-y-6">
            {/* Company Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Company Overview
              </h3>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-lg border border-white/10 bg-[#14141c] font-bold text-[#8b91ff]">
                  CS
                </div>
                <div>
                  <h4 className="text-base font-semibold text-white">{job.companyInfo.name}</h4>
                  <p className="text-xs text-white/50">{job.companyInfo.industry}</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-white/70">
                {job.companyInfo.about}
              </p>

              <div className="mt-5 space-y-2.5 border-t border-white/[0.06] pt-4 text-xs text-white/60">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Users className="size-3.5" /> Company size
                  </span>
                  <span className="font-medium text-white">{job.companyInfo.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="size-3.5" /> Headquarters
                  </span>
                  <span className="font-medium text-white">{job.companyInfo.hq}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Globe className="size-3.5" /> Website
                  </span>
                  <a
                    href={job.companyInfo.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#8b91ff] hover:underline"
                  >
                    cloudscale.ai <ExternalLink className="size-3" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-white/10 text-xs font-semibold text-white/80 hover:bg-white/5"
                  nativeButton={false}
                  render={<Link href="/jobs" />}
                >
                  View all open roles at CloudScale
                </Button>
              </div>
            </div>

            {/* Similar Jobs */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d12]/70 p-6 backdrop-blur-md">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
                Similar Opportunities
              </h3>
              <div className="mt-4 space-y-3">
                {job.similarJobs.map((sim) => (
                  <Link
                    key={sim.id}
                    href={`/jobs/${sim.id}`}
                    className="block rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 transition hover:border-[#5b63f6]/40 hover:bg-white/[0.04]"
                  >
                    <h4 className="text-xs font-semibold text-white">{sim.title}</h4>
                    <p className="mt-0.5 text-[11px] text-white/50">{sim.company} • {sim.location}</p>
                    <div className="mt-2 flex items-center justify-between text-[11px]">
                      <span className="font-medium text-emerald-400">{sim.salary}</span>
                      <span className="text-white/40">{sim.type}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

