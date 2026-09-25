import { test } from '@vkui-e2e/test';
test.use({ toMatchSnapshot: { threshold: 0.03 } });

test('RichCell', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('RichCellPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
