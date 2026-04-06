import { test } from '@vkui-e2e/test';
import { SplitLayoutPlayground } from './SplitLayout.e2e-playground';

test('SplitLayout', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<SplitLayoutPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
