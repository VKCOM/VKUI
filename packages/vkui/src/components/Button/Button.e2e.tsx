import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Appearance } from '../../helpers/appearance';
import {
  ButtonPlayground,
  ButtonWithCounterPlayground,
  ButtonWithPaddingsPlayground,
} from './Button.e2e-playground';

test('Button', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Button', () => {
  test('counter', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ButtonWithCounterPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Button', () => {
  test.use({ onlyForAppearances: [Appearance.LIGHT] });
  test('paddings', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ButtonWithPaddingsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
