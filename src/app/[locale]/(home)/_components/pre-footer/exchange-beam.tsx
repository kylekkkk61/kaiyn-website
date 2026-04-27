"use client";

import { forwardRef, useRef } from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(function Circle({ className, children }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center overflow-hidden rounded-full border shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

const BEAM_COLOR = "#5e6ad2";

export function ExchangeBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const left1 = useRef<HTMLDivElement>(null);
  const left2 = useRef<HTMLDivElement>(null);
  const left3 = useRef<HTMLDivElement>(null);
  const left4 = useRef<HTMLDivElement>(null);
  const left5 = useRef<HTMLDivElement>(null);

  const right1 = useRef<HTMLDivElement>(null);
  const right2 = useRef<HTMLDivElement>(null);
  const right3 = useRef<HTMLDivElement>(null);
  const right4 = useRef<HTMLDivElement>(null);
  const right5 = useRef<HTMLDivElement>(null);

  const leftItems = [
    { ref: left1, name: "binance" },
    { ref: left2, name: "bingx" },
    { ref: left3, name: "bitget" },
    { ref: left4, name: "btcc" },
    { ref: left5, name: "bybit" },
  ];
  const rightItems = [
    { ref: right1, name: "gateio" },
    { ref: right2, name: "lbank" },
    { ref: right3, name: "mexc" },
    { ref: right4, name: "okx" },
    { ref: right5, name: "pionex" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative flex h-[360px] w-full items-center justify-center overflow-hidden md:h-[440px]"
    >
      <div className="flex size-full max-w-md items-stretch justify-between gap-10">
        <div className="flex flex-col justify-between py-2">
          {leftItems.map((item) => (
            <Circle key={item.name} ref={item.ref}>
              {/* biome-ignore lint/performance/noImgElement: exchange logo PNGs have varied aspect ratios; matches the pattern in exchange-logos-marquee.tsx. */}
              <img
                src={`/img/exchange-logo/icons/${item.name}.png`}
                alt={item.name}
                className="size-full object-contain"
              />
            </Circle>
          ))}
        </div>

        <div className="flex items-center">
          <Circle ref={centerRef} className="size-16 border bg-background p-3">
            {/* biome-ignore lint/performance/noImgElement: small decorative brand mark; next/image adds no benefit here. */}
            <img src="/img/icon-light.svg" alt="Kaiyn" className="size-full" />
          </Circle>
        </div>

        <div className="flex flex-col justify-between py-2">
          {rightItems.map((item) => (
            <Circle key={item.name} ref={item.ref}>
              {/* biome-ignore lint/performance/noImgElement: exchange logo PNGs have varied aspect ratios; matches the pattern in exchange-logos-marquee.tsx. */}
              <img
                src={`/img/exchange-logo/icons/${item.name}.png`}
                alt={item.name}
                className="size-full object-contain"
              />
            </Circle>
          ))}
        </div>
      </div>

      {leftItems.map((item) => (
        <AnimatedBeam
          key={`beam-left-${item.name}`}
          containerRef={containerRef}
          fromRef={item.ref}
          toRef={centerRef}
          duration={4}
          gradientStartColor={BEAM_COLOR}
          gradientStopColor={BEAM_COLOR}
        />
      ))}
      {rightItems.map((item) => (
        <AnimatedBeam
          key={`beam-right-${item.name}`}
          containerRef={containerRef}
          fromRef={item.ref}
          toRef={centerRef}
          duration={4}
          reverse
          gradientStartColor={BEAM_COLOR}
          gradientStopColor={BEAM_COLOR}
        />
      ))}
    </div>
  );
}
