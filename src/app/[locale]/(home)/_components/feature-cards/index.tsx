import { useTranslations } from "next-intl";
import { BentoCard } from "@/components/custom/bento-card";
import { Container } from "@/components/layout/container";
import { AnimatedMessagesBackground } from "./animated-messages";
import { AnimatedNotificationsBackground } from "./animated-notifications";
import { ConceptCardsMarqueeBackground } from "./concept-cards-marquee";

export function FeatureCards() {
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
            title={t("cards.tradingTutorial.title")}
            description={t("cards.tradingTutorial.description")}
            href="https://t.me/kaiyncapital"
            cta={t("learnMore")}
            background={<ConceptCardsMarqueeBackground />}
          />
          <BentoCard
            title={t("cards.strategyGroup.title")}
            description={t("cards.strategyGroup.description")}
            href="https://t.me/kaiyncapital"
            cta={t("learnMore")}
            background={<AnimatedMessagesBackground />}
          />
        </div>
      </Container>
    </section>
  );
}
