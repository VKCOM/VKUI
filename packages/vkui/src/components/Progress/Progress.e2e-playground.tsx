import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Progress } from './Progress';

export const ProgressPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          appearance: [undefined, 'negative', 'positive'],
          value: [30],
        },
        {
          height: [10],
          value: [30],
        },
      ]}
    >
      {Progress}
    </ComponentPlayground>
  );
};
