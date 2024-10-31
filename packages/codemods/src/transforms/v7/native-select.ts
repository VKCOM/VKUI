import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { warnSelectOnChange } from './common/warnSelectOnChange';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'NativeSelect', alias);

  if (!localName) {
    return source.toSource();
  }

  warnSelectOnChange(api, source, localName);

  return source.toSource();
}
