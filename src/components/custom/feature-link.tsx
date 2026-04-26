import { ChevronRight } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type FeatureLinkProps = {
  href: string;
  label: ReactNode;
  url?: string;
  color?: string;
};

const DEFAULT_COLOR = "#5e6ad2";

export function FeatureLink({
  href,
  label,
  url = "",
  color = DEFAULT_COLOR,
}: FeatureLinkProps) {
  const dotStyle = {
    background: `color-mix(in oklab, ${color} 15%, transparent)`,
    "--feature-pulse-color": `color-mix(in oklab, ${color} 10%, transparent)`,
  } as CSSProperties;

  return (
    <a
      href={href}
      rel="noopener"
      className="inline-flex items-center gap-3 leading-none transition-[filter] duration-150 ease-out hover:brightness-[1.3]"
    >
      <span
        aria-hidden
        className="relative inline-block size-4 shrink-0 animate-feature-pulse rounded-full"
        style={dotStyle}
      >
        <span
          className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: color }}
        />
      </span>
      <span className="text-[0.9375rem] font-medium text-foreground">
        {label}
      </span>
      <span className="text-[0.9375rem] font-medium text-foreground">
        <ChevronRight className="size-[0.9375rem]" />
      </span>
      {url && (
        <span className="text-[0.9375rem] text-muted-foreground">
          {url}
          <span className="text-muted-foreground/60"> &rarr;</span>
        </span>
      )}
    </a>
  );
}
