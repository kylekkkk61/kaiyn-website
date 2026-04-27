import { useTranslations } from "next-intl";
import { Container } from "@/components/layout/container";
import { JoinCommunityButton } from "../hero/join-community-button";
import { ExchangeBeam } from "./exchange-beam";

export function PreFooter() {
  const t = useTranslations("HomePage");

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <h2 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl lg:text-6xl">
              {t("headline")}
            </h2>
            <JoinCommunityButton />
          </div>
          <ExchangeBeam />
        </div>
      </Container>
    </section>
  );
}
