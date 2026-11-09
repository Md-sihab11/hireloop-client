import Image from "next/image";

import { cn } from "cn";

type GlobeBackdropProps = {
  className?: string;
};

/**
 * The real Earth artwork from `public/images/globe.png` (1440 x 1882).
 *
 * The image contains its own glow + stars, so we only do two things here:
 *  1. scale / position it so the sphere's top sits just under the hero copy
 *  2. fade its top edge in with a CSS mask, so the crop line is invisible
 *
 * The `top-[...]` values are tuned per breakpoint so the sphere always lands
 * ~40px below the top of the showcase section.
 */
export function GlobeBackdrop({ className }: GlobeBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[1900px] select-none",
        // Fade the top 80px so the image never shows a hard cut-off edge.
        "[mask-image:linear-gradient(to_bottom,transparent,black_80px)] [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_80px)] [mask-repeat:no-repeat] [mask-size:100%_100%]",
        className
      )}
    >
      <Image
        src="/images/globe.png"
        alt=""
        width={1440}
        height={1882}
        priority
        sizes="(min-width: 847px) 1440px, 170vw"
        className="absolute left-1/2 top-[-240px] h-auto w-[min(1440px,170vw)] max-w-none -translate-x-1/2 sm:top-[-461px] md:top-[-586px] lg:top-[-663px]"
      />
    </div>
  );
}
