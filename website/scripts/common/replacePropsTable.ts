import type { Code } from 'mdast';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';

interface DocgenProp {
  name: string;
  required?: boolean;
  type: { name: string; raw?: string; value?: Array<{ value: string }> };
  defaultValue?: string | null;
  description?: string;
  tags?: Record<string, unknown>;
}

type Docgen = Record<string, unknown[] | undefined>;

const markdown = unified().use(remarkParse).use(remarkGfm).use(remarkStringify);

function escapeMarkdown(text: string): string {
  return text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function resolveProps(nameRef: string, docgen: Docgen): DocgenProp[] | undefined {
  const shortName = nameRef.split('/').pop()!;
  return (
    (docgen[shortName] as DocgenProp[] | undefined) || (docgen[nameRef] as DocgenProp[] | undefined)
  );
}

function renderPropsMarkdownTable(props: DocgenProp[] | undefined): string {
  if (!props || props.length === 0) {
    return '_Не принимает свойств_\n';
  }

  const lines = ['| Свойство | Тип | По умолчанию | Описание |', '| --- | --- | --- | --- |'];
  const examples: string[] = [];

  for (const prop of props) {
    const name = prop.required ? `**${prop.name}** \\*` : prop.name;
    const type = escapeMarkdown(prop.type.raw || prop.type.name || '');
    const defaultValue = prop.defaultValue || '-';
    const deprecated = prop.tags && 'deprecated' in prop.tags ? prop.tags.deprecated : undefined;
    let description = deprecated ? `**Deprecated**: ${String(deprecated)}` : prop.description || '';
    const tree = markdown.parse(description);
    const codeBlocks: Code[] = [];
    visit(tree, 'code', (node, index, parent) => {
      if (parent && index !== undefined) {
        codeBlocks.push(node);
        parent.children.splice(index, 1);
        return index;
      }
      return undefined;
    });

    if (codeBlocks.length > 0) {
      description = markdown.stringify(tree).trim();
      examples.push(
        '',
        `**Примеры для \`${prop.name}\`**`,
        '',
        markdown.stringify({ type: 'root', children: codeBlocks }).trimEnd(),
      );
    }

    lines.push(
      `| \`${name}\` | \`${type}\` | \`${defaultValue}\` | ${escapeMarkdown(description)} |`,
    );
  }

  return [...lines, ...examples].join('\n') + '\n';
}

const SELF_CLOSING_RE = /<PropsTable\s+name="([^"]+)"\s*\/>/g;

const ARRAY_NAMES_SELF_CLOSING_RE = /<PropsTable\s+name=\{\[([^\]]+)\]\}\s*\/>/g;

const WITH_CHILDREN_RE =
  /<PropsTable\s+(?:name="([^"]+)"|name=\{\[([^\]]+)\]\})>([\s\S]*?)<\/PropsTable>/g;

/**
 * Заменяет теги <PropsTable> в MDX-контенте на markdown-таблицы.
 *
 * @param body - содержимое MDX-файла
 * @param docgen - данные из docgen.json
 * @returns трансформированное содержимое
 */
export function replacePropsTable(body: string, docgen: Docgen): string {
  let result = body;

  result = result.replace(SELF_CLOSING_RE, (_match, name: string) => {
    const props = resolveProps(name, docgen);
    return renderPropsMarkdownTable(props);
  });

  result = result.replace(ARRAY_NAMES_SELF_CLOSING_RE, (_match, namesRaw: string) => {
    const names = namesRaw.split(',').map((n) => n.trim().replace(/^"|"$/g, ''));
    return names
      .map((name) => {
        const shortName = name.split('/').pop()!;
        const props = resolveProps(name, docgen);
        return `### ${shortName}\n\n${renderPropsMarkdownTable(props)}`;
      })
      .join('\n');
  });

  result = result.replace(
    WITH_CHILDREN_RE,
    (
      _match,
      singleName: string | undefined,
      arrayNamesRaw: string | undefined,
      childrenBlock: string,
    ) => {
      const headings = [...childrenBlock.matchAll(/^###\s+(.+?)(?:\s+\[(.*)\])?$/gm)].map(
        ([, title, annotation]) => ({
          title,
          label: annotation?.startsWith('#') ? `${title} [${annotation}]` : title,
        }),
      );

      if (singleName) {
        const baseName = singleName;
        return headings
          .map(({ title, label }) => {
            const lookupName = title.replace(/\./g, '');
            const props =
              resolveProps(lookupName, docgen) ||
              resolveProps(`${baseName}.${title.split('.').pop()}`, docgen) ||
              resolveProps(`${baseName}${title.split('.').pop()}`, docgen);
            return `### ${label}\n\n${renderPropsMarkdownTable(props)}`;
          })
          .join('\n');
      }

      if (arrayNamesRaw) {
        const names = arrayNamesRaw.split(',').map((n) => n.trim().replace(/^"|"$/g, ''));
        return names
          .map((name, i) => {
            const heading = headings[i]?.label || name.split('/').pop()!;
            const props = resolveProps(name, docgen);
            return `### ${heading}\n\n${renderPropsMarkdownTable(props)}`;
          })
          .join('\n');
      }

      return _match;
    },
  );

  return result;
}
