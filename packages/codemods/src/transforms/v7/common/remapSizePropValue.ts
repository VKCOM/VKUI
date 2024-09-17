import { Collection, JSCodeshift } from 'jscodeshift';

export const remapSizePropValue = ({
  j,
  source,
  sizesMap,
  componentName,
}: {
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
      if (attribute.node.value?.type === 'StringLiteral') {
        attribute.node.value.value = sizesMap[attribute.node.value.value];
      }
    });
};
