import { test } from '@vkui-e2e/test';
import {
  ScreenSpinnerErrorPlayground,
  ScreenSpinnerLoadingPlayground,
} from './ScreenSpinner.e2e-playground';

test('ScreenSpinner', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ScreenSpinnerLoadingPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test('ScreenSpinner state=error', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ScreenSpinnerErrorPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
