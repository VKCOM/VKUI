import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { ScrollArrow, ScrollArrowProps } from './ScrollArrow';

export const ScrollArrowPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground
      {...props}
      propSets={[
        {
          size: ['m', 'l'],
          direction: ['left', 'right'],
        },
      ]}
    >
      {({ ...restProps }: ScrollArrowProps) => (
        <ScrollArrow style={{ padding: 16 }} {...restProps} />
      )}
    </ComponentPlayground>
  );
};
