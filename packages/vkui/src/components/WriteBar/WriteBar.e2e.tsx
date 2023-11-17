import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { WriteBarIosIconsPlayground, WriteBarPlayground } from './WriteBar.e2e-playground';

test('WriteBar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<WriteBarPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('WriteBar', () => {
  test.use({
    onlyForPlatforms: ['ios'],
  });
  // Проверяем, что иконки в iOS не сдвигаются при изменении value
  test('icons', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<WriteBarIosIconsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
