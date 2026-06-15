function escapeMarkdown(text) {
  return text.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

function resolveProps(nameRef, docgen) {
  const shortName = nameRef.split('/').pop();
  return docgen[shortName] || docgen[nameRef];
}

function renderPropsMarkdownTable(props) {
  if (!props || props.length === 0) {
    return '_Не принимает свойств_\n';
  }

  const lines = ['| Свойство | Тип | По умолчанию | Описание |', '| --- | --- | --- | --- |'];

  for (const prop of props) {
    const name = prop.required ? `**${prop.name}** \\*` : prop.name;
    const type = escapeMarkdown(prop.type.raw || prop.type.name || '');
    const defaultValue = prop.defaultValue || '-';
    const deprecated = prop.tags && 'deprecated' in prop.tags ? prop.tags.deprecated : undefined;
    const description = deprecated
      ? `**Deprecated**: ${escapeMarkdown(String(deprecated))}`
      : escapeMarkdown(prop.description || '');

    lines.push(`| \`${name}\` | \`${type}\` | \`${defaultValue}\` | ${description} |`);
  }

  return lines.join('\n') + '\n';
}

const SELF_CLOSING_RE = /<PropsTable\s+name="([^"]+)"\s*\/>/g;

const ARRAY_NAMES_SELF_CLOSING_RE = /<PropsTable\s+name=\{\[([^\]]+)\]\}\s*\/>/g;

const WITH_CHILDREN_RE =
  /<PropsTable\s+(?:name="([^"]+)"|name=\{\[([^\]]+)\]\})>([\s\S]*?)<\/PropsTable>/g;

/**
 * Заменяет теги <PropsTable> в MDX-контенте на markdown-таблицы.
 *
 * @param {string} body - содержимое MDX-файла
 * @param {Record<string, unknown[]>} docgen - данные из docgen.json
 * @returns {string} трансформированное содержимое
 */
export function transformMdxBody(body, docgen) {
  let result = body;

  result = result.replace(SELF_CLOSING_RE, (_match, name) => {
    const props = resolveProps(name, docgen);
    return renderPropsMarkdownTable(props);
  });

  result = result.replace(ARRAY_NAMES_SELF_CLOSING_RE, (_match, namesRaw) => {
    const names = namesRaw.split(',').map((n) => n.trim().replace(/^"|"$/g, ''));
    return names
      .map((name) => {
        const shortName = name.split('/').pop();
        const props = resolveProps(name, docgen);
        return `### ${shortName}\n\n${renderPropsMarkdownTable(props)}`;
      })
      .join('\n');
  });

  result = result.replace(WITH_CHILDREN_RE, (_match, singleName, arrayNamesRaw, childrenBlock) => {
    const headings = [...childrenBlock.matchAll(/^###\s+(.+?)(?:\s+\[.*\])?$/gm)].map((m) => m[1]);

    if (singleName) {
      const baseName = singleName;
      return headings
        .map((heading) => {
          const lookupName = heading.replace(/\./g, '');
          const props =
            resolveProps(lookupName, docgen) ||
            resolveProps(`${baseName}.${heading.split('.').pop()}`, docgen) ||
            resolveProps(`${baseName}${heading.split('.').pop()}`, docgen);
          return `### ${heading}\n\n${renderPropsMarkdownTable(props)}`;
        })
        .join('\n');
    }

    if (arrayNamesRaw) {
      const names = arrayNamesRaw.split(',').map((n) => n.trim().replace(/^"|"$/g, ''));
      return names
        .map((name, i) => {
          const heading = headings[i] || name.split('/').pop();
          const props = resolveProps(name, docgen);
          return `### ${heading}\n\n${renderPropsMarkdownTable(props)}`;
        })
        .join('\n');
    }

    return _match;
  });

  return result;
}
