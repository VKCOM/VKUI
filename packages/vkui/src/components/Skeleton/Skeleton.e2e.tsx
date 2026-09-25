import { test } from '@vkui-e2e/test';
test('Skeleton', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('SkeletonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
