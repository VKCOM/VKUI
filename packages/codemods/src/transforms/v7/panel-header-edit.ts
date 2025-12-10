import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, removeProps } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { removeChildrenFromComponent } from './common/removeChildrenFromComponent';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'PanelHeaderEdit', alias);

  if (!localName) {
    return source.toSource();
  }

  removeProps(j, api, source, localName, ['children', 'label']);
  removeChildrenFromComponent(api, source, localName);

  return source.toSource();
}
