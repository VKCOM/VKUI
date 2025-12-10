import { Collection, JSCodeshift } from 'jscodeshift';
import { movePropIntoSlotProps } from './movePropIntoSlotProps';

type MovePropsOptions = {
  root: Collection;
  componentName: string;
  slotName: string;
  excludedProps?: string[];
};

export function moveAllPropsIntoSlotProp(
  j: JSCodeshift,
  { root, componentName, slotName, excludedProps }: MovePropsOptions,
) {
  movePropIntoSlotProps(j, {
    root,
    componentName,
    slotName,
    propName: /.+/,
    excludedProps: [...(excludedProps || []), 'slotProps'],
  });
}
