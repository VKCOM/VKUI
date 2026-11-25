import * as path from 'node:path';
import type { Code, Root } from 'mdast';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { type Plugin, unified } from 'unified';
import { transformer as codeImportTransformer } from '../../remark-plugins/remarkCodeImport.mts';
import type { DocgenProps } from './loadDocgen.ts';
import { replacePropsTable } from './replacePropsTable.ts';

interface Node {
  type: string;
  meta?: string | null | undefined;
  name?: string | null | undefined;
  attributes?: MdxJsxFlowElement['attributes'];
  position?:
    | { start: { offset?: number | undefined }; end: { offset?: number | undefined } }
    | undefined;
  children?: Node[] | undefined;
}

const markdownParser = unified().use(remarkParse).use(remarkGfm);
const packageManagers = new Set(['npm', 'yarn', 'pnpm']);

function removeMdx(node: Node, content: string, docgen: DocgenProps): void {
  // Импорт уже раскрыт; при вставке partial его не нужно разрешать повторно.
  if (node.type === 'code' && node.meta) {
    node.meta = node.meta
      .split(/(?<!\\) /g)
      .filter((meta) => !meta.startsWith('file='))
      .join(' ');
  }

  if (!node.children) {
    return;
  }

  node.children = node.children.flatMap<Node>((child) => {
    if (child.type === 'mdxJsxFlowElement' && child.name === 'PropsTable') {
      const source = content.slice(child.position?.start.offset, child.position?.end.offset);
      // Таблицы docgen — Markdown: типы и описания не должны разбираться как MDX.
      return markdownParser.parse(replacePropsTable(source, docgen)).children;
    }

    if (child.type === 'mdxJsxFlowElement' && child.name === 'PackageManagers') {
      return (child.attributes || []).flatMap<Code>((attribute) => {
        if (
          attribute.type !== 'mdxJsxAttribute' ||
          !packageManagers.has(attribute.name) ||
          typeof attribute.value !== 'string'
        ) {
          return [];
        }

        return [{ type: 'code', lang: 'sh', value: attribute.value }];
      });
    }

    if (
      child.type === 'mdxjsEsm' ||
      child.type === 'mdxFlowExpression' ||
      child.type === 'mdxTextExpression'
    ) {
      return [];
    }

    removeMdx(child, content, docgen);
    if (child.type === 'mdxJsxFlowElement' || child.type === 'mdxJsxTextElement') {
      return child.children || [];
    }

    return [child];
  });
}

const processor = unified()
  .use(remarkParse)
  .use(remarkMdx)
  .use(remarkFrontmatter)
  .use(remarkGfm)
  .use(codeImportTransformer, { rootDir: path.resolve(import.meta.dirname, '../../..') })
  .use(remarkStringify);

/** Удаляет исполняемый MDX, сохраняя Markdown, frontmatter и примеры кода. */
export function parseMdxToMarkdown(
  content: string,
  filePath: string,
  docgen: DocgenProps = {},
): Promise<Root> {
  const stripMdx: Plugin<[], Root> = () => (tree) => removeMdx(tree, content, docgen);
  const converter = processor().use(stripMdx);
  const file = { value: content, path: filePath };
  return converter.run(converter.parse(file), file);
}

export function stringifyMarkdown(tree: Root): string {
  return processor.stringify(tree);
}
