import {
  API,
  Collection,
  FileInfo,
  JSCodeshift,
  JSXAttribute,
  JSXSpreadAttribute,
} from 'jscodeshift';
import { report } from '../../report';
import { remapSizePropValue } from './common/remapSizePropValue';
import { getImportInfo, removeAttribute, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

function removePropMode(j: JSCodeshift, api: API, source: Collection, localName: string) {
  const getValueFromAttribute = (attr: JSXAttribute): string | null => {
    if (attr.value?.type === 'StringLiteral') {
      return attr.value.value;
    }
    if (attr.value?.type === 'JSXExpressionContainer') {
      const expression = attr.value.expression;
      if (expression.type === 'StringLiteral') {
        return expression.value;
      }
    }
    return null;
  };

  const changeAttributeValue = (
    attributes: Array<JSXAttribute | JSXSpreadAttribute> | undefined,
    attribute: JSXAttribute | undefined,
    attrName: string,
    newValue: string,
  ) => {
    if (attribute) {
      attribute.value = j.stringLiteral(newValue);
    } else {
      attributes?.push(j.jsxAttribute(j.jsxIdentifier(attrName), j.stringLiteral(newValue)));
    }
  };

  source
    .find(j.JSXOpeningElement, {
      name: {
        name: localName,
      },
    })
    .forEach((path) => {
      const attributes = path.node.attributes;
      const modeAttr =
        (attributes?.find(
          (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'mode',
        ) as JSXAttribute) || undefined;
      const sizeAttr =
        (attributes?.find(
          (attr) => attr.type === 'JSXAttribute' && attr.name.name === 'size',
        ) as JSXAttribute) || undefined;
      const hasSpread = !!attributes?.some((attr) => attr.type === 'JSXSpreadAttribute');
      if (!modeAttr) {
        if (hasSpread) {
          report(
            api,
            `: ${localName} has been changed. Manual changes required: remove mode attribute and replace it by size prop`,
          );
        }
        return;
      }
      removeAttribute(attributes, modeAttr);
      const modeValue = getValueFromAttribute(modeAttr);
      if (!modeValue) {
        report(
          api,
          `: ${localName} has been changed. Manual changes required: remove mode attribute and replace it by size prop`,
        );
        return;
      }
      const sizeValue = getValueFromAttribute(sizeAttr);

      if (modeValue === 'primary' && sizeValue === 'l') {
        changeAttributeValue(attributes, sizeAttr, 'size', 'xl');
      } else if (modeValue === 'tertiary' || (modeValue === 'primary' && sizeValue === 'm')) {
        changeAttributeValue(attributes, sizeAttr, 'size', 'm');
      } else if (modeValue === 'secondary') {
        changeAttributeValue(attributes, sizeAttr, 'size', 's');
      }
    });
}

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Header', alias);
  if (!localName) {
    return source.toSource();
  }

  remapSizePropValue({
    j,
    api,
    source,
    componentName: localName,
    sizesMap: {
      large: 'l',
      regular: 'm',
    },
  });

  renameProp(j, source, localName, { aside: 'after' });

  removePropMode(j, api, source, localName);

  return source.toSource();
}
