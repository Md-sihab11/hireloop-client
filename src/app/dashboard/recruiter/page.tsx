import type { Metadata } from "next";

import { RecruiterDashboard } from "@/features/recruiter";

export const metadata: Metadata = {
  title: "Recruiter Dashboard — HireLoop",
};

export default function RecruiterDashboardPage() {
  return <RecruiterDashboard />;
}
