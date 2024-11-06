import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, removeProps } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { warnSelectOnChange } from './common/warnSelectOnChange';

export const parser = 'tsx';

const PROPS_TO_REMOVE = ['autoHideScrollbar', 'autoHideScrollbarDelay'];

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Select', alias);

  if (!localName) {
    return source.toSource();
  }

  removeProps(j, api, source, localName, PROPS_TO_REMOVE, () => {
    return `need to remove props ${PROPS_TO_REMOVE.join(', ')}`;
  });
  warnSelectOnChange(api, source, localName);

  return source.toSource();
}