import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveCallbacksIntoSlotProps } from './common/moveCallbacksIntoSlotProps';
import {
  moveAriaAttrsIntoSlotProps,
  moveDataAttrsIntoSlotProps,
  movePropIntoSlotProps,
} from './common/movePropIntoSlotProps';
import { moveTextAreaPropsIntoSlotProps } from './common/moveTextAreaPropsIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'WriteBar', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
      slotName: 'textArea',
      slotPropName: 'getRootRef',
    });

    moveDataAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'textArea',
    });

    moveAriaAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'textArea',
    });

    moveCallbacksIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'textArea',
      excludedProps: ['onChange', 'onInvalid', 'onHeightChange', 'onFocus', 'onBlur'],
    });

    moveTextAreaPropsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      excludedProps: [
        'value',
        'rows',
        'maxLength',
        'minLength',
        'disabled',
        'placeholder',
        'name',
        'readOnly',
      ],
    });
  }

  return source.toSource();
}
