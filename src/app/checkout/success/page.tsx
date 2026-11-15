import Link from "next/link";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-[#08080a] px-4 py-12 text-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-[#5b63f6]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#0d0d12]/90 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-10">
        {/* Glow Badge */}
        <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          <Sparkles className="size-3.5" />
          UPGRADE SUCCESSFUL
        </div>

        {/* Checkmark Icon */}
        <div className="mx-auto mt-6 flex size-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="size-8" />
        </div>

        {/* Headings */}
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Welcome to Hireloop Pro
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-white/60">
          Your payment was received successfully. All advanced talent match modules, unlimited applications, and priority recruiter feeds are now active on your account.
        </p>

        {/* Session Verification Box */}
        <div className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-left">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/40">Status</span>
            <span className="font-semibold text-emerald-400">Paid & Confirmed</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-white/40">Session Verification</span>
            <span className="font-mono text-xs text-[#8b91ff]">TRX-8849201-OK</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-xs">
            <span className="text-white/40">Access Level</span>
            <span className="font-medium text-white">Full Professional Tier</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Button
            variant="brand"
            nativeButton={false}
            render={<Link href="/dashboard" />}
            className="w-full py-6 text-sm font-bold"
          >
            Go to Workspace Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

