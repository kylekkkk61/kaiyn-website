"use client";

import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { ChapterSidebar } from "@/components/tutorial/chapter-sidebar";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "@/i18n/navigation";
import type { ChapterMetaWithSections } from "@/lib/tutorial/load-all-chapters-meta";

type Props = {
  chapters: ChapterMetaWithSections[];
  className?: string;
};

export function ChapterSidebarMobile({ chapters, className }: Props) {
  const t = useTranslations("TutorialChapter");
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (lastPathname.current !== pathname) {
      lastPathname.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="outline" size="sm" className={className}>
            <Menu className="size-4" />
            {t("chaptersMobileTrigger")}
          </Button>
        }
      />
      <SheetContent side="left" className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{t("chapters")}</SheetTitle>
        </SheetHeader>
        <div className="px-3 pb-6">
          <ChapterSidebar chapters={chapters} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
