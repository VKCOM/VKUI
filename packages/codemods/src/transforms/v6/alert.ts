import { API, ASTPath, FileInfo, JSCodeshift } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';

export const parser = 'tsx';

function replaceInArrayExpression(j: JSCodeshift, path: ASTPath) {
  j(path)
    .find(j.ArrayExpression)
    .find(j.ObjectExpression)
    .find(j.ObjectProperty)
    .filter((path) => path.value.key.type === 'Identifier' && path.value.key.name === 'autoClose')
    .forEach((property) => {
      const propertyValue = property.value;
      if (propertyValue.value.type === 'BooleanLiteral') {
        if (propertyValue.value.value) {
          j(property).remove();
        } else {
          j(property).replaceWith(
            j.property('init', j.jsxIdentifier('autoCloseDisabled'), j.booleanLiteral(true)),
          );
        }
      }
    });
}

export default function transformer(file: FileInfo, api: API, options: JSCodeshift) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Alert', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'actions')
    .forEach((attribute) => {
      const node = attribute.node.value;

      if (node && node.type === 'JSXExpressionContainer') {
        replaceInArrayExpression(j, attribute);
        if (node.expression.type === 'Identifier') {
          const decl = source.findVariableDeclarators(node.expression.name);
          decl.forEach((path) => {
            replaceInArrayExpression(j, path);
          });
        }
      }
    });

  return source.toSource();
}
