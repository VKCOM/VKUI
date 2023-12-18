import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);

  const { localName: localNameModalCard } = getImportInfo(j, file, 'ModalCard', alias);
  const { localName: localNameModalCardBase } = getImportInfo(j, file, 'ModalCardBase', alias);

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) =>
        path.value.name.type === 'JSXIdentifier' &&
        [localNameModalCard, localNameModalCardBase].includes(path.value.name.name),
    )
    .forEach((path) => {
      const headerAttribute = j(path).find(j.JSXAttribute, { name: { name: 'header' } });
      const subheaderAttribute = j(path).find(j.JSXAttribute, { name: { name: 'subheader' } });

      if (subheaderAttribute.length > 0) {
        if (path.node.attributes) {
          path.node.attributes.push(
            j.jsxAttribute(j.jsxIdentifier('subheaderComponent'), j.stringLiteral('h5')),
          );
        }
      }

      if (headerAttribute.length > 0) {
        if (path.node.attributes) {
          path.node.attributes.push(
            j.jsxAttribute(j.jsxIdentifier('headerComponent'), j.stringLiteral('h2')),
          );
        }
      }
    });

  return source.toSource();
}
