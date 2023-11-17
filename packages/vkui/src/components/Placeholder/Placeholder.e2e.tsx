import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { PlaceholderPlayground } from './Placeholder.e2e-playground';

test.use({
  adaptivityProviderProps: {
    sizeX: 'regular',
  },
});

test('Placeholder', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PlaceholderPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
