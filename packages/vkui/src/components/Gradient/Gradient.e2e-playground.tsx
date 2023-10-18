import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Gradient, type GradientProps } from './Gradient';

export const GradientPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          mode: ['default', 'tint'],
          to: ['top', 'bottom'],
        },
      ]}
    >
      {(props: GradientProps) => (
        <div style={{ background: 'gray' }}>
          <Gradient {...props}>
            <div style={{ width: '100%', height: '100px' }} />
          </Gradient>
        </div>
      )}
    </ComponentPlayground>
  );
};
