import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { UploaderPlayground } from './Uploader.e2e-playground';

test('Uploader', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<UploaderPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
