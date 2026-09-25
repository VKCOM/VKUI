import { test } from '@vkui-e2e/test';
test.use({ onlyForPlatforms: ['vkcom'], onlyForColorSchemes: ['light'] });

test('Spacing', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('SpacingPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
