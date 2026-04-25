"use client";

import {
  MessageCircle,
  Rocket,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    key: "joinCommunity",
    icon: Users,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    },
  },
  {
    key: "registerBitget",
    icon: UserPlus,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    reverse: true,
  },
  {
    key: "kycDeposit",
    icon: ShieldCheck,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
  },
  {
    key: "contactAdmin",
    icon: MessageCircle,
    image: {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    reverse: true,
  },
];

const Timeline = () => {
  const t = useTranslations("HomePage.timeline");
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-32">
      <div className="border-y">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-(--page-inline) py-4 lg:border-x lg:py-8">
          <Badge
            variant="outline"
            className="w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
          >
            <Rocket className="size-4" />
            <span>{t("badge")}</span>
          </Badge>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl">
            {t("title")}
          </h2>
          <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className="relative mx-auto w-full max-w-7xl px-(--page-inline) pb-40 lg:border-x lg:pt-20 [&>*:last-child]:pb-20 [&>div>div:first-child]:pt-20!"
      >
        <div className="pointer-events-none absolute top-0 z-0 h-full w-[3px] translate-x-5 lg:left-1/2 lg:-translate-x-1/2">
          <div className="h-4 w-[3px] bg-linear-to-b from-transparent to-foreground/10"></div>
          <div className="relative h-[calc(100%-1rem)] w-full bg-linear-to-b from-foreground/10 via-foreground/10 to-transparent">
            <motion.div
              className="absolute top-0 left-0 z-10 w-[3px] rounded-full bg-linear-to-b from-transparent via-foreground to-transparent"
              style={{ height }}
            />
          </div>
        </div>
        {STEPS.map((item) => {
          const title = t(`steps.${item.key}.title`);
          const description = t(`steps.${item.key}.description`);
          return (
            <div key={item.key} className="relative flex">
              <div
                className={`flex w-full justify-center px-1 py-10 text-end md:gap-6 lg:gap-10 ${item?.reverse ? "lg:flex-row-reverse lg:text-start" : ""} `}
              >
                <div className="flex-1 max-lg:hidden">
                  <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
                  <p
                    className={`mt-2.5 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground ${item?.reverse ? "" : "ml-auto"}`}
                  >
                    {description}
                  </p>
                </div>
                <div className="z-[-1] size-fit -translate-y-5 bg-background p-4 max-lg:-translate-x-4">
                  <div className="rounded-[10px] border bg-card p-[5px] shadow-md">
                    <div className="size-fit rounded-md border bg-muted p-1">
                      <item.icon className="size-4 shrink-0" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 max-lg:-translate-x-4">
                  <div className="text-start lg:pointer-events-none lg:hidden">
                    <h3 className="text-2xl tracking-[-0.96px]">{title}</h3>
                    <p className="mt-2.5 mb-10 max-w-[300px] tracking-[-0.32px] text-balance text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <div className="flex items-start justify-start">
                    <div className={` ${item?.reverse ? "lg:ml-auto" : ""}`}>
                      <div className="px-6 lg:px-10">
                        <DiagonalPattern className="h-6 lg:h-10" />
                      </div>
                      <div className="relative grid grid-cols-[auto_1fr_auto] items-stretch">
                        <DiagonalPattern className="h-full w-6 lg:w-10" />
                        <Image
                          src={item.image.src}
                          width={400}
                          height={500}
                          alt={title}
                          className="object-contain dark:invert"
                        />
                        <DiagonalPattern className="w-6 lg:w-10" />
                      </div>
                      <div className="px-6 lg:px-10">
                        <DiagonalPattern className="h-6 lg:h-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
        <div className="mx-auto h-full w-full max-w-7xl px-(--page-inline) lg:border-x"></div>
      </div>
    </section>
  );
};

export { Timeline };

const DiagonalPattern = ({
  className,
  patternColor = "hsl(var(--foreground))",
  patternOpacity = 0.15,
}: {
  className?: string;
  patternColor?: string;
  patternOpacity?: number;
}) => {
  const svgPattern = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23${patternColor}' fill-opacity='${patternOpacity}' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div
      className={cn("h-full w-full border-2 border-dashed", className)}
      style={{
        backgroundImage: svgPattern,
      }}
    />
  );
};
