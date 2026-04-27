import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BentoCardProps = ComponentProps<"div"> & {
  background?: ReactNode;
  title?: string;
  description?: string;
  href?: string;
  cta?: string;
};

export function BentoCard({
  className,
  background,
  title,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) {
  const hasContent = Boolean(title || description);
  const hasCta = Boolean(cta && href);

  const containerClassName = cn(
    "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-3xl bg-background transform-gpu lg:col-span-1",
    "[border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
    className,
  );

  const inner = (
    <>
      <div>{background}</div>
      {hasContent && (
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
          {title && <h3 className="font-semibold text-lg">{title}</h3>}
          {description && (
            <p className="max-w-lg text-balance text-muted-foreground text-sm">
              {description}
            </p>
          )}
        </div>
      )}
      {hasCta && (
        <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded-md px-3 font-medium text-xs">
            {cta}
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ms-2 size-4"
              aria-hidden
            >
              <title>Arrow right</title>
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={containerClassName}>
        {inner}
      </a>
    );
  }

  return (
    <div className={containerClassName} {...props}>
      {inner}
    </div>
  );
}
