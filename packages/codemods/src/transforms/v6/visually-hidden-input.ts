import { API, FileInfo } from 'jscodeshift';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  let localImportName = 'VisuallyHiddenInput';
  let needRename = true;

  const componentImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier)
    .filter((path) => path.node.imported.name === 'VisuallyHiddenInput')
    .at(0);

  if (componentImport.length === 0) {
    return source.toSource();
  }

  componentImport.forEach((path) => {
    if (
      path.node.local &&
      path.node.local.name !== path.node.imported.name &&
      typeof path.node.local.name === 'string'
    ) {
      localImportName = path.node.local.name;
      needRename = false;
    }
    j(path).replaceWith((path) =>
      j.importSpecifier(j.identifier('VisuallyHidden'), needRename ? null : path.node.local),
    );
  });

  source.findJSXElements(localImportName).replaceWith((path) => {
    localImportName = needRename ? 'VisuallyHidden' : localImportName;
    const props = path.node.openingElement.attributes;
    return j.jsxElement(
      j.jsxOpeningElement(
        j.jsxIdentifier(localImportName),
        [j.jsxAttribute(j.jsxIdentifier('Component'), j.stringLiteral('input')), ...(props || [])],
        path.node.closingElement ? false : true,
      ),
      path.node.closingElement ? j.jsxClosingElement(j.jsxIdentifier(localImportName)) : null,
      path.node.children,
    );
  });

  return source.toSource();
}
