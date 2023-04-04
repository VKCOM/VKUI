import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SliderPlayground } from './Slider.e2e-playground';

test('Slider', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SliderPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
