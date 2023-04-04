import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Subhead, type SubheadProps } from './Subhead';

export const SubheadPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<SubheadProps>
      {...props}
      propSets={[
        {
          weight: [undefined, '1', '2', '3'],
        },
        {
          normalize: [false],
        },
      ]}
    >
      {(props) => (
        <Subhead {...props} style={{ marginBottom: 16 }}>
          Subhead {props.weight}
        </Subhead>
      )}
    </ComponentPlayground>
  );
};
