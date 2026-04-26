"use client";

import { BadgeCheck, ChevronDown, Wallet } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { AnimatedBeam } from "@/components/custom/animated-beam";

const FROM_ADDRESS_SHORT = "TQn9...vYWh";
const FROM_ADDRESS_LONG = "TQn9YwZcBxKk...PavYWh";
const TO_ADDRESS_SHORT = "TR7N...3kTr";
const TO_ADDRESS_LONG = "TR7NHqj4mBdY...rs3kTr";

const BEAMS = [
  { offset: -50, curvature: 25 },
  { offset: 0, curvature: 0 },
  { offset: 50, curvature: -25 },
];

export function BlockchainTransferCard() {
  const t = useTranslations("HomePage.timeline.steps.kycDeposit.card");
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="group relative flex w-full max-w-[400px] transform-gpu flex-col gap-4 overflow-hidden bg-background px-5 py-6 text-left [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:px-6 sm:py-7 lg:max-w-[480px]"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold text-foreground sm:text-lg">
            {t("title")}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-emerald-500 sm:text-xs">
            <BadgeCheck className="size-3.5" strokeWidth={2.5} />
            {t("kycBadge")}
          </span>
        </div>
        <UsdtIcon className="size-9 shrink-0" />
      </div>

      <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2.5">
        <TronIcon className="size-4 shrink-0" />
        <span className="flex-1 truncate text-xs text-foreground/80 sm:text-sm">
          {t("network")}
        </span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground" />
      </div>

      <div className="flex flex-col gap-2">
        <div
          ref={fromRef}
          className="relative z-10 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2.5"
        >
          <Wallet className="size-4 shrink-0 text-muted-foreground" />
          <span className="text-xs text-foreground/80 sm:text-sm">
            {t("fromName")}
          </span>
          <span className="ml-auto truncate font-mono text-[11px] text-muted-foreground/80 sm:text-xs">
            <span className="lg:hidden">{FROM_ADDRESS_SHORT}</span>
            <span className="hidden lg:inline">{FROM_ADDRESS_LONG}</span>
          </span>
        </div>

        <div aria-hidden className="h-8" />

        <div
          ref={toRef}
          className="relative z-10 flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2.5"
        >
          <BitgetIcon className="size-4 shrink-0" />
          <span className="text-xs text-foreground/80 sm:text-sm">
            {t("toName")}
          </span>
          <span className="ml-auto truncate font-mono text-[11px] text-muted-foreground/80 sm:text-xs">
            <span className="lg:hidden">{TO_ADDRESS_SHORT}</span>
            <span className="hidden lg:inline">{TO_ADDRESS_LONG}</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-muted-foreground">{t("feeLabel")}</span>
          <span className="text-foreground/80">{t("feeValue")}</span>
        </div>
        <div className="flex items-center justify-between text-xs sm:text-sm">
          <span className="text-muted-foreground">{t("arrivalLabel")}</span>
          <span className="text-foreground/80">{t("arrivalValue")}</span>
        </div>
      </div>

      <button
        type="button"
        className="rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {t("submitButton")}
      </button>

      <div className="pointer-events-none absolute inset-0 z-20 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />

      {BEAMS.map(({ offset, curvature }) => (
        <AnimatedBeam
          key={offset}
          containerRef={containerRef}
          fromRef={fromRef}
          toRef={toRef}
          startXOffset={offset}
          curvature={curvature}
        />
      ))}
    </div>
  );
}

function UsdtIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#26A17B" />
      <path
        fill="#FFFFFF"
        d="M17.92 14.36v-2.05h4.69V9.18H9.4v3.13h4.69v2.05c-3.81.18-6.68.94-6.68 1.85s2.87 1.66 6.68 1.84v6.56h3.83v-6.56c3.81-.18 6.67-.93 6.67-1.84s-2.86-1.67-6.67-1.85m0 3.13v-.01c-.1.01-.59.04-1.69.04-.88 0-1.5-.03-1.71-.04v.01c-3.32-.15-5.81-.73-5.81-1.42s2.49-1.27 5.81-1.42v2.27c.22.01.85.05 1.72.05 1.06 0 1.58-.04 1.68-.05v-2.26c3.32.15 5.79.73 5.79 1.42s-2.47 1.26-5.79 1.42"
      />
    </svg>
  );
}

function TronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#EB0029" />
      <path
        fill="#FFFFFF"
        d="M22.6 11.27 9.4 8.55l7 15.27 8.94-10.81zm-.84.78-3.27 2.7-5.65-1.16zm-4.46 3.55-1.97 5.93-3.71-8.1zm.96.42 4.66-.5-6.56 7.92zm4.31-1.39-1.69-1.45 2.78-.55z"
      />
    </svg>
  );
}

function BitgetIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#54FFF5" />
      <path
        fill="#000"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.81 14.328h3.985L8.261 9.661l4.591-4.667 1.252-1.244H9.966L4.698 9.167a.708.708 0 0 0 .003.986l4.108 4.175Zm2.395-4.656 4.533 4.667-4.591 4.667-1.252 1.244h4.138l5.268-5.416a.708.708 0 0 0-.003-.986L15.19 9.672h-3.986.001Z"
      />
    </svg>
  );
}
