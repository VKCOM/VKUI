import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Text, type TextProps } from './Text';

export const TextPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          weight: ['3'],
          $adaptivity: 'y',
        },
        {
          weight: ['2', '1'],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props: TextProps) => (
        <Text {...props} style={{ marginBottom: 16 }}>
          Text {props.weight}
        </Text>
      )}
    </ComponentPlayground>
  );
};
