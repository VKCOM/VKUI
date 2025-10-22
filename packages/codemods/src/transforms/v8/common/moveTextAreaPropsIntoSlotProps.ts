import { Collection, JSCodeshift } from 'jscodeshift';
import { movePropIntoSlotProps } from './movePropIntoSlotProps';

const TEXT_AREA_SPECIFIC_PROPS = [
  'autoComplete',
  'cols',
  'dirName',
  'disabled',
  'form',
  'maxLength',
  'minLength',
  'name',
  'placeholder',
  'readOnly',
  'required',
  'rows',
  'value',
  'wrap',
];

type TextAreaSpecificProp = (typeof TEXT_AREA_SPECIFIC_PROPS)[number];

type MoveTextAreaPropsOptions = {
  root: Collection;
  componentName: string;
  slotName?: string;
  excludedProps?: TextAreaSpecificProp[];
};

export function moveTextAreaPropsIntoSlotProps(
  j: JSCodeshift,
  { root, componentName, excludedProps, slotName = 'textArea' }: MoveTextAreaPropsOptions,
) {
  movePropIntoSlotProps(j, {
    root,
    componentName,
    propName: TEXT_AREA_SPECIFIC_PROPS as any,
    excludedProps,
    slotName,
  });
}
