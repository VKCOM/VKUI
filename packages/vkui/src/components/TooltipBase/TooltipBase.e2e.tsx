import { test } from '@vkui-e2e/test';
test.use({ onlyForPlatforms: ['android'] });

test('TooltipBase', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('TooltipBasePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
