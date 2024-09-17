import { API, FileInfo } from 'jscodeshift';
import { remapSizePropValue } from './common/remapSizePropValue';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Spinner', alias);
  if (!localName) {
    return source.toSource();
  }

  remapSizePropValue({
    j,
    source,
    componentName: localName,
    sizesMap: {
      large: 'xl',
      medium: 'l',
      regular: 'm',
      small: 's',
    },
  });

  return source.toSource();
}
