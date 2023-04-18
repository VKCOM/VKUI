import * as React from 'react';
import { Icon12Lock } from '@vkontakte/icons';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Checkbox, type CheckboxProps } from './Checkbox';

const baseRender = (props: CheckboxProps) => <Checkbox {...props}>label</Checkbox>;

export const CheckboxPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
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
      {baseRender}
    </ComponentPlayground>
  );
};

export const CheckboxSizesAndDescriptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          description: [undefined, 'Description'],
          titleAfter: [undefined, <Icon12Lock key="icon" />],
        },
      ]}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const CheckboxSimplePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
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
      {baseRender}
    </ComponentPlayground>
  );
};
