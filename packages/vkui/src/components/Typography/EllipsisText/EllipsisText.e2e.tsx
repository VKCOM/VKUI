import { test } from '@vkui-e2e/test';
import { EllipsisTextPlayground } from './EllipsisText.e2e-playground';

test('EllipsisText', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<EllipsisTextPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
