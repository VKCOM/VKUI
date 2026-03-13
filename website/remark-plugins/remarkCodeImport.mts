import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import type { Code, Parent, Root } from 'mdast';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

interface CodeImportOptions {
  rootDir?: string;
}

export function transformer(options: CodeImportOptions = {}) {
  const rootDir = options.rootDir || process.cwd();

  if (!path.isAbsolute(rootDir)) {
    throw new Error(`"rootDir" has to be an absolute path`);
  }

  return async function (tree: Root, file: VFile) {
    const codes: Array<[Code, number | undefined, Parent]> = [];
    const promises: Array<Promise<void>> = [];
    visit(tree, 'code', (node, index, parent) => {
      codes.push([node, index, parent as Parent]);
    });
    for (const [node] of codes) {
      const fileMeta = (node.meta || '')
        // Allow escaping spaces
        .split(/(?<!\\) /g)
        .find((meta) => meta.startsWith('file='));
      if (!fileMeta) {
        continue;
      }
      if (!file.dirname) {
        throw new Error('"file" should be an instance of VFile');
      }
      const filePath = fileMeta.replace('file=', '');
      const normalizedFilePath = filePath.replace(/^<rootDir>/, rootDir).replace(/\\ /g, ' ');
      const fileAbsPath = path.resolve(file.dirname, normalizedFilePath);
      const relativePathFromRootDir = path.relative(rootDir, fileAbsPath);
      if (
        !rootDir ||
        relativePathFromRootDir.startsWith(`..${path.sep}`) ||
        path.isAbsolute(relativePathFromRootDir)
      ) {
        throw new Error(
          `Attempted to import code from "${fileAbsPath}", which is outside from the rootDir "${rootDir}"`,
        );
      }

      const handleFile = async () => {
        const fileContent = await fs.readFile(fileAbsPath, 'utf8');
        node.value = fileContent.trim();
      };

      promises.push(handleFile());
    }

    await Promise.all(promises);
    return;
  };
}
