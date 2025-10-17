import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveAllPropsIntoSlotProp } from './common/moveAllPropsIntoSlotProp';
import { movePropIntoSlotProps } from './common/movePropIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Switch', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
      slotName: 'input',
      slotPropName: 'getRootRef',
    });

    moveAllPropsIntoSlotProp(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
      excludedProps: [
        'style',
        'className',
        'getRootRef',
        'getRef',
        'checked',
        'defaultChecked',
        'disabled',
        'readOnly',
        'required',
        'autoFocus',

        'id',
        'name',
        'value',
        'tabIndex',

        'onChange',
        'onInvalid',
      ],
    });
  }

  return source.toSource();
}
