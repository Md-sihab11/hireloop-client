import type { Metadata } from "next";

import { AdminDashboard } from "@/features/admin";

export const metadata: Metadata = {
  title: "Admin Dashboard — HireLoop",
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}
