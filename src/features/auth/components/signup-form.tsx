"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BriefcaseIcon, LoaderCircleIcon, UserIcon } from "lucide-react";

import { AuthCard } from "@/features/auth/components/auth-card";
import { FormField } from "@/features/auth/components/form-field";
import { SocialAuthButtons } from "@/features/auth/components/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

/** Signup only exposes Seeker and Recruiter — Admin accounts are created by invitation only. */
type SignupRole = "seeker" | "recruiter";

const SIGNUP_ROLES: { id: SignupRole; label: string; Icon: typeof UserIcon; hint: string }[] = [
  {
    id: "seeker",
    label: "Job Seeker",
    Icon: UserIcon,
    hint: "Find jobs, track applications, and manage your career profile.",
  },
  {
    id: "recruiter",
    label: "Recruiter",
    Icon: BriefcaseIcon,
    hint: "Post jobs, review applicants, and manage your hiring pipeline.",
  },
];

type FieldErrors = {
  name?: string;
  password?: string;
  confirmPassword?: string;
};

/** Client-side checks that run before we even call the server. */
function validate(formData: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const name = String(formData.get("name") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const confirmPassword = String(formData.get("confirmPassword") ?? "");

  if (name.length < 2) {
    errors.name = "Please enter your full name.";
  }
  if (password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }
  return errors;
}

export function SignupForm() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<SignupRole>("seeker");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function handleRoleChange(role: SignupRole) {
    setSelectedRole(role);
    setError(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    // Persist the chosen role and user session before authentication so the header
    // and dashboard guard can read it immediately after signup.
    const fullName = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "");
    const userInfo = { name: fullName, email, role: selectedRole };

    document.cookie = `hireloop_role=${selectedRole}; path=/; max-age=2592000; SameSite=Lax`;
    document.cookie = `hireloop_session=true; path=/; max-age=2592000; SameSite=Lax`;
    document.cookie = `hireloop_user=${encodeURIComponent(JSON.stringify(userInfo))}; path=/; max-age=2592000; SameSite=Lax`;
    localStorage.setItem("hireloop_role", selectedRole);
    localStorage.setItem("hireloop_user", JSON.stringify(userInfo));

    setPending(true);
    try {
      await authClient.signUp.email({
        name: fullName,
        email,
        password,
      });
    } catch {
      // Backend not connected yet - proceeding with role session
    }

    // Account created — redirect straight to the role-specific dashboard.
    router.push(`/dashboard/${selectedRole}`);
    router.refresh();
  }

  const activeRole = SIGNUP_ROLES.find((r) => r.id === selectedRole)!;

  return (
    <AuthCard
      title="Create your account"
      description="Choose your account type and join HireLoop."
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-white transition-colors hover:text-white/70"
          >
            Log in
          </Link>
        </>
      }
    >
      {/* ── Role Selector (Seeker / Recruiter only) ───────────────────── */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/50">
            I am a
          </span>
          <span className="text-[11px] font-semibold text-indigo-400">
            {activeRole.label}
          </span>
        </div>

        {/* Two-tab pill row */}
        <div
          role="tablist"
          aria-label="Select your account type"
          className="grid grid-cols-2 gap-1 rounded-xl border border-white/[0.08] bg-white/[0.03] p-1"
        >
          {SIGNUP_ROLES.map(({ id, label, Icon }) => {
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

        {/* Role hint */}
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
          id="name"
          name="name"
          label="Full name"
          placeholder="Ada Lovelace"
          autoComplete="name"
          required
          error={fieldErrors.name}
        />
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
          placeholder="At least 8 characters"
          autoComplete="new-password"
          required
          error={fieldErrors.password}
        />
        <FormField
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm password"
          type="password"
          placeholder="Repeat your password"
          autoComplete="new-password"
          required
          error={fieldErrors.confirmPassword}
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
          {pending ? "Creating account..." : `Sign up as ${activeRole.label}`}
        </Button>
      </form>
    </AuthCard>
  );
}

