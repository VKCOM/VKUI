import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { PullToRefreshPlayground } from './PullToRefresh.e2e-playground';

test.describe('PullToRefresh', () => {
  // we are interested in VKCOM only as we need to test here mostly
  // whether the spinner is positioned properly
  test.use({ onlyForPlatforms: ['vkcom'], onlyForAppearances: ['light'] });

  test('renders spinner properly in default environment', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    const result = await mount(<PullToRefreshPlayground {...componentPlaygroundProps} />);
    await result.waitFor();
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));

    await page.mouse.move(100, 100);
    await page.mouse.down();
    await page.mouse.move(100, 380, { steps: 10 });

    await expectScreenshotClippedToContent();
  });

  test('renders spinner properly when parent has padding', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    const result = await mount(
      <PullToRefreshPlayground {...componentPlaygroundProps} paddingLeft="150px" />,
    );
    await result.waitFor();
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));

    await page.mouse.move(200, 100);
    await page.mouse.down();
    await page.mouse.move(200, 380, { steps: 10 });

    await expectScreenshotClippedToContent();
  });
});
