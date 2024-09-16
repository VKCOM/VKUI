import type { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import type { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'TooltipContainer';
const componentNameTo = 'OnboardingTooltipContainer';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);
  let needRename = true;

  if (!localName) {
    return source.toSource();
  }

  // подменяем импорт
  source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } })
    .forEach((path) => {
      j(path).replaceWith((path) => {
        if (path.node.local && path.node.local.name !== path.node.imported.name) {
          needRename = false;
        }
        return j.importSpecifier(
          j.jsxIdentifier(componentNameTo),
          needRename ? null : path.node.local,
        );
      });
    });

  source.findJSXElements(localName).forEach((element) => {
    // меняем название компонента в JSX на переименованный в импорте (если нужно)
    j(element).replaceWith((path) => {
      const renamedLocalName = needRename ? componentNameTo : localName;
      return j.jsxElement(
        j.jsxOpeningElement(
          j.jsxIdentifier(renamedLocalName),
          path.node.openingElement.attributes,
          path.node.closingElement ? false : true,
        ),
        path.node.closingElement ? j.jsxClosingElement(j.jsxIdentifier(renamedLocalName)) : null,
        path.node.children,
      );
    });
  });

  return source.toSource();
}
