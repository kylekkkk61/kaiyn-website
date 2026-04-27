import "server-only";
import { buildProcessor } from "@/lib/tutorial/markdown-processor";

export type HeadingNode = {
  depth: 2 | 3;
  text: string;
  id: string;
  children?: HeadingNode[];
};

type HastNode = {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
  value?: string;
};

function getNodeText(node: HastNode): string {
  if (node.type === "text") return node.value ?? "";
  if (!node.children) return "";
  return node.children.map(getNodeText).join("");
}

export async function extractHeadings(body: string): Promise<HeadingNode[]> {
  const processor = buildProcessor();
  const mdast = processor.parse(body);
  const hast = (await processor.run(mdast)) as unknown as HastNode;

  const headings: HeadingNode[] = [];
  let currentH2: HeadingNode | null = null;

  function walk(node: HastNode) {
    if (node.tagName === "h2" || node.tagName === "h3") {
      const depth = node.tagName === "h2" ? 2 : 3;
      const id = (node.properties?.id as string | undefined) ?? "";
      const text = getNodeText(node);
      const heading: HeadingNode = { depth, text, id };

      if (depth === 2) {
        headings.push(heading);
        currentH2 = heading;
      } else if (currentH2) {
        if (!currentH2.children) currentH2.children = [];
        currentH2.children.push(heading);
      } else {
        headings.push(heading);
      }
    }

    if (node.children) {
      for (const child of node.children) walk(child);
    }
  }

  walk(hast);

  return headings;
}
