import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import {
  ModalPageHeaderIOSPlayground,
  ModalPageHeaderPlayground,
} from './ModalPageHeader.e2e-playground';

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
    },
    onlyForPlatforms: ['android', 'vkcom'],
  });
  test('ViewWidth.MOBILE', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
    },
    onlyForPlatforms: ['android', 'vkcom'],
  });
  test('ViewWidth.DESKTOP', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
    },
    onlyForPlatforms: ['ios'],
  });
  test('ViewWidth.MOBILE ios only', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderIOSPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
    },
    onlyForPlatforms: ['ios'],
  });
  test('ViewWidth.DESKTOP ios only', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderIOSPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});
