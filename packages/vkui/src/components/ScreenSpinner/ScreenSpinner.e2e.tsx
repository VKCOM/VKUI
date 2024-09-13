import { test } from '@vkui-e2e/test';
import { ScreenSpinnerLoadingPlayground } from './ScreenSpinner.e2e-playground';

test('ScreenSpinner', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ScreenSpinnerLoadingPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
