import Link from "next/link";
import { BrandLogo } from "@/components/shared/brand-logo";

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function DribbbleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.73 10.15c-.44-.06-2.54-.34-4.99.64-.17-.4-.36-.8-.55-1.2 2.37-1.12 3.32-2.5 3.44-2.67 1.25 1.57 2.02 3.52 2.1 5.23zm-3.66-6.49c-.16.22-1.15 1.54-3.5 2.62-1.3-2.39-2.73-4.52-2.88-4.75 1.87-.58 3.88-.34 5.38.71l1 .52v.9zm-8.83-1.63c.16.24 1.58 2.36 2.89 4.72-2.88 1.14-5.83 1.25-6.19 1.26C4.69 5.26 7.57 2.65 11.24 2.03zM2.08 12.08c0-.18.01-.36.03-.54.34 0 3.65-.08 6.84-1.39.22.46.43.93.62 1.39-3.83 1.15-7.05 3.97-7.29 4.19-.13-1.16-.2-2.39-.2-3.65zm3.17 6.13c.27-.24 3.19-2.78 6.89-3.85.99 2.59 1.41 4.98 1.48 5.41-3.65 1.26-6.85-.22-8.37-1.56zm10.33 2.87c-.09-.53-.51-2.85-1.48-5.39 2.29-.98 4.29-.72 4.73-.65-.43 2.76-2.31 5.06-4.75 6.04z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/#discovery" },
        { label: "Worker AI", href: "/ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary radar", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/newsroom" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/[0.07] bg-[#08080a]">
      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo />
            <p className="max-w-xs text-xs leading-relaxed text-white/50 sm:text-sm">
              The AI-native career platform built for people who take their work seriously.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:border-white/20 hover:text-white"
              >
                <FacebookIcon className="size-3.5" />
              </Link>
              <Link
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:border-white/20 hover:text-white"
              >
                <DribbbleIcon className="size-3.5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-white/60 transition hover:border-white/20 hover:text-white"
              >
                <LinkedInIcon className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-3">
              <p className="text-xs font-semibold tracking-wider text-indigo-400">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-white/50 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-[11px] text-white/40">
            Copyright 2024 — Programming Hero
          </p>
          <div className="flex items-center gap-4 text-[11px] text-white/40">
            <Link href="/terms" className="hover:text-white/70 transition">
              Terms &amp; Policy
            </Link>
            <span>·</span>
            <Link href="/privacy" className="hover:text-white/70 transition">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
