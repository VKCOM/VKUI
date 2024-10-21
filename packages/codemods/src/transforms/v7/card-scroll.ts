import { API, FileInfo, JSXAttribute, JSXSpreadAttribute } from 'jscodeshift';
import { getImportInfo, removeAttribute } from '../../codemod-helpers';
import { report } from '../../report';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'CardScroll', alias);

  if (!localName) {
    return source.toSource();
  }

  const getValueFromAttribute = (attribute: JSXAttribute): boolean | null => {
    if (attribute.value?.type === 'BooleanLiteral') {
      return attribute.value.value;
    }
    if (attribute.value?.type === 'JSXExpressionContainer') {
      const expression = attribute.value.expression;
      if (expression.type === 'BooleanLiteral') {
        return expression.value;
      }
      return null;
    }
    return true;
  };

  const addPropPadding = (attributes: Array<JSXAttribute | JSXSpreadAttribute> | undefined) => {
    attributes?.push(j.jsxAttribute(j.jsxIdentifier('padding')));
  };

  source
    .find(j.JSXElement, {
      openingElement: {
        name: {
          name: localName,
        },
      },
    })
    .forEach((path) => {
      const attributes = path.node.openingElement.attributes;
      const noSpacesAttr: JSXAttribute | undefined = attributes?.find(
        (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'noSpaces',
      ) as JSXAttribute | undefined;

      if (!noSpacesAttr) {
        addPropPadding(attributes);
        return;
      }
      const attrValue = getValueFromAttribute(noSpacesAttr);
      if (attrValue === null) {
        report(
          api,
          `Manual changes required for ${localName}'s "noSpaces" prop. Need to change it to "padding" prop`,
        );
        return;
      }
      removeAttribute(attributes, noSpacesAttr);

      if (!attrValue) {
        addPropPadding(attributes);
      }
    });

  return source.toSource();
}
