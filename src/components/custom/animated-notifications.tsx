"use client";

import { useInView } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

type NotificationData = {
  coin: string;
  timeframe: string;
  entry: string;
  time: string;
};

const ICON_SRC = "/img/icon-light.svg";

const notifications: NotificationData[] = [
  {
    coin: "$BTC",
    timeframe: "15m",
    entry: "117275.22",
    time: "10m ago",
  },
  {
    coin: "$ETH",
    timeframe: "15m",
    entry: "4483.39",
    time: "10m ago",
  },
  {
    coin: "$SOL",
    timeframe: "15m",
    entry: "187.263",
    time: "5m ago",
  },
  {
    coin: "$BTC",
    timeframe: "1H",
    entry: "117275.22",
    time: "5m ago",
  },
  {
    coin: "$ETH",
    timeframe: "4H",
    entry: "4483.39",
    time: "2m ago",
  },
  {
    coin: "$SOL",
    timeframe: "30m",
    entry: "187.263",
    time: "2m ago",
  },
];

function Notification({ coin, timeframe, entry, time }: NotificationData) {
  const t = useTranslations("HomePage");

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px]",
        "transform-gpu cursor-pointer overflow-hidden rounded-2xl p-4",
        "bg-white/5 backdrop-blur-md",
        "[border:1px_solid_rgba(255,255,255,.1)]",
        "[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          src={ICON_SRC}
          alt=""
          width={40}
          height={40}
          className="size-10 shrink-0"
        />
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre font-medium text-white">
            <span className="text-sm sm:text-lg">
              {coin} {timeframe} {t("bullishSignal")}
            </span>
            <span className="mx-1">·</span>
            <span className="text-white/60 text-xs">{time}</span>
          </figcaption>
          <p className="font-normal text-sm text-white/60">
            {t("entry")}: {entry}
          </p>
        </div>
      </div>
    </figure>
  );
}

export function AnimatedNotificationsBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="absolute inset-x-2 top-4 flex h-[300px] flex-col overflow-hidden p-2 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]"
    >
      {isInView && (
        <AnimatedList delay={1500}>
          {notifications.map((item) => (
            <Notification key={item.coin + item.timeframe} {...item} />
          ))}
        </AnimatedList>
      )}
    </div>
  );
}
