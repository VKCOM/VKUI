import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveCallbacksIntoSlotProps } from './common/moveCallbacksIntoSlotProps';
import { moveInputPropsIntoSlotProps } from './common/moveInputPropsIntoSlotProps';
import {
  moveAriaAttrsIntoSlotProps,
  moveDataAttrsIntoSlotProps,
  movePropIntoSlotProps,
} from './common/movePropIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'CustomSelect', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
      slotName: 'select',
      slotPropName: 'getRootRef',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'nativeSelectTestId',
      slotName: 'select',
      slotPropName: 'data-testid',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getSelectInputRef',
      slotName: 'input',
      slotPropName: 'getRootRef',
    });

    moveDataAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
    });

    moveAriaAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
    });

    moveCallbacksIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
      excludedProps: [
        'onChange',
        'onInvalid',
        'onClick',
        'onBlur',
        'onFocus',
        'onInputChange',
        'onClose',
        'onOpen',
        'onInputKeyDown',
      ],
    });

    moveInputPropsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      excludedProps: ['disabled', 'readOnly', 'required', 'name', 'value', 'placeholder'],
    });
  }

  return source.toSource();
}
