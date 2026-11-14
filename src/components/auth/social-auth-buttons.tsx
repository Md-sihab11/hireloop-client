"use client";

import { useState } from "react";
import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

type GoogleIconProps = {
  className?: string;
};

function GoogleIcon({ className }: GoogleIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M12.24 10.29v3.68h5.16c-.22 1.4-1.64 4.11-5.16 4.11-3.11 0-5.64-2.57-5.64-5.73s2.53-5.73 5.64-5.73c1.77 0 2.96.76 3.64 1.41l2.47-2.38C16.79 4.19 14.75 3.3 12.24 3.3 7.1 3.3 2.95 7.44 2.95 12.58s4.15 9.28 9.29 9.28c5.36 0 8.9-3.77 8.9-9.07 0-.61-.07-1.07-.15-1.53h-8.75z" />
    </svg>
  );
}

/**
 * Google sign-in button plus the "or" divider that separates it from the
 * email form. GitHub is intentionally omitted — no client id/secret is
 * configured in `.env`, so the button would always fail.
 */
export function SocialAuthButtons() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGoogleSignIn() {
    setPending(true);
    setError(null);

    // On success better-auth redirects the browser, so we only land back
    // here (with pending still true) when something went wrong.
    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });

    if (error) {
      setPending(false);
      setError(error.message ?? "Could not start Google sign-in.");
    }
  }

  return (
    <div className="space-y-4">
      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={handleGoogleSignIn}
        disabled={pending}
        className="w-full border-white/[0.1] bg-white/[0.03] text-sm text-white/70 hover:text-white"
      >
        {pending ? (
          <LoaderCircleIcon className="animate-spin" aria-hidden="true" />
        ) : (
          <GoogleIcon className="size-4" />
        )}
        {pending ? "Redirecting..." : "Continue with Google"}
      </Button>

      {error ? (
        <p role="alert" className="text-center text-xs text-destructive">
          {error}
        </p>
      ) : null}

      <div className="flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-white/[0.07]" />
        <span className="text-[11px] font-semibold tracking-[0.18em] text-white/35 uppercase">
          or
        </span>
        <span className="h-px flex-1 bg-white/[0.07]" />
      </div>
    </div>
  );
}
