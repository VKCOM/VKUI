import { API, FileInfo } from 'jscodeshift';
import { remapSizePropValue } from './common/remapSizePropValue';
import { getImportInfo, renameProp } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

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

  return source.toSource();
}
