"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link, usePathname } from "@/i18n/navigation";
import type { ChapterMetaWithSections } from "@/lib/tutorial/load-all-chapters-meta";
import { cn } from "@/lib/utils";

type Props = {
  chapters: ChapterMetaWithSections[];
};

function deriveActiveSlug(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  const match = pathname.match(/\/tutorial\/ict-smc\/([^/]+)/);
  return match?.[1];
}

export function ChapterSidebar({ chapters }: Props) {
  const pathname = usePathname();
  const activeSlug = deriveActiveSlug(pathname);

  return (
    <Accordion
      multiple
      defaultValue={activeSlug ? [activeSlug] : []}
      className="rounded-none border-0"
    >
      {chapters.map((chapter) => {
        const isActive = chapter.slug === activeSlug;
        const padded = String(chapter.order).padStart(2, "0");
        return (
          <AccordionItem
            key={chapter.slug}
            value={chapter.slug}
            data-active={isActive || undefined}
            className={cn(
              "border-0 not-last:border-b-0",
              isActive && "data-active:bg-muted/40",
            )}
          >
            <AccordionTrigger
              className={cn(
                "px-3 py-2.5",
                isActive && "font-semibold text-foreground",
              )}
            >
              <span className="text-pretty leading-snug">
                {padded}. {chapter.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-2">
              {chapter.sections.length === 0 ? null : (
                <ul className="space-y-px">
                  {chapter.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={`/tutorial/ict-smc/${chapter.slug}#${section.id}`}
                        className="block border-border border-l-2 px-3 py-1.5 pl-6 text-muted-foreground text-sm transition-colors hover:border-foreground hover:text-foreground"
                      >
                        {section.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
