import { cn } from "cn";

/**
 * A deterministic star field. We avoid Math.random() so the server and client
 * always render the exact same positions (no hydration warnings).
 */
const STARS = Array.from({ length: 70 }, (_, index) => ({
  left: `${(index * 37.7 + 11) % 100}%`,
  top: `${(index * 61.3 + 5) % 72}%`,
  size: index % 11 === 0 ? 2 : 1,
  opacity: 0.12 + ((index * 17) % 45) / 100,
}));

type StarFieldProps = {
  className?: string;
};

export function StarField({ className }: StarFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {STARS.map((star, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
