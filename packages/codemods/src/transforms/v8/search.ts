import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
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
  const { localName } = getImportInfo(j, file, 'Search', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
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

    moveInputPropsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'input',
      excludedProps: [
        'alt',
        'autoComplete',
        'capture',
        'disabled',
        'list',
        'max',
        'maxLength',
        'min',
        'minLength',
        'name',
        'pattern',
        'placeholder',
        'readOnly',
        'required',
        'value',
      ],
    });
  }

  return source.toSource();
}
