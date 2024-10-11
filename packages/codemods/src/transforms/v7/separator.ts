import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, renameProp, swapBooleanValue } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

const componentName = 'Separator';
export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, componentName, alias);

  if (localName) {
    renameProp(j, source, localName, { mode: 'appearance' });
    swapBooleanValue(api, source, localName, 'wide', 'padding');
  }

  return source.toSource();
}
