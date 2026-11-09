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
