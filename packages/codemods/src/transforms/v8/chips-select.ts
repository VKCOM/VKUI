import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveCallbacksIntoSlotProps } from './common/moveCallbacksIntoSlotProps';
import { moveInputPropsIntoSlotProps } from './common/moveInputPropsIntoSlotProps';
import { movePropIntoSlotProps } from './common/movePropIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'ChipsSelect', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
      slotName: 'input',
      slotPropName: 'getRootRef',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: /data-.+/,
      slotName: 'input',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: /aria-.+/,
      slotName: 'input',
    });

    moveCallbacksIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
      excludedProps: [
        'onFocus',
        'onBlur',
        'onKeyDown',
        'onChange',
        'onInputChange',
        'onChangeStart',
        'onClose',
        'onOpen',
      ],
    });

    moveInputPropsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      excludedProps: ['disabled', 'readOnly', 'placeholder', 'value'],
    });
  }

  return source.toSource();
}
