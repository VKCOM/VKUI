import { API, FileInfo } from 'jscodeshift';
import { swapGapPropElements } from './common/swapGapPropElements';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Flex', alias);

  if (!localName) {
    return source.toSource();
  }

  swapGapPropElements(j, source, localName);

  return source.toSource();
}
