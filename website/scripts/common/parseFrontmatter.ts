import { parse } from 'yaml';

interface Frontmatter {
  name?: string;
  title?: string;
  description?: string;
  tags?: string;
  date?: string;
  last_updated?: string;
  other?: { hidden?: boolean; parent?: string };
}

export function parseFrontmatterData(content: string): Frontmatter {
  return (parse(content) as Frontmatter | null) ?? {};
}

export function parseFrontmatter(content: string): { data: Frontmatter; body: string } {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/);
  if (!match) {
    return { data: {}, body: content };
  }

  return {
    data: parseFrontmatterData(match[1]),
    body: content.slice(match[0].length).trimStart(),
  };
}
