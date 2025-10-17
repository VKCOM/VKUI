import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { movePropIntoSlotProps } from './common/movePropIntoSlotProps';

export const parser = 'tsx';

export default function transformer(file: FileInfo, api: API, options: JSCodeShiftOptions) {
  const { alias } = options;
  const j = api.jscodeshift;
  const source = j(file.source);
  const { localName } = getImportInfo(j, file, 'Select', alias);

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
