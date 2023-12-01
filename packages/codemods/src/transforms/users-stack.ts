import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'UsersStack');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'layout')
    .forEach((attribute) => {
      const node = attribute.node;

      if (node.value && node.value.type === 'StringLiteral') {
        const newValue = node.value.value === 'vertical' ? 'column' : 'row';
        j(attribute).replaceWith(
          j.jsxAttribute(j.jsxIdentifier('direction'), j.stringLiteral(newValue)),
        );
      }
    });

  return source.toSource();
}
