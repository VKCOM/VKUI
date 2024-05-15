import { test } from '@vkui-e2e/test';
import { ToolButtonPlayground } from './ToolButton.e2e-playground';

test('ToolButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ToolButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
