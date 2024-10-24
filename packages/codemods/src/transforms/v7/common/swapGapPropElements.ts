import { Collection, JSCodeshift, JSXAttribute } from 'jscodeshift';

export const swapGapPropElements = (j: JSCodeshift, source: Collection, componentName: string) => {
  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === componentName,
    )
    .forEach((path) => {
      const attributes = path.node.attributes;
      const gapAttribute = attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'gap',
      ) as JSXAttribute;

      if (
        gapAttribute &&
        gapAttribute.value &&
        gapAttribute.value.type === 'JSXExpressionContainer'
      ) {
        const expression = gapAttribute.value.expression;

        if (expression.type === 'ArrayExpression' && expression.elements.length === 2) {
          // Меняем местами элементы массива
          const [first, second] = expression.elements;
          if (first && second) {
            expression.elements = [second, first];
          }
        }
      }
    });
};
