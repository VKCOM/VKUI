import { test } from '@vkui-e2e/test';
import { TooltipBasePlayground } from './TooltipBase.e2e-playground';

test.use({ onlyForPlatforms: ['android'] });

test('TooltipBase', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<TooltipBasePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
