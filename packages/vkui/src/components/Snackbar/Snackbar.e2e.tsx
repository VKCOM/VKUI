import { test } from '@vkui-e2e/test';
import {
  SnackbarModePlayground,
  SnackbarPlayground,
  SnackbarRtlPlayground,
} from './Snackbar.e2e-playground';

test.describe('Snackbar', () => {
  test('placement dir=ltr', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<SnackbarPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });

  test('placement dir=rtl', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<SnackbarRtlPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Snackbar', () => {
  test.use({
    onlyForPlatforms: ['android'],
    onlyForBrowsers: ['chromium'],
  });

  test('mode', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<SnackbarModePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
