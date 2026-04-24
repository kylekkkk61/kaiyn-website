import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { CommunityAvatars } from "@/components/custom/community-avatars";
import { JoinCommunityButton } from "@/components/custom/join-community-button";

export default function HeroSection() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const isEn = locale === "en";

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/img/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-fill"
      />
      <div className="absolute inset-0 backdrop-blur-xl" />
      <div
        className={`relative z-10 flex min-h-screen flex-col items-center justify-center gap-8 px-(--page-inline) pt-40 pb-16 md:gap-12 ${isEn ? "-translate-y-8" : ""}`}
      >
        <div className="mb-6 flex flex-col items-center gap-3 md:mb-0 md:gap-4">
          <h1 className="text-balance text-center font-semibold text-5xl text-white tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
            {t("headline")}
          </h1>
          <p className="max-w-2xl text-balance text-center text-lg text-white/80 md:text-xl">
            {t("subtitle")}
          </p>
        </div>
        <div className="mb-6 md:mb-0">
          <JoinCommunityButton />
        </div>
        <div className="flex flex-col items-center gap-2">
          <CommunityAvatars />
          <p className="text-muted-foreground text-sm">{t("trustedBy")}</p>
        </div>
        <div className="w-full max-w-5xl rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:p-3">
          <video
            src="/video/trading.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="w-full rounded-lg opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
