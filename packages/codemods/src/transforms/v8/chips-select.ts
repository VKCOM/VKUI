import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
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
      propName: 'inputValue',
      slotName: 'input',
      slotPropName: 'value',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'defaultInputValue',
      slotName: 'input',
      slotPropName: 'defaultValue',
    });

    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'onInputChange',
      slotName: 'input',
      slotPropName: 'onChange',
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
  }

  return source.toSource();
}
