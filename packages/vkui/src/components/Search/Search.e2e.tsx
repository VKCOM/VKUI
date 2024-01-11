import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SearchPlayground, SearchTestFocusOnIOSPlayground } from './Search.e2e-playground';

test('Search', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<SearchPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});

test.describe('Search', () => {
  test('shows after when focused on iOS', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<SearchTestFocusOnIOSPlayground {...componentPlaygroundProps} />);
    await page.focus('input');
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});
