import { test } from '@vkui-e2e/test';
test('ModalDismissButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ModalDismissButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
