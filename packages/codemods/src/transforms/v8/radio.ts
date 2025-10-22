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
  const { localName } = getImportInfo(j, file, 'Radio', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'labelProps',
      slotName: 'root',
    });

    [localName, `${localName}.Input`].forEach((componentName) => {
      movePropIntoSlotProps(j, {
        root: source,
        componentName,
        propName: 'getRef',
        slotName: 'input',
        slotPropName: 'getRootRef',
      });

      moveDataAttrsIntoSlotProps(j, {
        root: source,
        componentName,
        slotName: 'input',
      });

      moveAriaAttrsIntoSlotProps(j, {
        root: source,
        componentName,
        slotName: 'input',
      });

      moveCallbacksIntoSlotProps(j, {
        root: source,
        componentName,
        slotName: 'input',
        excludedProps: ['onChange', 'onInvalid', 'onFocus', 'onBlur'],
      });

      moveInputPropsIntoSlotProps(j, {
        root: source,
        componentName,
        excludedProps: ['checked', 'disabled', 'readOnly', 'required', 'name', 'value'],
      });
    });
  }

  return source.toSource();
}
