import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { WriteBarIconPlayground } from './WriteBarIcon.e2e-playground';

test('WriteBarIcon', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<WriteBarIconPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
