"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon } from "lucide-react";

import { AuthCard } from "@/components/auth/auth-card";
import { FormField } from "@/components/auth/form-field";
import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

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
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const errors = validate(formData);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setPending(true);
    const { error } = await authClient.signUp.email({
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    });

    if (error) {
      setPending(false);
      setError(error.message ?? "Could not create your account.");
      return;
    }

    // Account created (and a session cookie set) — go to the landing page.
    router.push("/");
    router.refresh();
  }

  return (
    <AuthCard
      title="Create your account"
      description="Join HireLoop and start matching with roles picked for you."
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
          {pending ? "Creating account..." : "Create account"}
        </Button>
      </form>
    </AuthCard>
  );
}
