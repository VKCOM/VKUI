import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Switch, type SwitchProps } from './Switch';

export const SwitchPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<SwitchProps>
      {...props}
      propSets={[
        {
          checked: [true, false],
          disabled: [true, false],
        },
        {
          $adaptivity: 'y',
        },
      ]}
    >
      {(props) => <Switch {...props} />}
    </ComponentPlayground>
  );
};
