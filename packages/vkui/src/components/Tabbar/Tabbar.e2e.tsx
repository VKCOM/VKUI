import { test } from '@vkui-e2e/test';
test.use({ onlyForPlatforms: ['android', 'ios'] });

test('Tabbar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('TabbarPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
