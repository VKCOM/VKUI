import { FileInfo, JSCodeshift } from 'jscodeshift';

export function getImportInfo(j: JSCodeshift, file: FileInfo, componentName: string) {
  const source = j(file.source);

  let localImportName = componentName;

  const componentImport = source
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value === '@vkontakte/vkui')
    .find(j.ImportSpecifier, { imported: { name: componentName } });

  componentImport.forEach((path) => {
    if (path.node.local && path.node.local.name !== path.node.imported.name) {
      localImportName = path.node.local.name;
    }
  });

  return { localName: localImportName };
}
