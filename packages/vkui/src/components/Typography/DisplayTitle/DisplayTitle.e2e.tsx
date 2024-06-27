import { test } from '@vkui-e2e/test';
import { DisplayTitlePlayground } from './DisplayTitle.e2e-playground';

test('DisplayTitle', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<DisplayTitlePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
