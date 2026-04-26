"use client";

import { ShieldCheck } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";

import { cn } from "@/lib/utils";

const BRAND_COLOR = "#2AABEE";

export function ContactAdminCard() {
  const t = useTranslations("HomePage.timeline.steps.contactAdmin.card");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div
      ref={ref}
      className="group relative flex w-full max-w-[400px] transform-gpu flex-col gap-4 overflow-hidden bg-background px-5 py-6 text-left [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] sm:px-6 sm:py-7"
    >
      <header className="flex items-center gap-3 border-white/10 border-b pb-3">
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: `${BRAND_COLOR}26` }}
        >
          <ShieldCheck
            className="size-5"
            style={{ color: BRAND_COLOR }}
            strokeWidth={2.25}
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate font-semibold text-foreground text-sm">
            {t("adminName")}
          </span>
          <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {t("adminStatus")}
          </span>
        </div>
      </header>

      <div className="flex flex-col gap-3">
        <motion.div
          className="flex w-full justify-end"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
        >
          <p
            className={cn(
              "max-w-[80%] rounded-2xl rounded-br-sm p-3 text-xs leading-relaxed sm:text-sm",
              "bg-[#2AABEE]/15 text-foreground backdrop-blur-md",
              "[border:1px_solid_rgba(42,171,238,.25)]",
            )}
          >
            {t("userMessage")}
          </p>
        </motion.div>

        <motion.div
          className="flex w-full items-end justify-start gap-2"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 0.7, duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="flex size-7 shrink-0 items-center justify-center rounded-full"
            style={{ backgroundColor: `${BRAND_COLOR}26` }}
          >
            <ShieldCheck
              className="size-4"
              style={{ color: BRAND_COLOR }}
              strokeWidth={2.25}
            />
          </div>
          <figure
            className={cn(
              "flex max-w-[80%] flex-col gap-1",
              "transform-gpu rounded-2xl rounded-bl-sm p-3",
              "bg-white/5 backdrop-blur-md",
              "[border:1px_solid_rgba(255,255,255,.1)]",
            )}
          >
            <span className="font-medium text-white text-xs">
              {t("adminName")}
            </span>
            <p className="text-foreground text-xs leading-relaxed sm:text-sm">
              {t("adminMessage")}
            </p>
          </figure>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </div>
  );
}
