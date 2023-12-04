import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'SimpleCell', alias);

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'expandable')
    .forEach((attribute) => {
      const attributeValue = attribute.node.value;
      if (attributeValue && attributeValue.type === 'JSXExpressionContainer') {
        const expression = attributeValue.expression;
        if (expression.type === 'BooleanLiteral') {
          if (expression.value) {
            j(attribute).replaceWith(
              j.jsxAttribute(j.jsxIdentifier('expandable'), j.stringLiteral('auto')),
            );
          } else {
            j(attribute).remove();
          }
        }
      }
      if (attribute.node.type === 'JSXAttribute' && !attributeValue) {
        j(attribute).replaceWith(
          j.jsxAttribute(j.jsxIdentifier('expandable'), j.stringLiteral('auto')),
        );
      }
    });

  return source.toSource();
}
