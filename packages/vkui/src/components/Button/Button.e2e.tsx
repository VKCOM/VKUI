import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import {
  ButtonPlayground,
  ButtonWithCounterPlayground,
  ButtonWithPaddingsPlayground,
  ButtonWithStatePlayground,
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
  test.use({ onlyForColorSchemes: ['light'] });
  test('paddings', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ButtonWithPaddingsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Button', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });
  test('state', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ButtonWithStatePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
