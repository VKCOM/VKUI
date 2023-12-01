import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../codemod-helpers';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;
  const source = j(file.source);
  let changed = false;
  const { localName } = getImportInfo(j, file, 'ConfigProvider');

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'webviewType')
    .forEach((attribute) => {
      const node = attribute.node.value;

      if (node) {
        if (node.type === 'JSXExpressionContainer' && node.expression.type === 'MemberExpression') {
          const property = node.expression.property;
          if (property.type === 'Identifier') {
            if (property.name === 'INTERNAL') {
              j(attribute).remove();
              changed = true;
            }
            if (property.name === 'VKAPPS') {
              j(attribute).replaceWith(
                j.jsxAttribute(j.jsxIdentifier('hasCustomPanelHeaderAfter')),
              );
              changed = true;
            }
          }
        }
        if (node.type === 'JSXExpressionContainer' && node.expression.type === 'TSAsExpression') {
          const expression = node.expression.expression;
          if (expression.type === 'Literal' || expression.type === 'StringLiteral') {
            if (expression.value === 'internal') {
              j(attribute).remove();
              changed = true;
            }
            if (expression.value === 'vkapps') {
              j(attribute).replaceWith(
                j.jsxAttribute(j.jsxIdentifier('hasCustomPanelHeaderAfter')),
              );
              changed = true;
            }
          }
        }
        if (node.type === 'Literal' || node.type === 'StringLiteral') {
          if (node.value === 'internal') {
            j(attribute).remove();
            changed = true;
          }
          if (node.value === 'vkapps') {
            j(attribute).replaceWith(j.jsxAttribute(j.jsxIdentifier('hasCustomPanelHeaderAfter')));
            changed = true;
          }
        }
      }
    });

  if (changed) {
    source
      .find(j.ImportDeclaration)
      .filter((path) => path.node.source.value === '@vkontakte/vkui')
      .find(j.ImportSpecifier)
      .filter((path) => path.node.imported.name === 'WebviewType')
      .remove();
  }

  return source.toSource();
}
