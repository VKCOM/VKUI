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
  const { localName } = getImportInfo(j, file, 'Checkbox', alias);

  if (localName) {
    [localName, `${localName}.Input`].forEach((componentName) => {
      movePropIntoSlotProps(j, {
        root: source,
        componentName,
        propName: 'getRef',
        slotName: 'input',
        slotPropName: 'getRootRef',
      });

      moveAllPropsIntoSlotProp(j, {
        root: source,
        componentName,
        slotName: 'input',
        excludedProps: [
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

          'children',
          'className',
          'style',
          'getRootRef',
          'getRef',
          'description',
          'hoverMode',
          'activeMode',
          'hasHover',
          'hasActive',
          'focusVisibleMode',
          'titleAfter',
          'noPadding',

          'indeterminate',
          'defaultIndeterminate',
          'IconOnCompact',
          'IconOnRegular',
          'IconOffCompact',
          'IconOffRegular',
          'IconIndeterminate',
        ],
      });
    });
  }

  return source.toSource();
}
