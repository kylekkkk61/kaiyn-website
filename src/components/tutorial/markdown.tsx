import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

type MarkdownProps = {
  children: string;
  lang?: string;
};

export function Markdown({ children, lang }: MarkdownProps) {
  return (
    <div
      lang={lang}
      className="prose prose-invert prose-headings:scroll-mt-24 max-w-none"
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
