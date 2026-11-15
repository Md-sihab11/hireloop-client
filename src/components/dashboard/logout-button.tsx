"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

/** Signs out of better-auth, then sends the user back to the login screen. */
export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    try {
      await authClient.signOut();
    } catch {
      // ignored
    }
    document.cookie = "hireloop_role=; path=/; max-age=0";
    document.cookie = "hireloop_session=; path=/; max-age=0";
    document.cookie = "hireloop_user=; path=/; max-age=0";
    localStorage.removeItem("hireloop_role");
    localStorage.removeItem("hireloop_user");
    router.push("/login");
    router.refresh();
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleLogout}
      className="w-full justify-start gap-2 text-muted-foreground"
    >
      <LogOut className="size-4" />
      Log out
    </Button>
  );
}
