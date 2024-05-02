import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, swapBooleanValue } from '../codemod-helpers';
import { JSCodeShiftOptions } from '../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'CardScroll', alias);

  if (localName) {
    swapBooleanValue(api, source, localName, 'withSpaces', 'noSpaces');
  }

  return source.toSource();
}
