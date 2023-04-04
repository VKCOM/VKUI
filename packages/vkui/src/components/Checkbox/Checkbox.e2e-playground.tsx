import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Checkbox, type CheckboxProps } from './Checkbox';

const baseCheckbox = (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>;

export const CheckboxPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CheckboxProps>
      {...props}
      propSets={[
        {
          checked: [false, true],
          disabled: [undefined, true],
        },
        {
          indeterminate: [true],
          disabled: [undefined, true],
        },
      ]}
    >
      {baseCheckbox}
    </ComponentPlayground>
  );
};

export const CheckboxSizesAndDescriptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CheckboxProps>
      {...props}
      propSets={[
        {
          description: [undefined, 'Description'],
          $adaptivity: 'y',
        },
      ]}
    >
      {baseCheckbox}
    </ComponentPlayground>
  );
};

export const CheckboxSimplePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CheckboxProps>
      {...props}
      propSets={[
        {
          checked: [undefined, true],
          disabled: [undefined, true],
          $adaptivity: 'y',
        },
        {
          indeterminate: [true],
          disabled: [undefined, true],
          $adaptivity: 'y',
        },
      ]}
    >
      {baseCheckbox}
    </ComponentPlayground>
  );
};
