import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import type { ChipProps } from '../types';
import { Chip } from './Chip';

export const ChipPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          removable: [false, true],
          $adaptivity: 'y',
        },
      ]}
    >
      {(props: ChipProps) => (
        <Chip {...props} value="arctic_monkeys">
          Arctic Monkeys
        </Chip>
      )}
    </ComponentPlayground>
  );
};
