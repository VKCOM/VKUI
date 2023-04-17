import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SubheadPlayground } from './Subhead.e2e-playground';

test('Subhead', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SubheadPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
