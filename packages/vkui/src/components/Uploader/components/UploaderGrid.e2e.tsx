import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { UploaderGridPlayground } from './UploaderGrid.e2e-playground';

test.describe('UploaderGrid', () => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });

  test('desktop', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<UploaderGridPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
