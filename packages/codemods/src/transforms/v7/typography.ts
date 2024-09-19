import { API, FileInfo, JSXAttribute, JSXSpreadAttribute } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

function isJSXAttribute(attribute: JSXAttribute | JSXSpreadAttribute): attribute is JSXAttribute {
  return attribute.type === 'JSXAttribute';
}

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Typography', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === localName,
    )
    // useAccentWeight по умолчанию теперь false, поэтому, чтобы
    // все продолжили использовать accent шрифты мы включим accent режим, добавив useAccentWeight если его нету.
    .forEach(function addAttributeIfAbsent(path) {
      const attributes = path.node.attributes;
      if (!attributes) {
        return;
      }

      const hasAccentAttribute = attributes?.find(
        (attr) => isJSXAttribute(attr) && attr.name.name === 'useAccentWeight',
      );

      if (!hasAccentAttribute) {
        attributes.push(j.jsxAttribute(j.jsxIdentifier('useAccentWeight')));
      }
    })
    .find(j.JSXAttribute)
    .filter((attribute) => attribute.node.name.name === 'useAccentWeight')
    .forEach(function handleAttributeValues(attribute) {
      const node = attribute.node;
      if (
        node.value?.type === 'JSXExpressionContainer' &&
        node.value?.expression.type === 'BooleanLiteral'
      ) {
        if (node.value.expression.value === true) {
          node.value = null;
        } else if (node.value.expression.value === false) {
          j(attribute).remove();
        }
      }
    });

  return source.toSource();
}
