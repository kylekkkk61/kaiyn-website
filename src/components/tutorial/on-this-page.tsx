"use client";

import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { useActiveHeading } from "@/components/tutorial/use-active-heading";
import type { HeadingNode } from "@/lib/tutorial/extract-headings";
import { cn } from "@/lib/utils";

type Props = {
  headings: HeadingNode[];
};

function flatten(headings: HeadingNode[]): string[] {
  const ids: string[] = [];
  for (const h of headings) {
    ids.push(h.id);
    if (h.children) {
      for (const c of h.children) ids.push(c.id);
    }
  }
  return ids;
}

export function OnThisPage({ headings }: Props) {
  const t = useTranslations("TutorialChapter");
  const allIds = useMemo(() => flatten(headings), [headings]);
  const active = useActiveHeading(allIds);

  if (headings.length === 0) return null;

  return (
    <nav aria-label={t("tableOfContents")} className="text-sm">
      <p className="mb-4 font-medium text-foreground">{t("tableOfContents")}</p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "block border-border border-l-2 pl-3 text-muted-foreground transition-colors hover:text-foreground",
                active === h.id && "border-foreground text-foreground",
              )}
            >
              {h.text}
            </a>
            {h.children && h.children.length > 0 && (
              <ul className="mt-2 space-y-2">
                {h.children.map((c) => (
                  <li key={c.id}>
                    <a
                      href={`#${c.id}`}
                      className={cn(
                        "block border-border border-l-2 pl-6 text-muted-foreground transition-colors hover:text-foreground",
                        active === c.id && "border-foreground text-foreground",
                      )}
                    >
                      {c.text}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
