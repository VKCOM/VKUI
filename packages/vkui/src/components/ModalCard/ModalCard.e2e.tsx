import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { ModalCardPlayground } from './ModalCard.e2e-playground';

test.describe('ModalCard', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      sizeY: 'regular',
    },
    onlyForPlatforms: ['ios', 'android'],
  });
  test('mobile', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ModalCard', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      sizeY: 'compact',
    },
    onlyForPlatforms: ['ios', 'android'],
  });
  test('tablet', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe(() => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });
  test('ModalCard', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
