import Image from "next/image";
import Link from "next/link";

import { cn } from "cn";

type BrandLogoProps = {
  className?: string;
};

/** The real HireLoop wordmark from `public/images/logo.png` (154 x 44). */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="HireLoop — Home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/images/logo.png"
        alt="HireLoop"
        width={154}
        height={44}
        priority
        className="h-6 w-auto sm:h-7"
      />
    </Link>
  );
}
