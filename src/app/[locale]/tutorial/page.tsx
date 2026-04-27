import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { BentoCard } from "@/components/custom/bento-card";
import { Container } from "@/components/layout/container";

export default function TutorialPage() {
  const t = useTranslations("TutorialPage");
  const locale = useLocale();

  return (
    <main>
      <Container className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="flex flex-col gap-4">
          <h1 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground md:text-xl">
            {t("description")}
          </p>
        </div>
        <div className="mt-12 grid w-full auto-rows-[22rem] grid-cols-3 gap-4">
          <BentoCard
            title={t("cards.ictSmc.title")}
            description={t("cards.ictSmc.description")}
            href={`/${locale}/tutorial/ict-smc/introduction`}
            cta={t("cards.ictSmc.cta")}
            background={
              <>
                <Image
                  src="/tutorial/ict-smc/cover.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              </>
            }
          />
          <BentoCard />
          <BentoCard />
        </div>
      </Container>
    </main>
  );
}
