import * as React from 'react';
import { describeScreenshotFuzz } from '../../testing/e2e';
import { Slider, SliderProps } from './Slider';

describe('Slider', () => {
  describeScreenshotFuzz(
    ({ value = 50, ...restProps }: SliderProps) => (
      <Slider style={{ minWidth: '320px' }} value={value} {...restProps} />
    ),
    [
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
    ],
  );
});
