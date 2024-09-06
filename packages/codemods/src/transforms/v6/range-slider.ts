import { API, FileInfo } from 'jscodeshift';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  let localImportName = 'RangeSlider';
  let needRename = true;

  const componentImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: 'RangeSlider' } });

  if (componentImport.length === 0) {
    return source.toSource();
  }

  const sliderImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: 'Slider' } });

  componentImport.forEach((path) => {
    if (path.node.local && path.node.local.name !== path.node.imported.name) {
      localImportName = path.node.local.name;
      needRename = false;
    }
    if (sliderImport.size() > 0 && needRename) {
      j(path).remove();
    } else {
      j(path).replaceWith((path) =>
        j.importSpecifier(j.identifier('Slider'), needRename ? null : path.node.local),
      );
    }
  });

  source.findJSXElements(localImportName).replaceWith((path) => {
    localImportName = needRename ? 'Slider' : localImportName;
    const props = path.node.openingElement.attributes;
    return j.jsxElement(
      j.jsxOpeningElement(
        j.jsxIdentifier(localImportName),
        [j.jsxAttribute(j.jsxIdentifier('multiple')), ...(props || [])],
        path.node.closingElement ? false : true,
      ),
      path.node.closingElement ? j.jsxClosingElement(j.jsxIdentifier(localImportName)) : null,
      path.node.children,
    );
  });

  return source.toSource();
}
