import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Banknote,
  Bookmark,
  Briefcase,
  Calendar,
  ChartColumn,
  CircleCheck,
  ClipboardList,
  CreditCard,
  FileText,
  LayoutDashboard,
  Mail,
  Megaphone,
  RefreshCw,
  Send,
  Settings,
  Star,
  Users,
  Zap,
} from "lucide-react";

import type { DashboardRole } from "@/lib/roles";

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                */
/* -------------------------------------------------------------------------- */

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const dashboardNav: Record<DashboardRole, NavItem[]> = {
  seeker: [
    { label: "Dashboard", href: "/dashboard/seeker", icon: LayoutDashboard },
    { label: "Jobs", href: "/dashboard/seeker/jobs", icon: Briefcase },
    { label: "Saved Jobs", href: "/dashboard/seeker/saved", icon: Bookmark },
    {
      label: "Applications",
      href: "/dashboard/seeker/applications",
      icon: ClipboardList,
    },
    { label: "Billing", href: "/dashboard/seeker/billing", icon: CreditCard },
    { label: "Settings", href: "/dashboard/seeker/settings", icon: Settings },
  ],
  recruiter: [
    { label: "Dashboard", href: "/dashboard/recruiter", icon: LayoutDashboard },
    {
      label: "Manage Jobs",
      href: "/dashboard/recruiter/jobs",
      icon: Briefcase,
    },
    {
      label: "Applications",
      href: "/dashboard/recruiter/applications",
      icon: ClipboardList,
    },
    { label: "Settings", href: "/dashboard/recruiter/settings", icon: Settings },
  ],
  admin: [
    { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
    { label: "Users", href: "/dashboard/admin/users", icon: Users },
    { label: "Companies", href: "/dashboard/admin/companies", icon: ChartColumn },
    { label: "Jobs", href: "/dashboard/admin/jobs", icon: Briefcase },
    { label: "Payments", href: "/dashboard/admin/payments", icon: Banknote },
    { label: "Settings", href: "/dashboard/admin/settings", icon: Settings },
  ],
};

/* -------------------------------------------------------------------------- */
/*  Shared card shapes                                                        */
/* -------------------------------------------------------------------------- */

export type Stat = {
  label: string;
  value: string;
  icon: LucideIcon;
  /** Small coloured icon tile in the top-right (seeker) or left (others). */
  tone?: "brand" | "amber" | "green" | "muted";
  /** Percentage delta shown top-right (admin only). */
  trend?: string;
};

export type ActivityItem = {
  id: string;
  icon: LucideIcon;
  tone: "brand" | "green" | "muted";
  /** Plain text; `highlight` renders in amber at the end. */
  text: string;
  highlight?: string;
  time: string;
};

export type ApplicationRow = {
  candidate: string;
  initials: string;
  avatar?: string;
  role: string;
  applied: string;
  experience: string;
  status: "Interviewing" | "New" | "Reviewing" | "Rejected";
};

export type TransactionRow = {
  email: string;
  company: string;
  plan: string;
  txnId: string;
  amount: string;
  date: string;
  status: "Success" | "Pending" | "Failed";
};

/* -------------------------------------------------------------------------- */
/*  Mock data                                                                 */
/*                                                                          */
/*  TODO(api): replace these arrays with your API calls once the backend is   */
/*  ready. Every component below already only reads from this module, so the  */
/*  swap should be a one-file change.                                         */
/* -------------------------------------------------------------------------- */

export const seekerStats: Stat[] = [
  { label: "Saved Jobs", value: "12", icon: Bookmark, tone: "brand" },
  { label: "Applications Submitted", value: "24", icon: Send, tone: "brand" },
  {
    label: "Interviews Scheduled",
    value: "3",
    icon: Calendar,
    tone: "amber",
  },
  { label: "Offers Received", value: "1", icon: Star, tone: "green" },
];

export const seekerActivity: ActivityItem[] = [
  {
    id: "a1",
    icon: RefreshCw,
    tone: "muted",
    text: "Application for Senior Product Designer at TechFlow updated to",
    highlight: "‘Under Review’",
    time: "2 hours ago",
  },
  {
    id: "a2",
    icon: Megaphone,
    tone: "green",
    text: "New Job Alert: Lead Frontend Engineer at FinGrid matches your profile.",
    time: "5 hours ago",
  },
  {
    id: "a3",
    icon: Mail,
    tone: "muted",
    text: "You have a new message from Sarah Jenkins (Hiring Manager at CloudOps).",
    time: "1 day ago",
  },
];

export const recruiterStats: Stat[] = [
  {
    label: "Total Job Posts",
    value: "48",
    icon: FileText,
    tone: "muted",
  },
  { label: "Total Applicants", value: "1,284", icon: Users, tone: "muted" },
  { label: "Active Jobs", value: "18", icon: Zap, tone: "muted" },
  {
    label: "Jobs Closed",
    value: "32",
    icon: CircleCheck,
    tone: "muted",
  },
];

export const recruiterApplications: ApplicationRow[] = [
  {
    candidate: "Julianne Moore",
    initials: "JM",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces",
    role: "Senior Product Designer",
    applied: "Oct 24, 2023",
    experience: "6 years",
    status: "Interviewing",
  },
  {
    candidate: "Robert Downey",
    initials: "RD",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=faces",
    role: "Backend Engineer",
    applied: "Oct 23, 2023",
    experience: "4 years",
    status: "New",
  },
  {
    candidate: "Emma Stone",
    initials: "ES",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces",
    role: "Marketing Lead",
    applied: "Oct 22, 2023",
    experience: "8 years",
    status: "Reviewing",
  },
  {
    candidate: "Chris Pratt",
    initials: "CP",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces",
    role: "Product Manager",
    applied: "Oct 21, 2023",
    experience: "5 years",
    status: "Rejected",
  },
];

export const adminStats: Stat[] = [
  {
    label: "Total Users",
    value: "124,892",
    icon: Users,
    tone: "muted",
    trend: "↑12%",
  },
  {
    label: "Total Recruiters",
    value: "12,405",
    icon: Briefcase,
    tone: "muted",
    trend: "↑8%",
  },
  {
    label: "Total Companies",
    value: "4,281",
    icon: ChartColumn,
    tone: "muted",
    trend: "−0%",
  },
  {
    label: "Jobs Posted",
    value: "8,920",
    icon: ClipboardList,
    tone: "muted",
    trend: "↑24%",
  },
  {
    label: "Platform Revenue",
    value: "$245,800",
    icon: Activity,
    tone: "muted",
    trend: "↑18.5%",
  },
];

export const adminTransactions: TransactionRow[] = [
  {
    email: "marcus.k@techcorp.io",
    company: "TechCorp Inc.",
    plan: "Enterprise Monthly",
    txnId: "#TXN-902341",
    amount: "$1,299.00",
    date: "Oct 24, 2023, 14:20",
    status: "Success",
  },
  {
    email: "sarah.lg@creativestudio.com",
    company: "Creative Studio",
    plan: "Professional Annual",
    txnId: "#TXN-882103",
    amount: "$499.00",
    date: "Oct 24, 2023, 11:05",
    status: "Success",
  },
  {
    email: "j.doe@freelance.org",
    company: "Independent",
    plan: "Starter Monthly",
    txnId: "#TXN-774129",
    amount: "$49.00",
    date: "Oct 23, 2023, 16:45",
    status: "Pending",
  },
  {
    email: "admin@retailglobal.net",
    company: "Retail Global",
    plan: "Enterprise Monthly",
    txnId: "#TXN-552014",
    amount: "$1,299.00",
    date: "Oct 23, 2023, 09:12",
    status: "Failed",
  },
];

/** Repeated so the list matches the reference design. */
export const seekerActivityFeed: ActivityItem[] = [
  ...seekerActivity,
  ...seekerActivity,
];

export type InterviewItem = {
  id: string;
  company: string;
  role: string;
  when: string;
  mode: string;
};

/** Upcoming interviews shown beside the seeker activity feed. */
export const seekerInterviews: InterviewItem[] = [
  {
    id: "i1",
    company: "TechFlow",
    role: "Senior Product Designer",
    when: "Tomorrow, 10:30 AM",
    mode: "Video call",
  },
  {
    id: "i2",
    company: "CloudOps",
    role: "UX Researcher",
    when: "Fri, 2:00 PM",
    mode: "On-site",
  },
  {
    id: "i3",
    company: "FinGrid",
    role: "Lead Frontend Engineer",
    when: "Mon, 9:00 AM",
    mode: "Video call",
  },
];

export const iconTone: Record<NonNullable<Stat["tone"]>, string> = {
  brand: "bg-[#5b63f6]/15 text-[#8b91ff]",
  amber: "bg-amber-500/15 text-amber-400",
  green: "bg-emerald-500/15 text-emerald-400",
  muted: "bg-white/[0.06] text-white/70",
};
