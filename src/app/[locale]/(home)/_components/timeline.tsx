"use client";

import {
  MessageCircle,
  Rocket,
  ShieldCheck,
  UserPlus,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

import { FeatureLink } from "@/components/custom/feature-link";
import {
  Timeline as TimelineLayout,
  TimelineStep,
} from "@/components/custom/timeline";

import { BitgetRegisterCard, REGISTER_URL } from "./bitget-register-card";
import { BlockchainTransferCard } from "./blockchain-transfer-card";
import { ContactAdminCard } from "./contact-admin-card";
import { TelegramPreviewCard } from "./telegram-preview-card";

const BINANCE_URL = "https://www.binance.com/join?ref=148898758";

const STEPS = [
  {
    key: "joinCommunity",
    icon: Users,
    media: <TelegramPreviewCard />,
  },
  {
    key: "registerExchange",
    icon: UserPlus,
    media: <BitgetRegisterCard />,
    reverse: true,
  },
  {
    key: "kycDeposit",
    icon: ShieldCheck,
    media: <BlockchainTransferCard />,
  },
  {
    key: "contactAdmin",
    icon: MessageCircle,
    media: <ContactAdminCard />,
    reverse: true,
  },
];

const Timeline = () => {
  const t = useTranslations("HomePage.timeline");

  return (
    <TimelineLayout
      badge={{ icon: Rocket, label: t("badge") }}
      title={t("title")}
      subtitle={t("subtitle")}
    >
      {STEPS.map((item) => (
        <TimelineStep
          key={item.key}
          icon={item.icon}
          media={item.media}
          title={t(`steps.${item.key}.title`)}
          description={t(`steps.${item.key}.description`)}
          reverse={item.reverse}
        >
          {item.key === "joinCommunity" && (
            <FeatureLink
              href="https://t.me/kaiyncapital"
              label={t("steps.joinCommunity.cta.label")}
              color="#2AABEE"
            />
          )}
          {item.key === "registerExchange" && (
            <div className="flex flex-col items-start gap-3">
              <FeatureLink
                href={REGISTER_URL}
                label={t.rich("steps.registerExchange.cta1.label", {
                  brand: (chunks) => (
                    <span style={{ color: "#00E0FE" }}>{chunks}</span>
                  ),
                })}
                color="#00E0FE"
              />
              <FeatureLink
                href={BINANCE_URL}
                label={t.rich("steps.registerExchange.cta2.label", {
                  brand: (chunks) => (
                    <span style={{ color: "#F0B90B" }}>{chunks}</span>
                  ),
                })}
                color="#F0B90B"
              />
            </div>
          )}
          {item.key === "kycDeposit" && (
            <FeatureLink
              href="https://t.me/ronload"
              label={t("steps.kycDeposit.cta.label")}
              color="#22c55e"
            />
          )}
          {item.key === "contactAdmin" && (
            <FeatureLink
              href="https://t.me/ronload"
              label={t("steps.contactAdmin.cta.label")}
              color="#5865F2"
            />
          )}
        </TimelineStep>
      ))}
    </TimelineLayout>
  );
};

export { Timeline };
