import Link from "next/link";
import type { ReactNode } from "react";
import { BellIcon, GiftIcon, ZapIcon } from "lucide-react";

import { BrandLogo } from "@/components/shared/brand-logo";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/landing-page";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
  icon?: ReactNode;
};

const supportColumns: FooterColumn[] = [
  {
    title: "Support",
    icon: BellIcon,
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Privacy Policy", href: "/help/privacy" },
      { label: "Accessibility", href: "/help/accessibility" },
    ],
  },
  {
    title: "Innovation",
    icon: ZapIcon,
    links: [
      { label: "How we match", href: "/help/matching" },
      { label: "Behind the scenes", href: "/company/operations" },
    ],
  },
];

function Column({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}

function ColumnTitle({
  icon,
  children,
}: {
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/55">
        {children}
      </span>
      {icon && <span className="size-3.5 opacity-70" aria-hidden="true" />}
    </div>
  );
}

function ColumnItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-white/30">•</span>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#101013]/95">
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-8 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-6 rounded-2xl border border-white/[0.07] bg-[#141416]/85 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] sm:p-8">
            <div className="flex items-center gap-4">
              <BrandLogo className="h-6 w-auto sm:h-7" />
              <div className="min-w-0 space-y-1.5">
                <p className="text-xs font-semibold tracking-[0.1em] uppercase text-white/60">
                  HireLoop
                </p>
                <p className="text-[11px] leading-6 text-white/45 truncate">
                  AI-powered job matching for everyone
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                variant="secondary"
                size="sm"
                className="gap-1.5 text-white/55 hover:text-white"
              >
                <GiftIcon className="size-4" aria-hidden="true" />
                Join the waitlist
              </Button>
              <Button
                variant="outline"
                className="text-white/55 hover:text-white"
              >
                <Link className="inline-flex size-4 items-center justify-center rounded-full border border-white/[0.1] p-0.5 hover:border-white/20" />
                Twitter
              </Button>
            </div>
          </div>

          {/* Core column */}
          <Column>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </Column>

          {/* Support column */}
          <Column>
            <ColumnTitle icon={BellIcon}>Support</ColumnTitle>
            {supportColumns[0].links.map((link) => (
              <ColumnItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </Link>
              </ColumnItem>
            ))}
          </Column>

          {/* Innovation column */}
          <Column>
            <ColumnTitle icon={ZapIcon}>Innovation</ColumnTitle>
            {supportColumns[1].links.map((link) => (
              <ColumnItem key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </Link>
              </ColumnItem>
            ))}
          </Column>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/[0.07] py-6">
          <p className="text-center text-[11px] text-white/40">
            ©{" "}
            {new Date().getFullYear()} HireLoop Inc. · Privacy Policy · Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
