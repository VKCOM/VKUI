import { API, ASTPath, Collection, JSXAttribute, JSXElement } from 'jscodeshift';
import { removeAttribute } from '../../../codemod-helpers';
import { report } from '../../../report';

export const moveFromChildrenToLabel = (
  api: API,
  source: Collection,
  localName: string,
  needToAddHideLabelProps = false,
) => {
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

      const existingLabelProp = openingElement.attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'label',
      ) as JSXAttribute;

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
        if (existingLabelProp) {
          report(
            api,
            `Manual changes required for ${localName}'s "label" prop. Need to remove "children" prop. You can mode "children" value to "label" prop`,
          );
          return;
        }

        // Очищаем существующие children
        element.children = [];
        // Добавляем проп label
        openingElement.attributes?.push(j.jsxAttribute(j.jsxIdentifier('label'), labelValue));
        if (needToAddHideLabelProps) {
          // Добавляем проп hideLabelOnVKCom и hideLabelOnIOS, так как раньше children был скрыт визуально
          // и после того как мы перенесли children в label, визуально ничего не должно измениться
          openingElement.attributes?.push(j.jsxAttribute(j.jsxIdentifier('hideLabelOnVKCom')));
          openingElement.attributes?.push(j.jsxAttribute(j.jsxIdentifier('hideLabelOnIOS')));
        }
      }
    });

  return source.toSource();
};
