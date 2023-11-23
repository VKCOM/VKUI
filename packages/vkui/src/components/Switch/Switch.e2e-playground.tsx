import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Switch, type SwitchProps } from './Switch';

export const SwitchPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
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
      {(props: SwitchProps) => <Switch {...props} />}
    </ComponentPlayground>
  );
};

export const SwitchFocusVisiblePlayground = (props: ComponentPlaygroundProps) => (
  <ComponentPlayground {...props}>
    {(props: SwitchProps) => (
      <div style={{ padding: 10, width: 'fit-content' }}>
        <Switch {...props} />
      </div>
    )}
  </ComponentPlayground>
);
