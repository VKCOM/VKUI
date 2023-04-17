import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { InfoRowPlayground } from './InfoRow.e2e-playground';

test('InfoRow', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<InfoRowPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
