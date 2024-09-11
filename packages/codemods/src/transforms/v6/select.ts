import { API, FileInfo } from 'jscodeshift';
import { getImportInfo, swapBooleanValue } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName: selectLocalName } = getImportInfo(j, file, 'Select', alias);
  const { localName: customSelectLocalName } = getImportInfo(j, file, 'CustomSelect', alias);
  const { localName: chipsSelectLocalName } = getImportInfo(j, file, 'ChipsSelect', alias);

  if (selectLocalName) {
    swapBooleanValue(api, source, selectLocalName, 'fixDropdownWidth', 'dropdownAutoWidth');
  }
  if (customSelectLocalName) {
    swapBooleanValue(api, source, customSelectLocalName, 'fixDropdownWidth', 'dropdownAutoWidth');
  }
  if (chipsSelectLocalName) {
    swapBooleanValue(api, source, chipsSelectLocalName, 'fixDropdownWidth', 'dropdownAutoWidth');
  }

  return source.toSource();
}
