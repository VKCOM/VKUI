import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Title, type TitleProps } from './Title';

export const TitlePlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<TitleProps>
      {...props}
      propSets={[
        {
          level: ['1'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          level: ['2'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          level: ['3'],
          weight: [undefined, '1', '2', '3'],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props) => (
        <Title {...props} style={{ marginBottom: 16 }}>
          Title lvl{props.level} {props.weight}
        </Title>
      )}
    </ComponentPlayground>
  );
};
