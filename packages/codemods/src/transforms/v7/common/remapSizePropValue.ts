import { API, Collection, JSCodeshift } from 'jscodeshift';
import { report } from '../../../report';

export const remapSizePropValue = ({
  j,
  source,
  sizesMap,
  componentName,
  api,
}: {
  api: API;
  j: JSCodeshift;
  source: Collection;
  sizesMap: Record<string, string>;
  componentName: string;
}) => {
  source
    .find(j.JSXOpeningElement)
    .filter(
      (path) => path.value.name.type === 'JSXIdentifier' && path.value.name.name === componentName,
    )
    .find(j.JSXAttribute)
    .filter((attribute) => {
      const attributeName = attribute.node.name.name;
      return attributeName === 'size';
    })
    .forEach((attribute) => {
      let nodeToReplaceValue;
      if (
        attribute.node.value?.type !== 'JSXExpressionContainer' &&
        attribute.node.value?.type !== 'StringLiteral'
      ) {
        return;
      }
      if (attribute.node.value?.type === 'JSXExpressionContainer') {
        const expression = attribute.node.value.expression;
        if (expression.type !== 'StringLiteral') {
          return;
        }

        nodeToReplaceValue = expression;
      }
      if (attribute.node.value?.type === 'StringLiteral') {
        nodeToReplaceValue = attribute.node.value;
      }
      if (nodeToReplaceValue) {
        const newValue = sizesMap[nodeToReplaceValue.value];
        if (newValue) {
          nodeToReplaceValue.value = newValue;
        }
      } else {
        report(api, `Manual changes required for ${componentName}'s "size" prop.`);
      }
    });
};
