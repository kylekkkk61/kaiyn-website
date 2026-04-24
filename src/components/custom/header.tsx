"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Container } from "@/components/custom/container";
import { LanguageSwitcher } from "@/components/custom/language-switcher";
import { Link } from "@/i18n/navigation";

export function Header() {
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
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border/60"
          : ""
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
        <LanguageSwitcher />
      </Container>
    </header>
  );
}
