import { test } from '@vkui-e2e/test';
import { TabbarItemPlayground } from './TabbarItem.e2e-playground';

test.use({ onlyForPlatforms: ['android', 'ios'] });

test('TabbarItem', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<TabbarItemPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
