import { test } from '@vkui-e2e/test';
import { PanelHeaderContentPlayground } from './PanelHeaderContent.e2e-playground';

test('PanelHeaderContent', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderContentPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
