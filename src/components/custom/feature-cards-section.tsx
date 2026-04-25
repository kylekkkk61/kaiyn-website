import { useTranslations } from "next-intl";
import { AnimatedNotificationsBackground } from "@/components/custom/animated-notifications";
import { BentoCard } from "@/components/custom/bento-card";
import { Container } from "@/components/custom/container";

export function FeatureCardsSection() {
  const t = useTranslations("HomePage");

  return (
    <section className="relative py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent"
      />
      <Container>
        <div className="grid w-full auto-rows-[22rem] grid-cols-3 gap-4">
          <BentoCard
            title={t("cards.telegramSignal.title")}
            description={t("cards.telegramSignal.description")}
            href="https://t.me/kaiyncapital"
            cta={t("learnMore")}
            background={<AnimatedNotificationsBackground />}
          />
          <BentoCard
            title="Card title 2"
            description="Card description 2"
            href="#"
            cta={t("learnMore")}
          />
          <BentoCard
            title="Card title 3"
            description="Card description 3"
            href="#"
            cta={t("learnMore")}
          />
        </div>
      </Container>
    </section>
  );
}
