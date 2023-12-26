import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Placeholder', alias);

  source
    .find(
      j.JSXOpeningElement,
      (element) => element.name.type === 'JSXIdentifier' && element.name.name === localName,
    )
    .find(j.JSXAttribute, (attribute) => attribute.name.name === 'withPadding')
    .forEach((attribute) => {
      const node = attribute.node;

      if (!node.value) {
        j(attribute).remove();
      } else if (
        node.value.type === 'JSXExpressionContainer' &&
        node.value.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value) {
          j(attribute).remove();
        } else {
          j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('noPadding')));
        }
      }
    });

  return source.toSource();
}
