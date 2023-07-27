import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ButtonPlayground, ButtonWithConterPlayground } from './Button.e2e-playground';

test('Button', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Button', () => {
  test('counter', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ButtonWithConterPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
