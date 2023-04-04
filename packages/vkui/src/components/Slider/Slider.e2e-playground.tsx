import * as React from 'react';
import { ComponentPlayground, type ComponentPlaygroundProps } from '@vkui-e2e/playground-helpers';
import { Slider, type SliderProps } from './Slider';

export const SliderPlayground = (props: ComponentPlaygroundProps) => {
  return (
    <ComponentPlayground<SliderProps>
      {...props}
      propSets={[
        {
          disabled: [true],
        },
        {
          // https://github.com/VKCOM/VKUI/issues/4044
          min: [-10],
          max: [10],
          value: [0],
          onChange: [() => void 0],
        },
        {
          $adaptivity: 'y',
        },
      ]}
    >
      {({ value = 50, ...restProps }) => (
        <Slider style={{ minWidth: '320px' }} value={value} {...restProps} />
      )}
    </ComponentPlayground>
  );
};
