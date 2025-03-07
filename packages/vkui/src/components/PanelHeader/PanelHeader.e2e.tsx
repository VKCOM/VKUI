import { test } from '@vkui-e2e/test';
import { PanelHeaderPlayground } from './PanelHeader.e2e-playground';

test.use({
  onlyForColorSchemes: ['light'],
});

test('PanelHeader', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
