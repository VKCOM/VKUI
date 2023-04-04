import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Radio, type RadioProps } from './Radio';

export const RadioPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<RadioProps>
      {...props}
      propSets={[
        {
          checked: [false, true],
          disabled: [undefined, true],
        },
      ]}
    >
      {(props) => <Radio {...props}>label</Radio>}
    </ComponentPlayground>
  );
};

export const RadioWithSizesAndDescriptionPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<RadioProps>
      {...props}
      propSets={[
        {
          description: [undefined, 'Description'],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props) => <Radio {...props}>label</Radio>}
    </ComponentPlayground>
  );
};
