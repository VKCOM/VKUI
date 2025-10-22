import { Collection, JSCodeshift } from 'jscodeshift';
import { movePropIntoSlotProps } from './movePropIntoSlotProps';

const INPUT_SPECIFIC_PROPS = [
  'accept',
  'alt',
  'autoComplete',
  'capture',
  'checked',
  'disabled',
  'form',
  'formAction',
  'formEncType',
  'formMethod',
  'formNoValidate',
  'formTarget',
  'height',
  'list',
  'max',
  'maxLength',
  'min',
  'minLength',
  'multiple',
  'name',
  'pattern',
  'placeholder',
  'readOnly',
  'required',
  'size',
  'src',
  'step',
  'type',
  'value',
  'width',
] as const;

type InputSpecificProp = (typeof INPUT_SPECIFIC_PROPS)[number];

type MoveInputPropsOptions = {
  root: Collection;
  componentName: string;
  slotName?: string;
  excludedProps?: InputSpecificProp[];
};

export function moveInputPropsIntoSlotProps(
  j: JSCodeshift,
  { root, componentName, excludedProps, slotName = 'input' }: MoveInputPropsOptions,
) {
  movePropIntoSlotProps(j, {
    root,
    componentName,
    propName: INPUT_SPECIFIC_PROPS as any,
    excludedProps,
    slotName,
  });
}
