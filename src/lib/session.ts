import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth, ensureHealthyDns } from "@/lib/auth";

/** The subset of the better-auth user our dashboard UI needs. */
export type SessionUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: string;
};

/**
 * Read the signed-in user for the current request, or `null`.
 */
export async function getSessionUser(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const role = cookieStore.get("hireloop_role")?.value ?? "seeker";

  // Parse optional user data stored during login/signup
  const userCookie = cookieStore.get("hireloop_user")?.value;
  let customUser: { name?: string; email?: string } | null = null;
  if (userCookie) {
    try {
      customUser = JSON.parse(decodeURIComponent(userCookie));
    } catch {
      // ignored
    }
  }

  // Only query better-auth if a session token is present
  if (cookieStore.has("better-auth.session_token")) {
    try {
      const requestHeaders = await headers();
      await ensureHealthyDns();
      const session = await auth.api.getSession({ headers: requestHeaders });
      if (session?.user) {
        return {
          ...(session.user as SessionUser),
          role,
        };
      }
    } catch (err) {
      // Avoid crashing on temporary network/DNS issues
      console.error("Error retrieving session from better-auth:", err);
    }
  }

  // Fallback to cookie-backed session if user signed in
  const hasAuthCookie =
    cookieStore.has("better-auth.session_token") ||
    cookieStore.has("hireloop_role") ||
    cookieStore.has("hireloop_session") ||
    cookieStore.has("hireloop_user");

  if (hasAuthCookie) {
    const roleNames: Record<string, string> = {
      admin: "Alex Rivera",
      recruiter: "Alex Sterling",
      seeker: "Seeker Portal",
    };
    return {
      id: "usr_active",
      name: customUser?.name || roleNames[role] || "Seeker Portal",
      email: customUser?.email || `${role}@hireloop.com`,
      image: null,
      role,
    };
  }

  return null;
}

/** Same as `getSessionUser`, but sends visitors to `/login` when signed out. */
export async function requireUser(): Promise<SessionUser> {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}
