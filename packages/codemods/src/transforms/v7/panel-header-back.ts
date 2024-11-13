import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveFromChildrenToLabel } from './common/moveFromChildrenToLabel';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PanelHeaderBack', alias);

  if (!localName) {
    return source.toSource();
  }

  moveFromChildrenToLabel(api, source, localName, true);

  return source.toSource();
}
