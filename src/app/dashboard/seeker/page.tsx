import type { Metadata } from "next";

import { SeekerDashboard } from "@/features/seeker";

export const metadata: Metadata = {
  title: "Seeker Dashboard — HireLoop",
};

export default function SeekerDashboardPage() {
  return <SeekerDashboard />;
}
