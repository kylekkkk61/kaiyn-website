import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { ChapterPagination } from "@/components/tutorial/chapter-pagination";
import { Markdown } from "@/components/tutorial/markdown";
import { OnThisPage } from "@/components/tutorial/on-this-page";
import { routing } from "@/i18n/routing";
import {
  getIctSmcChapterNeighbors,
  getIctSmcChapterSlugs,
  isIctSmcChapterSlug,
} from "@/lib/tutorial/chapters";
import { extractHeadings } from "@/lib/tutorial/extract-headings";
import { loadIctSmcChapter } from "@/lib/tutorial/load-chapter";

type Props = {
  params: Promise<{ locale: string; chapter: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getIctSmcChapterSlugs().map((chapter) => ({ locale, chapter })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { chapter } = await params;
  if (!isIctSmcChapterSlug(chapter)) return {};
  const { title } = await loadIctSmcChapter(chapter);
  return { title: `${title} · Kaiyn` };
}

export default async function ChapterPage({ params }: Props) {
  const { locale, chapter } = await params;
  setRequestLocale(locale);

  if (!isIctSmcChapterSlug(chapter)) notFound();

  const { title, body } = await loadIctSmcChapter(chapter);
  const { prev, next } = getIctSmcChapterNeighbors(chapter);
  const headings = await extractHeadings(body);

  return (
    <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-[minmax(0,1fr)_14rem] xl:gap-x-16">
      <div className="min-w-0 max-w-3xl">
        <article>
          <h1 className="text-balance font-semibold text-4xl tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <div className="mt-8">
            <Markdown lang="zh-CN">{body}</Markdown>
          </div>
        </article>
        <ChapterPagination prev={prev} next={next} />
      </div>
      <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)] lg:overflow-y-auto">
        <OnThisPage headings={headings} />
      </aside>
    </div>
  );
}
