"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("Nav");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 h-16 transition-colors duration-200 ${
        scrolled ? "bg-background/70 backdrop-blur-md border-border/60" : ""
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="/"
          aria-label="KaiynCapital"
          className="flex items-center gap-2"
        >
          <Image
            src="/img/icon-light.svg"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span className="hidden sm:inline text-lg font-semibold tracking-tight">
            Kaiyn<span className="text-muted-foreground">Capital</span>
          </span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/#start" />}
              >
                {t("start")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                render={<Link href="/tutorial" />}
              >
                {t("tutorial")}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <LanguageSwitcher />
      </Container>
    </header>
  );
}
