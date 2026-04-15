import fs from 'node:fs';
import path from 'node:path';

const docsContentDirectory = path.resolve('content');
const docsPublicDirectory = path.resolve('public');
const docgenPath = path.resolve('.docgen/docgen.json');

function loadDocgen() {
  if (!fs.existsSync(docgenPath)) {
    console.warn('⚠️ docgen.json не найден, PropsTable не будет заменён');
    return {};
  }
  return JSON.parse(fs.readFileSync(docgenPath, 'utf-8'));
}

function scanMdxFiles(dirPath) {
  return fs.readdirSync(dirPath).reduce((files, item) => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...scanMdxFiles(fullPath));
    } else if (item.endsWith('.mdx')) {
      files.push(fullPath);
    }

    return files;
  }, []);
}

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

  const lines = [
    '| Свойство | Тип | По умолчанию | Описание |',
    '| --- | --- | --- | --- |',
  ];

  for (const prop of props) {
    const name = prop.required ? `**${prop.name}** \\*` : prop.name;
    const type = escapeMarkdown(prop.type.raw || prop.type.name || '');
    const defaultValue = prop.defaultValue || '-';
    const deprecated =
      prop.tags && 'deprecated' in prop.tags ? prop.tags.deprecated : undefined;
    const description = deprecated
      ? `**Deprecated**: ${escapeMarkdown(String(deprecated))}`
      : escapeMarkdown(prop.description || '');

    lines.push(`| \`${name}\` | \`${type}\` | \`${defaultValue}\` | ${description} |`);
  }

  return lines.join('\n') + '\n';
}

const SELF_CLOSING_RE =
  /<PropsTable\s+name="([^"]+)"\s*\/>/g;

const ARRAY_NAMES_SELF_CLOSING_RE =
  /<PropsTable\s+name=\{\[([^\]]+)\]\}\s*\/>/g;

const WITH_CHILDREN_RE =
  /<PropsTable\s+(?:name="([^"]+)"|name=\{\[([^\]]+)\]\})>([\s\S]*?)<\/PropsTable>/g;

function replacePropsTable(content, docgen) {
  let result = content;

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
    const headings = [...childrenBlock.matchAll(/^###\s+(.+?)(?:\s+\[.*\])?$/gm)].map(
      (m) => m[1],
    );

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

function ensureDirectoryExists(targetPath) {
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
}

function createIndexAliasPath(relativeMdxPath) {
  if (path.basename(relativeMdxPath) !== 'index.mdx') {
    return undefined;
  }

  const parentDirectory = path.dirname(relativeMdxPath);

  return parentDirectory === '.'
    ? path.join(docsPublicDirectory, 'index.mdx')
    : path.join(docsPublicDirectory, `${parentDirectory}.mdx`);
}

function main() {
  if (!fs.existsSync(docsContentDirectory)) {
    console.warn('⚠️ Директория content не найдена, пропускаем');
    return;
  }

  const docgen = loadDocgen();
  const mdxFiles = scanMdxFiles(docsContentDirectory);

  // eslint-disable-next-line no-console
  console.log('🔄 Копирование MDX-файлов документации...');

  let copiedCount = 0;

  mdxFiles.forEach((absoluteMdxPath) => {
    const relativeMdxPath = path.relative(docsContentDirectory, absoluteMdxPath);
    const destinationPath = path.join(docsPublicDirectory, relativeMdxPath);

    const rawContent = fs.readFileSync(absoluteMdxPath, 'utf-8');
    const transformedContent = replacePropsTable(rawContent, docgen);

    ensureDirectoryExists(destinationPath);
    fs.writeFileSync(destinationPath, transformedContent, 'utf-8');

    const indexAliasPath = createIndexAliasPath(relativeMdxPath);
    if (indexAliasPath) {
      ensureDirectoryExists(indexAliasPath);
      fs.writeFileSync(indexAliasPath, transformedContent, 'utf-8');
    }

    copiedCount++;
  });

  // eslint-disable-next-line no-console
  console.log(`✅ Скопировано ${copiedCount} MDX-файлов (PropsTable → markdown)`);
}

main();
