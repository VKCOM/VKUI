import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SegmentedControlPlayground } from './SegmentedControl.e2e-playground';

test('SegmentedControl', async ({
  mount,
  page,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<SegmentedControlPlayground {...componentPlaygroundProps} />);
  // см. https://github.com/VKCOM/VKUI/pull/4652 ("Подводные камни" -> "Firefox")
  await page.hover('body', { position: { x: 0, y: 0 } });
  await expectScreenshotClippedToContent();
});
