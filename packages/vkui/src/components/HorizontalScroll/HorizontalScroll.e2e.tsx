import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import {
  HorizontalScrollMobilePlayground,
  HorizontalScrollSmallTabletPlayground,
  HorizontalScrollWithHasMousePlayground,
  HorizontalScrollWithoutHasMousePlayground,
} from './HorizontalScroll.e2e-playground';

test.describe('HorizontalScroll', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    onlyForPlatforms: ['android'],
  });
  test('ViewWidth.SMALL_TABLET hasPointer=true', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollSmallTabletPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('HorizontalScroll', () => {
  test.use({
    onlyForPlatforms: ['android'],
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      hasPointer: false,
    },
  });
  test('ViewWidth.MOBILE hasPointer=false', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollMobilePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('HorizontalScroll', () => {
  const DATA_TESTID = 'horizontal-scroll';
  const CUSTOM_ROOT_SELECTOR = `[data-testid="${DATA_TESTID}"]`;

  test('has arrows on mouse hover', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(
      <HorizontalScrollWithHasMousePlayground
        {...componentPlaygroundProps}
        data-testid={DATA_TESTID}
      />,
    );

    await page.hover(CUSTOM_ROOT_SELECTOR);

    await expectScreenshotClippedToContent({
      cropToContentSelector: CUSTOM_ROOT_SELECTOR,
    });
  });

  test('does not have arrows without mouse', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(
      <HorizontalScrollWithoutHasMousePlayground
        {...componentPlaygroundProps}
        data-testid={DATA_TESTID}
      />,
    );

    await page.hover(CUSTOM_ROOT_SELECTOR);

    await expectScreenshotClippedToContent({
      cropToContentSelector: CUSTOM_ROOT_SELECTOR,
    });
  });
});
