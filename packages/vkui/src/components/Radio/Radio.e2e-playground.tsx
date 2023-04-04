import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Radio, type RadioProps } from './Radio';

const baseRender = (props: RadioProps) => <Radio {...props}>label</Radio>;

export const RadioPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          checked: [false, true],
          disabled: [undefined, true],
        },
      ]}
    >
      {baseRender}
    </ComponentPlayground>
  );
};

export const RadioWithSizesAndDescriptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          description: [undefined, 'Description'],
          $adaptivity: 'y',
        },
      ]}
    >
      {baseRender}
    </ComponentPlayground>
  );
};
