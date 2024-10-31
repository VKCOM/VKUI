import { API, ASTPath, Collection, JSXAttribute, JSXElement } from 'jscodeshift';
import { removeAttribute } from '../../../codemod-helpers';

export const moveFromChildrenToLabel = (api: API, source: Collection, localName: string) => {
  const j = api.jscodeshift;

  // Находим все JSX элементы с указанным именем
  source
    .find(j.JSXElement)
    .filter((path: ASTPath<JSXElement>) => {
      const elementName = path.node.openingElement.name;
      return elementName.type === 'JSXIdentifier' && elementName.name === localName;
    })
    .forEach((path: ASTPath<JSXElement>) => {
      const element = path.node;
      const openingElement = element.openingElement;

      // Получаем содержимое из props children
      const childrenProp = openingElement.attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'children',
      );

      // Получаем содержимое из обычных children
      const regularChildren = element.children?.filter(
        (child) => child.type !== 'JSXText' || child.value.trim() !== '',
      );

      let labelValue;

      if (childrenProp && childrenProp.type === 'JSXAttribute') {
        // Если есть проп children
        if (childrenProp.value?.type === 'JSXElement') {
          // Если children содержит JSX элемент, оборачиваем его в Fragment
          labelValue = j.jsxExpressionContainer(
            j.jsxFragment(j.jsxOpeningFragment(), j.jsxClosingFragment(), [childrenProp.value]),
          );
        } else {
          labelValue = childrenProp.value;
        }
        removeAttribute(openingElement.attributes, childrenProp);
      } else if (regularChildren && regularChildren.length > 0) {
        if (regularChildren.length === 1 && regularChildren[0].type === 'JSXText') {
          const firstChild = regularChildren[0];
          if (firstChild.type === 'JSXText') {
            labelValue = j.jsxExpressionContainer(j.stringLiteral(firstChild.value.trim()));
          }
        } else {
          // Оборачиваем все children в Fragment
          labelValue = j.jsxExpressionContainer(
            j.jsxFragment(j.jsxOpeningFragment(), j.jsxClosingFragment(), regularChildren),
          );
        }
      }

      if (labelValue) {
        // Очищаем существующие children
        element.children = [];

        // Обновляем или добавляем проп label
        const existingLabelProp = openingElement.attributes?.find(
          (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'label',
        ) as JSXAttribute;

        if (existingLabelProp) {
          existingLabelProp.value = labelValue;
        } else {
          openingElement.attributes?.push(j.jsxAttribute(j.jsxIdentifier('label'), labelValue));
        }
      }
    });

  return source.toSource();
};
