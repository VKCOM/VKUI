import { Collection, JSCodeshift } from 'jscodeshift';
import { movePropIntoSlotProps } from './movePropIntoSlotProps';

type MoveCallbacksPropsOptions = {
  root: Collection;
  componentName: string;
  slotName: string;
  excludedProps?: string[];
};

export function moveCallbacksIntoSlotProps(
  j: JSCodeshift,
  { root, componentName, excludedProps, slotName }: MoveCallbacksPropsOptions,
) {
  movePropIntoSlotProps(j, {
    root,
    componentName,
    propName: /^on.+/,
    excludedProps,
    slotName,
  });
}
