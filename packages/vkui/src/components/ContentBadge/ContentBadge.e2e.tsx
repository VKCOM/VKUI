import { test } from '@vkui-e2e/test';
import { ContentBadgePlayground } from './ContentBadge.e2e-playground';

test('ContentBadge', async ({
  mount,
  componentPlaygroundProps,
  expectScreenshotClippedToContent,
}) => {
  await mount(<ContentBadgePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
