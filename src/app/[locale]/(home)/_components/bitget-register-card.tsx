"use client";

import {
  Check,
  ChevronDown,
  ChevronRight,
  Eye,
  Lock,
  Mail,
  Wallet,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

const REGISTER_URL =
  "https://www.bitget.site/zh-TC/expressly?channelCode=ue94&vipCode=5nmb&languageType=5";

const externalLinkProps = {
  href: REGISTER_URL,
  target: "_blank" as const,
  rel: "noopener noreferrer",
};

export function BitgetRegisterCard() {
  const t = useTranslations("HomePage.timeline.steps.registerExchange.card");
  const [showInvite, setShowInvite] = useState(false);

  return (
    <div className="group relative flex w-full max-w-[400px] transform-gpu flex-col gap-4 overflow-hidden bg-background px-5 py-6 text-left [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:px-6 sm:py-7">
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] text-muted-foreground sm:text-xs">
          {t("emailLabel")}
        </span>
        <a
          {...externalLinkProps}
          className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/50"
        >
          <Mail className="size-4 shrink-0 text-muted-foreground" />
          <span className="truncate text-xs text-muted-foreground/70 sm:text-sm">
            {t("emailPlaceholder")}
          </span>
        </a>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] text-muted-foreground sm:text-xs">
          {t("passwordLabel")}
        </span>
        <a
          {...externalLinkProps}
          className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/50"
        >
          <Lock className="size-4 shrink-0 text-muted-foreground" />
          <span className="flex-1 truncate text-xs text-muted-foreground/70 sm:text-sm">
            {t("passwordPlaceholder")}
          </span>
          <Eye className="size-4 shrink-0 text-muted-foreground" />
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => setShowInvite((prev) => !prev)}
          className="flex items-center justify-between text-xs text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
        >
          <span>{t("inviteLabel")}</span>
          {showInvite ? (
            <ChevronDown className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          )}
        </button>
        {showInvite && (
          <a
            {...externalLinkProps}
            className="flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            <span className="w-full truncate text-xs text-muted-foreground/70 sm:text-sm">
              5nmb
            </span>
          </a>
        )}
      </div>

      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-sm bg-primary">
          <Check className="size-2.5 text-primary-foreground" strokeWidth={3} />
        </span>
        <p className="text-[11px] leading-relaxed text-muted-foreground">
          {t("agreement")}
        </p>
      </div>

      <a
        {...externalLinkProps}
        className="rounded-full bg-primary py-2.5 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {t("submitButton")}
      </a>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="whitespace-nowrap text-[11px] text-muted-foreground">
          {t("divider")}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="flex justify-center items-center gap-2">
        <IconLink ariaLabel={t("google")} className="size-10">
          <GoogleIcon className="size-4" />
        </IconLink>
        <IconLink ariaLabel={t("apple")} className="size-10">
          <AppleIcon className="size-4 text-foreground" />
        </IconLink>
        <IconLink ariaLabel={t("wallet")} className="h-10 gap-1.5 px-3">
          <Wallet className="size-4 text-muted-foreground" />
          <MetaMaskIcon className="size-4" />
          <ChevronRight className="size-4 text-muted-foreground" />
        </IconLink>
      </div>

      <p className="text-center text-[11px] text-muted-foreground sm:text-xs">
        {t("haveAccount")}{" "}
        <a
          {...externalLinkProps}
          className="font-medium text-primary hover:brightness-110"
        >
          {t("goLogin")}
        </a>
      </p>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </div>
  );
}

function IconLink({
  children,
  ariaLabel,
  className,
}: {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}) {
  return (
    <a
      href={REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted/50",
        className,
      )}
    >
      {children}
    </a>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34.5 6 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.8 1.2 8 3l5.7-5.7C34.5 6 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.5-2.1 14.3-5.5L32 33.4c-2.2 1.6-5 2.6-8 2.6-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.7 39.7 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6.4 5.4C40 35.5 44 30.3 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function MetaMaskIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 318.6 318.6"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#e2761b"
        stroke="#e2761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m274.1 35.5-99.5 73.9L193 65.8z"
      />
      <path
        fill="#e4761b"
        stroke="#e4761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z"
      />
      <path
        fill="#e4761b"
        stroke="#e4761b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z"
      />
      <path
        fill="#d7c1b3"
        stroke="#d7c1b3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"
      />
      <path
        fill="#233447"
        stroke="#233447"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"
      />
      <path
        fill="#cd6116"
        stroke="#cd6116"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"
      />
      <path
        fill="#e4751f"
        stroke="#e4751f"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"
      />
      <path
        fill="#f6851b"
        stroke="#f6851b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z"
      />
      <path
        fill="#c0ad9e"
        stroke="#c0ad9e"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"
      />
      <path
        fill="#161616"
        stroke="#161616"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"
      />
      <path
        fill="#763d16"
        stroke="#763d16"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"
      />
      <path
        fill="#f6851b"
        stroke="#f6851b"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z"
      />
    </svg>
  );
}
