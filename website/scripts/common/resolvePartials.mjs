import fs from 'fs';
import path from 'path';

/**
 * Находит в body все `import Foo from './path.mdx'`, читает содержимое файла
 * и подставляет его вместо `<Foo />`. Работает рекурсивно — партиалы сами
 * могут импортировать другие партиалы.
 *
 * @param {string} body - тело MDX-файла
 * @param {string} filePath - абсолютный путь к исходному MDX-файлу (нужен для резолва относительных импортов)
 * @returns {string} body с раскрытыми партиалами
 */
export function resolvePartials(body, filePath) {
  const dir = path.dirname(filePath);

  // import Foo from './something.mdx'  (с кавычками или без точки с запятой)
  const importRegex = /^import\s+(\w+)\s+from\s+['"]([^'"]+\.mdx)['"]\s*;?\s*$/gm;

  const partials = new Map();
  const importLinesToRemove = new Set();

  let match;
  while ((match = importRegex.exec(body)) !== null) {
    const [fullImportLine, componentName, importRelPath] = match;
    const fullPath = path.resolve(dir, importRelPath);

    if (!fs.existsSync(fullPath)) {
      continue;
    }

    const partialRaw = fs.readFileSync(fullPath, 'utf8');
    const partialResolved = resolvePartials(partialRaw, fullPath);
    partials.set(componentName, partialResolved.trim());
    importLinesToRemove.add(fullImportLine);
  }

  if (partials.size === 0) {
    return body;
  }

  let result = body;

  for (const importLine of importLinesToRemove) {
    result = result.replace(importLine, '');
  }

  for (const [componentName, content] of partials) {
    const tagRegex = new RegExp(`<${componentName}\\s*/>`, 'g');
    result = result.replace(tagRegex, content);
  }

  result = result.replace(/\n{3,}/g, '\n\n');

  return result;
}
