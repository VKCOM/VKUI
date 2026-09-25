import { test } from '@vkui-e2e/test';
test('Paragraph', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('ParagraphPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
