import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { ChapterRecord } from "@/lib/tutorial/chapters";
import { cn } from "@/lib/utils";

type Props = {
  prev?: ChapterRecord;
  next?: ChapterRecord;
};

const cardClass =
  "group flex items-center gap-3 rounded-lg border border-border bg-input/30 px-4 py-3 transition-colors hover:bg-input/60 hover:text-foreground sm:flex-1";

const labelClass =
  "font-medium text-foreground text-sm sm:font-normal sm:text-muted-foreground sm:text-xs";

export function ChapterPagination({ prev, next }: Props) {
  const t = useTranslations("TutorialChapter");

  return (
    <nav className="mt-16 flex items-stretch justify-between gap-4 border-border border-t pt-8">
      {prev ? (
        <Link
          href={`/tutorial/ict-smc/${prev.slug}`}
          className={cn(cardClass, "justify-start text-left")}
          aria-label={`${t("previousLabel")}: ${prev.title}`}
        >
          <ChevronLeftIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
          <span className="flex min-w-0 flex-col">
            <span className={labelClass}>{t("previousLabel")}</span>
            <span className="hidden truncate font-medium sm:block">
              {prev.title}
            </span>
          </span>
        </Link>
      ) : (
        <div className="sm:flex-1" aria-hidden />
      )}
      {next ? (
        <Link
          href={`/tutorial/ict-smc/${next.slug}`}
          className={cn(cardClass, "justify-end text-right")}
          aria-label={`${t("nextLabel")}: ${next.title}`}
        >
          <span className="flex min-w-0 flex-col items-end">
            <span className={labelClass}>{t("nextLabel")}</span>
            <span className="hidden truncate font-medium sm:block">
              {next.title}
            </span>
          </span>
          <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : (
        <div className="sm:flex-1" aria-hidden />
      )}
    </nav>
  );
}
