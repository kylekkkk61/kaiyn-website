import "server-only";
import { type ChapterRecord, ICT_SMC_CHAPTERS } from "@/lib/tutorial/chapters";
import {
  extractHeadings,
  type HeadingNode,
} from "@/lib/tutorial/extract-headings";
import { loadIctSmcChapter } from "@/lib/tutorial/load-chapter";

export type ChapterMetaWithSections = ChapterRecord & {
  sections: HeadingNode[];
};

export async function loadAllChaptersMetaWithSections(): Promise<
  ChapterMetaWithSections[]
> {
  return Promise.all(
    ICT_SMC_CHAPTERS.map(async (record) => {
      const { body } = await loadIctSmcChapter(record.slug);
      const headings = await extractHeadings(body);
      const sections = headings
        .filter((h) => h.depth === 2)
        .map(({ children: _children, ...rest }) => rest);
      return { ...record, sections };
    }),
  );
}
