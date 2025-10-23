import { API, FileInfo } from 'jscodeshift';
import { getImportInfo } from '../../codemod-helpers';
import { JSCodeShiftOptions } from '../../types';
import { moveAllPropsIntoSlotProp } from './common/moveAllPropsIntoSlotProp';
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
  const { localName } = getImportInfo(j, file, 'SplitLayout', alias);

  if (localName) {
    movePropIntoSlotProps(j, {
      root: source,
      componentName: localName,
      propName: 'getRef',
      slotName: 'content',
      slotPropName: 'getRootRef',
    });

    moveDataAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'content',
    });

    moveAriaAttrsIntoSlotProps(j, {
      root: source,
      componentName: localName,
      slotName: 'content',
    });

    moveAllPropsIntoSlotProp(j, {
      root: source,
      componentName: localName,
      slotName: 'content',
      excludedProps: ['header', 'children', 'getRootRef', 'className', 'center', 'modal', 'popout'],
    });
  }

  return source.toSource();
}
