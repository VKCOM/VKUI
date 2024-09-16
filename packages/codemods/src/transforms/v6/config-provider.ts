import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

const ALLOWED_PLATFORM_LIST = ['android', 'ios', 'vkcom'];

const wrapUnknownPlatformToVKUITokensClassName = (
  unknownPlatform: string,
  appearance: 'light' | 'dark',
) => `vkui--${unknownPlatform}--${appearance}`;

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  let changed = false;
  const { localName } = getImportInfo(j, file, 'ConfigProvider', alias);

  if (!localName) {
    return source.toSource();
  }

  const attributes = source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    .find(j.JSXAttribute);

  attributes
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

  attributes
    .filter((attribute) => attribute.node.name.name === 'platform')
    .forEach((attribute) => {
      const node = attribute.node.value;

      if (!node) {
        return;
      }

      if (
        (node.type === 'Literal' || node.type === 'StringLiteral') &&
        typeof node.value === 'string'
      ) {
        if (!ALLOWED_PLATFORM_LIST.includes(node.value)) {
          j(attribute).replaceWith(
            j.jsxAttribute(
              j.jsxIdentifier('tokensClassNames'),
              j.jsxExpressionContainer(
                j.objectExpression([
                  j.objectProperty(
                    j.jsxIdentifier('light'),
                    j.stringLiteral(wrapUnknownPlatformToVKUITokensClassName(node.value, 'light')),
                  ),
                  j.objectProperty(
                    j.jsxIdentifier('dark'),
                    j.stringLiteral(wrapUnknownPlatformToVKUITokensClassName(node.value, 'dark')),
                  ),
                ]),
              ),
            ),
          );
        }
      }
    });

  if (changed) {
    source
      .find(j.ImportDeclaration)
      .filter((path) => path.node.source.value === alias)
      .find(j.ImportSpecifier)
      .filter((path) => path.node.imported.name === 'WebviewType')
      .remove();
  }

  return source.toSource();
}
