import {
  BriefcaseBusinessIcon,
  Building2Icon,
  StarIcon,
  UsersRoundIcon,
  type LucideIcon,
} from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type HeroStat = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export const navLinks: NavLink[] = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export const trendingSearches = [
  "Product Designer",
  "AI Engineering",
  "DevOps Engineer",
];

export const heroStats: HeroStat[] = [
  { icon: BriefcaseBusinessIcon, value: "50K", label: "Active Jobs" },
  { icon: Building2Icon, value: "12K", label: "Companies" },
  { icon: UsersRoundIcon, value: "2M", label: "Job Seekers" },
  { icon: StarIcon, value: "97%", label: "Satisfaction Rate" },
];

export type JobListing = {
  id: string;
  title: string;
  description: string;
  location: string;
  workMode: string;
  payRate: string;
};

export const featuredJobs: JobListing[] = [
  {
    id: "frontend-developer-1",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
  {
    id: "frontend-developer-2",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
  {
    id: "frontend-developer-3",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
  {
    id: "frontend-developer-4",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
  {
    id: "frontend-developer-5",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
  {
    id: "frontend-developer-6",
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    workMode: "Hybrid",
    payRate: "€25-€40/hour",
  },
];
