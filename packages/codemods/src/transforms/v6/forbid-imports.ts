import chalk from 'chalk';
import { API, FileInfo } from 'jscodeshift';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier)
    .forEach((path) => {
      if (
        typeof path.value.imported.name === 'string' &&
        ['withInsets', 'useInsets', 'PromoBanner', 'getPlatformClassName'].includes(
          path.value.imported.name,
        )
      ) {
        report(api, `: import of ${chalk.white.bgBlue(path.value.imported.name)} are forbidden.`);
      }
    });

  return source.toSource();
}
