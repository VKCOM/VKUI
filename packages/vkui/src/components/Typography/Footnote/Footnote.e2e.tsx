import { test } from '@vkui-e2e/test';
test('Footnote', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('FootnotePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
