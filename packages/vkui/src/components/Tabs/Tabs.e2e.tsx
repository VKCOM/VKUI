import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Appearance } from '../../lib/appearance';
import { TabsItemsFlexModePlayground, TabsPlayground } from './Tabs.e2e-playground';

test('Tabs', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TabsPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Tabs', () => {
  test.use({
    onlyForAppearances: [Appearance.LIGHT],
  });
  test('layout fill mode', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<TabsItemsFlexModePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
