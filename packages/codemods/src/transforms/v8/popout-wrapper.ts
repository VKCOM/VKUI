import { API, FileInfo, JSXAttribute, JSXElement } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PopoutWrapper', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: localName,
        },
      },
    })
    .forEach((path) => {
      const element = path.node;
      const attributes = element.openingElement.attributes;

      if (!attributes) {
        return;
      }

      let fixedAttribute: JSXAttribute | null = null;
      let fixedValueIsFalse = false;

      // Находим атрибут fixed
      attributes.forEach((attr) => {
        if (attr.type === 'JSXAttribute' && attr.name.name === 'fixed') {
          fixedAttribute = attr;

          // Проверяем значение атрибута
          if (!attr.value) {
            // fixed без значения считается true
            fixedValueIsFalse = false;
          } else if (
            attr.value.type === 'JSXExpressionContainer' &&
            attr.value.expression.type === 'BooleanLiteral'
          ) {
            // fixed={true} или fixed={false}
            fixedValueIsFalse = !attr.value.expression.value;
          } else {
            // Сложное выражение - оставляем как есть, но удалим fixed
            fixedValueIsFalse = false;
          }
        }
      });

      // Если нашли атрибут fixed
      if (fixedAttribute) {
        // Удаляем атрибут fixed
        attributes.splice(attributes.indexOf(fixedAttribute), 1);

        // Если fixed={false}, добавляем strategy="none"
        if (fixedValueIsFalse) {
          // Проверяем, нет ли уже атрибута strategy
          const hasStrategy = attributes.some(
            (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'strategy',
          );

          if (!hasStrategy) {
            // Добавляем strategy="none"
            attributes.push(j.jsxAttribute(j.jsxIdentifier('strategy'), j.stringLiteral('none')));
          }
        }
      }
    });

  return source.toSource();
}
