import * as fs from 'node:fs';
import * as path from 'node:path';

const EXCLUDED_EXTENSIONS = [
  '.test.tsx',
  '.stories.tsx',
  '.module.css',
  '.e2e.tsx',
  '.e2e-playground.tsx',
  '.d.ts',
  '.d.ts.map',
  '.md',
  '.mdx',
];
const EXCLUDED_DIRS = ['__image_snapshots__', 'storybook', 'testing', 'styles'];

function shouldIgnoreFile(filename: string): boolean {
  return (
    (filename[0].toLowerCase() === filename[0] && !filename.startsWith('use')) ||
    EXCLUDED_EXTENSIONS.some((ext) => filename.endsWith(ext))
  );
}

/**
 *
 * @param dirPath - путь к директории
 * @returns Массив абсолютных путей
 */
function scanDirectory(dirPath: string): string[] {
  return fs.readdirSync(dirPath).reduce<string[]>((files, item) => {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      if (!EXCLUDED_DIRS.includes(item)) {
        files.push(...scanDirectory(fullPath));
      }
    } else if (!shouldIgnoreFile(item)) {
      files.push(fullPath);
    }

    return files;
  }, []);
}

const componentsDirectory = path.resolve('../packages/vkui/src');

export function getPaths(): string[] {
  return scanDirectory(componentsDirectory);
}
