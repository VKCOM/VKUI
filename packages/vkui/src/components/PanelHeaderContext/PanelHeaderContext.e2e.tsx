import { test } from '@vkui-e2e/test';
import { PanelHeaderContextPlayground } from './PanelHeaderContext.e2e-playground';

test('PanelHeaderContext', async ({
  mount,
  page,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderContextPlayground {...componentPlaygroundProps} />);

  await page.waitForTimeout(200);

  await expectScreenshotClippedToContent();
});
