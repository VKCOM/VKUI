import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { AdaptivityProvider } from '../AdaptivityProvider/AdaptivityProvider';
import { Tappable, type TappableProps } from './Tappable';

export const TappablePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          children: ['Content'],
        },
        {
          hovered: [true],
          children: ['Content'],
        },
        {
          activated: [true],
          children: ['Content'],
        },
      ]}
    >
      {(props: TappableProps) => (
        <AdaptivityProvider hasHover>
          <Tappable {...props} />
        </AdaptivityProvider>
      )}
    </ComponentPlayground>
  );
};
