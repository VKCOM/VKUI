import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Counter, type CounterProps } from './Counter';

export const CounterPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<CounterProps>
      {...props}
      propSets={[
        {
          children: ['3'],
          mode: ['secondary', 'primary', 'prominent', 'contrast'],
          size: ['m', 's'],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props) => (
        <div>
          <Counter {...props} />
        </div>
      )}
    </ComponentPlayground>
  );
};
