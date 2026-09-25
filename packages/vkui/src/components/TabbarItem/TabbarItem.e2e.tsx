import { test } from '@vkui-e2e/test';
test.use({ onlyForPlatforms: ['android', 'ios'] });

test('TabbarItem', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('TabbarItemPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
