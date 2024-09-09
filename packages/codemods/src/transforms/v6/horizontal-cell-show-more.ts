import { API, FileInfo } from 'jscodeshift';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'unstable_HorizontalCellShowMore';
const componentNameTo = 'HorizontalCellShowMore';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach((path) =>
      j(path).replaceWith((path) =>
        j.importSpecifier(j.identifier(componentNameTo), path.node.local),
      ),
    );

  return source.toSource();
}
