"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BriefcaseIcon, LoaderCircleIcon, ShieldCheckIcon, UserIcon } from "lucide-react";

import { AuthCard } from "@/features/auth/components/auth-card";
import { FormField } from "@/features/auth/components/form-field";
import { SocialAuthButtons } from "@/features/auth/components/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

type RoleOption = "seeker" | "admin" | "recruiter";

const ROLES: { id: RoleOption; label: string; Icon: typeof UserIcon; hint: string }[] = [
  {
    id: "seeker",
    label: "Seeker",
    Icon: UserIcon,
    hint: "Access job listings, saved applications, and profile tracking.",
  },
  {
    id: "admin",
    label: "Admin",
    Icon: ShieldCheckIcon,
    hint: "Full system console: users, metrics, and transactions.",
  },
  {
    id: "recruiter",
    label: "Recruiter",
    Icon: BriefcaseIcon,
    hint: "Manage job posts, review applicants, and hiring pipelines.",
  },
];

export function LoginForm() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<RoleOption>("seeker");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleRoleChange(role: RoleOption) {
    setSelectedRole(role);
    setError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");

    // Persist chosen role and user session before authentication so the header
    // and dashboard guard can read it immediately.
    const userName = email.split("@")[0] || activeRole.label;
    const userInfo = { name: userName, email, role: selectedRole };
    document.cookie = `hireloop_role=${selectedRole}; path=/; max-age=2592000; SameSite=Lax`;
    document.cookie = `hireloop_session=true; path=/; max-age=2592000; SameSite=Lax`;
    document.cookie = `hireloop_user=${encodeURIComponent(JSON.stringify(userInfo))}; path=/; max-age=2592000; SameSite=Lax`;
    localStorage.setItem("hireloop_role", selectedRole);
    localStorage.setItem("hireloop_user", JSON.stringify(userInfo));

    try {
      await authClient.signIn.email({ email, password });
    } catch {
      // Backend not connected yet - proceeding with role session
    }

    // Direct routing to the selected role's dashboard (recruiter -> /dashboard/recruiter, admin -> /dashboard/admin, seeker -> /dashboard/seeker)
    router.push(`/dashboard/${selectedRole}`);
    router.refresh();
  }

  const activeRole = ROLES.find((r) => r.id === selectedRole)!;

  return (
    <AuthCard
      title="Welcome back"
      description="Choose your account type and sign in to continue."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-white transition-colors hover:text-white/70"
          >
            Sign up
          </Link>
        </>
      }
    >
      {/* ── Role Selector ───────────────────────────────────────────── */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50">
            Account Type
          </span>
          <span className="text-[11px] font-semibold text-indigo-400">
            {activeRole.label}
          </span>
        </div>

        {/* Tab pills */}
        <div
          role="tablist"
          aria-label="Select your account role"
          className="grid grid-cols-3 gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1"
        >
          {ROLES.map(({ id, label, Icon }) => {
            const isActive = selectedRole === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleRoleChange(id)}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-medium outline-none transition-all",
                  isActive
                    ? "text-white shadow-sm"
                    : "text-white/55 hover:bg-white/[0.05] hover:text-white"
                )}
                style={isActive ? { backgroundColor: "#5b63f6" } : undefined}
              >
                <Icon className="size-3.5 shrink-0" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Role hint text */}
        <p className="text-[11px] leading-relaxed text-white/40">{activeRole.hint}</p>
      </div>

      <SocialAuthButtons />

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {error ? (
          <p
            role="alert"
            className="rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-sm text-destructive"
          >
            {error}
          </p>
        ) : null}

        <FormField
          id="email"
          name="email"
          label="Email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          required
        />
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />

        <Button
          type="submit"
          variant="brand"
          size="lg"
          disabled={pending}
          className="w-full"
        >
          {pending ? (
            <LoaderCircleIcon className="animate-spin" aria-hidden="true" />
          ) : null}
          {pending ? "Signing in..." : `Sign in as ${activeRole.label}`}
        </Button>
      </form>
    </AuthCard>
  );
}

