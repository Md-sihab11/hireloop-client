import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getDashboardRole } from "@/lib/roles";

export default async function DashboardIndexPage() {
  const cookieStore = await cookies();
  const role = getDashboardRole(cookieStore.get("hireloop_role")?.value);
  redirect(`/dashboard/${role}`);
}
