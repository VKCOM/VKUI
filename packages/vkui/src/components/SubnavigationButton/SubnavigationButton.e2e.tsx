import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SubnavigationButtonPlayground } from './SubnavigationButton.e2e-playground';

test('SubnavigationButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<SubnavigationButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
