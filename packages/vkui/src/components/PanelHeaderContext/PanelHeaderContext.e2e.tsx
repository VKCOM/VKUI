import { test } from '@vkui-e2e/test';
import { PanelHeaderContextPlayground } from './PanelHeaderContext.e2e-playground';

test.use({
  contextOptions: {
    reducedMotion: 'reduce',
  },
});

test('PanelHeaderContext', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PanelHeaderContextPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
