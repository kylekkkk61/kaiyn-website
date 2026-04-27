export type ChapterRecord = {
  slug: string;
  file: string;
  order: number;
  title: string;
};

export const ICT_SMC_CHAPTERS = [
  {
    slug: "introduction",
    file: "Chapter 00. 引言｜Inroduction.md",
    order: 0,
    title: "引言 / Introduction",
  },
  {
    slug: "market-structure",
    file: "Chapter 01. 市场结构｜Market Structure.md",
    order: 1,
    title: "市场结构 / Market Structure",
  },
  {
    slug: "liquidity",
    file: "Chapter 02. 流动性｜Liquidity.md",
    order: 2,
    title: "流动性 / Liquidity",
  },
  {
    slug: "imbalance",
    file: "Chapter 03. 失衡｜Imbalance.md",
    order: 3,
    title: "失衡 / Imbalance",
  },
  {
    slug: "supply-and-demand",
    file: "Chapter 04. 供给与需求｜Supply and Demand.md",
    order: 4,
    title: "供给与需求 / Supply and Demand",
  },
  {
    slug: "ipda",
    file: "Chapter 05. 银行间价格传递演算法｜Interbank Price Delivery Algorithm.md",
    order: 5,
    title: "银行间价格传递演算法 / IPDA",
  },
  {
    slug: "dealing-range",
    file: "Chapter 06. 交易区间｜Dealing Range.md",
    order: 6,
    title: "交易区间 / Dealing Range",
  },
  {
    slug: "advanced-market-structure",
    file: "Chapter 07. 进阶市场结构｜Advanced Market Structure.md",
    order: 7,
    title: "进阶市场结构 / Advanced Market Structure",
  },
  {
    slug: "entry",
    file: "Chapter 08. 进场｜Entry.md",
    order: 8,
    title: "进场｜Entry",
  },
] as const satisfies readonly ChapterRecord[];

export type IctSmcChapterSlug = (typeof ICT_SMC_CHAPTERS)[number]["slug"];

export function getIctSmcChapterSlugs(): IctSmcChapterSlug[] {
  return ICT_SMC_CHAPTERS.map((c) => c.slug);
}

export function isIctSmcChapterSlug(value: string): value is IctSmcChapterSlug {
  return ICT_SMC_CHAPTERS.some((c) => c.slug === value);
}

export function getIctSmcChapterRecord(
  slug: string,
): ChapterRecord | undefined {
  return ICT_SMC_CHAPTERS.find((c) => c.slug === slug);
}

export function getIctSmcChapterNeighbors(slug: string): {
  prev?: ChapterRecord;
  next?: ChapterRecord;
} {
  const idx = ICT_SMC_CHAPTERS.findIndex((c) => c.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? ICT_SMC_CHAPTERS[idx - 1] : undefined,
    next:
      idx < ICT_SMC_CHAPTERS.length - 1 ? ICT_SMC_CHAPTERS[idx + 1] : undefined,
  };
}
