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

export function LoginForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const { error } = await authClient.signIn.email({
      email: String(formData.get("email") ?? ""),
      password: String(formData.get("password") ?? ""),
    });

    if (error) {
      setPending(false);
      setError(error.message ?? "Invalid email or password.");
      return;
    }

    // Signed in — send the user back to the landing page.
    router.push("/");
    router.refresh();
  }

  return (
    <AuthCard
      title="Welcome back"
      description="Log in to keep track of the jobs you have saved and applied to."
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
          {pending ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </AuthCard>
  );
}
