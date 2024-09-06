import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, swapBooleanValue } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: imageBaseLocalName } = getImportInfo(j, file, 'ImageBase', alias);
  const { localName: imageLocalName } = getImportInfo(j, file, 'Image', alias);
  const { localName: avatarLocalName } = getImportInfo(j, file, 'Avatar', alias);

  if (imageBaseLocalName) {
    swapBooleanValue(api, source, imageBaseLocalName, 'withBorder', 'noBorder');
  }

  if (imageLocalName) {
    swapBooleanValue(api, source, imageLocalName, 'withBorder', 'noBorder');
  }

  if (avatarLocalName) {
    swapBooleanValue(api, source, avatarLocalName, 'withBorder', 'noBorder');
  }

  return source.toSource();
}
