import * as React from 'react';
import { Icon12Lock } from '@vkontakte/icons';
import {
  ComponentPlayground,
  type ComponentPlaygroundProps,
  TEST_CLASS_NAMES,
} from '@vkui-e2e/playground-helpers';
import { Checkbox, type CheckboxProps } from './Checkbox';

const baseRender = (props: CheckboxProps) => <Checkbox {...props} />;

export const CheckboxPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['label'],
          checked: [false, true],
          disabled: [undefined, true],
          $adaptivity: 'y',
        },
        {
          children: ['label'],
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

export const CheckboxSizesAndDescriptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          description: [undefined, 'Description'],
          titleAfter: [undefined, <Icon12Lock key="icon" />],
          children: [
            <div key="text-without-ellipsis">Длииииииииииииииииииииииииииииииинный текст</div>,
            <div key="text-with-ellipsis" className={TEST_CLASS_NAMES.TEXT_ELLIPSIS}>
              Длииииииииииииииииииииииииииииииинный текст
            </div>,
          ],
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
