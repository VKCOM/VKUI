import { Collection, FileInfo, JSCodeshift } from 'jscodeshift';

export function getImportInfo(
  j: JSCodeshift,
  file: FileInfo,
  componentName: string,
  alias: string,
) {
  const source = j(file.source);

  let localImportName = componentName;

  const componentImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === alias)
    .find(j.ImportSpecifier, { imported: { name: componentName } });

  componentImport.forEach((path) => {
    if (path.node.local && path.node.local.name !== path.node.imported.name) {
      localImportName = path.node.local.name;
    }
  });

  return { localName: localImportName };
}

export function renameProp(
  j: JSCodeshift,
  source: Collection,
  componentName: string,
  renameMap: { [x: string]: string },
) {
  const from = Object.keys(renameMap);
  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === componentName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => {
      const attributeName = attribute.node.name.name;
      return typeof attributeName === 'string' ? from.includes(attributeName) : false;
    })
    .forEach((attribute) => {
      j(attribute).replaceWith(
        j.jsxAttribute(
          j.jsxIdentifier(renameMap[attribute.node.name.name as string]),
          attribute.node.value,
        ),
      );
    });
}
