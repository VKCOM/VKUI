import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'AppearanceProvider');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'appearance')
    .forEach((attribute) =>
      j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('value'), attribute.node.value)),
    );

  return source.toSource();
}
