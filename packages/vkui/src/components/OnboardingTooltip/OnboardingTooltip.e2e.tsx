import { test } from '@vkui-e2e/test';
test('OnboardingTooltip', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('OnboardingTooltipPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
