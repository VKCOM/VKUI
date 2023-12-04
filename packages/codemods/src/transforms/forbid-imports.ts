import { API, FileInfo } from 'jscodeshift';
import { JSCodeShiftOptions } from '../types';

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
        ['withInsets', 'useInsets', 'PromoBanner', 'getPlatformClassName'].includes(
          path.value.imported.name,
        )
      ) {
        api.report(
          `: import of ${path.value.imported.name} are forbidden, advise the migration guide.`,
        );
      }
    });

  return source.toSource();
}
