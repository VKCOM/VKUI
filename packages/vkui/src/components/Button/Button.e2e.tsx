import * as React from 'react';
import { test } from '@vkui-e2e/test';
import {
  ButtonPlayground,
  ButtonWithCounterPlayground,
  ButtonWithPaddingsPlayground,
} from './Button.e2e-playground';

test('Button', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<ButtonPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});

test.describe('Button', () => {
  test('counter', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<ButtonWithCounterPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('Button', () => {
  test.use({ onlyForAppearances: ['light'] });
  test('paddings', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ButtonWithPaddingsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
