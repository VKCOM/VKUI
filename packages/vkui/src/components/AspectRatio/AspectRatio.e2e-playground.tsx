import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AspectRatio, type AspectRatioProps } from './AspectRatio';

export const AspectRatioPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          ratio: [1 / 1, 3 / 4, 16 / 9],
          children: [<div key="" style={{ background: 'green' }} />],
          mode: ['stretch'],
        },
      ]}
    >
      {(props: AspectRatioProps) => <AspectRatio {...props} />}
    </ComponentPlayground>
  );
};
