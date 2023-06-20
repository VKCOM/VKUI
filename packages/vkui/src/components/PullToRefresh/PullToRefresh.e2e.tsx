import React from 'react';
import { test } from '@vkui-e2e/test';
import { PullToRefreshPlayground } from './PullToRefresh.e2e-playground';

test('PullToRefresh: renders slider properly in default environment', async ({
  page,
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PullToRefreshPlayground {...componentPlaygroundProps} />);
  await page.mouse.move(100, 100);
  await page.mouse.down();
  await page.mouse.move(100, 800, { steps: 8 });

  await expectScreenshotClippedToContent();
});

test('PullToRefresh: renders slider properly when parent has padding', async ({
  page,
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PullToRefreshPlayground {...componentPlaygroundProps} paddingLeft="150px" />);
  await page.mouse.move(200, 100);
  await page.mouse.down();
  await page.mouse.move(200, 800, { steps: 8 });

  await expectScreenshotClippedToContent();
});
