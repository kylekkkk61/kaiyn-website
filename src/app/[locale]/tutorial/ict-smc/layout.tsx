import { setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";
import { ChapterSidebar } from "@/components/tutorial/chapter-sidebar";
import { ChapterSidebarMobile } from "@/components/tutorial/chapter-sidebar-mobile";
import { loadAllChaptersMetaWithSections } from "@/lib/tutorial/load-all-chapters-meta";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function IctSmcLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const chapters = await loadAllChaptersMetaWithSections();

  return (
    <main>
      <Container className="pt-32 pb-16 md:pt-36 md:pb-24">
        <ChapterSidebarMobile chapters={chapters} className="mb-6 lg:hidden" />
        <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-[16rem_minmax(0,1fr)] xl:gap-x-16">
          <aside className="hidden lg:sticky lg:top-24 lg:block lg:h-[calc(100vh-7rem)] lg:overflow-y-auto">
            <ChapterSidebar chapters={chapters} />
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </main>
  );
}
