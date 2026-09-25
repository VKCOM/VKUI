import { test } from '@vkui-e2e/test';
test('ModalOutsideButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ModalOutsideButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
