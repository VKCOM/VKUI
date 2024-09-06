import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, swapBooleanValue } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ModalPageHeader', alias);

  if (!localName) {
    return source.toSource();
  }

  source
    .find(
      j.JSXOpeningElement,
      (element) => element.name.type === 'JSXIdentifier' && element.name.name === localName,
    )
    .forEach((element) => {
      const attributes = element.value.attributes;

      if (attributes) {
        const getRefIndex = attributes.findIndex(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'getRef',
        );
        const getRootRefIndex = attributes.findIndex(
          (attribute) => attribute.type === 'JSXAttribute' && attribute.name.name === 'getRootRef',
        );

        if (getRefIndex !== -1 && getRootRefIndex === -1) {
          const attribute = attributes[getRefIndex];
          if (attribute.type === 'JSXAttribute') {
            attribute.name.name = 'getRootRef';
          }
        }

        if (getRootRefIndex !== -1 && getRefIndex !== -1) {
          attributes.splice(getRefIndex, 1);
        }
      }
    });

  swapBooleanValue(api, source, localName, 'separator', 'noSeparator');

  return source.toSource();
}
