"use client";

import { ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { ShinyButton } from "@/components/ui/shiny-button";

export function JoinCommunityButton() {
  const t = useTranslations("HomePage");

  return (
    <a
      href="https://t.me/kaiyncapital"
      target="_blank"
      rel="noopener noreferrer"
      className="light"
    >
      <ShinyButton className="rounded-full border-neutral-200 bg-white [&>span]:text-base [&>span]:text-black [&>span]:normal-case">
        <span className="inline-flex items-center gap-2">
          {t("joinCommunity")}
          <ChevronRightIcon className="size-4" />
        </span>
      </ShinyButton>
    </a>
  );
}
