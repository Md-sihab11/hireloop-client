import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8">
      {/* Curved glowing grid dome backdrop matching the reference design */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/cta-bg.png"
          alt=""
          width={1440}
          height={800}
          priority
          className="h-auto w-full max-w-[1440px] object-cover opacity-90 select-none"
        />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/signup" />}
            className="rounded-xl bg-white px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-white/90"
          >
            Create a free account
          </Button>

          <Button
            variant="outline"
            size="lg"
            nativeButton={false}
            render={<Link href="#pricing" />}
            className="rounded-xl border-white/[0.12] bg-white/[0.04] px-6 py-2.5 text-xs font-medium text-white/80 transition hover:bg-white/[0.08] hover:text-white"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}

