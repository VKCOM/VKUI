import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SnackbarPlayground } from './Snackbar.e2e-playground';

test('Snackbar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SnackbarPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
