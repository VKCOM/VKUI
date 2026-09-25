import { test } from '@vkui-e2e/test';
test('Accordion', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('AccordionPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
