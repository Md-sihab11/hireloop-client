/**
 * The three role-based dashboards HireLoop ships with.
 *
 * TODO(api): once your backend exposes a `role` on the user document, pass it
 * straight into `getDashboardRole` instead of relying on the fallback below.
 */
export type DashboardRole = "seeker" | "recruiter" | "admin";

export const DASHBOARD_ROLES: DashboardRole[] = ["seeker", "recruiter", "admin"];

/** Route segment for a role, e.g. `/dashboard/seeker`. */
export function dashboardPath(role: DashboardRole): string {
  return `/dashboard/${role}`;
}

/**
 * Read a user's dashboard role.
 * Falls back to `seeker` so a freshly signed-up account lands somewhere useful.
 */
export function getDashboardRole(role?: string | null): DashboardRole {
  return DASHBOARD_ROLES.includes(role as DashboardRole)
    ? (role as DashboardRole)
    : "seeker";
}

/**
 * Pull the role out of a `/dashboard/<role>/...` URL so the shared shell knows
 * which sidebar to draw. Anything unrecognised falls back to `seeker`.
 */
export function roleFromPathname(pathname: string): DashboardRole {
  return getDashboardRole(pathname.split("/")[2]);
}
